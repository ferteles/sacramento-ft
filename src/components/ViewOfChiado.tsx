import { useLanguage } from "../context/LanguageContext";
import circularImage from "../assets/imgcircular2.png";
import line from "../assets/line.png";

function ViewOfChiado() {
  const { language } = useLanguage();
  const isPT = language === "pt";

  const t = {
    centerTitle: isPT ? (
      <>
        Uma Vista <br /> Única sobre <br /> o Chiado
      </>
    ) : (
      <>
        A Unique <br /> View over <br /> Chiado
      </>
    ),
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[500px] lg:h-[700px] lg:my-10 overflow-hidden">
      {/* Linha horizontal */}
      <img
        src={line}
        alt=""
        className="absolute top-1/2 left-0 w-full h-6 z-[4] -translate-y-1/2 lg:h-10"
      />

      {/* Imagem circular central */}
      <img
        src={circularImage}
        alt=""
        className="rounded-full w-[300px] h-[300px] object-cover z-[2] lg:w-[600px] lg:h-[600px] max-w-[90vw] max-h-[90vw]"
      />

      {/* Texto no centro */}
      <div className="absolute text-white text-center z-[6] text-2xl font-caudex tracking-tight leading-snug uppercase lg:text-4xl">
        <h3>{t.centerTitle}</h3>
      </div>
    </div>
  );
}

export default ViewOfChiado;
