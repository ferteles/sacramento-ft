import Card from "./Card";
import img1grid from "../assets/images/pg7/img1grid.webp";
import img2grid from "../assets/images/pg7/img2grid.webp";
import img3grid from "../assets/images/pg7/img3grid.webp";

function GaleryAmbienteInesq() {
  return (
    <div className="h-[1313px] flex flex-col gap-5 w-full p-0">
      <div className="flex lg:flex-row flex-col lg:items-end items-center justify-start w-full gap-10 ">
        <Card
          imageSrc={img1grid}
          width="lg:w-1/3 w-full"
          height="lg:h-[887px] h-[517px]"
        />
        <div className="flex gap-5 w-full lg:items-center justify-center lg:justify-start">
          <Card
            imageSrc={img2grid}
            width=" lg:w-2/4 w-52"
            height="lg:h-120 h-80"
          />
        </div>
      </div>

      <div className="flex lg:flex-col-reverse lg:items-end w-full items-center justify-center lg:-mt-124">
        <Card
          imageSrc={img3grid}
          width="lg:w-1/3 w-full"
          height="lg:h-[768px]"
        />
      </div>
    </div>
  );
}

export default GaleryAmbienteInesq;
