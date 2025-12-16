import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ReveillonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const fundoModal = "/assets/reveillon/fundo-modal.webp";

export default function ReveillonModal({ isOpen, onClose }: ReveillonModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[1103px] h-auto max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-8 z-10 text-[#b2ab95] hover:text-white transition-colors text-4xl font-caudex uppercase"
              aria-label="Fechar modal"
            >
              x
            </button>

            {/* Modal content */}
            <div className="relative w-full h-[480px] lg:h-[721px]">
              {/* Background image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={fundoModal}
                  alt="Reveillon Background"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center 30%'
                  }}
                />
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%)'
                }}
              />

              {/* Bottom CTAs */}
              <div className="absolute bottom-0 left-0 right-0 px-4 lg:px-8 pb-4 lg:pb-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 lg:gap-8">
                  {/* Left CTA */}
                  <a
                    href="https://reserve.dish.co/258346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-0.5 lg:gap-2 hover:opacity-80 transition-opacity"
                  >
                    <p className="font-caudex text-[#b1ab95] uppercase text-sm sm:text-xl lg:text-2xl">
                      faça sua reserva
                    </p>
                    <p className="font-caudex text-[#b1ab95] uppercase text-xs lg:text-base">
                      book your place
                    </p>
                    <div className="w-full max-w-[150px] lg:max-w-[260px] mt-0.5 lg:mt-0">
                      <svg width="100%" height="6" viewBox="0 0 261 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-300 group-hover:translate-x-2">
                        <path d="M260.354 4.35355C260.549 4.15829 260.549 3.84171 260.354 3.64645L257.172 0.464466C256.976 0.269204 256.66 0.269204 256.464 0.464466C256.269 0.659728 256.269 0.976311 256.464 1.17157L259.293 4L256.464 6.82843C256.269 7.02369 256.269 7.34027 256.464 7.53553C256.66 7.7308 256.976 7.7308 257.172 7.53553L260.354 4.35355ZM0 4.5H260V3.5H0V4.5Z" fill="#B2AB95"/>
                      </svg>
                    </div>
                  </a>

                  {/* Right CTA */}
                  <a
                    href="/reveillon"
                    className="group flex flex-col gap-0.5 lg:gap-2 hover:opacity-80 transition-opacity items-start sm:items-end"
                  >
                    <p className="font-caudex text-[#b1ab95] uppercase text-sm sm:text-xl lg:text-2xl">
                      mais informações
                    </p>
                    <p className="font-caudex text-[#b1ab95] uppercase text-xs lg:text-base">
                      get to know more
                    </p>
                    <div className="w-full max-w-[150px] lg:max-w-[288px] mt-0.5 lg:mt-0">
                      <svg width="100%" height="6" viewBox="0 0 288 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-300 group-hover:translate-x-2">
                        <path d="M287.354 4.35355C287.549 4.15829 287.549 3.84171 287.354 3.64645L284.172 0.464466C283.976 0.269204 283.66 0.269204 283.464 0.464466C283.269 0.659728 283.269 0.976311 283.464 1.17157L286.293 4L283.464 6.82843C283.269 7.02369 283.269 7.34027 283.464 7.53553C283.66 7.7308 283.976 7.7308 284.172 7.53553L287.354 4.35355ZM0 4.5H287V3.5H0V4.5Z" fill="#B2AB95"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
