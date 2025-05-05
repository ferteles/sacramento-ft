import { useLanguage } from "../context/LanguageContext";
import circularImage from "../assets/imgcircular.webp";
import line from "../assets/line.webp";

function TradicionalFlavors() {
  const { language } = useLanguage();
  const isPT = language === "pt";

  const t = {
    centerTitle: isPT ? (
      <>
        Sabores
        <br />
        Tradicionais,
        <br />
        Toques
        <br />
        Contemporâneos
      </>
    ) : (
      <>
        Traditional
        <br />
        Flavors,
        <br />
        Contemporary
        <br />
        Twists
      </>
    ),
    circleText: isPT
      ? "UMA RELEITURA DA GASTRONOMIA TRADICIONAL PORTUGUESA"
      : "A NEW TAKE ON TRADITIONAL PORTUGUESE CUISINE",
  };

  return (
    <div className="relative flex items-center justify-center w-auto h-[500px] lg:h-[900px] lg:mt-20 overflow-hidden ">
      {/* Linha horizontal */}
      <img
        src={line}
        alt=""
        className="absolute top-1/2 left-0 w-full h-6 z-[4] -translate-y-1/2 lg:h-10"
      />

      {/* Texto circular girando */}
      <>
        <h3 className="sr-only font-thin font-caudex">
          Texto circular animado
        </h3>

        <svg
          viewBox="0 0 650 650"
          className="absolute w-[550px] h-[550px] lg:h-[1400px] lg:w-[1400px] z-[5] animate-rotate-slow"
          role="img"
          aria-labelledby="titulo-circular"
        >
          <title id="titulo-circular">Texto circular animado</title>

          <defs>
            <path
              id="circlePath"
              d="M325,325 m -170,0 a 170,170 0 1,1 340,0 a 170,170 0 1,1 -340,0"
            />
          </defs>
          <text
            fill="#000"
            fontSize="24"
            fontWeight="100"
            fontFamily="Caudex"
            letterSpacing="30"
          >
            <textPath xlinkHref="#circlePath" textLength="1065">
              {t.circleText}
            </textPath>
          </text>
        </svg>
      </>

      {/* Imagem circular central */}
      <img
        src={circularImage}
        alt=""
        className="rounded-full w-[250px] h-[250px]  object-cover z-[2] lg:w-[700px] lg:h-[700px] max-w-[90vw] max-h-[90vw]"
      />

      {/* Texto no centro */}
      <div className="absolute text-white text-center z-[6] text-xl font-caudex tracking-tight leading-snug uppercase lg:text-4xl">
        <h2>{t.centerTitle}</h2>
      </div>
    </div>
  );
}

export default TradicionalFlavors;
