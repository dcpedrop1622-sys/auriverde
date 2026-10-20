"use client";

import { useEffect, useRef } from "react";

// Para adicionar fotos, coloque os arquivos em /public/images
// e escreva o caminho começando com /images/
const fotos: { src: string; alt: string }[] = [
    { src: "/images/placaAuriverde.jpeg", alt: "Placa do Auriverde" },
    { src: "/images/caminhoAuriverde.jpeg", alt: "Caminho do jardim" },
    { src: "/images/bicoAuriverde.jpeg", alt: "entrada da colmeia" },
];

// Quantidade de espaços vazios mostrados enquanto não há fotos
const ESPACOS_VAZIOS = 4;

// Velocidade do giro automático, em pixels por segundo
const VELOCIDADE = 40;

export function Carrossel() {
  const faixaRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const arrastando = useRef(false);
  const ultimoX = useRef(0);

  const itens: ({ src: string; alt: string } | null)[] =
    fotos.length > 0
      ? fotos
      : Array.from({ length: ESPACOS_VAZIOS }, () => null);

  useEffect(() => {
    let frame = 0;
    let anterior = performance.now();

    const loop = (agora: number) => {
      const faixa = faixaRef.current;
      const dt = (agora - anterior) / 1000;
      anterior = agora;

      if (faixa) {
        // Só avança sozinho quando ninguém está segurando
        if (!arrastando.current) {
          offset.current -= VELOCIDADE * dt;
        }

        // A faixa tem duas cópias das fotos; ao passar da metade, volta ao início
        const metade = faixa.scrollWidth / 2;
        if (metade > 0) {
          let o = offset.current % metade;
          if (o > 0) o -= metade;
          offset.current = o;
        }

        faixa.style.transform = `translate3d(${offset.current}px, 0, 0)`;
      }

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  const aoSegurar = (e: React.PointerEvent<HTMLDivElement>) => {
    arrastando.current = true;
    ultimoX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const aoArrastar = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!arrastando.current) return;
    offset.current += e.clientX - ultimoX.current;
    ultimoX.current = e.clientX;
  };

  const aoSoltar = () => {
    arrastando.current = false;
  };

  return (
    <div
      className="w-full overflow-hidden py-8 select-none cursor-grab active:cursor-grabbing"
      style={{ touchAction: "pan-y" }}
      onPointerDown={aoSegurar}
      onPointerMove={aoArrastar}
      onPointerUp={aoSoltar}
      onPointerCancel={aoSoltar}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div ref={faixaRef} className="flex w-max will-change-transform">
        {[0, 1].map((copia) =>
          itens.map((foto, i) => (
            <div
              key={`${copia}-${i}`}
              className="pr-4 shrink-0"
              aria-hidden={copia === 1}
            >
              <div className="w-64 h-64 rounded-2xl overflow-hidden bg-black/30 border-2 border-dashed border-yellow-300/50">
                {foto && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}