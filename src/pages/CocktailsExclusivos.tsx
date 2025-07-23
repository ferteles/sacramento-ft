import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";

import { useLanguage } from "../context/LanguageContext";

import headerImg from "../assets/images/pg3/imgHeader.webp";
import img1 from "../assets/images/pg3/img1.webp";
import img2 from "../assets/images/pg3/img2.webp";
import cardImg from "../assets/images/pg3/cardImg.webp";

// Lazy loading de componentes pesados
const Card = React.lazy(() => import("../components/Card"));
const Header = React.lazy(() => import("../components/Header"));
const Form = React.lazy(() => import("../components/Form"));
const Footer = React.lazy(() => import("../components/Footer"));
const Arrow = React.lazy(() => import("../components/Arrow"));

function CocktailsExclusivos() {
  const { language } = useLanguage();
  const isPT = language === "pt";
  const t = {
    h1: isPT
      ? "Cocktails e História: O Bar do Sacramento em Lisboa"
      : "Cocktails & History: The Bar at Sacramento in Lisbon",
    p1: isPT
      ? "No bar do Sacramento, a história de Lisboa encontra a mixologia moderna. Desfrute de cocktails exclusivos num ambiente que combina o charme do passado com a animação do presente. Localizado no coração do Chiado, o nosso bar é um refúgio para quem procura uma experiência única, onde cada cocktails é uma homenagem à rica herança cultural de Lisboa. Com uma equipa de Barmen talentosos, criamos cocktails que contam histórias, utilizando ingredientes locais e técnicas inovadoras para surpreender os nossos clientes."
      : "At Sacramento's bar, Lisbon's history meets modern mixology. Enjoy signature cocktails in a setting that blends the charm of the past with the energy of the present. Located in the heart of Chiado, our bar is a haven for those seeking a unique experience, where each drink pays homage to Lisbon's rich cultural heritage. With a team of talented mixologists, we create cocktails that tell stories, using local ingredients and innovative techniques to delight our guests.",
    h2: isPT
      ? "Cocktails que Contam a História de Lisboa"
      : "Cocktails that Tell the Story of Lisbon",
    p2: isPT
      ? "A nossa carta de cocktails é uma viagem pela história de Lisboa, com bebidas que celebram os sabores e tradições da cidade. Desde clássicos reinventados até criações exclusivas, cada cocktail é uma experiência única. Utilizamos ingredientes locais, como ginja, vinho do Porto e ervas aromáticas, para criar cocktails que refletem a essência de Portugal. Experimente o nosso cocktail xxxxxxxxxxxxl signature, inspirado na energia frenética da cidade de Lisboa, ou deixe-se surpreender por uma das nossas criações sazonais."
      : "Our cocktail menu is a journey through Lisbon's history, with drinks that celebrate the city's flavors and traditions. From reinvented classics to exclusive creations, each cocktail is a unique experience. We use local ingredients, such as ginja, Port wine, and aromatic herbs, to create drinks that reflect the essence of Portugal. Try our xxxxxxxxx signature cocktail, inspired by Chiado's architecture, or be surprised by one of our seasonal creations.",
    h3: isPT
      ? "Um Bar com Alma Histórica e Vibração Contemporânea"
      : "A Bar with Historic Soul and Contemporary Vibe",
    p3a: isPT
      ? "O ambiente do bar do Sacramento é uma fusão perfeita entre o charme histórico e a energia contemporânea. Com os seus arcos centenários e iluminação intimista, o espaço convida a momentos de descontração e convívio."
      : "The ambiance at Sacramento's bar is a perfect blend of historic charm and contemporary energy. With its centuries-old arches and intimate lighting, the space invites moments of relaxation and socializing.",
    p3b: isPT
      ? "À noite, o bar ganha vida com música ambiente e uma atmosfera vibrante, ideal para prolongar a noite em boa companhia. Seja para um cocktail após o jantar ou para uma noite animada, o nosso bar é o local perfeito para desfrutar a noite em Lisboa."
      : "At night, the bar comes alive with ambient music and a vibrant atmosphere, perfect for extending the night in good company. Whether for a post-dinner drink or a lively evening, our bar is the perfect spot to enjoy Lisbon.",
    cta1: isPT ? "Reserve já sua mesa" : "Book your table",
    cta2: isPT ? "Contacte-nos para o Bar" : "Contact Us About the Bar",
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
          content="https://sacramentolisboa.com/assets/og-sacramento-banner.png"
        />
        <meta
          property="og:url"
          content="https://sacramentolisboa.com/cocktails"
        />
        <link rel="canonical" href="https://sacramentolisboa.com/cocktails" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="">
        <Suspense
          fallback={
            <div className="text-center py-10">Carregando cabeçalho...</div>
          }
        >
          <Header
            titlePt="COCKTAILS EXCLUSIVOS NO CORAÇÃO DO CHIADO"
            titleEn="EXCLUSIVE COCKTAILS IN THE HEART OF CHIADO"
            imgSrc={headerImg}
          />
        </Suspense>

        <div className="flex flex-col">
          <div className="flex flex-col gap-10 lg:gap-40 p-6 lg:flex-row items-start lg:items-center justify-center w-full lg:my-30 lg:px-30">
            <div className="lg:w-1/3 w-full flex flex-row-reverse">
              <Suspense fallback={<div>Carregando imagem...</div>}>
                <Card
                  imageSrc={img1}
                  height="h-96 lg:h-[561px]"
                  width="w-full lg:w-130"
                  hasOverlay={false}
                />
              </Suspense>
            </div>
            <div className="lg:w-1/3 w-full flex flex-col gap-5 items-start justify-start h-full">
              <h2 className="font-caudex text-3xl lg:text-5xl uppercase">
                {t.h1}
              </h2>
              <p className="font-catamaran text-sm">{t.p1}</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse w-full p-6 lg:p-0 gap-10">
            <Suspense fallback={<div>Carregando imagem...</div>}>
              <Card imageSrc={img2} width="w-full" height="h-80 lg:h-[571px]" hasOverlay={false} />
            </Suspense>
            <div className="lg:max-w-1/2 flex flex-col items-start justify-center gap-3 lg:p-30">
              <h2 className="font-caudex text-3xl lg:text-5xl uppercase">
                {t.h2}
              </h2>
              <p className="text-sm font-catamaran">{t.p2}</p>
              <Suspense fallback={<div>Carregando...</div>}>
                <Arrow title={t.cta1} />
              </Suspense>
            </div>
          </div>

          <div className="lg:px-40 p-6 lg:my-40">
            <Suspense fallback={<div>Carregando card...</div>}>
              <Card
                imageSrc={cardImg}
                width="w-full"
                height="h-96"
                title={t.h3}
              />
            </Suspense>
            <div className="">
              <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:px-40 lg:py-20 py-10">
                <p className="lg:max-w-1/2">{t.p3a}</p>
                <div className="flex flex-col items-start lg:max-w-1/2 lg:justify-between">
                  <p>{t.p3b}</p>
                  <Suspense fallback={<div>Carregando botão...</div>}>
                    <Arrow title={t.cta2} />
                  </Suspense>
                </div>
              </div>
              <Suspense fallback={<div>Carregando formulário...</div>}>
                <Form />
              </Suspense>
            </div>
          </div>
        </div>

        <Suspense fallback={<div>Carregando rodapé...</div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default CocktailsExclusivos;
