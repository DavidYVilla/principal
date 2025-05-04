"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import i18n from "./i18n";
import Layout from "./layout";
import { useTranslation } from "react-i18next";



export default function Home() {
  const { t } = useTranslation();
  // Cambia el idioma al hacer click en el botón
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      category: t("skills.title1"),
      items: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Electronic Design', level: 95 },
        { name: 'PCB Design', level: 90 },
        { name: 'IoT Development', level: 85 },
        { name: 'Embedded Systems', level: 90 },
      ]
    },
    {
      category: t("skills.title2"),
      items: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Electronic Design', level: 95 },
        { name: 'PCB Design', level: 90 },
        { name: 'IoT Development', level: 85 },
        { name: 'Embedded Systems', level: 90 },
      ],
    },
  ];
  return (
    <main className="bg-gray-0 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent min-h-[60vh] flex items-center justify-center">
        {/* Imagen de fondo con superposición oscura */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('./imagenes/fondo1.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Contenido Hero con caja semitransparente */}
        <div className="relative px-6 py-12 bg-black bg-opacity-60 rounded-lg shadow-lg max-w-3xl text-center">
          {/* Título principal */}
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-4 tracking-wide drop-shadow-lg">
            {t("hero.title")}
          </h2>
          {/* Nombre destacado */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">
            David Y. <span className="text-yellow-400">Villa Durán</span>
          </h1>
          {/* Subtítulo */}
          <h2 className="text-lg md:text-2xl font-light text-gray-200 mb-6">
            {t("hero.subt1")}{" "}
            <span className="font-medium">{t("hero.subt2")}</span>
          </h2>
          {/* Descripción */}
          <p className="text-md md:text-lg text-gray-300 mb-10">
            {t("hero.text")}
          </p>
          {/* Botón */}
          <Link
            href="#projects"
            className="bg-white text-primary px-8 py-3 rounded-lg shadow-md hover:bg-secondary hover:text-white transition-all duration-300"
          >
            {t("hero.buton")}
          </Link>
        </div>
      </section>
      {/* Seccion Sobre Mí */}
      <section
        id="about"
        className="container mx-auto py-16 px-6 flex flex-col md:flex-row items-center bg-transparent"
      >
        {/* Imagen */}
        <div className="flex-shrink-0 w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src="../imagenes/portada.png"
            alt="Fotografía de David Y. Villa Durán"
            className="rounded-full shadow-lg w-56 md:w-64 mx-auto dark:hidden"
          />
          <img
            src="../imagenes/portada2.png"
            alt="Fotografía de David Y. Villa Durán"
            className="rounded-full shadow-lg w-56 md:w-64 mx-auto hidden dark:block"
          />
        </div>

        {/* Contenido */}
        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-primary mb-4 text-yellow-300 drop-shadow">{t("about.title")}</h2>
          <p className="text-gray-200 text-lg">
          {t("about.text1")}
          </p>
          <a
            href="/about"
            className="text-yellow-500 hover:underline mt-2 block"
          >
            {t("about.see_more")}
          </a>
        </div>
      </section>
      {/* Sección Habilidades */}
      <section id="skills" className="bg-gray-0 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Título de la Sección */}
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-secondary">
          {t("skills.title0")}
          </h2>

          {/* Mapeo de Categorías */}
          {skills.map((skillCategory, indexCategory) => (
            <div key={indexCategory} className="mb-16">
              {/* Título de Categoría */}
              <h3 className="text-2xl font-semibold mb-8 text-center text-white">
                {skillCategory.category}
              </h3>

              {/* Habilidades en Dos Columnas para Pantallas Grandes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {skillCategory.items.map((skill, indexSkill) => (
                  <div key={skill.name} className="relative">
                    {/* Nombre y Nivel de Habilidad */}
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-red">{skill.level}%</span>
                    </div>

                    {/* Barra de Progreso */}
                    <div className="h-3 bg-neutral/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: indexSkill * 0.1 }}
                        className="h-full bg-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Sección: Proyectos */}
      <section
        id="projects"
        //className="flex-shrink-0 w-full md:w-1/3 mb-6 md:mb-0"
        className="py-16 px-6 container mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
        {t("projects.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Proyecto 1 */}
          <div className="group border rounded-lg shadow-lg overflow-hidden">
            <img
              src="/imagenes/proyecto1.png"
              alt="Proyecto 1"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-secondary mb-2">
                Proyecto 1
              </h3>
              <p className="text-gray-600">
                Un vistazo a mi primer proyecto interactivo.
              </p>
              <a
                href="#"
                className="text-yellow-500 hover:underline mt-2 block"
              >
                Ver más
              </a>
            </div>
          </div>
          {/* Proyecto 2 */}
          <div className="group border rounded-lg shadow-lg overflow-hidden">
            <img
              src="/project2.jpg"
              alt="Proyecto 2"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-secondary mb-2">
                Proyecto 2
              </h3>
              <p className="text-gray-600">
                Mi trabajo en diseño con animaciones y performance.
              </p>
              <a
                href="#"
                className="text-yellow-500 hover:underline mt-2 block"
              >
                Ver más
              </a>
            </div>
          </div>
          {/* Proyecto 3 */}
          <div className="group border rounded-lg shadow-lg overflow-hidden">
            <img
              src="/project3.jpg"
              alt="Proyecto 3"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-secondary mb-2">
                Proyecto 3
              </h3>
              <p className="text-gray-600">
                Un proyecto centrado en la experiencia del usuario.
              </p>
              <a
                href="#"
                className="text-yellow-500 hover:underline mt-2 block"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="/projects"
            className="bg-white text-primary px-8 py-3 rounded-lg shadow-md hover:bg-secondary hover:text-white transition-all duration-300"
          >
            {t("projects.butt")}
          </a>
        </div>
      </section>

      {/* Sección: Contacto */}
      <section
        id="contact"
        className="container mx-auto py-16 px-6"
      >
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
        {t("contact.title")}
        </h2>
        <p className="text-gray-700 mb-6 text-center  dark:text-white">
        {t("contact.text")}
        </p>
        <form className="space-y-4 max-w-lg mx-auto">
          <div>
            <label htmlFor="name" className="block text-gray-700  dark:text-white">
            {t("contact.namein")}
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              placeholder={t("contact.nameplace")}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700  dark:text-white">
            {t("contact.emailin")}
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder={t("contact.emailplace")}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-white">
            {t("contact.messa")}
            </label>
            <textarea
              id="message"
              className="w-full p-2 border rounded"
              placeholder={t("contact.messaplace")}
            ></textarea>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary">
          {t("contact.send")}
          </button>
        </form>
      </section>

      {/*footer */}

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          {/* Navegación del Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Sección de navegación */}
            <div>
              <h3 className="text-lg font-bold mb-4">{t("menu.navigation")}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-secondary">
                  {t("menu.home")}
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-secondary">
                  {t("menu.about")}
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-secondary">
                  {t("menu.skills")}
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-secondary">
                  {t("menu.projects")}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-secondary">
                  {t("menu.contact")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div>
              <h3 className="text-lg font-bold mb-4">{t("menu.conect")}</h3>
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary"
                  >
                    <FaFacebook size={32} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary"
                  >
                    <FaTwitter size={32} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary"
                  >
                    <FaLinkedin size={32} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary"
                  >
                    <FaGithub size={32} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Información de Contacto */}
            <div>
              <h3 className="text-lg font-bold mb-4">{t("menu.contactme")}</h3>
              <p className="text-neutral">
                Email: <a href="mailto:contacto@ejemplo.com" className="hover:text-secondary">contacto@ejemplo.com</a>
              </p>
              <p className="text-neutral">
              {t("menu.phone")}: <a href="tel:+1234567890" className="hover:text-secondary">+123 456 7890</a>
              </p>
            </div>
          </div>

          {/* Derechos Reservados */}
          <div className="text-center text-neutral border-t border-neutral/30 pt-4">
            © 2025 David Y. Villa Durán. {t("menu.derechos")}
          </div>
        </div>
      </footer>

    </main>
  );
}