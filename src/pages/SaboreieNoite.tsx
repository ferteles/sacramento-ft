import Arrow from "../components/Arrow";
import Card from "../components/Card";
import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

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
      <Header
        titlePt="Saboreie a Noite em Lisboa"
        titleEn="Savor the Night in Lisbon"
        imgSrc="https://s3-alpha-sig.figma.com/img/5a24/2d9c/600285e335569f3bfccb3cc5dd749a8d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=otFmaVA0EBgmZesMbl2tEinHWP2Ljmtd2cVufIEI05JTICYWs25HgYEZ3ZDy9xb7Bwz3D9Asu6ioIuyxV2hBXozyiMjRb0fM-KwtBjEfvskmMIsQQ7Cc8c8Lpc5LaLFiZXGfGPKTTRBX-0cQQ7yObZnnkF2yz9CpUXVe7ivcsefXODjaVE3fAHcfrecdwx5BZ9rkh5we1w5nCdyCeQWyMwA8VN0LoqlNOdjxzCh5BtW31pwJfjnH9s8lvgWQP23xKo5dWJy6cr7S6he3rOQZLUMLvTojC-QSp9cilfA~DREaGHd~tRZCiYOZDuI~jhw8ewEa527FVkUymz~CfQsUMA__"
      />
      <div className="p-6">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:gap-30 gap-10 px-6 py-20">
          {/* Texto à esquerda no desktop */}
          <div className="flex flex-col justify-center lg:max-w-1/2">
            <h1 className="h1-title w-80 lg:max-w-1/2">{t.h1}</h1>
            <p className="mt-4 text-justify lg:max-w-1/2">{t.p1}</p>
          </div>

          {/* Imagem à direita no desktop */}
          <div className="w-full lg:w-1/2 flex justify-end">
            <Card
              imageSrc="https://s3-alpha-sig.figma.com/img/2b87/8156/c6923005c00eddbe0d9b34b4658226ee?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TTqXhBKVvz4S8hsyKsZx-BuTUS2joECKCuVxb8uzdgkrzXbrXH4OCwpe3qe-2~MR8sc4uHNV1FdUh7jVvKIr5dpvjk-8A00mIw1RRAAeLDUlQIvTvb-mQf9BWhIQuato~E2SbFFNE1ycx4miczB-OZhQUcKb-UxRmt2x9h3kZb-eHAiaMzZtJJIIck5V4fHOFWesOjJPXJ2BIw1HZGZaMMxJfhkdctOkD3fKt-LlKuk6afO~EFIIZ4vHClaJde2tjIL5BHBvRLlTs6PTmps2TQv4wMKlrqwNeMRm5hwq8lvNwgDxLV4HjQKxMTT2kIhQj-akFQjYSipEF5-MB8sLwA__"
              height="h-96 lg:h-[624px]"
              width="w-full lg:w-[509px] "
            />
          </div>
        </div>

        <div className="my-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:px-50 gap-10 px-6 ">
            {/* Texto à esquerda no desktop */}
            <div className="flex flex-col lg:max-w-1/2">
              <h1 className="h1-title w-80 ">{t.h2}</h1>
              <p className="mt-4">{t.p2}</p>
            </div>

            {/* Imagem à direita no desktop */}
            <div className="w-full lg:max-w-1/2 flex lg:justify-center">
              <Card
                imageSrc="https://s3-alpha-sig.figma.com/img/e4c5/c11e/92cea469dea56f5d6fbf106c839fd3dc?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fg-gd6cQT6OF1btmdubsS5VchgiT1mC~iJXcFYtBmF3gPqvi-B9zaAvcFnbxDSETsC4kfAsx6dOsLrbubF7vC6jKyByJZMEwyJu~pYCWTtQQwImgcpIjifWx2Fk2zTQG95XKAHHNUWt5ey5EYcL5g0dTQvpbZvKY0nADxrYcb5ljor5S5DpWnuDS9SvtT-V2km1pOEr9xabvWdQij~Y3JlABKccyf8l~D2ml7kGhrWeKtqVWzPmEyTZ7FiYbjURVDSbDI8etAqc~nEGmoD7RaeI48xadiPMwZRInvYIEhyPjH7zNlGfc8VIs-ILCRm5vQCDyZAtopGomwwtsabRvjg__"
                height="h-96 lg:h-[624px]"
                width="w-full lg:w-[640px]"
              />
            </div>
          </div>
        </div>
        <div className="lg:px-40 lg:my-40 ">
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/21df/216f/a76d88113ebfd42d3ac99a0cd6461725?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=egr6-zDU31mKU6zAiz5wAn3GqDBl5HxUS1w77bc4jXw8bnjPf7ixxcFJ49j9G621~0OMjQBwTk7KDl~pQ90v60li5XVuXDmte2Ch2bDcRVc6g1bkzwzZ-brX32oAO6FajY74dSf5cpny0K2UEOWCm87ydUAFqEr0VyXXxdyOnhI6PAWy1h6waSwd0r1uOy0LnXOGQYboqKaOr7a8hDfs72nX8-CElvqX-SlJjfN0gRCT3fQLWCiSsH~PztGwVQ3FnYPAJcD0XxASjqrkptYatBlj5w~fl~IXMneudJVh92Ko4kBMYj5BASqEqwCzShQnjsdG4U3niDw~yc65T5wgUA__"
            title={{
              pt: "Um Bar com Alma Histórica e Vibração Contemporânea",
              en: "A Bar with Historic Soul and Contemporary Vibes",
            }}
            width="w-80 lg:w-full"
            height="h-[517px]"
          />

          <div className="flex flex-col lg:flex-row items-start justify-center gap-20 lg:px-40 lg:w-full  py-10">
            {/* Primeiro parágrafo (à direita no desktop) */}
            <div className="flex flex-col lg:max-w-1/2">
              <p className=" text-justify w-80">{t.p3}</p>
            </div>

            {/* Segundo parágrafo + Arrow (à esquerda no desktop) */}
            <div className="flex flex-col items-start lg:max-w-1/2">
              <p className="text-justify w-80">{t.p4}</p>
              <Arrow title={t.cta} />
            </div>
          </div>
        </div>

        <Card
          imageSrc="https://s3-alpha-sig.figma.com/img/d2bd/74e6/1e2b6e53296a9e5f25cffe81d2024a9d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FctZN5QZ-NaY2nWnJt3Z-xP4fZgDrjfAAQXBs7AEKzDEPIBrAlqvRfP-mEGTI1EU0N7qT-ISVbYr9vlMcF2QYNqqNYWDJp4XGgCm5ni9GIyvkUxcwsXgSdLTAiW1RsWa-ZFLUlsXd~o5eyitq~Pp2nbarki0tyZSQDpbyGs-TMOElwVtW53qgObQmNkoGT21Cn2ZHTnW54DTPtsSM4P5qYc2az8RULL4~GFfizXQ-yjZUgfjo1ujoWuBh7FkEAK-HEWAJOAPaEy8YUV7sp6Ebu2TGbPb9Gj36hzee4Y0azkK4a0Hqz6tOHQvT06SJIKg0ihraJ4verGAdrdgrazM7g__"
          height="h-150"
          width="w-full"
        />
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        {/* Imagem vertical à esquerda no desktop */}
        <img
          src="https://s3-alpha-sig.figma.com/img/6177/bd74/b7ff8f03a1b413718ed6979d5987a948?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MsHQGyP7N6TL3jeWRboZXOgfjLa1xDg0hxkKuJzfIcV--I86wQSlPMZaaXgCjNt1g-i3qqMm0Yg80H4ao6Z59Kku8r70ruN74hMhf2eGfHLwGdJwpvf~C4O6IrfVImyjWx2dPOKe4Zce4HhCJxVzenaL2EiaXfVNu4lcloqWHj3HmRUvl1PmIr6QAcMFg~DyviafRPl0uW2pPSwswL~6G6MKRWgecvq-usQ3B2NayHehVRRcmDzNQ5l93w-Ps3kTVlBzJ8jR5tsg~aZxOy91LF8JtfIe7MOZfYhhYeZsQuzp6BOW~m6Ua1juzOzPifjzORGJXN5PWOh2xG~glcCtGQ__"
          alt="Imagem"
          className="w-full h-69 lg:h-auto lg:w-1/2 object-cover lg:pl-6 lg:rounded-4xl"
        />

        {/* Coluna de cards à direita no desktop */}
        <div className="flex flex-col items-start justify-center p-6 gap-5 lg:w-1/2">
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/b7f0/9d9a/530c4a2511dae27e7eb4e261cb511ab6?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qmxzwWN6Y~He6yGBej9p38PH4Spw7d0dQP8V6VD4XX53eMcc0eJ45~kVbaj5o7JOfYZJUFs-kEWRjmRekVApOn59ub~3b0wvVwHKw7uHtfNP0jSMKGXU5PY6UYWow~28~sZjzvUScmFTpOKj4wmuVWRa2biwbDLviZh5jjcyoH4j3siy5IRCv3iIuhRyN5hDn1ZYtqOfykxNtbqIULZpauD2aVkONjHb0Ds27XqyOweJylsfN75aw4JdUXjqVRKQvdTpIuEpvZ4hMclzKKaxDJyCIXsGRg6beNjRgPNRSNNWh~jbRq0lrLYW-OWzcficUOBOE1uUZD5eN1a7YeE2MA__"
            width="w-full"
            height="h-150"
          />
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/41e6/fe04/02d4278e783c5627e407cdee7b10d7b2?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BWZjHJ4shuArKloXzd2Sl8nx7BHySdzcq87ZZefihSL8x42iB8ofdbfuASaYNRcaiy8cnFpA3qtora3FoHpZt9VpbxFnlWe0nDmY5bjDEQWcR8XrRD7yudm6V1Djg96sXpoFiG1TIpNDzHTa8t0dwVjm0DMLbhN9hdJ0~JS2WVwZ~WD9jHpEN8DFeaCekPUgcbuGFMvrSgsAdslTyKQV1qOanKeLbBgEvJlHvT5qQ0SMi30LzJMwSMyCUlOVH5vPv3UP1~TnrOt2xWlqmoiH8EIhuYlK0GP2iyt6J9Z5ENrtclwNOFJQJs1vYg05972xbFywdIIvw5BHW3K0-CV8hA__"
            width="w-full"
            height="h-[499px]"
          />
        </div>
      </div>

      <div className="p-6">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default SaboreieNoite;
