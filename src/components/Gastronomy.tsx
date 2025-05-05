import { useLanguage } from "../context/LanguageContext";
import section1Img1 from "../assets/images/pg2/section1Img1.jpg";
import section1Img2 from "../assets/images/pg2/section1Img2.jpg";
import section1Img3 from "../assets/images/pg2/section1Img3.jpg";
import Card from "./Card";

function Gastronomy() {
  const { language } = useLanguage();

  const texts = {
    title:
      language === "pt"
        ? "Gastronomia Portuguesa num Palácio Histórico"
        : "Portuguese Gastronomy in a Historic Palace",
    paragraph:
      language === "pt"
        ? "A gastronomia portuguesa ganha vida num cenário único: um palácio histórico que sobreviveu ao terramoto de 1755. Os sabores tradicionais são reinterpretados com um toque moderno, criando uma experiência que honra o passado enquanto abraça o presente. Localizado no coração do Chiado, o Sacramento oferece uma viagem pelos sabores autênticos de Portugal, com pratos que celebram a riqueza da culinária Portuguesa, desde o bacalhau à polvo, passando por cortes nobres de carne e sobremesas tradicionais. Cada prato é preparado com ingredientes frescos e técnicas contemporâneas, garantindo uma experiência gastronómica memorável."
        : "Portuguese gastronomy comes to life in a unique setting: a historic palace that survived the 1755 earthquake. Traditional flavors are reinterpreted with a modern touch, creating an experience that honors the past while embracing the present. Located in the heart of Chiado, Sacramento offers a journey through the authentic flavors of Portugal, with dishes that celebrate the richness of Portuguese cuisine, from codfish to octopus, including prime cuts of meat and traditional desserts. Each dish is prepared with fresh ingredients and contemporary techniques, ensuring a memorable gastronomic experience.",
  };

  return (
    <div
      key={language}
      className="px-6 flex flex-col items-center justify-center lg:px-40"
    >
      {/* Bloco título + parágrafo */}
      <div className="flex flex-col lg:flex-row w-full justify-center items-start  lg:py-40">
        {/* Título */}
        <h2 className="font-caudex text-4xl lg:text-7xl font-thin lg:w-1/2 lg:max-w-150">
          {texts.title}
        </h2>

        {/* Parágrafo */}
        <p className="font-catamaran text-base lg:text-lg mt-6 lg:mt-0 lg:w-1/2 text-justify">
          {texts.paragraph}
        </p>
      </div>

      {/* Cards com imagens */}
      <div className="flex flex-col gap-3 w-full items-center mt-10 lg:flex-row">
        <Card imageSrc={section1Img1} height="h-48 lg:h-96" width="w-full" />
        <Card imageSrc={section1Img2} height="h-48 lg:h-96" width="w-full" />
        <Card imageSrc={section1Img3} height="h-48 lg:h-96" width="w-full" />
      </div>
    </div>
  );
}

export default Gastronomy;
