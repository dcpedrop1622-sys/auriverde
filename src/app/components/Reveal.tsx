"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  // Atraso em milissegundos, útil para itens aparecerem em sequência
  delay?: number;
  // De onde o item vem: de baixo (padrão), da esquerda ou da direita
  from?: "bottom" | "left" | "right";
};

const escondido = {
  bottom: "translate-y-10",
  left: "-translate-x-10",
  right: "translate-x-10",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  from = "bottom",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entrada]) => {
        // Acompanha a entrada e a saída da tela, então a animação se repete
        setVisivel(entrada.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visivel
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${escondido[from]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}