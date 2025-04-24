import Card from "../components/Card";
import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Arrow from "../components/Arrow";
import { useLanguage } from "../context/LanguageContext";

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
    <div className="">
      <Header
        titlePt="COCKTAILS EXCLUSIVOS NO CORAÇÃO DO CHIADO"
        titleEn="EXCLUSIVE COCKTAILS IN THE HEART OF CHIADO"
        imgSrc="https://s3-alpha-sig.figma.com/img/c48f/2622/ffe386edd5d0bba4833406f81886e5bb?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eqENCwSlnkj1CSw62VDrfICHcJ-PAuOi5SqIPwK69QYD6sFhPnznCA~DB7mN8gH8i3rlDVqzVS-mq8JNcDzBQwp1t8-T1nFj-kLUKkOwrOii0pme7~A6b3B~x5-CPUDTc-fX-9RW6Ne6~N8Y3nkyNnQpSN79DheJkKd5SI1XTHKnXTFHl5YL5AuFrivNIrCWYY4EgKLr0u7UqtfIpUE~1V5Hy5eD5AfH4ddc-iiOax8keIJGZ~8BUtx~~D1fXQ3PJmTL7-Rjw4vPw1sx-ySHVb56VCaA4pAfCZd8-POJ6Lu7U7pQXRVdKNe7LSJQNL7SQ103Oyf1NoG00VreFD0oNA__"
      />
      <div className=" flex flex-col  ">
        <div className=" flex flex-col gap-10 lg:gap-40 p-6 lg:flex-row items-start lg:items-center justify-center w-full lg:my-30 lg:px-30">
          <div className="lg:w-1/3 w-full flex flex-row-reverse">
            <Card
              imageSrc="https://s3-alpha-sig.figma.com/img/c14d/4e9c/a8be3100693b99ba49e6da659e7009df?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QtY5hF3DBCfDfR6jORJDYMVfgQkmzeY81yDjswqw0NghRWgn-cqHGk~hz4kTyzKceKeweagIYHyclo9owb09fPAERekFCCSw777Yh1VbGWJfHwCMwilocgZDrUWA3ORhjQsmuNJvr5iluzrQVFNbG5wgEUvw5DdblL1t0tu-K5M1VXJCxrL5D5ccCsJiDncozg6KgD5hNN5CPRs3VgvycZzv4x06R7i~SstcWqBt7v7InuXNP1j1uMrAJ93dIe9gD5kZRuSPi4VDKbcRfFSowl278AMCrExt~o5D1WcrPni5N~5qiXWIPT0bPxkA~w1RL2HwzaUJYtYu88lhm1mssg__"
              height="h-96 lg:h-[561px]"
              width="w-full lg:w-130"
            />
          </div>
          <div className="lg:w-1/3 w-full flex flex-col lg:flex-col gap-5 items-start justify-start h-full">
            <h1 className=" font-caudex text-3xl uppercase  ">{t.h1}</h1>
            <p className="font-catamaran">{t.p1}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse w-full p-6 lg:p-0 gap-10 ">
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/b6ff/0d53/6e607cfc45bf7f8aea94c3f5e6d82ec6?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=alVmJ2qeiOoaGI2DCJkAqiTQWZFVCv8pvUdw0mOH2bgWDXap1NPhbCuykkZvvh0RVWLm9FpuSd2WhXrQmQHBOH3Yh0ibUpbvuczovQxBHfU9y3VsoCqhJQxuLHR2SpxWL-JVbTkGVk78jxNlzmMvcenRIqf2imeN06vy561beV5HKqZiZVtdfLt1xKPITIH5iznZAqH7m22M0CpsBu9HcGKIONxdvwnauCBb5knz9UCQKL8zx-YQt1KIqaKSnQKw3ggDjbQlXUlK3Uk0mwO2EEb7nDEOHVdX0YtD5Uu5Ss4HG5yQnbvMF-o~QuNOLDrmPpK3kQKbAvkP2lzUxnOCUQ__"
            width="w-full"
            height="h-80 lg:h-[571px]"
          />
          <div className="lg:max-w-1/2  flex flex-col items-start justify-center gap-3 lg:p-30">
            <h1 className="font-caudex text-3xl uppercase ">{t.h2}</h1>
            <p>{t.p2}</p>
            <Arrow title={t.cta1} />
          </div>
        </div>

        <div className="lg:px-40 p-6 lg:my-40 ">
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/d2bd/74e6/1e2b6e53296a9e5f25cffe81d2024a9d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FctZN5QZ-NaY2nWnJt3Z-xP4fZgDrjfAAQXBs7AEKzDEPIBrAlqvRfP-mEGTI1EU0N7qT-ISVbYr9vlMcF2QYNqqNYWDJp4XGgCm5ni9GIyvkUxcwsXgSdLTAiW1RsWa-ZFLUlsXd~o5eyitq~Pp2nbarki0tyZSQDpbyGs-TMOElwVtW53qgObQmNkoGT21Cn2ZHTnW54DTPtsSM4P5qYc2az8RULL4~GFfizXQ-yjZUgfjo1ujoWuBh7FkEAK-HEWAJOAPaEy8YUV7sp6Ebu2TGbPb9Gj36hzee4Y0azkK4a0Hqz6tOHQvT06SJIKg0ihraJ4verGAdrdgrazM7g__"
            width="w-full"
            height="h-96"
            title={t.h3}
          />

          <div className="">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:px-40 lg:py-20 py-10  ">
              {/* Primeiro parágrafo (à direita no desktop) */}
              <p className="lg:max-w-1/2 ">{t.p3a}</p>

              {/* Segundo parágrafo + Arrow (à esquerda no desktop) */}
              <div className="flex flex-col items-start lg:max-w-1/2 lg:justify-between">
                <p>{t.p3b}</p>
                <Arrow title={t.cta2} />
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CocktailsExclusivos;
