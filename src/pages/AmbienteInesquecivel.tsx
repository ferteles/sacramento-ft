import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";

import { useLanguage } from "../context/LanguageContext";

import img1 from "../assets/images/pg7/img1.webp";
import img2 from "../assets/images/pg7/img2.webp";
import img3 from "../assets/images/pg7/img3.webp";
import imgCard from "../assets/images/pg7/imgCard.webp";
import imgHeader from "../assets/images/pg7/imgHeader.webp";

// Lazy imports
const Arrow = React.lazy(() => import("../components/Arrow"));
const Card = React.lazy(() => import("../components/Card"));
const Footer = React.lazy(() => import("../components/Footer"));
const Form = React.lazy(() => import("../components/Form"));
const GaleryAmbienteInesq = React.lazy(
  () => import("../components/GaleryAmbienteInesq")
);
const Header = React.lazy(() => import("../components/Header"));

function AmbienteInesquecivel() {
  const { language } = useLanguage();
  const isPT = language === "pt";

  const t = {
    headerTitle: isPT ? "Ambiente Inesquecível" : "Unforgettable Atmosphere",

    bloco1Titulo: isPT
      ? "Música ao Vivo num Palácio Histórico em Lisboa"
      : "Live Music in a Historic Palace in Lisbon",

    bloco1Texto: isPT
      ? "Música ao vivo, com DJ sets que animam as noites de sexta e sábado, oferecemos uma experiência única que combina gastronomia, história e boa música. O nosso clube, localizado dentro do palácio histórico, é o destino perfeito para quem procura prolongar a noite em Lisboa. Com uma atmosfera vibrante e uma programação musical diversificada, o Sacramento transforma-se num espaço de festa e convívio a partir das 22h. O dress code é casual chic, e a guestlist é limitada a 250 pessoas por noite, garantindo uma experiência exclusiva e intimista."
      : "Live musics, with DJ sets livening up Friday and Saturday nights, we offer a unique experience that blends gastronomy, history, and great music. Our club, located within the historic palace, is the perfect destination for those looking to extend their night in Lisbon. With a vibrant atmosphere and a diverse musical lineup, Sacramento becomes a space for partying and socializing starting at 10 PM. The dress code is casual chic, and the guest list is limited to 250 people per night, ensuring an exclusive and intimate experience.",

    bloco2Titulo: isPT
      ? "Noites Animadas num Cenário Histórico"
      : "Lively Nights in a Historic Setting",

    bloco2Texto: isPT
      ? "As noites no clube do Sacramento são animadas por DJ sets que variam entre house, chillout e outros estilos musicais que cativam o público. A programação musical é cuidadosamente selecionada para criar uma atmosfera envolvente, perfeita para dançar ou simplesmente desfrutar da música em boa companhia. Os DJs tocam todas as sextas e sábados, transformando o espaço num ponto de encontro vibrante no coração do Chiado."
      : "Nights at Sacramento’s club are brought to life with DJ sets that range from house and chillout to other captivating musical styles. The music lineup is carefully curated to create an engaging atmosphere, perfect for dancing or simply enjoying music in great company. DJs play every Friday and Saturday, turning the venue into a vibrant meeting point in the heart of Chiado.",

    bloco3Titulo: isPT
      ? "Gastronomia e Música: Uma Combinação Perfeita"
      : "Gastronomy and Music: A Perfect Combination",

    bloco3Texto1: isPT
      ? "O ambiente do Sacramento é perfeito para celebrações descontraídas e memoráveis. Com os seus arcos centenários e iluminação intimista, o espaço oferece uma atmosfera acolhedora e sofisticada. Às sextas e sábados, o ambiente ganha uma energia especial, com música ambiente e uma vibe festiva que transforma qualquer evento numa experiência única."
      : "Sacramento’s ambiance is perfect for relaxed and memorable celebrations. With its centuries-old arches and intimate lighting, the space offers a cozy and sophisticated atmosphere. On Fridays and Saturdays, it takes on a special energy, with ambient music and a festive vibe that turns any event into a unique experience.",

    bloco3Texto2: isPT
      ? "A partir das 22h, nosso clube abre suas portas, com DJ sets e uma atmosfera animada, ideal para prolongar a noite em grande estilo. Seja para uma reunião formal ou uma festa animada, o nosso espaço adapta-se ao seu estilo."
      : "From 10:00 PM, our club opens its doors, with DJ sets and a lively atmosphere — perfect for extending the night in style. Whether for a formal gathering or a vibrant party, our space adapts to your style.",

    bloco4Titulo: isPT
      ? "Acesso Exclusivo e Dress Code"
      : "Exclusive Access and Dress Code",

    bloco4Texto: isPT
      ? "O acesso ao clube do Sacramento é exclusivo, com uma guestlist limitada a 250 pessoas por noite, garantindo um ambiente intimista e sofisticado. O dress code é casual chic, e recomendamos que os clientes reservem com antecedência para garantir o seu lugar. O clube está aberto de fevereiro a dezembro, com programação variada que inclui DJ sets e eventos temáticos. Para festas privadas ou eventos especiais, é necessário solicitar um orçamento personalizado."
      : "Access to Sacramento’s club is exclusive, with a guest list limited to 250 people per night, ensuring an intimate and sophisticated setting. The dress code is casual chic, and we recommend booking in advance to secure your spot. The club operates from February to December, featuring a varied schedule that includes DJ sets and themed events. For private parties or special occasions, a personalized quote must be requested.",

    cta1: isPT ? "faça sua reserva" : "make your reservation",
    cta2: isPT
      ? "Contacte-nos para mais informações"
      : "Contact us for more information",
    cta3: isPT ? "Contacte-nos para o Seu Evento" : "Contact us for Your Event",
    cta4: isPT
      ? "Reserve Já e Desfrute do Nosso DJ ao Vivo"
      : "Book Now and Enjoy Our Live DJ",
  };

  return (
    <>
      <Helmet>
        <title>
          {isPT
            ? "Ambiente Inesquecível – Sacramento Chiado"
            : "Unforgettable Atmosphere – Sacramento Chiado"}
        </title>
        <meta
          name="description"
          content={
            isPT
              ? "Descubra o clube do Sacramento em Lisboa: DJs ao vivo, ambiente sofisticado, palácio histórico e noites animadas no coração do Chiado."
              : "Discover Sacramento’s club in Lisbon: live DJs, a sophisticated ambiance, a historic palace, and vibrant nights in the heart of Chiado."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            isPT
              ? "Ambiente Inesquecível – Sacramento Chiado"
              : "Unforgettable Atmosphere – Sacramento Chiado"
          }
        />
        <meta
          property="og:description"
          content={
            isPT
              ? "De sexta a sábado, o Sacramento transforma-se em clube com música ao vivo e acesso exclusivo para até 250 pessoas. Uma experiência única em Lisboa."
              : "From Friday to Saturday, Sacramento turns into a club with live music and exclusive access for up to 250 guests. A unique experience in Lisbon."
          }
        />
        <meta
          property="og:image"
          content="https://sacramento-taupe.vercel.app/assets/og-sacramento-banner.png"
        />
        <meta
          property="og:url"
          content="https://sacramento-taupe.vercel.app/club"
        />
      </Helmet>

      <div className="bg-[#E4D9CD]">
        <Suspense
          fallback={
            <div className="text-center py-10">Carregando cabeçalho...</div>
          }
        >
          <Header
            titlePt="Ambiente Inesquecível"
            titleEn="Unforgettable Atmosphere"
            imgSrc={imgHeader}
          />

          <div className=" flex flex-col items-center">
            {/* Bloco principal responsivo */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 px-0 lg:px-6 py-20">
              {/* Texto à esquerda no desktop */}
              <div className="flex flex-col justify-center lg:max-w-1/3 px-6 lg:px-0">
                <h2 className="text-3xl lg:text-6xl font-caudex">
                  {t.bloco1Titulo}
                </h2>
                <p className="mt-4 text-sm font-catamaran text-justify">
                  {t.bloco1Texto}
                </p>
                <Arrow title={t.cta1} />
              </div>

              {/* Imagem à direita no desktop */}
              <div className="w-full lg:w-1/3 flex justify-center">
                <Card
                  imageSrc={img1}
                  width="w-full lg:w-[417px]"
                  height="h-[504px] lg:h-[718px]"
                  hasOverlay={false}
                />
              </div>
            </div>
            <GaleryAmbienteInesq />
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 px-0 lg:px-10 py-20 mt-40 lg:mt-0 lg:pt-0 p-6">
              <div className="flex flex-col lg:flex-col lg:w-1/2 px-6 lg:px-0 gap-5 lg:gap-10 ">
                <h2 className="text-3xl lg:text-6xl font-caudex">
                  {t.bloco2Titulo}
                </h2>
                <p className="font-catamaran text-base ">{t.bloco2Texto}</p>
                <Arrow title={t.cta2} />
              </div>
              <Card
                imageSrc={img2}
                width="w-full lg:w-[534px]"
                height="h-[670px] "
                hasOverlay={false}
              />
            </div>
            <div className="lg:px-10 px-6 flex flex-col items-center w-full gap-20">
              <div className="w-full ">
                <Card
                  imageSrc={imgCard}
                  title={t.bloco3Titulo}
                  width="w-full"
                  height="h-[517px]"
                />
              </div>

              <div className="flex flex-col lg:flex-row items-start justify-evenly lg:px-20  sm:py-20">
                <p className="lg:max-w-1/3 font catamaran text-base">
                  {t.bloco3Texto1}
                </p>
                <div className="flex flex-col items-start lg:max-w-1/3">
                  <p className="font-catamaran text-base">{t.bloco3Texto2}</p>
                  <Arrow title={t.cta3} />
                </div>
              </div>
            </div>
            <div className="flex justify-center px-6 lg:px-6 py-0 lg:py-20">
              <div className="flex flex-col-reverse lg:flex-row items-start gap-10 lg:gap-30 w-full max-w-7xl lg:px-20">
                {/* Texto à esquerda no desktop */}
                <div className="w-full lg:w-1/2 flex flex-col-reverse lg:flex-col justify-center items-start gap-10">
                  <h3 className="text-3xl lg:text-6xl font-caudex text-left">
                    {t.bloco4Titulo}
                  </h3>
                  <p className="font-catamaran text-base">{t.bloco4Texto}</p>
                  <div className="mt-6">
                    <Arrow title={t.cta4} />
                  </div>
                </div>

                {/* Imagem à direita no desktop */}
                <div className="w-full lg:w-1/2 flex items-end justify-start">
                  <Card
                    imageSrc={img3}
                    width="w-full lg:w-[475px]"
                    height="h-[518px] lg:h-[740px]"
                    hasOverlay={false}
                  />
                </div>
              </div>
            </div>

            <Form />
          </div>

          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default AmbienteInesquecivel;

/* A DIREÇÃO DO SACRAMENTO, SE VOCE CHEGOU ATÉ AQUI, VAI TOMAR NO C* */
