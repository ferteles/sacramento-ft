import Arrow from "../components/Arrow";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Gastronomy from "../components/Gastronomy";
import Header from "../components/Header";
import TradicionalFlavors from "../components/TradicionalFlavors";
import { useLanguage } from "../context/LanguageContext";

function RestauranteMaisGiro() {
  const { language } = useLanguage();

  const t = {
    title:
      language === "pt"
        ? "O RESTAURANTE MAIS GIRO DE LISBOA"
        : "THE COOLEST RESTAURANT IN LISBON",
    paragraph1:
      language === "pt"
        ? "A nossa cozinha é uma celebração dos sabores tradicionais portugueses, reinventados com um toque moderno. Desde o clássico bacalhau à brás até ao polvo à lagareiro, cada prato é uma homenagem à rica herança culinária de Portugal. Utilizamos ingredientes locais e técnicas contemporâneas para criar pratos que surpreendem e encantam."
        : "Our kitchen is a celebration of traditional Portuguese flavors, reimagined with a modern twist. From the classic Bacalhau à Brás to Octopus à Lagareiro, each dish is a tribute to Portugal’s rich culinary heritage. We use local ingredients and contemporary techniques to create dishes that surprise and delight.",
    paragraph2:
      language === "pt"
        ? "A nossa equipa de chefs dedica-se a preservar a essência da cozinha portuguesa, enquanto introduz inovações que cativam até os paladares mais exigentes."
        : "Our team of chefs is dedicated to preserving the essence of Portuguese cuisine while introducing innovations that captivate even the most discerning palates.",
    arrow: language === "pt" ? "RESERVE JÁ SUA MESA" : "BOOK YOUR TABLE NOW",
    cardTitle:
      language === "pt"
        ? "VINHOS QUE CONTAM A HISTÓRIA DE PORTUGAL"
        : "WINES THAT TELL THE STORY OF PORTUGAL",
    paragraph3:
      language === "pt"
        ? "A nossa carta de vinhos foi cuidadosamente selecionada para complementar a experiência gastronómica no Sacramento. Com uma variedade de vinhos portugueses, desde os clássicos do Douro até aos surpreendentes vinhos do Alentejo, cada garrafa conta uma história única. Oferecemos também opções de harmonização, sugerindo o vinho perfeito para acompanhar cada prato. Descubra os sabores de Portugal através dos nossos vinhos, selecionados para enriquecer a sua refeição."
        : "Our wine list has been carefully curated to complement the gastronomic experience at Sacramento. Featuring a variety of Portuguese wines—from Douro classics to surprising Alentejo selections—each bottle tells a unique story. We also offer pairing suggestions, recommending the perfect wine for each dish. Discover the flavors of Portugal through our wines, selected to enrich your meal.",
  };

  return (
    <div className="max-w-screen">
      <Header
        titlePt="O RESTAURANTE MAIS GIRO DE LISBOA"
        titleEn="THE COOLEST RESTAURANT IN LISBON"
        imgSrc="https://s3-alpha-sig.figma.com/img/442b/613d/29935c34b5370533e71b15fe5a68fb0a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h59bJ98i8NwVqmIAZJ~gYOeSSCVs-ELK~yOQfb7HwXlG3bywhY97Bsh7w~DD6R68XD~dxyA6-MhKFeY2ZBU6mEl0af3wkWC03VAkpbkewZ-Vu6Os6pzwAgXFWX65dqFeKce6ZD2ri7-KGTUtzUueqQKyoG6yZpVtwf5oC8BZ5GERCkmH65M6QW452gz6PoYwrdo-asTXAD3AZDXhuT9HLL991kryfq8~g6wvSWLtCrMp9KgkU9uhxBC~0PXb4PvvNwZXRPCu2BDSyUDabUMkUibbWR9nmOJ87PXvY5v~L37H9qtSoTmkncq2oESTqkrfAN~fBgYft~CjmqXRzu9MTw__"
      />
      <Gastronomy />
      <TradicionalFlavors />
      <div className="p-6 gap-2 lg:px-20">
        <div className="flex flex-col items-center justify-evenly lg:justify-center lg:flex-row gap-20 lg:mb-0">
          <div className="lg:max-w-100">
            <p className="font-catamaran">{t.paragraph1}</p>
          </div>
          <div className="flex flex-col ">
            <p className="font-catamaran lg:max-w-100">{t.paragraph2}</p>
            <Arrow title={t.arrow} />
          </div>
        </div>
        <br />
        <br />
        <Card
          imageSrc="https://s3-alpha-sig.figma.com/img/268f/4437/98fe0987ee619665458e555b0f67c796?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jV4TAI6QTGDkkDLIvGzM5WwUi5YU6Zh3R2hxdLBiefCDJwD2mx10nnmkfqAPAt5YQj~ZHqf0SFRL947OrpY4kVExGrxYsuv~smhpXXgH1k1DGldsZRPWLuNm3RzKjhl~Ak1ZcCazT7lUDkz8ywtQgAiK1eLdBxVQKnJuHP9NqVmQSeFs-i7CILhY1yrJMJnmB9GWmzHnqnOUMoH3TTHIqJ65dcgIY4KvZtauIyzEOZf18Z~3UQ1HEDJuXOSO9mZYihFqYdWRmHpr3A5vKiPhiLsNxdQZfMxgY6Ut0pL3Ea7gLftTXdU983pFYb7~WreAsGDELV4cOW~sjU1IKUWhGg__"
          title={t.cardTitle}
          width="w-full"
          height="h-[500px]"
        />
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 lg:px-10 lg:my-20">
          <p className="my-10 lg:w-1/2">{t.paragraph3}</p>
          <div className="w-1/2">{/* Placeholder de imagem futura */}</div>
        </div>
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default RestauranteMaisGiro;
