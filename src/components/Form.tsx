import { useLanguage } from "../context/LanguageContext";
import Card from "./Card";
import imgForm from "../assets/imgForm.jpg";

function Form() {
  const { language } = useLanguage();

  const texts = {
    title:
      language === "pt"
        ? "Reserve a sua mesa para uma experiência única no coração de Lisboa"
        : "Book your table for a unique experience in the heart of Lisbon",
    paragraph:
      language === "pt"
        ? "Contacte-nos para mais informações sobre as opções de eventos."
        : "Contact us for more information about event options.",
    name: language === "pt" ? "Nome" : "Name",
    email: language === "pt" ? "Email" : "Email",
    description: language === "pt" ? "Breve Descrição" : "Brief Description",
    submit: language === "pt" ? "Enviar" : "Send",
  };

  return (
    <div className="py-10 w-full flex flex-col lg:flex-row items-top justify-center gap-10">
      {/* Imagem */}
      <div className="w-full lg:w-1/2 flex">
        <Card
          imageSrc={imgForm}
          width="w-56 lg:w-2/3"
          height="h-80 lg:h-full"
        />
      </div>

      {/* Texto + Formulário */}
      <div className="w-full lg:w-1/2 max-w-xl" id="form">
        <h1 className="h1-title leading-10 text-xl md:text-2xl lg:text-3xl font-caudex max-w-[30rem]">
          {texts.title}
        </h1>
        <p className="font-catamaran text-base mt-3 max-w-[30rem]">
          {texts.paragraph}
        </p>
        <form
          action="https://submit-form.com/B6eirfZJ0"
          className="flex flex-col gap-3 mt-10"
          method="POST"
        >
          <input
            type="text"
            placeholder={texts.name}
            className="w-full p-2 bg-[#6C554B] text-base text-white border-none"
            required
            name="name"
            id="name"
          />
          <input
            type="text"
            placeholder={texts.email}
            className="w-full p-2 bg-[#6C554B] text-base text-white border-none"
            required
            name="email"
            id="email"
          />
          <textarea
            placeholder={texts.description}
            className="w-full p-2 bg-[#6C554B] text-base text-white border-none h-32 resize-none"
            required
            id="message"
            name="message"
          />
          <div className="flex flex-row-reverse">
            <button
              type="submit"
              className="px-5 py-2 border border-black text-black font-caudex text-base uppercase hover:bg-white hover:text-[#6C554B] transition-colors duration-300 cursor-pointer"
            >
              {texts.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
