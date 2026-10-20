import { Scroll } from "./components/Scroll";
import { Reveal } from "./components/Reveal";
import { Carrossel } from "./components/Carrossel";
import Image from "next/image";

export default function Auriverde() {
  return (
    <section className="overflow-x-hidden scroll-smooth">
      <div className="absolute top-0 left-0 w-screen min-h-screen bg-olive-500">
        <div className="fixed top-0 left-0 z-50 flex items-center justify-evenly w-full h-18 bg-black text-white">
          <a
            href="#inicio"
            className="text-white hover:text-yellow-300 drop-shadow-[0_0_20px_rgba(255,255,0,15)]"
          >
            Inicio
          </a>
          <a
            href="#sobre"
            className="text-white hover:text-yellow-300 drop-shadow-[0_0_20px_rgba(255,255,0,1)]"
          >
            Sobre
          </a>
          <a
            href="#integrantes"
            className="text-white hover:text-yellow-300 drop-shadow-[0_0_20px_rgba(255,255,0,1)]"
          >
            Integrantes
          </a>
          <a
            href="#contato"
            className="text-white hover:text-yellow-300 drop-shadow-[0_0_20px_rgba(255,255,0,1)]"
          >
            Contato
          </a>
        </div>
        <div
          id="inicio"
          className="flex flex-col items-center justify-center w-auto h-screen"
        >
          <h1 className="absolute top-50 bg-yellow-400/60 bg-clip-text text-6xl font-bold text-transparent drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] scale-y-150">
            AURIVERDE
          </h1>
          <h2 className="absolute left-4 top-70 bg-yellow-400/60 bg-clip-text text-1xl font-bold text-transparent drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] scale-y-150">
            As abelhas do bentão!
          </h2>
          <Image
            className="absolute top-135 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="/images/auriverde.png"
            alt="Logo auriverde"
            width={500}
            height={300}
          />
          <a
            href="#sobre"
            aria-label="Ir para a seção Sobre"
            className="absolute top-18 left-0 w-full h-screen flex justify-center pointer-events-none"
          >
            <Scroll className="absolute bottom-10 pointer-events-auto" />
          </a>
        </div>
        <Reveal>
          <Carrossel />
        </Reveal>

        <div
          id="sobre"
          className="flex flex-col w-full px-5 py-10 gap-6 text-white scroll-mt-18"
        >
          <Reveal>
            <p className="text-base leading-relaxed text-justify">
              Auriverde é um projeto feito por estudantes da Etec Bento Quirino
              juntamente da professora Regina Kawakami. O objetivo do projeto é
              cuidar e preservar a colmeia das Jataí, garantindo condições
              adequadas para seu desenvolvimento e bem-estar. Ao mesmo tempo,
              buscamos contribuir para a preservação do meio ambiente,
              valorizando a importância das abelhas na polinização e na
              manutenção da biodiversidade.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-justify">
              O projeto tem como propósito estabelecer uma relação de
              contribuição mútua. Enquanto cuidamos das abelhas e protegemos seu
              habitat, elas contribuem para a saúde do ecossistema. Assim,
              esperamos promover a conscientização ambiental e incentivar
              atitudes de respeito e cuidado com a natureza.
            </p>
          </Reveal>
          <Reveal>
            <h3 className="text-2xl font-bold text-yellow-300 mt-4">
              As abelhas Jataís tem ferrão?
            </h3>
            <p className="text-base leading-relaxed text-justify">
              As jataís pertencem ao grupo das abelhas sem ferrão. Elas possuem
              um ferrão muito reduzido, que não é funcional para ferroar como o
              das abelhas comuns do gênero Apis, Então pode ficar tranquilo e
              observar a colmeia sem medo!
            </p>
          </Reveal>
        </div>

        <div
          id="integrantes"
          className="w-full px-5 py-10 text-white scroll-mt-18"
        >
          <Reveal>
            <h3 className="text-2xl font-bold text-yellow-300">Integrantes</h3>
            <p className="text-base leading-relaxed text-justify">
              Os integrantes do projeto são: <br />
              <ul className="list-disc list-inside">
                <li>Pedro Machado - 1° Ano de eletronica</li>
                <li>Lorenzo Nunes - 1° Ano de eletronica</li>
                <li>Noah - 2° Ano de eletronica</li>
                <li>Rafael Rezende - 2° Ano de eletronica</li>
                <li>Simon Pereira - 2° Ano de eletronica</li>
                <li>Henrique - 2° Ano de eletronica</li>
                <li>Enzo Furlan - 2° Ano de eletronica</li>
                <li>Regina Kawakami - Professora orientadora</li>
              </ul>
            </p>
          </Reveal>
        </div>

        <div id="contato" className="w-full px-5 py-10 text-white scroll-mt-18">
          <Reveal>
            <h3 className="text-2xl font-bold text-yellow-300">Contato</h3>
            <p>
              Contato Do Auriverde: <br />
            </p>
            <ul className="list-disc list-inside">
              <li>Email: auriverdebentao@gmail.com</li>
              <li>Telefone: (19) 994529849</li>
              <li>Instagram: @auriverdebentao</li>
            </ul>{" "}
            <br />
            <p>
              Contato do Desenvolvedor e design do site: <br />
            </p>
            <ul className="list-disc list-inside">
              <li>Email: dcpedrop1622@gmail.com</li>
              <li>Whatsapp: (19) 994529849</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
