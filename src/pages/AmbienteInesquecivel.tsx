import Arrow from "../components/Arrow";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Form from "../components/Form";
import GaleryAmbienteInesq from "../components/GaleryAmbienteInesq";
import Header from "../components/Header";
import { useLanguage } from "../context/LanguageContext";

function AmbienteInesquecivel() {
  const { language } = useLanguage();
  const isPT = language === "pt";

  const t = {
    headerTitle: isPT ? "Ambiente Inesquecível" : "Unforgettable Atmosphere",

    bloco1Titulo: isPT
      ? "Música ao Vivo num Palácio Histórico em Lisboa"
      : "Live Music in a Historic Palace in Lisbon",

    bloco1Texto: isPT
      ? "Música ao vivo encontra a história de Lisboa. Com DJ sets que animam as noites de sexta e sábado, oferecemos uma experiência única que combina gastronomia, história e boa música. O nosso clube, localizado dentro do palácio histórico, é o destino perfeito para quem procura prolongar a noite em Lisboa. Com uma atmosfera vibrante e uma programação musical diversificada, o Sacramento transforma-se num espaço de festa e convívio a partir das 23h. O dress code é casual chic, e a guestlist é limitada a 250 pessoas por noite, garantindo uma experiência exclusiva e intimista."
      : "Live music meets the history of Lisbon. With DJ sets livening up Friday and Saturday nights, we offer a unique experience that blends gastronomy, history, and great music. Our club, located within the historic palace, is the perfect destination for those looking to extend their night in Lisbon. With a vibrant atmosphere and a diverse musical lineup, Sacramento becomes a space for partying and socializing starting at 11 PM. The dress code is casual chic, and the guest list is limited to 250 people per night, ensuring an exclusive and intimate experience.",

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
      ? "A partir das 23h, o restaurante transforma-se em um clube, com DJ sets e uma atmosfera animada, ideal para prolongar a noite em grande estilo. Seja para uma reunião formal ou uma festa animada, o nosso espaço adapta-se ao seu estilo."
      : "Starting at 11 PM, the restaurant turns into a club, with DJ sets and a lively atmosphere — perfect for extending the night in style. Whether for a formal gathering or a vibrant party, our space adapts to your style.",

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
    <div className="bg-[#E4D9CD]">
      <Header
        titlePt="Ambiente Inesquecível"
        titleEn="Unforgettable Atmosphere"
        imgSrc="https://s3-alpha-sig.figma.com/img/92a5/ffaf/b4456c154dd42c6e760d6e1dad199d10?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mSkrCRS2BfxNaLt43OcePpp-XxfhwAAMxfQvqTEDtf3p0RyMjxnWCbkfwbwhfjRbHZx2L~FQ912Dpdorpz0enMEVmOyc8QXJlpQFLrbPk04OhjMbHr-Cb2S3tA6YVxT8DtbfVZ9ur8O4T~x30-6Vx2XSfHFX14XCo33oikb83lhQrGEzF9qfT26VIYhlFm2VCAzK5~g0knQhuncLJWsekE0byXFFuacFuasFdWK5zOxvH12-rh~FOyUMnfQHuIAQmGoBHZpVKM~VB82xATB6FcSxjVddGmGfYq49ASre3EH8bbQBYnHwLFTsciFHcPZOvqC9wVQJEMS85~gF~~N0qw__"
      />

      <div className=" flex flex-col items-center">
        {/* Bloco principal responsivo */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 px-6 py-20">
          {/* Texto à esquerda no desktop */}
          <div className="flex flex-col justify-center lg:max-w-1/3">
            <h1 className="h1-title">{t.bloco1Titulo}</h1>
            <p className="mt-4 text-justify">{t.bloco1Texto}</p>
            <Arrow title={t.cta1} />
          </div>

          {/* Imagem à direita no desktop */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <Card
              imageSrc="https://s3-alpha-sig.figma.com/img/c680/7edc/5555c9d711ef594e42fa819e69103aa5?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bNUA4LEqCOU58ZxYdOGit-NJ9NrkiQO~DJOxe2kmh~OgMly2uRC4aJicNxzeBQTBklN~12a82JsrUmsDD-XXzFnsh5xJsPMmt-aMp2z88A2iBwNdiUTQjmbSSg-KzSsXlviBK~Y~TaxPenY9gyU2HTCXfsMS6vnjBJ9u0rrghQo6q8BIGj7z8hEP-i~0yB2uTXCCK~OxVJVXc2aNtqaQHgW1J0oAleqdJWIR0a58eSYMkNaF0rmeqzDi3dgxhnoeuUva13ouWttyKyu8aJiobkyNMAqdlJ53~z6x1M~Nd6bTghzA9yazezGYoNQM2RCsce04YE1~9DJP6EH1169FJg__"
              width="w-full lg:w-[417px]"
              height="h-[504px] lg:h-[718px]"
            />
          </div>
        </div>

        <GaleryAmbienteInesq />

        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 lg:px-50 py-20 mt-40 lg:mt-0 lg:pt-0 p-6">
          <div className="lg:w-1/2">
            <h1 className="h1-title">{t.bloco2Titulo}</h1>
            <p>{t.bloco2Texto}</p>
            <Arrow title={t.cta2} />
          </div>
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/d520/36e9/7f0d13977c3b1dc2e7f757391e8e513a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gnm-qOvAOx7Hn5vD2XVAki2VdTQCCk19TIBArbpfF0YDqRAiP7ldfN-bysIVyRLYXXBeVsd19SQnKFXdAGorBUjT-Zm1GvxPZX4MrbrQl~~ia1Hm8JqLxVsTz1Jo7EwxE5JXQltia9zq1H5efbSzCsLnnvpQClrhd4Qr1J5qFC12oKtwNM6pMzXN3S6kwVeJkWKMTCfnNM0hMw~yu9rwsKz-iz1eVdlVFch6~n0aPUz0euuwmg12lEfpw1p8w26QSlDTfk6~0Xa2gaX1pKhiU9yHa4JS4bZ-8Dmxq2ifuQbc34gcIHgAx2SfWR4STncQdicxvpNW0uhyUC810dFqeA__ "
            width="w-full lg:w-[534px]"
            height="h-[670px] "
          />
        </div>
        <div className="lg:px-10 px-6 flex flex-col items-center w-full gap-20">
          <div className="">
            <Card
              imageSrc="https://s3-alpha-sig.figma.com/img/c9f6/b7b3/2b7086b865742b58fbdfde65ce82478b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X0GEMoTp677mGaZJmrdgzamr2UE2opJZVqtEm3DBAg00hNPw0yFBhfEp7lLbj6NEsRtFkYChIOkxm2KDmPOOfb2EwvYXI9O0mgiKT-auOa6WAmsw7-tiDGxNxbfPl1QQqbxG0e2hRGp~RlYi9eUHoQHoBgOnhtAaC5oHBQadAYr7oZr6cpfzNU9hJSaxs~JWQFSkYjMW-hjqmp0Da~3SfbJ-umt41xHAMlLJgVC4ovVJyiNAdCeYmyP0GGfrRg92s2sHI8WiwR-nEyXMPwXpERQkUGu1sVF7bgL8vjiijLW8EvaDY-GHOGCs~osPHnsNOrw~FxsYz~V0a-Mr6CiYug__"
              title={t.bloco3Titulo}
              width="lg:w-400"
              height="h-[517px]"
            />
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-start justify-evenly gap-10 lg:px-1 sm:py-20  ">
            <p className="lg:max-w-1/3  ">{t.bloco3Texto1}</p>
            <div className="flex flex-col items-start lg:max-w-1/3">
              <p className="">{t.bloco3Texto2}</p>
              <Arrow title={t.cta3} />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-top justify-center gap-10 px-6 lg:px-63 py-20">
          {/* Texto à esquerda no desktop */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
            <h1 className="h1-title text-left">{t.bloco4Titulo}</h1>
            <p className="font-catamaran">{t.bloco4Texto}</p>
            <div className="mt-6 ">
              <Arrow title={t.cta4} />
            </div>
          </div>

          {/* Imagem à direita no desktop */}
          <div className="w-full lg:w-1/2 flex items-end justify-end lg:mr-30">
            <Card
              imageSrc="https://s3-alpha-sig.figma.com/img/94f2/d7db/f86261db7d74b812091b23b444e5267f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LkncVwj1AC4vw2RgS-7M6vetyFCslP1XupCLswx1C4GvKcysHdtrXmHEpU~1R2HcpK3CYN6ScK4X88SsVY0JPriN1VENez-hKc3gpBtUzZE-nss~sH0AClwXk7uyVLthg09VHjgmKHiA~IzIYXGFnhbeRjSP6iNPM2DFkJRzNZWsp14c3p6T4zCIqb1aLMcSfst~6cm6s-xgLfDrbM0NSpRq5iH3tuF1eUGRNhzeIscw9a-qBEsHP8~N3y3SGMRIgky5XzGZenU5D9Nc77XWYsVei02c33gbK4ANGA6MMRg0RWSnXb-1nJT27nvZkrSWlu3bsqEhhSqV6RqHHi7HHQ__"
              width="w-full lg:w-[475px]"
              height="h-[518px] lg:h-[740px]"
            />
          </div>
        </div>

        <div className="p-6">
          <Form />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AmbienteInesquecivel;
