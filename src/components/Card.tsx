import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext"; // importe isso

type CardProps = {
  imageSrc: string;
  title?: string | { pt: string; en: string };
  width?: string;
  height?: string;
};

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return { ref, isVisible };
}

const Card = ({
  imageSrc,
  title,
  width = "w-full",
  height = "h-[440px]",
}: CardProps) => {
  const { ref, isVisible } = useInView();
  const { language } = useLanguage();

  const translatedTitle =
    typeof title === "string" ? title : title?.[language] ?? "";

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl lg:rounded-4xl overflow-hidden bg-cover transition-all duration-700 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      } ${width} ${height}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))
, url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {translatedTitle && (
        <div
          className="
            absolute 
            top-1 left-2 
            lg:top-auto lg:bottom-4 lg:left-4 lg:text-5xl
            py-2 
            text-white text-sm 
            rounded
            z-10
          "
        >
          <h2 className="uppercase font-caudex text-xl lg:text-6xl lg:max-w-full p-6 lg:p-10 break-words whitespace-normal">
            {translatedTitle.includes("\n")
              ? translatedTitle.split("\n").map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))
              : translatedTitle}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Card;
