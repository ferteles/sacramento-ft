import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useSecureForm, validateInput } from "../utils/security";
import Card from "./Card";
import imgForm from "../assets/imgForm.webp";

function Form() {
  const { language } = useLanguage();
  const { validateForm, isBlocked } = useSecureForm();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  interface FormData {
    name: string;
    email: string;
    message: string;
    honeypot: string;
  }

  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
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
    success:
      language === "pt"
        ? "Mensagem enviada com sucesso! Entraremos em contacto em breve."
        : "Message sent successfully! We'll contact you soon.",
    blocked:
      language === "pt"
        ? "Muitas tentativas. Tente novamente mais tarde."
        : "Too many attempts. Please try again later.",
    error:
      language === "pt"
        ? "Erro ao enviar. Verifique os dados e tente novamente."
        : "Error sending. Please check your data and try again.",
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Sanitiza input em tempo real
    const sanitizedValue = validateInput.sanitize(value);

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    // Limpa erros quando usuário digita
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isBlocked) {
      setErrors([texts.blocked]);
      return;
    }

    setIsSubmitting(true);
    setErrors([]);

    try {
      // Validação de segurança
      const validation = validateForm(formData);

      if (!validation.isValid) {
        setErrors(validation.errors);
        setIsSubmitting(false);
        return;
      }

      // Prepara dados limpos para envio
      const cleanData = {
        name: formData.name.trim(),
        email: formData.email.toLowerCase().trim(),
        message: formData.message.trim(),
        timestamp: new Date().toISOString(),
        source: "sacramento_website",
        language: language,
      };

      // Envia para Formspark
      const response = await fetch("https://submit-form.com/B6eirfZJ0", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(cleanData),
      });

      if (!response.ok) {
        throw new Error(`Erro ${response.status}`);
      }

      // Sucesso
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        honeypot: "",
      });

      // GTM tracking se disponível
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "form_submission",
          form_type: "contact",
          success: true,
          restaurant_name: "Sacramento Chiado",
        });
      }
    } catch (error) {
      console.error("Erro formulário:", error);
      setErrors([texts.error]);

      // GTM error tracking
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "form_error",
          form_type: "contact",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Tela de sucesso
  if (submitSuccess) {
    return (
      <div className="py-10 w-full flex flex-col items-center justify-center">
        <div className="bg-green-50 border-2 border-green-200 text-green-800 px-8 py-6 rounded-lg max-w-md text-center">
          <h3 className="font-bold text-xl mb-3">✅ Sucesso!</h3>
          <p className="mb-4">{texts.success}</p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            {language === "pt" ? "Nova Mensagem" : "New Message"}
          </button>
        </div>
      </div>
    );
  }

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

      {/* Formulário */}
      <div className="w-full lg:w-1/2 max-w-xl" id="form">
        <h3
          className="text-3xl lg:text-5xl font-caudex max-w-[30rem] uppercase"
          style={{ fontWeight: 50 }}
        >
          {texts.title}
        </h3>

        <p className="font-catamaran text-base mt-3 max-w-[70rem]">
          {texts.paragraph}
        </p>

        {/* Exibe erros */}
        {errors.length > 0 && (
          <div className="mt-4 bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded">
            {errors.map((error, index) => (
              <p key={index} className="text-sm">
                {error}
              </p>
            ))}
          </div>
        )}

        {/* Aviso se bloqueado */}
        {isBlocked && (
          <div className="mt-4 bg-yellow-50 border-2 border-yellow-200 text-yellow-700 px-4 py-3 rounded">
            <p className="text-sm">{texts.blocked}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-10">
          {/* Campo honeypot (oculto) */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleInputChange}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            placeholder={texts.name}
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 bg-[#6C554B] text-base text-white border-none placeholder-gray-300"
            required
            maxLength={50}
            disabled={isSubmitting || isBlocked}
          />

          <input
            type="email"
            name="email"
            placeholder={texts.email}
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 bg-[#6C554B] text-base text-white border-none placeholder-gray-300"
            required
            maxLength={254}
            disabled={isSubmitting || isBlocked}
          />

          <textarea
            name="message"
            placeholder={texts.description}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 bg-[#6C554B] text-base text-white border-none h-32 resize-none placeholder-gray-300"
            required
            maxLength={1000}
            disabled={isSubmitting || isBlocked}
          />

          <div className="flex flex-row-reverse">
            <button
              type="submit"
              disabled={
                isSubmitting ||
                isBlocked ||
                !formData.name ||
                !formData.email ||
                !formData.message
              }
              className="px-5 py-2 border border-black text-black font-caudex text-base uppercase hover:bg-white hover:text-[#6C554B] transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting
                ? language === "pt"
                  ? "Enviando..."
                  : "Sending..."
                : texts.submit}
            </button>
          </div>
        </form>

        {/* Aviso de privacidade */}
        <p className="text-xs text-gray-600 mt-4">
          {language === "pt"
            ? "Ao enviar este formulário, concorda com a nossa política de privacidade."
            : "By submitting this form, you agree to our privacy policy."}
        </p>
      </div>
    </div>
  );
}

export default Form;
