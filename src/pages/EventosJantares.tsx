import Arrow from "../components/Arrow";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import img1 from "../assets/images/pg4/img1.png";
import { useLanguage } from "../context/LanguageContext";

function EventosJantares() {
  const { language } = useLanguage();
  const isPT = language === "pt";

  const t = {
    h1: isPT
      ? "Eventos Memoráveis num Palácio Histórico no Chiado"
      : "Memorable Events in a Historic Palace in Chiado  ",

    p1: isPT
      ? "O Sacramento é o local ideal para eventos e jantares de grupo, onde a história de Lisboa se encontra com a gastronomia portuguesa. Com cinco salas interligadas, oferecemos um cenário único para celebrações inesquecíveis. Seja para uma reunião de negócios, uma comemoração especial ou uma confraternização entre amigos, o nosso espaço adapta-se às suas necessidades, proporcionando uma experiência personalizada e memorável. Localizado no coração do Chiado, o Sacramento combina a elegância de um palácio histórico com o conforto e e a sofisticação que o seu evento merece. Além disso, após o jantar, pode terminar a sua noite  no nosso clube com uma experiência completa com Dj e ambiente distinto "
      : "Sacramento is the perfect venue for group events and dinners, where Lisbon's history meets Portuguese gastronomy. With five interconnected rooms, we offer a unique setting for unforgettable celebrations. Whether for a business meeting, a special celebration, or a gathering of friends, our space adapts to your needs, providing a personalized and memorable experience. Located in the heart of Chiado, Sacramento combines the elegance of a historic palace with the comfort and sophistication your event deserves. Additionally, our bar and the transformation of the space into a club after 11 PM offer a complete experience to extend the night in style.",

    h2Cocktails: isPT
      ? "Menus que Honram a Tradição, com Toques Modernos"
      : "Menus that Honor Tradition, with Modern Twists",

    p2Cocktails: isPT
      ? "Para os seus eventos, oferecemos menus personalizados que honram a tradição da gastronomia portuguesa, com um toque moderno. Desde buffets completos até menus de degustação, cada prato é cuidadosamente preparado para surpreender os seus convidados. Trabalhamos com ingredientes frescos e locais, garantindo uma experiência gastronómica de excelência. Seja para um jantar de negócios ou um jantar de gala, as nossas ementas são pensadas para agradar a todos os paladares. Além disso, o nosso bar oferece uma seleção de cocktails e bebidas premium, perfeitos para acompanhar qualquer ocasião."
      : "For your events, we offer customized menus that honor the tradition of Portuguese gastronomy, with a modern twist. From full buffets to tasting menus, each dish is carefully prepared to delight your guests. We work with fresh, local ingredients, ensuring an excellent dining experience. Whether for a business lunch or a gala dinner, our menus are designed to please every palate. Additionally, our bar offers a selection of premium cocktails and drinks, perfect for any occasion.",
    h2Ambiente: isPT
      ? "Celebrações com História e Alma"
      : "Celebrations with History and Soul",

    p3Ambiente: isPT
      ? "O ambiente do Sacramento é perfeito para celebrações descontraídas e memoráveis. Com os seus arcos centenários e iluminação intimista, o espaço oferece uma atmosfera acolhedora e sofisticada. Às sextas e sábados, o ambiente ganha uma energia especial, com música ambiente e uma vibe festiva que transforma qualquer evento numa experiência única. A partir das 23h, o restaurante transforma-se em um clube, com DJ sets e uma atmosfera animada, ideal para prolongar a noite em grande estilo. Seja para uma reunião formal ou uma festa animada, o nosso espaço adapta-se ao seu estilo."
      : "Sacramento's ambiance is perfect for relaxed and memorable celebrations. With its centuries-old arches and intimate lighting, the space offers a cozy and sophisticated atmosphere. On Fridays and Saturdays, the ambiance takes on a special energy, with ambient music and a festive vibe that turns any event into a unique experience. After 11 PM, the restaurant transforms into a club, with DJ sets and a lively atmosphere, perfect for extending the night in style. Whether for a formal meeting or a lively party, our space adapts to your style.",

    cta: isPT ? "Visite o Nosso Bar" : "Visit Our Bar",
    cta2: isPT ? "Contacte-nos para o Bar" : "Contact Us About the Bar",
    cta3: isPT
      ? "Contacte-nos para o seu evento"
      : "Contact Us About Your Event",
    pFinal1: isPT
      ? "O ambiente do Sacramento é perfeito para celebrações descontraídas e memoráveis. Com os seus arcos centenários e iluminação intimista, o espaço oferece uma atmosfera acolhedora e sofisticada. Às sextas e sábados, o ambiente ganha uma energia especial, com música ambiente e uma vibe festiva que transforma qualquer evento numa experiência única."
      : "The atmosphere at Sacramento is perfect for relaxed and memorable celebrations. With its centuries-old arches and intimate lighting, the space offers a cozy and sophisticated vibe. On Fridays and Saturdays, the ambiance takes on a special energy, with ambient music and a festive mood that turns any event into a unique experience.",

    pFinal2: isPT
      ? "A partir das 23h, o restaurante transforma-se em um clube, com DJ sets e uma atmosfera animada, ideal para prolongar a noite em grande estilo. Seja para uma reunião formal ou uma festa animada, o nosso espaço adapta-se ao seu estilo."
      : "Starting at 11 PM, the restaurant transforms into a club, with DJ sets and a lively atmosphere, perfect for extending the night in style. Whether for a formal gathering or a vibrant party, our space adapts to your style.",
  };

  return (
    <div>
      <Header
        imgSrc="https://s3-alpha-sig.figma.com/img/8eab/7cf7/8ec96553881c29df97bf69da632e0ea8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gIzCvWeASBfXbw8vdmaaWUfFPGYuzPz7trqU9Ehclg2tD4h699yX2DqdSv1HdG-LPTJ585Xpr4-w6ITTS65~WUQAFN2zsV3p-S5dFBbK~jk2GR90Bq3Q8g4eiFHHwHZaM5epzFzJtbBT9OC4jxnUv-JcEC1AJ42Wkb054z7NyvP-JtjMeadmasNXnyO1GXeFze2iP~cwB4g0K-3eo8PgcWQo0BCC3nzyif-~ssRvO1Z~c4kqZvdT2csEuvz4dP6zcQBdbKQCcV3UIWn1u79v5QH5bVyZNc6GDScV54qiFhQAe72n1nKEiUEBJldNsofKoO5MeGDBDsyQUq8ScX8Gsg__"
        titlePt="Eventos e 
Jantares Especiais"
        titleEn="EXCLUSIVE COCKTAILS IN THE HEART OF CHIADO"
      />
      <div className="p-6">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center w-full justify-center lg:gap-40 gap-20 px-6 py-20">
          {/* Texto à esquerda no desktop */}
          <div className="flex flex-col justify-center lg:max-w-1/3">
            <h1 className="h1-title">{t.h1}</h1>
            <p className="mt-4 text-justify">{t.p1}</p>

            <div className="mt-6 flex flex-row items-start">
              <Arrow title={t.cta} />
            </div>
          </div>

          {/* Imagem à direita no desktop */}
          <div className="w-full lg:w-1/3 flex justify-end">
            <Card
              imageSrc={img1}
              width="w-full lg:w-[417px]"
              height="h-[504px] lg:h-[766px]"
            />
          </div>
        </div>

        {/* 🖼️ Grid de imagens abaixo do texto */}
        <div className="mt-10 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 ">
          {/* Coluna esquerda: 2 cards pequenos + 1 grande */}
          <div className="flex flex-col gap-4">
            {/* Linha com 2 cards pequenos lado a lado */}
            <div className="grid grid-cols-2 gap-4">
              <Card
                imageSrc="https://s3-alpha-sig.figma.com/img/cc5d/f5c5/44e1cc0cfd4457598633e8e7b0b5812b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iBxM9-ga9me8lKXYiMcNiSap3TB~Db5rt0yGdAfriw5DFN7j0L7CTnlAyycqVJTpIDxFWJpmvDrI5raMooIg7mx0JaCH-bc0T31yW1WRoDaRU43gu4gW~8OPoajmpEtF3E8vGYSVybp~1XOPr3AhqvzQIrdswUFoMIA5eN-1aCeYzwSroNzWwhRHiwyC1kOWvPkaUuJLt3wpaYG1zsNxxtQ9wg9sLwTHNKr5FAWcwKROPX0zKOHMJ1Z6AQXbSRQjSJqzX7B3n7yxbD7lEZGzUB3dd207ppeL0GRa2dpBSgG~ue9UY2zxguPootVZVP4s7Jzc7xuz24JUy6cppX00bQ__"
                height="h-52 lg:h-96"
              />
              <Card
                imageSrc="https://s3-alpha-sig.figma.com/img/9501/454b/499d03f6b044db87f58c0f5105a3d3c9?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KXeDBIhYEvnEtkrqJ4f9STl6oopzNQ-RF7HqAY5Lj5yQJ4CETkIEMSq-VTITj0av1ZLayMo1JfhWgQGOohoxjpN8U5qb5lv3~6c~7X2m9mqBHVUYODpuWdZPK0~Vq2yTgsYbbeiMaMAFUe4zERdzxVo4yMH34-ZZaitKIIQkgev9tN~RAYViRZDlDUGzOazi4Ukv7o4vmy9YW-WVKvQ8cI4ZBbQukosVFpz2ooGFJdX9-BrSIHciTDJstH0DLCtZFNO1QGgcNlHa5E0hrI6-EsyDnmam7vXSPf5bdMRoTUSt11yZjk~OaRpVyc4fpqaZMpwkt5UD5julzIM9EdGLGQ__"
                height="h-52 lg:h-96"
              />
            </div>

            {/* Card grande abaixo */}
            <Card
              imageSrc="https://s3-alpha-sig.figma.com/img/c194/6d99/f1927e7964b7f1ce7c991125c60e8d36?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C1MNSK4-qbZPdYD~2iPEprifx~dNzvjMkRojvoJYIANm5fSxQjvuA~YwcXibzEqOhy57oAOPP7yJQy86-wWdIgBF7SdohYiYyt8d~1nAHKq~maNxZzzgFvM72NCMJxTyUkD7vVnd7oZu-2AxiQQg-XowjLETHFY1Y0s7iNrz~ClseXLusCz64v8iLtw9nxjvgtkrx35Uov36OD1CBR8KlpEGI3I7d0-c9JGo4XInftnjJ2wX6ckwJ3uLbYsCp-pFH~LLolG3E3pCqKKX2kcbv9J8XGudTe0whsRKqDcmxk-A5zn-TDB9G5bsFBZItUW-~5KdwrQMA1j0hw5sZ-CXgw__"
              height="h-80 lg:h-[525px]"
            />
          </div>

          {/* Coluna direita: imagem grande única */}
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/5b01/f42f/6f86eebfdd09e8241ce8db3b2d5243de?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oVDrwutqs~nfuY27kd1QktZCT1ZemLCXdGBSYVJz6bFe56OzyxrnIZw8BTy1HxfDJkDbGXRvhwwRdFNvmuv8xPIdSRjRRosbDfD3m9cYaXFOz5JzktK-4xBxITmoJCL2-WN69rNjIVAJLl5qgOazbTv3EXMzZp2w69XADqFPyW7~uGuD1pXv0dR9MaOnvOKyaQkqvFftBqbmjchXdP4vbKW~vCWbyIvA3ASLowBuZ8tRaTOmd4scdcg2cf0ykBFgqkf5GfKqTD7H1j20aOJIVR6CGd~uQ4LcXHxic2DWKj5elS6W6GPL8kOsMkFWRvDs~eV1X~5TO6xX2QlNiCPlEQ__"
            height="h-[468px] lg:h-[928px]"
          />
        </div>

        {/* Card separado abaixo (mantido no fluxo mobile, opcional) */}

        <div className="flex flex-col items-center justify-center">
          <h1 className="w-full h1-title text-center">{t.h2Cocktails}</h1>
          <p className="lg:max-w-1/2">{t.p2Cocktails}</p>
          <Arrow title={t.cta3} />
          {/*Card que nao tem na versao mobile */}
        </div>
        <div className="lg:px-40 p-6 lg:my-40">
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/cc5d/f5c5/44e1cc0cfd4457598633e8e7b0b5812b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iBxM9-ga9me8lKXYiMcNiSap3TB~Db5rt0yGdAfriw5DFN7j0L7CTnlAyycqVJTpIDxFWJpmvDrI5raMooIg7mx0JaCH-bc0T31yW1WRoDaRU43gu4gW~8OPoajmpEtF3E8vGYSVybp~1XOPr3AhqvzQIrdswUFoMIA5eN-1aCeYzwSroNzWwhRHiwyC1kOWvPkaUuJLt3wpaYG1zsNxxtQ9wg9sLwTHNKr5FAWcwKROPX0zKOHMJ1Z6AQXbSRQjSJqzX7B3n7yxbD7lEZGzUB3dd207ppeL0GRa2dpBSgG~ue9UY2zxguPootVZVP4s7Jzc7xuz24JUy6cppX00bQ__"
            height="h-[469px]"
            width="w-full"
            title="Celebrações com 
    História e Alma"
          />

          <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:px-40 lg:py-20 py-10">
            {/* Primeiro parágrafo à direita no desktop */}
            <p className="lg:max-w-1/3 text-justify">{t.pFinal1}</p>

            {/* Segundo parágrafo + botão à esquerda */}
            <div className="flex flex-col items-start lg:max-w-1/2 lg:justify-between">
              <p className="text-justify">{t.pFinal2}</p>
              <Arrow title={t.cta2} />
            </div>
          </div>
        </div>

        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default EventosJantares;
