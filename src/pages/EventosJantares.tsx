import React, { Suspense } from "react";
import { Helmet } from "react-helmet";

import { useLanguage } from "../context/LanguageContext";

// Imagens
import imgHeader from "../assets/images/pg4/imgHeader.webp";
import img1 from "../assets/images/pg4/img1.webp";
import imgCima1 from "../assets/images/pg4/imgCima1.webp";
import imgCima2 from "../assets/images/pg4/imgCima2.webp";
import imgBaixo from "../assets/images/pg4/imgBaixo.webp";
import imgDir from "../assets/images/pg4/imgDir.webp";
import imgCard from "../assets/images/pg4/imgCard.webp";

// Lazy-loaded components
const Arrow = React.lazy(() => import("../components/Arrow"));
const Card = React.lazy(() => import("../components/Card"));
const Footer = React.lazy(() => import("../components/Footer"));
const Form = React.lazy(() => import("../components/Form"));
const Header = React.lazy(() => import("../components/Header"));

function EventosJantares() {
  const { language } = useLanguage();
  const isPT = language === "pt";

  const t = {
    h1: isPT
      ? "Eventos Memoráveis num Palácio Histórico no Chiado"
      : "Memorable Events in a Historic Palace in Chiado",

    p1: isPT
      ? "O Sacramento é o local ideal para eventos e jantares de grupo, onde a história de Lisboa se encontra com a gastronomia portuguesa. Com cinco salas interligadas, oferecemos um cenário único para celebrações inesquecíveis. Seja para uma reunião de negócios, uma comemoração especial ou uma confraternização entre amigos, o nosso espaço adapta-se às suas necessidades, proporcionando uma experiência personalizada e memorável.O Sacramento combina a elegância de um palácio histórico com o conforto e a sofisticação que o seu evento merece. Além disso, após o jantar, pode terminar a sua noite no nosso clube com uma experiência completa com DJ e ambiente distinto."
      : "Sacramento is the ideal venue for events and group dinners, where Lisbon's history meets Portuguese gastronomy. With five interconnected rooms, we offer a unique setting for unforgettable celebrations. Whether for a business meeting, a special celebration, or a gathering of friends, our space adapts to your needs, providing a personalized and memorable experience. Sacramento combines the elegance of a historic palace with the comfort and sophistication your event deserves. Moreover, after dinner, you can extend your evening in our club, enjoying a complete experience with a DJ and a vibrant atmosphere.",

    h2Cocktails: isPT
      ? "Menus que Honram a Tradição, com Toques Modernos"
      : "Menus that Honor Tradition, with Modern Twists",

    p2Cocktails: isPT
      ? "Para os seus eventos, oferecemos menus personalizados que honram a tradição da gastronomia portuguesa, com um toque moderno. Desde buffets completos até menus de degustação, cada prato é cuidadosamente preparado para surpreender os seus convidados. Trabalhamos com ingredientes frescos e locais, garantindo uma experiência gastronómica de excelência. Seja para um jantar de negócios ou um jantar de gala, as nossas ementas são pensadas para agradar a todos os paladares. Além disso, o nosso bar oferece uma seleção de cocktails e bebidas premium, perfeitos para acompanhar qualquer ocasião."
      : "For your events, we offer customized menus that honor the tradition of Portuguese gastronomy, with a modern twist. From full buffets to tasting menus, each dish is carefully prepared to delight your guests. We work with fresh, local ingredients, ensuring an excellent dining experience. Whether for a business lunch or a gala dinner, our menus are designed to please every palate. Additionally, our bar offers a selection of premium cocktails and drinks, perfect for any occasion.",

    cta: isPT ? "Visite o Nosso Bar" : "Visit Our Bar",
    cta2: isPT ? "Contacte-nos para o seu evento" : "Contact Us About the Bar",
    cta3: isPT
      ? "Contacte-nos para o seu evento"
      : "Contact Us About Your Event",
    pFinal1: isPT
      ? "O ambiente do Sacramento é perfeito para celebrações descontraídas e memoráveis. Com os seus arcos centenários e iluminação intimista, o espaço oferece uma atmosfera acolhedora e sofisticada. Às sextas e sábados, o ambiente ganha uma energia especial, com música ambiente e uma vibe festiva que transforma qualquer evento numa experiência única."
      : "Sacramento's ambiance is perfect for relaxed and memorable celebrations. With its centuries-old arches and intimate lighting, the space offers a cozy and sophisticated atmosphere. On Fridays and Saturdays, the ambiance takes on a special energy, with ambient music and a festive vibe that turns any event into a unique experience. After 11 PM, the restaurant transforms into a club, with DJ sets and a lively atmosphere, perfect for extending the night in style. Whether for a formal meeting or a lively party, our space adapts to your style.",
    pFinal2: isPT
      ? "A partir das 22h, nosso clube abre suas portas, com DJ sets e uma atmosfera animada, ideal para prolongar a noite em grande estilo. Seja para uma reunião formal ou uma festa animada, o nosso espaço adapta-se ao seu estilo."
      : "From 10:00 PM, our club opens its doors, with DJ sets and a lively atmosphere—perfect for extending the night in style. Whether for a formal gathering or a lively party, our space adapts to your vibe.",
  };

  return (
    <>
      <Helmet>
        <title>
          {isPT
            ? "Eventos e Jantares em Grupo – Sacramento Chiado"
            : "Group Dinners and Events – Sacramento Chiado"}
        </title>
        <meta
          name="description"
          content={
            isPT
              ? "Organize jantares e eventos memoráveis em um palácio histórico no Chiado. Espaços elegantes, menus personalizados e ambiente sofisticado no Sacramento."
              : "Host memorable dinners and events in a historic palace in Chiado. Elegant spaces, personalized menus, and a sophisticated atmosphere at Sacramento."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            isPT
              ? "Eventos e Jantares em Grupo – Sacramento Chiado"
              : "Group Dinners and Events – Sacramento Chiado"
          }
        />
        <meta
          property="og:description"
          content={
            isPT
              ? "Cinco salas interligadas, menus exclusivos e um ambiente único para jantares de grupo em Lisboa. Descubra o Sacramento no Chiado."
              : "Five connected rooms, exclusive menus, and a unique setting for group dinners in Lisbon. Discover Sacramento in Chiado."
          }
        />
        <meta
          property="og:image"
          content="https://sacramento-taupe.vercel.app/assets/og-sacramento-banner.png"
        />
        <meta
          property="og:url"
          content="https://sacramento-taupe.vercel.app/eventos"
        />
      </Helmet>

      <div>
        <Suspense
          fallback={
            <div className="text-center py-10">Carregando cabeçalho...</div>
          }
        >
          <Header
            imgSrc={imgHeader}
            titlePt="Restaurante para Grupos em Lisboa: Eventos e Jantares Especiais"
            titleEn="Restaurant for Groups in Lisbon: Events and Special Dinners"
          />
        </Suspense>

        <div className="p-6">
          {/* Texto + Imagem */}
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center w-full justify-center lg:gap-40 gap-20 py-20">
            <div className="flex flex-col justify-center lg:max-w-1/3">
              <h2 className="font-caudex text-3xl lg:text-5xl uppercase">
                {t.h1}
              </h2>
              <p className="mt-4 text-justify">{t.p1}</p>
              <div className="mt-6 flex flex-row items-start">
                <Suspense fallback={<div>Carregando botão...</div>}>
                  <Arrow title={t.cta} />
                </Suspense>
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex justify-end">
              <Suspense fallback={<div>Carregando imagem...</div>}>
                <Card
                  imageSrc={img1}
                  width="w-full lg:w-[600px]"
                  height="h-[504px] lg:h-[900px]"
                />
              </Suspense>
            </div>
          </div>

          {/* Grid de imagens */}
          <div className="mt-10 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Suspense fallback={<div>Carregando imagem...</div>}>
                  <Card imageSrc={imgCima2} height="h-52 lg:h-96" />
                </Suspense>
                <Suspense fallback={<div>Carregando imagem...</div>}>
                  <Card imageSrc={imgCima1} height="h-52 lg:h-96" />
                </Suspense>
              </div>

              <Suspense fallback={<div>Carregando imagem...</div>}>
                <Card imageSrc={imgBaixo} height="h-80 lg:h-[525px]" />
              </Suspense>
            </div>

            <Suspense fallback={<div>Carregando imagem...</div>}>
              <Card imageSrc={imgDir} height="h-[468px] lg:h-[928px]" />
            </Suspense>
          </div>

          {/* Seção de cocktails */}
          <div className="flex flex-col items-center justify-center lg:my-60">
            <h2 className="w-full h1-title text-left lg:text-center">
              {t.h2Cocktails}
            </h2>
            <p className="lg:max-w-1/2">{t.p2Cocktails}</p>
            <Suspense fallback={<div>Carregando botão...</div>}>
              <Arrow title={t.cta3} />
            </Suspense>
          </div>

          {/* Seção final */}
          <div className="lg:px-40 lg:my-40">
            <Suspense fallback={<div>Carregando card...</div>}>
              <Card
                imageSrc={imgCard}
                height="h-80 lg:h-[570px]"
                width="w-full"
                title="Celebrações com História e Alma"
              />
            </Suspense>

            <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:px-40 lg:py-20 py-10">
              <div className="lg:max-w-1/2">
                <p className="text-justify">{t.pFinal1}</p>
              </div>
              <div className="flex flex-col items-start lg:max-w-1/2 lg:justify-between">
                <p className="text-justify">{t.pFinal2}</p>
                <Suspense fallback={<div>Carregando botão...</div>}>
                  <Arrow title={t.cta2} />
                </Suspense>
              </div>
            </div>
          </div>

          <Suspense fallback={<div>Carregando formulário...</div>}>
            <Form />
          </Suspense>
        </div>

        <Suspense fallback={<div>Carregando rodapé...</div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default EventosJantares;
