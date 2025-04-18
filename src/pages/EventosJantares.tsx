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
      ? "Cocktails e História: O Bar do Sacramento em Lisboa"
      : "Cocktails & History: The Bar at Sacramento in Lisbon",

    p1: isPT
      ? "No bar do Sacramento, a história de Lisboa encontra a mixologia moderna. Desfrute de cocktails exclusivos num ambiente que combina o charme do passado com a animação do presente. Localizado no coração do Chiado, o nosso bar é um refúgio para quem procura uma experiência única, onde cada cocktails é uma homenagem à rica herança cultural de Lisboa. Com uma equipa de Barmen talentosos, criamos cocktails que contam histórias, utilizando ingredientes locais e técnicas inovadoras para surpreender os nossos clientes."
      : "At Sacramento's bar, Lisbon's history meets modern mixology. Enjoy signature cocktails in a setting that blends the charm of the past with the energy of the present. Located in the heart of Chiado, our bar is a haven for those seeking a unique experience, where each drink pays homage to Lisbon's rich cultural heritage. With a team of talented mixologists, we create cocktails that tell stories, using local ingredients and innovative techniques to delight our guests.",

    h2Cocktails: isPT
      ? "Cocktails que Contam a História de Lisboa"
      : "Cocktails that Tell the Story of Lisbon",

    p2Cocktails: isPT
      ? "A nossa carta de cocktails é uma viagem pela história de Lisboa, com bebidas que celebram os sabores e tradições da cidade. Desde clássicos reinventados até criações exclusivas, cada cocktail é uma experiência única. Utilizamos ingredientes locais, como ginja, vinho do Porto e ervas aromáticas, para criar cocktails que refletem a essência de Portugal. Experimente o nosso cocktail xxxxxxxxxxxxl signature, inspirado na energia frenética da cidade de Lisboa, ou deixe-se surpreender por uma das nossas criações sazonais."
      : "Our cocktail menu is a journey through Lisbon's history, with drinks that celebrate the city's flavors and traditions. From reinvented classics to exclusive creations, each cocktail is a unique experience. We use local ingredients, such as ginja, Port wine, and aromatic herbs, to create drinks that reflect the essence of Portugal. Try our xxxxxxxxx signature cocktail, inspired by Chiado's architecture, or be surprised by one of our seasonal creations.",

    h2Ambiente: isPT
      ? "Um Bar com Alma Histórica e Vibração Contemporânea"
      : "A Bar with Historic Soul and Contemporary Vibe",

    p3Ambiente: isPT
      ? "O ambiente do bar do Sacramento é uma fusão perfeita entre o charme histórico e a energia contemporânea. Com os seus arcos centenários e iluminação intimista, o espaço convida a momentos de descontração e convívio. À noite, o bar ganha vida com música ambiente e uma atmosfera vibrante, ideal para prolongar a noite em boa companhia. Seja para um cocktail após o jantar ou para uma noite animada, o nosso bar é o local perfeito para desfrutar a noite em Lisboa."
      : "The ambiance at Sacramento's bar is a perfect blend of historic charm and contemporary energy. With its centuries-old arches and intimate lighting, the space invites moments of relaxation and socializing. At night, the bar comes alive with ambient music and a vibrant atmosphere, perfect for extending the night in good company. Whether for a post-dinner drink or a lively evening, our bar is the perfect spot to enjoy Lisbon.",

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
        titlePt="COCKTAILS EXCLUSIVOS NO CORAÇÃO DO CHIADO"
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
