import { useLanguage } from "../context/LanguageContext";
import Card from "./Card";

function Gastronomy() {
  const { language } = useLanguage();

  const texts = {
    title:
      language === "pt"
        ? "Gastronomia Portuguesa num Palácio Histórico"
        : "Portuguese Gastronomy in a Historic Palace",
    paragraph:
      language === "pt"
        ? "A gastronomia portuguesa ganha vida num cenário único: um palácio histórico que sobreviveu ao terramoto de 1755. Os sabores tradicionais são reinterpretados com um toque moderno, criando uma experiência que honra o passado enquanto abraça o presente. Localizado no coração do Chiado, o Sacramento oferece uma viagem pelos sabores autênticos de Portugal, com pratos que celebram a riqueza da culinária Portuguesa, desde o bacalhau à polvo, passando por cortes nobres de carne e sobremesas tradicionais. Cada prato é preparado com ingredientes frescos e técnicas contemporâneas, garantindo uma experiência gastronómica memorável."
        : "Portuguese gastronomy comes to life in a unique setting: a historic palace that survived the 1755 earthquake. Traditional flavors are reinterpreted with a modern touch, creating an experience that honors the past while embracing the present. Located in the heart of Chiado, Sacramento offers a journey through the authentic flavors of Portugal, with dishes that celebrate the richness of Portuguese cuisine, from codfish to octopus, including prime cuts of meat and traditional desserts. Each dish is prepared with fresh ingredients and contemporary techniques, ensuring a memorable gastronomic experience.",
  };

  return (
    <div
      key={language}
      className="p-6 flex flex-col items-center justify-center lg:px-40"
    >
      {/* Bloco título + parágrafo (desktop em linha, mobile em coluna) */}
      <div className="flex flex-col lg:flex-row w-full justify-between items-start gap-10 lg:py-40">
        {/* Título na esquerda */}
        <h1 className="font-caudex text-4xl lg:text-5xl font-thin lg:w-1/2">
          {texts.title}
        </h1>

        {/* Parágrafo na direita */}
        <p className="font-catamaran text-base mt-6 lg:mt-0 lg:w-1/2 text-justify">
          {texts.paragraph}
        </p>
      </div>

      {/* Cards abaixo de tudo */}
      <div className="flex flex-col gap-3 w-full items-center mt-10 lg:flex-row">
        <Card
          imageSrc="https://s3-alpha-sig.figma.com/img/14d5/6d6b/308e55334933a8f349de9530356b9a9c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OHpjRGJi3QM1uuTeI7fFK39ECDChmDMVsi2tJyudUyZjra3gXkL-opbqwAeHSXaTOBQbrDXfoSxAUCdzW1mQJkhy7XtMiv5Zx-3LW8GBXjPAdL3l4pSbE4KKXtWieuTqo6lFKweqDR1ltz-LRRpGRiTZbpyH-w4U7jA07MIH4TBBzWpBCJko0yihE5VsdJYRKb7~10AeY~7Bzr1uNNlXYUVXmoZDODauAkcm8iqLh-0sKMT5nFIUlbHUe6G73Zc3qYUnpvm17WRwfba2bL8Q1Llo2M7Amv7GVhSvQ3ngNvDudvYQyAv13ikf1X8sOPQrtpS4WUphz84Ig3OiuI3I7A__"
          height="h-48 lg:h-96"
          width="w-full"
        />
        <Card
          imageSrc="https://s3-alpha-sig.figma.com/img/e28a/da88/fecb2b88641ecfad2f31c2054fd85255?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d52THa5jcB82VUBTAO43KWWadNeF3Qx6MVxe7GYra2VL5Tq5ycvqZYXybj72g0dfbaKAy9np9~q4g9arlQUEdl0aSCkqctVO4z5b6KFYBUCFFbTocakGXRkFQOGu1vsOA3UdWI-Y3~dRRzR-hNMY~j-mKgxZHIUZm899JmsDYTeS5G8eEh16kX8oW4KFZcZ5a~-GgBU0m1xXoUcJhDWndOPsxSdl6RKDzuseAgt1VeAQdacE4GZDQxb8xpyacV8RwPfwfroR-gnLaqdGULumDDH0ewXjWSMJ7wfEKA~iVJ-yfObZ2YtRPz5c0ogtQSi1f1nbxZpa1Bmak5jeSQIjIQ__"
          height="h-48 lg:h-96"
          width="w-full"
        />
        <Card
          imageSrc="https://s3-alpha-sig.figma.com/img/7661/495b/a5d1e51a3a066132167ccf3e4eaca6ca?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MfCBA2UJXto7OY1a4qj3Pp4rYGatqEskmKZFMOI3WqN5Iv9YQBLg1PYQnc5E46WPsocG~H9Rwvj8M1FA1Li5-DurpeioYr47cgettPicjEjEjGtHHRqhryGSexQ6qUGR5Lux40rUhsE2~m7kiurtbq2XGR-iNAIH0xZlXQKXHJAn7tZa32yb~Jurf8f70LN~799L9HhX1iaG1AAZNqyYwKDcMkOfVxHa7IyJdXvHRGnodomvONXQ0a4EfDS1EFeujtSNn1lHYyS0wKDmm7i3GFzPZMe1Yun371eqpalJJOp6QzqQ3b9ennQR5kryOHJU-aMuAmy9vQBfvYmrPAr9IQ__"
          height="h-48 lg:h-96"
          width="w-full"
        />
      </div>
    </div>
  );
}

export default Gastronomy;
