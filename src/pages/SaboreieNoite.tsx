import React, { Suspense } from "react";
import { useLanguage } from "../context/LanguageContext";

import imgHeader from "../assets/images/pg5/imgHeader.webp";
import img1 from "../assets/images/pg5/img1.webp";
import img2 from "../assets/images/pg5/img2.webp";
import imgCard from "../assets/images/pg5/imgCard.webp";
import imgCimaEsq from "../assets/images/pg5/imgCimaEsq.webp";
import imgBaixoEsq from "../assets/images/pg5/imgBaixoEsq.webp";
import imgMeio from "../assets/images/pg5/imgMeio.webp";
import imgDir from "../assets/images/pg5/imgDir.webp";

// Componentes otimizados com lazy
const Arrow = React.lazy(() => import("../components/Arrow"));
const Card = React.lazy(() => import("../components/Card"));
const Header = React.lazy(() => import("../components/Header"));
const Form = React.lazy(() => import("../components/Form"));
const Footer = React.lazy(() => import("../components/Footer"));

function SaboreieNoite() {
  const { language } = useLanguage();
  const t = {
    title:
      language === "pt"
        ? "Saboreie a Noite em Lisboa"
        : "Savor the Night in Lisbon",
    h1:
      language === "pt"
        ? "Jantar Tarde num Palácio Histórico em Lisboa"
        : "Late Dinner in a Historic Palace in Lisboa",
    p1:
      language === "pt"
        ? "No Sacramento, a cozinha está aberta até tarde, oferecendo uma experiência única para quem quer jantar tarde em Lisboa. Desfrute de pratos tradicionais com um toque moderno, num ambiente que respira história. Localizado no coração do Chiado, o Sacramento é o local ideal para quem procura uma refeição tardia, seja após um espetáculo, um evento ou simplesmente para desfrutar de uma noite tranquila em boa companhia. Com uma cozinha que funciona até tarde, garantimos que cada prato seja preparado com a mesma dedicação e qualidade que nos distingue."
        : "At Sacramento, the kitchen is open until 1 AM, offering a unique experience for those looking to extend their night in Lisbon. Enjoy traditional dishes with a modern twist in a setting steeped in history. Located in the heart of Chiado, Sacramento is the perfect spot for a late-night meal, whether after a show, an event, or simply to enjoy a quiet night in good company. With a kitchen that operates until late, we ensure that every dish is prepared with the same dedication and quality that sets us apart.",
    h2:
      language === "pt"
        ? "Sabores da Noite num Cenário Histórico"
        : "Nighttime Flavors in a Historic Setting",
    p2:
      language === "pt"
        ? "Desfrute de uma refeição completa ou de petiscos deliciosos até altas horas. Oferecemos uma variedade de pratos que celebram a gastronomia portuguesa, desde clássicos como o bacalhau à brás até opções mais leves, perfeitas para o final da noite. Cada prato é preparado com ingredientes frescos e técnicas contemporâneas, garantindo uma experiência gastronómica memorável, mesmo nas horas mais tardias."
        : "Enjoy a full meal or delicious snacks late into the night. We offer a variety of dishes that celebrate Portuguese gastronomy, from classics like bacalhau à brás to lighter options, perfect for late-night dining. Each dish is prepared with fresh ingredients and contemporary techniques, ensuring a memorable dining experience, even in the late hours.",
    h3:
      language === "pt"
        ? "Noites Inesquecíveis no Coração de Lisboa"
        : "Unforgettable Nights in the Heart of Lisbon",
    p3:
      language === "pt"
        ? "Os arcos centenários e iluminação intimista, o espaço oferece uma atmosfera acolhedora e sofisticada, ideal para desfrutar de uma refeição tardia em Lisboa. Às sextas e sábados, o ambiente ganha uma energia especial, com música ambiente e uma vibe descontraída que transforma qualquer jantar numa experiência única. Seja para um encontro romântico ou uma noite entre amigos, o Sacramento é o local perfeito para prolongar a noite em Lisboa."
        : "Its centuries-old arches and intimate lighting, the space offers a cozy and sophisticated atmosphere, perfect for enjoying a late-night meal. On Fridays and Saturdays, the ambiance takes on a special energy, with ambient music and a relaxed vibe that turns any dinner into a unique experience. Whether for a romantic date or a night out with friends, Sacramento is the perfect spot to extend the night in Lisbon.",
    p4:
      language === "pt"
        ? "Seja para um cocktail após o jantar ou para uma noite animada, o nosso bar é o local perfeito para desfrutar a noite em Lisboa."
        : "Whether for a cocktail after dinner or a lively evening, our bar is the perfect place to enjoy the night in Lisbon.",
    cta: language === "pt" ? "Reserve já sua mesa" : "Book your table now",
  };
  return (
    <div className="">
      <Suspense fallback={<div>Carregando cabeçalho...</div>}>
        <Header
          titlePt="Jantar Tarde em Lisboa: Saboreie a Noite"
          titleEn="Late Dinner in Lisbon: Savor the Night"
          imgSrc={imgHeader}
        />
      </Suspense>

      <div className="p-6">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:gap-30 gap-10  py-20">
          <div className="flex flex-col justify-center lg:max-w-1/2">
            <h2 className="text-3xl lg:text-6xl font-caudex   lg:max-w-3/4">
              {t.h1}
            </h2>
            <p className="mt-4 text-justify lg:max-w-3/4 font-catamaran font-thin">
              {t.p1}
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end">
            <Suspense fallback={<div>Carregando imagem...</div>}>
              <Card
                imageSrc={img1}
                height="h-96 lg:h-[624px]"
                width="w-full lg:w-[509px] "
              />
            </Suspense>
          </div>
        </div>

        <div className="my-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:px-50 gap-10  ">
            <div className="flex flex-col lg:max-w-1/2">
              <h2 className=" text-3xl lg:text-6xl font-caudex  ">{t.h2}</h2>
              <p className="mt-4 font-catamaran font-thin">{t.p2}</p>
            </div>

            <div className="w-full lg:max-w-1/2 flex lg:justify-center">
              <Suspense fallback={<div>Carregando imagem...</div>}>
                <Card
                  imageSrc={img2}
                  height="h-96 lg:h-[624px]"
                  width="w-full lg:w-[640px]"
                />
              </Suspense>
            </div>
          </div>
        </div>

        <div className="lg:px-40 lg:my-40 ">
          <Suspense fallback={<div>Carregando imagem...</div>}>
            <Card
              imageSrc={imgCard}
              title={{
                pt: "Noites Inesquecíveis no \n Coração de Lisboa",
                en: "Unforgettable Nights in the Heart of Lisbon",
              }}
              width="w-80 lg:w-full"
              height="h-[517px]"
            />
          </Suspense>

          <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20 lg:px-40 lg:w-full  py-10">
            <div className="flex flex-col lg:max-w-1/2">
              <p className=" text-justify lg:w-90 font-catamaran font-thin">
                {t.p3}
              </p>
            </div>

            <div className="flex flex-col items-start lg:max-w-1/2">
              <p className="text-justify lg:w-90 font-catamaran font-thin">
                {t.p4}
              </p>
              <Suspense fallback={<div>Carregando botão...</div>}>
                <Arrow title={t.cta} />
              </Suspense>
            </div>
          </div>
        </div>

        <Suspense fallback={<div>Carregando imagem...</div>}>
          <Card imageSrc={imgCimaEsq} height="h-150" width="w-full" />
        </Suspense>
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        <img
          src={imgBaixoEsq}
          alt="Imagem"
          className="w-full h-69 lg:h-auto lg:w-1/2 object-cover lg:pl-6 lg:rounded-4xl"
        />

        <div className="flex flex-col items-start justify-center p-6 gap-5 lg:w-1/2">
          <Suspense fallback={<div>Carregando imagem...</div>}>
            <Card imageSrc={imgMeio} width="w-full" height="h-150" />
          </Suspense>
          <Suspense fallback={<div>Carregando imagem...</div>}>
            <Card imageSrc={imgDir} width="w-full" height="h-[499px]" />
          </Suspense>
        </div>
      </div>

      <div className="p-6">
        <Suspense fallback={<div>Carregando formulário...</div>}>
          <Form />
        </Suspense>
      </div>

      <Suspense fallback={<div>Carregando rodapé...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default SaboreieNoite;
