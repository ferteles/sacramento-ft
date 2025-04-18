import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const itemVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      type: "spring",
      stiffness: 100,
    },
  }),
};

type MobileNavBarProps = {
  onClose: () => void;
};

const MobileNavBar = ({ onClose }: MobileNavBarProps) => {
  const links = [
    { to: "/restaurante", label: "Restaurante" },
    { to: "/cocktails", label: "Bar" },
    { to: "/eventos", label: "Grupos" },
    { to: "/saboreie-noite", label: "Jantar Tarde" },
    { to: "/melhor-alternativa", label: "Esplanada" },
    { to: "/ambiente", label: "Club" },
  ];

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col items-center justify-center gap-8 z-[999] backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.7, rotate: 10 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.button
        onClick={onClose}
        className="absolute top-5 right-5 text-xl bg-white text-black rounded-full w-10 h-10 shadow-lg hover:scale-110 transition-transform"
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        X
      </motion.button>

      {links.map((link, i) => (
        <motion.div
          key={link.to}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <Link
            to={link.to}
            onClick={onClose}
            className="text-3xl hover:tracking-wider transition-all duration-300"
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MobileNavBar;
