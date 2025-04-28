import { useLanguage } from "../context/LanguageContext";
import Card from "./Card";
import bg from "../assets/bg-pg1.png";
import arrowWhite from "../assets/ArrowWhite.svg";
import img1 from "../assets/images/pg1/umPalacioHistorico.jpg";

function HistoriaSection() {
  const { language } = useLanguage();

  const texts = {
    title: language === "pt" ? "Um Palácio Histórico" : "A Historic Palace",
    subtitle:
      language === "pt"
        ? "Com Sabores Contemporâneos"
        : "With Contemporary Flavors",
    left:
      language === "pt"
        ? "Localizado no antigo Palácio dos Condes de Valadares, o Sacramento oferece uma experiência gastronómica que honra a tradição da cozinha portuguesa, enquanto surpreende com toques modernos. A nossa cozinha celebra os sabores tradicionais de Portugal, reinterpretados com técnicas contemporâneas, criando pratos únicos que encantam os sentidos."
        : "Located in the former Palace of the Counts of Valadares, Sacramento offers a gastronomic experience that honors the tradition of Portuguese cuisine while surprising with modern touches. Our cuisine celebrates the traditional flavors of Portugal, reinterpreted with contemporary techniques, creating unique dishes that delight the senses.",
    right:
      language === "pt"
        ? "Descubra a harmonia entre o passado e o presente, num ambiente que respira história e elegância."
        : "Discover the harmony between past and present in a setting that breathes history and elegance.",
    cta: language === "pt" ? "Reserve já a sua mesa" : "Book your table now",
  };

  return (
    <section
      className="lg:h-[1800px] h-[1100px] relative w-full bg-cover bg-center bg-no-repeat text-white py-16 px-4 md:px-10 lg:px-20 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-start gap-10 max-w-7xl w-full">
        {/* Texto Esquerdo */}
        <div className="w-full lg:w-1/2 text-sm leading-relaxed px-2 lg:px-8 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-caudex uppercase mb-4 block lg:hidden">
            {texts.title}
          </h1>
          <p>{texts.left}</p>
        </div>

        {/* Centro */}
        <div className="w-full lg:w-1/3 flex flex-col items-center text-center space-y-6 lg:mx-12 ">
          <h1 className="text-3xl md:text-4xl lg:text-7xl  font-caudex uppercase hidden lg:block font-bold">
            {texts.title}
          </h1>

          <div className="lg:p-20">
            <Card
              imageSrc={img1}
              width="w-60 md:w-72 lg:w-[474px]"
              height="h-56 md:h-72 lg:h-[573px]"
            />
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-7xl font-caudex uppercase font-bold">
            {texts.subtitle}
          </h2>

          <div className="mt-4">
            <div className="flex justify-center mt-10">
              <a href="#form" className="flex flex-col lg:gap-5">
                <h1 className="font-bold font-caudex lg:text-4xl text-base">
                  {texts.cta.toUpperCase()}
                </h1>
                <img src={arrowWhite} alt="Seta branca" className="lg:w-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Texto Direito */}
        <div className="w-full lg:w-1/2 text-sm leading-relaxed px-2 lg:px-8 mt-6 lg:mt-0 text-center lg:text-right">
          <p>{texts.right}</p>
        </div>
      </div>
    </section>
  );
}

export default HistoriaSection;
