import Arrow from "../components/Arrow";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import ViewOfChiado from "../components/ViewOfChiado";
import { useLanguage } from "../context/LanguageContext";

import imgHeader from "../assets/images/pg6/imgHeader.jpg";
import imgCard from "../assets/images/pg6/imgCard.jpg";
import img1 from "../assets/images/pg6/img1.jpg";
import section2Img1 from "../assets/images/pg6/section2Img1.jpg";
import section2Img2 from "../assets/images/pg6/section2Img2.jpg";
import section2Img3 from "../assets/images/pg6/section2Img3.jpg";

function MelhorAlternativa() {
  const { language } = useLanguage();
  const isPT = language === "pt";

  const t = {
    headerTitle: isPT
      ? "MELHOR ALTERNATIVA AOS ROOFTOPS"
      : "THE BEST ALTERNATIVE TO ROOFTOPS",

    pEsplanada1: isPT
      ? "A esplanada do Sacramento é o local ideal para desfrutar de refeições ao ar livre, num cenário que combina a história de Lisboa com a beleza do Chiado. Coberta no inverno e ao ar livre no verão, é a alternativa perfeita aos rooftops. Com uma vista única sobre o Chiado, a nossa esplanada oferece um ambiente acolhedor e sofisticado, ideal para almoços tranquilos, jantares românticos ou eventos especiais. Seja para um café da manhã ao sol ou um jantar sob as estrelas, a esplanada do Sacramento é o destino perfeito para quem procura uma experiência gastronômica ao ar livre em Lisboa."
      : "Sacramento’s terrace is the ideal spot to enjoy outdoor dining in a setting that blends Lisbon’s history with Chiado’s charm. Covered in winter and open in summer, it’s the perfect alternative to rooftops. With a unique view over Chiado, our terrace offers a cozy and sophisticated atmosphere, ideal for peaceful lunches, romantic dinners, or special events. Whether it’s a sunny breakfast or a dinner under the stars, Sacramento’s terrace is the perfect destination for an unforgettable outdoor dining experience in Lisbon.",

    pEsplanada2: isPT
      ? "A esplanada do Sacramento oferece uma vista deslumbrante sobre o Chiado, um dos bairros mais emblemáticos de Lisboa. Com uma decoração que combina elementos históricos e contemporâneos, o espaço é perfeito para relaxar e desfrutar de momentos especiais."
      : "Sacramento’s terrace offers a stunning view of Chiado, one of Lisbon’s most iconic neighborhoods. With decor that combines historical and contemporary elements, it’s the perfect space to relax and enjoy special moments.",

    pEsplanada3: isPT
      ? "No inverno, a esplanada é coberta e aquecida, garantindo conforto mesmo nos dias mais frios. No verão, o espaço abre-se completamente, permitindo que os clientes desfrutem do ar fresco e da beleza do céu de Lisboa."
      : "In winter, the terrace is covered and heated, ensuring comfort even on the coldest days. In summer, the space opens completely, allowing guests to enjoy the fresh air and the beauty of Lisbon’s sky.",

    pGastronomia: isPT
      ? "A gastronomia portuguesa ganha vida num cenário único: um palácio histórico que sobreviveu ao terramoto de 1755. Os sabores tradicionais são reinterpretados com um toque moderno, criando uma experiência que honra o passado enquanto abraça o presente. Localizado no coração do Chiado, o Sacramento oferece uma viagem pelos sabores autênticos de Portugal, com pratos que celebram a riqueza da culinária Portuguesa, desde o bacalhau à polvo, passando por cortes nobres de carne e sobremesas tradicionais. Cada prato é preparado com ingredientes frescos e técnicas contemporâneas, garantindo uma experiência gastronómica memorável."
      : "Portuguese gastronomy comes to life in a unique setting: a historic palace that survived the 1755 earthquake. Traditional flavors are reinterpreted with a modern touch, creating an experience that honors the past while embracing the present. Located in the heart of Chiado, Sacramento offers a journey through the authentic flavors of Portugal, with dishes that celebrate the richness of Portuguese cuisine—from codfish to octopus, noble meat cuts, and traditional desserts. Each dish is prepared with fresh ingredients and contemporary techniques, ensuring a memorable dining experience.",

    pGastronomiaTitulo: isPT
      ? "Sabores Portugueses sob o Céu de Lisboa"
      : "Portuguese Flavors Under Lisbon’s Sky",

    pGastronomiaTexto: isPT
      ? "A gastronomia portuguesa ganha vida num cenário único: um palácio histórico que sobreviveu ao terramoto de 1755. Os sabores tradicionais são reinterpretados com um toque moderno, criando uma experiência que honra o passado enquanto abraça o presente. Localizado no coração do Chiado, o Sacramento oferece uma viagem pelos sabores autênticos de Portugal, com pratos que celebram a riqueza da culinária Portuguesa, desde o bacalhau à polvo, passando por cortes nobres de carne e sobremesas tradicionais. Cada prato é preparado com ingredientes frescos e técnicas contemporâneas, garantindo uma experiência gastronómica memorável."
      : "Portuguese cuisine comes to life in a unique setting: a historic palace that survived the 1755 earthquake. Traditional flavors are reimagined with a modern twist, creating an experience that honors the past while embracing the present. Located in the heart of Chiado, Sacramento offers a journey through the authentic tastes of Portugal, with dishes that celebrate the richness of Portuguese cuisine — from cod to octopus, premium cuts of meat, and traditional desserts. Each dish is crafted with fresh ingredients and contemporary techniques, ensuring a memorable gastronomic experience.",

    cta: isPT ? "Reserve seu lugar" : "Reserve your table",

    cardTitle: isPT
      ? "Um Bar com\nAlma Histórica\nE Vibração Contemporânea"
      : "A Bar With\nHistoric Soul\nAnd Contemporary Vibe",
  };

  return (
    <div>
      <Header
        titlePt="Esplanada em Lisboa:
                A Melhor Alternativa aos Rooftops
                "
        titleEn="Terrace in Lisbon: The Best Alternative to Rooftops"
        imgSrc={imgHeader}
      />
      <div className="flex flex-col gap-5 ">
        <div className="p-6 lg:px-30 flex flex-col gap-10">
          <Card
            imageSrc={imgCard}
            title={t.cardTitle}
            width="w-full"
            height="h-[469px]"
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-40 px-6 py-20">
          {/* Texto à esquerda no desktop */}
          <div className="flex flex-col justify-end lg:w-1/3">
            <p className="text-justify font-catamaran font-thin">
              {t.pEsplanada1}
            </p>
          </div>

          {/* Imagem à direita no desktop */}
          <div className="w-full lg:w-1/3 flex justify-start">
            <Card
              imageSrc={img1}
              width="w-64 lg:w-200"
              height="h-80 h-[600px]"
            />
          </div>
        </div>

        <div className=" sm:p-6 lg:p-0 w-full">
          {/* Imagem / componente visual no topo */}
          <ViewOfChiado />

          {/* Texto e Arrow responsivo abaixo */}
          <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:py-10 px-6 lg:px-50 py-10 w-full">
            {/* Primeiro parágrafo */}
            <div className="lg:w-90">
              <p className="font-catamaran font-thin">{t.pEsplanada2}</p>
            </div>

            {/* Segundo parágrafo + Arrow */}
            <div className="flex flex-col items-start lg:max-w-90">
              <p className="font-catamaran font-thin">{t.pEsplanada3}</p>
              <Arrow title={t.cta} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-center lg:justify-center">
          <Card imageSrc={section2Img1} height="h-80" width="w-80" />
          <Card imageSrc={section2Img2} height="h-80" width="w-80" />
          <Card imageSrc={section2Img3} height="h-80" width="w-80" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 px-6 py-20">
          {/* Texto à esquerda no desktop */}
          <div className="flex flex-col justify-center lg:max-w-1/4">
            <h2 className="text-3xl lg:text-6xl font-caudex uppercase">
              {t.pGastronomiaTitulo}
            </h2>
          </div>

          {/* Imagem à direita no desktop */}
          <div className="w-full lg:w-1/3 flex justify-end">
            <p className="text-justify font-catamaran font-thin">
              {t.pGastronomiaTexto}
            </p>
          </div>
        </div>

        <div className="px-6 lg:px-0">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MelhorAlternativa;
