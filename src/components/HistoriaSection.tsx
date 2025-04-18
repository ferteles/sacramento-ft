import { useLanguage } from "../context/LanguageContext";
import Card from "./Card";
import bg from "../assets/bg-pg1.png";
import Arrow from "./Arrow";

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
      className="lg:h-[1500px] h-[1100px] relative w-full bg-cover bg-center bg-no-repeat text-white py-16 px-4 md:px-10 lg:px-20 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-start gap-10 max-w-7xl mx-auto w-full">
        {/* Texto Esquerdo */}
        <div className="w-full lg:w-1/3 text-sm leading-relaxed px-2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-caudex uppercase mb-4 block lg:hidden">
            {texts.title}
          </h1>
          <p>{texts.left}</p>
        </div>

        {/* Centro */}
        <div className="w-full lg:w-1/3 flex flex-col items-center text-center space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-caudex uppercase hidden lg:block">
            {texts.title}
          </h1>

          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/35a8/ecdd/77bb7397ae204c4dba5fb9dc662a7dc4?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K88CotFCi4QPdA-xbkZxZ0wkIByDoAzac1aJ8kkJVvtaHT~93hUHk2-latFgW7kfN0D94ZCdVjaYpm-C100pz0zQZYMrmr4r~33AQblYo4hB0wmyrssxFgmyDEe-mthq4HtnbVD4hpMlq0FB-aqG4jQqcw9dEfhxGMhccqzroeYSr8wNVcvNipbGOEtS4BnKWY2mrJfp0P2nSUF2iTOAhB5hcj--XoYNr973R6~YFeJjx~BkUzXWX0IszDZlTF0hKYIdcuKfHPLKpnXS-uS2ymvmrH-z2Ww5KA8MsEHA3A~9-qYJEQy0tMw5PceGQ1eJ91J6wG6NkpomTfZBDXNrGQ__"
            width="w-60 md:w-72 lg:w-[474px]"
            height="h-56 md:h-72 lg:h-[573px]"
          />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-caudex uppercase">
            {texts.subtitle}
          </h2>

          <div className="mt-4">
            <div className="flex justify-center">
              <a href="#form">
                <Arrow title={texts.cta} />
              </a>
            </div>
          </div>
        </div>

        {/* Texto Direito */}
        <div className="w-full lg:w-1/3 text-sm leading-relaxed px-2 mt-6 lg:mt-0 text-center lg:text-right">
          <p>{texts.right}</p>
        </div>
      </div>
    </section>
  );
}

export default HistoriaSection;
