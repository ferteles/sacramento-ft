import Card from "./Card";
import imgEsq1 from "../assets/images/pg1/GaleryFlex/imgEsq1.webp";
import imgEsq2 from "../assets/images/pg1/GaleryFlex/imgEsq2.webp";
import imgDir1 from "../assets/images/pg1/GaleryFlex/imgDir1.webp";
import imgDir2 from "../assets/images/pg1/GaleryFlex/imgDir2.webp";
import imgEsq3 from "../assets/images/pg1/GaleryFlex/imgEsq3.webp";
import imgBottom from "../assets/images/pg1/GaleryFlex/imgBaixo.webp";

function GaleryFlex() {
  return (
    <div className="flex flex-col justify gap-3 items-center ">
      <div className="flex flex-row gap-3 w-full justify-center">
        <div className="flex flex-col gap-3 ">
          <Card
            imageSrc={imgEsq1}
            width="w-40 lg:w-[600px]"
            height="h-40 lg:h-[644px]"
          />
          <Card
            imageSrc={imgEsq2}
            width="w-40 lg:w-[600px]"
            height="h-40 lg:h-[562px]"
          />
          <Card
            imageSrc={imgEsq3}
            width="w-40 lg:w-[600px]"
            height="h-45 lg:h-64"
          />
        </div>
        <div className="flex flex-col h-auto gap-3">
          <Card
            imageSrc={imgDir1}
            height="h-full lg:h-[832px]"
            width="w-44 lg:w-[660px]"
          />
          <Card
            imageSrc={imgDir2}
            height="h-62 lg:h-[659px]"
            width="w-44 lg:w-[660px] "
          />
        </div>
      </div>
      <Card
        imageSrc={imgBottom}
        width="w-full lg:w-[1000px]"
        height="h-28 lg:h-90"
      />
    </div>
  );
}

export default GaleryFlex;
