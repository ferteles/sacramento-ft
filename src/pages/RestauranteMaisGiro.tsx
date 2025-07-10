import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

import imgHeader from "../assets/images/pg2/imgHeader.webp";
import cardImg from "../assets/images/pg2/cardImg.webp";

// Lazy loading dos componentes
const Arrow = React.lazy(() => import("../components/Arrow"));
const Card = React.lazy(() => import("../components/Card"));
const Footer = React.lazy(() => import("../components/Footer"));
const Form = React.lazy(() => import("../components/Form"));
const Gastronomy = React.lazy(() => import("../components/Gastronomy"));
const Header = React.lazy(() => import("../components/Header"));
const TradicionalFlavors = React.lazy(
  () => import("../components/TradicionalFlavors")
);

function RestauranteMaisGiro() {
  const { language } = useLanguage();

  const t = {
    title:
      language === "pt"
        ? "O RESTAURANTE MAIS GIRO DE LISBOA"
        : "THE COOLEST RESTAURANT IN LISBON",
    paragraph1:
      language === "pt"
        ? "A nossa cozinha é uma celebração dos sabores tradicionais portugueses, reinventados com um toque moderno. Desde o clássico bacalhau à brás até ao polvo à lagareiro, cada prato é uma homenagem à rica herança culinária de Portugal. Utilizamos ingredientes locais e técnicas contemporâneas para criar pratos que surpreendem e encantam."
        : "Our kitchen is a celebration of traditional Portuguese flavors, reimagined with a modern twist. From the classic Bacalhau à Brás to Octopus à Lagareiro, each dish is a tribute to Portugal’s rich culinary heritage. We use local ingredients and contemporary techniques to create dishes that surprise and delight.",
    paragraph2:
      language === "pt"
        ? "A nossa equipa de chefs dedica-se a preservar a essência da cozinha portuguesa, enquanto introduz inovações que cativam até os paladares mais exigentes."
        : "Our team of chefs is dedicated to preserving the essence of Portuguese cuisine while introducing innovations that captivate even the most discerning palates.",
    arrow: language === "pt" ? "RESERVE JÁ SUA MESA" : "BOOK YOUR TABLE NOW",
    cardTitle:
      language === "pt"
        ? "VINHOS QUE\nCONTAM A HISTÓRIA\nDE PORTUGAL"
        : "WINES THAT\nTELL THE STORY\nOF PORTUGAL",
    paragraph3:
      language === "pt"
        ? "A nossa carta de vinhos foi cuidadosamente selecionada para complementar a experiência gastronómica no Sacramento. Com uma variedade de vinhos portugueses, desde os clássicos do Douro até aos surpreendentes vinhos do Alentejo, cada garrafa conta uma história única. Oferecemos também opções de harmonização, sugerindo o vinho perfeito para acompanhar cada prato. Descubra os sabores de Portugal através dos nossos vinhos, selecionados para enriquecer a sua refeição."
        : "Our wine list has been carefully curated to complement the gastronomic experience at Sacramento. Featuring a variety of Portuguese wines—from Douro classics to surprising Alentejo selections—each bottle tells a unique story. We also offer pairing suggestions, recommending the perfect wine for each dish. Discover the flavors of Portugal through our wines, selected to enrich your meal.",
  };

  return (
    <>
      <Helmet>
        <title>
          {language === "pt"
            ? "Restaurante Sacramento – O Mais Giro de Lisboa"
            : "Sacramento Restaurant – The Coolest in Lisbon"}
        </title>
        <meta
          name="description"
          content={
            language === "pt"
              ? "Descubra o restaurante mais giro de Lisboa: cozinha portuguesa tradicional com um toque moderno, vinhos selecionados e ambiente inesquecível no Sacramento Chiado."
              : "Discover the coolest restaurant in Lisbon: traditional Portuguese cuisine with a modern twist, handpicked wines, and an unforgettable atmosphere at Sacramento Chiado."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            language === "pt"
              ? "Restaurante Sacramento – O Mais Giro de Lisboa"
              : "Sacramento Restaurant – The Coolest in Lisbon"
          }
        />
        <meta
          property="og:description"
          content={
            language === "pt"
              ? "Sabores autênticos, vinhos portugueses e uma experiência única no coração do Chiado. Reserve já sua mesa no Sacramento!"
              : "Authentic flavors, Portuguese wines, and a unique experience in the heart of Chiado. Book your table now at Sacramento!"
          }
        />
        <meta
          property="og:image"
          content="https://sacramentolisboa.com/assets/og-sacramento-banner.png"
        />
        <meta
          property="og:url"
          content="https://sacramentolisboa.com/restaurante"
        />
      </Helmet>
      <div className="max-w-screen">
        <Suspense
          fallback={
            <div className="text-center py-10">Carregando cabeçalho...</div>
          }
        >
          <Header
            titlePt="O RESTAURANTE MAIS GIRO DE LISBOA"
            titleEn="THE COOLEST RESTAURANT IN LISBON"
            imgSrc={imgHeader}
          />
          <div className="pt-20">
            <Gastronomy />
          </div>
          <TradicionalFlavors />
          <div className="p-6 gap-2 lg:px-20">
            <div className="flex flex-col items-start justify-evenly lg:justify-center lg:flex-row gap-20 lg:mb-0">
              <div className="lg:max-w-100">
                <p className="font-catamaran">{t.paragraph1}</p>
              </div>
              <div className="flex flex-col ">
                <p className="font-catamaran lg:max-w-100">{t.paragraph2}</p>
                <Arrow title={t.arrow} />
              </div>
            </div>
            <br />
            <br />
            <Card
              imageSrc={cardImg}
              title={t.cardTitle}
              width="w-full"
              height="h-[500px]"
            />
            <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 lg:px-10 lg:my-20">
              <p className="my-10 lg:w-1/2">{t.paragraph3}</p>
              <div className="w-1/2"></div>
            </div>
            <Form />
          </div>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default RestauranteMaisGiro;
