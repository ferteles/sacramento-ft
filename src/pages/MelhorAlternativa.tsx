import { View } from "lucide-react";
import Arrow from "../components/Arrow";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import ViewOfChiado from "../components/ViewOfChiado";
import { useLanguage } from "../context/LanguageContext";

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
  };

  return (
    <div>
      <Header
        titlePt="MELHOR ALTERNATIVA AOS ROOFTOPS"
        titleEn="THE BEST ALTERNATIVE TO ROOFTOPS"
        imgSrc="https://s3-alpha-sig.figma.com/img/4b81/a6b8/6188d2513f5d6a1b0cc7a02f095c48a9?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gXTeDBqZDvNN9eGpbY7fOiIIAn8CZXQxtSU4popCaLsXSekyFWzXieYPaDC5im3Sdfq75oxVbowUQRSRbPFvs3KQQPEltwIK60Ul~zWX5Lk7tedlvhGN9DSoOWaoK3cBgkanbNDo5RYOCyETE4NE-28ZUsf0Oznd-5aehVGjQkMyWOKS4J1JdkBUwBWWVyOaFbfS5zoSuk0Q4VtfSZw1qxYsprMFCyvvI4V~WFjhJnY~-FvYU6fXC-UVhMxPJOqa4C3G~ORXO2tdX0tQRfJ~73IIu3w2PFHSMZU1WyI7Vp6esxnK0xGCz4G0ibOJMj418pTJEGgHaHLmOtL19TOTNw__"
      />
      <div className="flex flex-col gap-5 ">
        <div className="p-6 lg:px-30 flex flex-col gap-10">
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/ed58/24ca/c2e1adbc97f9fb175d93e89b6925ca64?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IPiicfUnSpbojg9IDBG-RopA0XyIi2NLkKNEyMSwywh~9RxRw4vLbyzdnrot8yHgRUaCN1p4z0Jc76eu6ik~HQ1tRFK6YRBTOfwqE~KYUcIMwwLSiZbf9VvBq9MbfWUeM5AJX8EHXLqCCmR-8YN-Alye-xy819whV4ujXctPSJQSOch7Gbk1GLlmTlV5y1z7YppT7GeSY5UcgbJrqB6uz715BHexvQSCK1P3Gax6RGl5nQ8XON~xFe6x3~yUlhWN70BVK3LWXtV5fqyInCCZgv70GWlrubn5~zbbCoOrQGqCiVBK-w4VqAltrvJsBu3ov6p0CJ1YcjdBQuPeZzhyag__"
            title="Um Bar com 
                Alma Histórica 
                e Vibração 
                Contemporânea "
            width="W-full"
            height="h-[469px]"
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-40 px-6 py-20">
          {/* Texto à esquerda no desktop */}
          <div className="flex flex-col justify-end lg:w-1/3">
            <p className="text-justify">{t.pEsplanada1}</p>
          </div>

          {/* Imagem à direita no desktop */}
          <div className="w-full lg:w-1/3 flex justify-start">
            <Card
              imageSrc="https://s3-alpha-sig.figma.com/img/40ce/d985/6ae446cb50612a0eea2e3a70297595b3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=deIoy6wBG8CE6oOJwsUMD4MBmbuBNuqNYBjvrPEkZbzeUOi8bL052E3SVXDSjCclRgxtQeX8UIJNdXpnxoQyPpPm2ZXIuzj8jTuWoIqTduzwR7RaDgF0Y6qwHhhc~mNPmBFZB~Vs9tDedI1dtOe6Y5-DnDflnXHYSEd81rovQxAFR~bREU3xZPreHDMbHlTuLZ2Tcs7tqsSStMmAJ~K1IL1W2-vXz~bStUPwj~UKfT9mPQnSsa~l3yts3MiCGO~EUNYCCzG4lce4OjktgkIVJGo~Yw-ER2AQES8V9RPedQ2apv49ZI~L1eQkamYKzrCLMjpIaHbNiVGSkYFa9j544g__"
              width="w-64 lg:w-96"
              height="h-80 h-[600px]"
            />
          </div>
        </div>

        <div className=" sm:p-6 lg:p-0 w-full">
          {/* Imagem / componente visual no topo */}
          <ViewOfChiado />

          {/* Texto e Arrow responsivo abaixo */}
          <div className="flex flex-col lg:flex-row-reverse items-start justify-center gap-10 lg:py-10 px-6 lg:px-50 py-10">
            {/* Primeiro parágrafo (à direita no desktop) */}
            <p className="lg:max-w-1/2">{t.pEsplanada2}</p>

            {/* Segundo parágrafo + Arrow (à esquerda no desktop) */}
            <div className="flex flex-col items-start lg:max-w-1/2">
              <p className="">{t.pEsplanada3}</p>
              <Arrow title={t.cta} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-center lg:justify-center">
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/c628/c81c/0a2f487132fbb6f7799a78f7e888f17e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OaHKcoRNZmvZx6miYTBaRYhysCe3FTEWXj8XGwrKieXVFCHK3JupcnOqC4r9Q0UUIwXZbYUWcJD~qgLyGFta8agszesxNjXydhPeq5PyX1dskiceqI~XmgbzRJB~GLkd5Lh6E3Ph6FPB~26benc0A0d09-8huYpf-jJrWaJsAM~hL5j8genR3ZfwCARBKsFn~fFhkfk15jMkM5tfHRarCkQsGX2n01pSh-PNL5CvMULr8jXzxD7pMBLonsR7Id4aREW3GRfLOprdt5f3g6wKF3shfSFgSQHDkWfk2fE8Zwk5-0aXjdmA4ZopmzQY9941rtptA41EveNpvT3fMR9zpg__"
            height="h-80"
            width="w-80"
          />
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/6155/57c4/168061b0745abf460d10965b7b5b1619?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AQtl~6ey1LE6xopJwa7-YstAKwMeGRHElcpzYnuWslzFlgoA5lgb543ZwHScblQ7~vYmU9MU6X7pP9aK4Hwb~a9lNwBBN~Rvn-ojfgKC3~OEX6CydJtQ~4OV5k7fCAHQGy~6Wcf-23L6jTZpFNQ1qJ0yImVUREmOtVvBW6NS65BBbtSMLDBqOI2Z2-tqrUd~uFfoJ~6WSEgleha7u54Rclgbou-dp~cCkY8JmAizBPxC2uk45k1wXWO79L5eQBmd0H7ymxxEuQAAc9XTlARcpM8iJ0JqtYLHW4RCmsAUp3DnXK7wWSz1aIiGljvNEDsTEPOQtJICH4gB7nU6uh6Btg__"
            height="h-80"
            width="w-80"
          />
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/b6ff/0d53/6e607cfc45bf7f8aea94c3f5e6d82ec6?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=alVmJ2qeiOoaGI2DCJkAqiTQWZFVCv8pvUdw0mOH2bgWDXap1NPhbCuykkZvvh0RVWLm9FpuSd2WhXrQmQHBOH3Yh0ibUpbvuczovQxBHfU9y3VsoCqhJQxuLHR2SpxWL-JVbTkGVk78jxNlzmMvcenRIqf2imeN06vy561beV5HKqZiZVtdfLt1xKPITIH5iznZAqH7m22M0CpsBu9HcGKIONxdvwnauCBb5knz9UCQKL8zx-YQt1KIqaKSnQKw3ggDjbQlXUlK3Uk0mwO2EEb7nDEOHVdX0YtD5Uu5Ss4HG5yQnbvMF-o~QuNOLDrmPpK3kQKbAvkP2lzUxnOCUQ__"
            height="h-80"
            width="w-80"
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 px-6 py-20">
          {/* Texto à esquerda no desktop */}
          <div className="flex flex-col justify-center lg:max-w-1/3">
            <h1 className="h1-title">{t.pGastronomiaTitulo}</h1>
          </div>

          {/* Imagem à direita no desktop */}
          <div className="w-full lg:w-1/3 flex justify-end">
            <p className="mt-4 text-justify">{t.pGastronomiaTexto}</p>
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
