import arrow from "../assets/Arrow.svg";

type ArrowProps = {
  title: React.ReactNode;
  fontSize?: string; // Ex: "text-base", "text-xl"
};

function Arrow({ title, fontSize = "text-lg" }: ArrowProps) {
  return (
    <div className="my-5">
      <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-2 lg:gap-4">
        <p
          className={`font-caudex uppercase ${fontSize} text-center lg:text-left`}
        >
          {title}
        </p>
        <a href="#form" className="cursor-pointer group mt-2 lg:mt-0">
          <img
            src={arrow}
            alt="Seta"
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
          />
        </a>
      </div>
    </div>
  );
}

export default Arrow;
