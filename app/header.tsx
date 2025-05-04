import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="bg-primary text-white p-4"
      initial={{ opacity: 0, y: -50 }} // Animación inicial
      animate={{ opacity: 1, y: 0 }}  // Estado final
      transition={{ duration: 0.5 }}  // Transición suave
    >
      <h1 className="text-4xl font-bold">Mi Portafolio</h1>
    </motion.header>
  );
}
