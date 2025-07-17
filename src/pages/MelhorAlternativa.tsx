import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

import imgHeader from "../assets/images/pg6/imgHeader.webp";
import imgCard from "../assets/images/pg6/imgCard.webp";
import img1 from "../assets/images/pg6/img1.webp";
import section2Img1 from "../assets/images/pg6/section2Img1.webp";
import section2Img2 from "../assets/images/pg6/section2Img2.webp";
import section2Img3 from "../assets/images/pg6/section2Img3.webp";

// Lazy load dos componentes
const Header = React.lazy(() => import("../components/Header"));
const Card = React.lazy(() => import("../components/Card"));
const Arrow = React.lazy(() => import("../components/Arrow"));
const Form = React.lazy(() => import("../components/Form"));
const Footer = React.lazy(() => import("../components/Footer"));
const ViewOfChiado = React.lazy(() => import("../components/ViewOfChiado"));

function MelhorAlternativa() {
  const { language } = useLanguage();
  const isPT = language === "pt";

  const t = {
    headerTitle: isPT
      ? "MELHOR ALTERNATIVA AOS ROOFTOPS"
      : "THE BEST ALTERNATIVE TO ROOFTOPS",

    pEsplanada1: isPT
      ? "A esplanada do Sacramento é o local ideal para desfrutar de refeições ao ar livre, num cenário que combina a história de Lisboa com a beleza do Chiado. É a alternativa perfeita aos rooftops com vista única. Com uma vista única sobre o Chiado, a nossa esplanada oferece um ambiente acolhedor e sofisticado, ideal para jantares românticos ou eventos especiais. A esplanada do Sacramento é o destino perfeito para quem procura uma experiência gastronômica ao ar livre em Lisboa."
      : "The Sacramento terrace is the ideal spot to enjoy outdoor meals in a setting that blends Lisbon’s history with the beauty of Chiado. It’s the perfect alternative to rooftops with a unique view. With a unique view over Chiado, our terrace offers a cozy and sophisticated atmosphere—perfect for romantic dinners, or special events. The Sacramento terrace is the perfect destination for those seeking an outdoor dining experience in Lisbon.",

    pEsplanada2: isPT
      ? "A esplanada do Sacramento oferece uma vista deslumbrante sobre o Chiado, um dos bairros mais emblemáticos de Lisboa. Com uma decoração que combina elementos históricos e contemporâneos, o espaço é perfeito para relaxar e desfrutar de momentos especiais."
      : "Sacramento’s terrace offers a stunning view of Chiado, one of Lisbon’s most iconic neighborhoods. With decor that combines historical and contemporary elements, it’s the perfect space to relax and enjoy special moments.",

    pEsplanada3: isPT
      ? "No inverno, a esplanada é aquecida, garantindo conforto mesmo nos dias mais frios. No verão, o espaço abre-se completamente, permitindo que os clientes desfrutem do ar fresco e da beleza do céu de Lisboa."
      : "In winter, the terrace is covered and heated, ensuring comfort even on the coldest days. In summer, the space opens completely, allowing guests to enjoy the fresh air and the beauty of Lisbon’s sky.",

    pGastronomia: isPT
      ? "A gastronomia portuguesa ganha vida num cenário único: um palácio histórico que sobreviveu ao terramoto de 1755. Os sabores tradicionais são reinterpretados com um toque moderno, criando uma experiência que honra o passado enquanto abraça o presente. Localizado no coração do Chiado, o Sacramento oferece uma viagem pelos sabores autênticos de Portugal, com pratos que celebram a riqueza da culinária Portuguesa, desde o bacalhau ao polvo, passando por cortes nobres de carne e sobremesas tradicionais. Cada prato é preparado com ingredientes frescos e técnicas contemporâneas, garantindo uma experiência gastronómica memorável."
      : "Portuguese gastronomy comes to life in a unique setting: a historic palace that survived the 1755 earthquake. Traditional flavors are reinterpreted with a modern touch, creating an experience that honors the past while embracing the present. Located in the heart of Chiado, Sacramento offers a journey through the authentic flavors of Portugal, with dishes that celebrate the richness of Portuguese cuisine—from codfish to octopus, noble meat cuts, and traditional desserts. Each dish is prepared with fresh ingredients and contemporary techniques, ensuring a memorable dining experience.",

    pGastronomiaTitulo: isPT
      ? "Sabores Portugueses sob o Céu de Lisboa"
      : "Portuguese Flavors Under Lisbon’s Sky",

    pGastronomiaTexto: isPT
      ? "A gastronomia portuguesa ganha vida num cenário único: um palácio histórico que sobreviveu ao terramoto de 1755. Os sabores tradicionais são reinterpretados com um toque moderno, criando uma experiência que honra o passado enquanto abraça o presente. Localizado no coração do Chiado, o Sacramento oferece uma viagem pelos sabores autênticos de Portugal, com pratos que celebram a riqueza da culinária Portuguesa, desde o bacalhau ao polvo, passando por cortes nobres de carne e sobremesas tradicionais. Cada prato é preparado com ingredientes frescos e técnicas contemporâneas, garantindo uma experiência gastronómica memorável."
      : "Portuguese cuisine comes to life in a unique setting: a historic palace that survived the 1755 earthquake. Traditional flavors are reimagined with a modern twist, creating an experience that honors the past while embracing the present. Located in the heart of Chiado, Sacramento offers a journey through the authentic tastes of Portugal, with dishes that celebrate the richness of Portuguese cuisine — from cod to octopus, premium cuts of meat, and traditional desserts. Each dish is crafted with fresh ingredients and contemporary techniques, ensuring a memorable gastronomic experience.",

    cta: isPT ? "Reserve seu lugar" : "Reserve your table",

    cardTitle: isPT
      ? "Esplanada no Chiado:\nHistória e Gastronomia\nao Ar Livre"
      : "Terrace in Chiado:\nHistory and Gastronomy\nOutdoors",
  };

  return (
    <>
      <Helmet>
        <title>
          {isPT
            ? "Esplanada em Lisboa – Melhor Alternativa aos Rooftops"
            : "Terrace in Lisbon – Best Alternative to Rooftops"}
        </title>
        <meta
          name="description"
          content={
            isPT
              ? "Descubra a esplanada do Sacramento no Chiado: a melhor alternativa aos rooftops com vista única, gastronomia portuguesa e ambiente histórico."
              : "Discover Sacramento's terrace in Chiado: the best alternative to rooftops with a unique view, Portuguese cuisine, and a historic atmosphere."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            isPT
              ? "Esplanada em Lisboa – Melhor Alternativa aos Rooftops"
              : "Terrace in Lisbon – Best Alternative to Rooftops"
          }
        />
        <meta
          property="og:description"
          content={
            isPT
              ? "Vista deslumbrante sobre o Chiado, ambiente aquecido no inverno e gastronomia portuguesa autêntica na esplanada do Sacramento."
              : "Stunning view over Chiado, heated atmosphere in winter, and authentic Portuguese cuisine at Sacramento's terrace."
          }
        />
        <meta
          property="og:image"
          content="https://sacramentolisboa.com/assets/og-sacramento-banner.png"
        />
        <meta
          property="og:url"
          content="https://sacramentolisboa.com/esplanada"
        />
        <link rel="canonical" href="https://sacramentolisboa.com/esplanada" />
      </Helmet>
      <div>
      <Suspense
        fallback={
          <div className="text-center py-8">Carregando cabeçalho...</div>
        }
      >
        <Header
          titlePt="Esplanada em Lisboa:
              A Melhor Alternativa aos Rooftops
              "
          titleEn="Terrace in Lisbon: The Best Alternative to Rooftops"
          imgSrc={imgHeader}
          backgroundPosition="top center"
        />
      </Suspense>

      <div className="flex flex-col gap-5 ">
        <div className="p-6 lg:px-30 flex flex-col gap-10">
          <Suspense fallback={<div>Carregando imagem...</div>}>
            <Card
              imageSrc={imgCard}
              title={t.cardTitle}
              width="w-full"
              height="h-[469px]"
            />
          </Suspense>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-40 px-6 py-20">
          <div className="flex flex-col justify-end lg:w-1/3">
            <p className="text-justify font-catamaran font-thin">
              {t.pEsplanada1}
            </p>
          </div>

          <div className="w-full lg:w-1/3 flex justify-start">
            <Suspense fallback={<div>Carregando imagem...</div>}>
              <Card
                imageSrc={img1}
                width="w-64 lg:w-200"
                height="h-80 h-[600px]"
              />
            </Suspense>
          </div>
        </div>

        <div className="sm:p-6 lg:p-0 w-full">
          <Suspense fallback={<div>Carregando vista do Chiado...</div>}>
            <ViewOfChiado />
          </Suspense>

          <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:py-10 px-6 lg:px-50 py-10 w-full">
            <div className="lg:w-90">
              <p className="font-catamaran font-thin">{t.pEsplanada2}</p>
            </div>

            <div className="flex flex-col items-start lg:max-w-90">
              <p className="font-catamaran font-thin">{t.pEsplanada3}</p>
              <Suspense fallback={<div>Carregando botão...</div>}>
                <Arrow title={t.cta} />
              </Suspense>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-center lg:justify-center">
          <Suspense fallback={<div>Carregando imagem...</div>}>
            <Card imageSrc={section2Img1} height="h-80" width="w-80" />
          </Suspense>
          <Suspense fallback={<div>Carregando imagem...</div>}>
            <Card imageSrc={section2Img2} height="h-80" width="w-80" />
          </Suspense>
          <Suspense fallback={<div>Carregando imagem...</div>}>
            <Card imageSrc={section2Img3} height="h-80" width="w-80" />
          </Suspense>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 px-6 py-20">
          <div className="flex flex-col justify-center lg:max-w-1/4">
            <h2 className="text-3xl lg:text-6xl font-caudex uppercase">
              {t.pGastronomiaTitulo}
            </h2>
          </div>

          <div className="w-full lg:w-1/3 flex justify-end">
            <p className="text-justify font-catamaran font-thin">
              {t.pGastronomiaTexto}
            </p>
          </div>
        </div>

        <div className="px-6 lg:px-0">
          <Suspense fallback={<div>Carregando formulário...</div>}>
            <Form />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<div>Carregando rodapé...</div>}>
        <Footer />
      </Suspense>
      </div>
    </>
  );
}

export default MelhorAlternativa;
