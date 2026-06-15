import { Helmet } from "react-helmet-async";
import LogoBranca from "../assets/LogoBranca.svg";

export default function Manutencao() {
  return (
    <>
      <Helmet>
        <title>Em Manutenção – Sacramento Lisboa</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <img
          src={LogoBranca}
          alt="Sacramento Lisboa"
          className="w-40 mb-12 opacity-90"
        />

        <h1
          className="text-3xl md:text-4xl font-caudex text-white mb-4 tracking-wide"
          style={{ color: "#E4D9CD" }}
        >
          Estamos em manutenção
        </h1>

        <p
          className="font-catamaran text-base md:text-lg max-w-md leading-relaxed"
          style={{ color: "#b0a89e" }}
        >
          O nosso site está temporariamente indisponível. 
          
        </p>

        <div className="mt-12 flex flex-col gap-2 items-center">
          <p
            className="font-catamaran text-sm tracking-widest uppercase"
            style={{ color: "#6b635c" }}
          >
            Reservas &amp; Informações
          </p>
          <a
            href="tel:+351213420572"
            className="font-caudex text-lg transition-opacity hover:opacity-70"
            style={{ color: "#E4D9CD" }}
          >
            +351 213 420 572
          </a>
        </div>

        <div
          className="mt-16 w-px"
          style={{ height: "40px", backgroundColor: "#3a3530" }}
        />

        <p
          className="mt-4 font-catamaran text-xs tracking-widest uppercase"
          style={{ color: "#6b635c" }}
        >
          Sacramento Lisboa — Chiado
        </p>
      </div>
    </>
  );
}
