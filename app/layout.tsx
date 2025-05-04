"use client";
// import type { Metadata } from "next";

import "../styles/global.css";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaFlagUsa, FaFlag } from "react-icons/fa"; // Importamos íconos de redes sociales
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; //Iconos de Hamburguesa
//import { motion } from "framer-motion";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";








// export const metadata: Metadata = {
//   title: "Portafolio David Villa",
//   description: "Mi portafolio moderno",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const { t } = useTranslation();
  // Cambia el idioma al hacer click en el botón
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }
  // Estados para el progreso de desplazamiento y la seccion activa
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setISDarkMode] = useState(false);
  
  // Efecto para manejar el tema y el scroll
  useEffect(() => {
    // Inicilaizar el tema
  const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setISDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // Manejador de Scroll
    const handleScroll = () => {
    // Calcular el progreso de desplazamiento
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);

    // Determinar la seccion activa
    const sections = ["home", "about", "skills", "projects", "blog", "contact"];
    for (const section of sections.reverse()) {
      const element = document.getElementById(section);
      if (element && window.scrollY >= element.offsetTop - 200) {
        setActiveSection(section);
        break;
      }
    }
  };

  window.addEventListener("scroll",handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setISDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <html lang={i18n.language}>
      <body
        className="bg-gradient-to-r from-primary to-accent dark:from-gray-900 dark:to-gray-600 text-gray-900 dark:text-white transition-all duration-300"
      >
        {/* Indicador de progreso de scroll */}
        <div
          style={{
            width: `${scrollProgress}%`,
            height: "5px",
            backgroundColor: "yellow",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000,
          }}
          />
        {/* Menú de navegación */}
        <nav className="bg-primary text-white p-4 sticky top-0 z-50 shadow-md dark:bg-gray-800">
          <div className="container mx-auto flex items-center justify-between">
             {/* Título resaltado a la izquierda */}
             <h1 className="text-xl font-bold hidden md:block">{t("menu.title")}</h1>
              
            {/* Botón de hamburguesa y menú en pantalla pequeña */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white hover:text-secondary"
              >
                {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>

            {/* Opciones del menú: Ocultas en dispositivos pequeños */}
            <ul
              className={`absolute top-16 left-0 w-full bg-primary text-center space-y-4 py-4 md:relative md:flex md:space-x-6 md:space-y-0 md:top-0 md:w-auto md:bg-transparent dark:bg-gray-800 ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link href="/" className="hover:underline">
                  {t("menu.home")}
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:underline">
                {t("menu.about")}
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:underline">
                {t("menu.skills")}
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:underline">
                {t("menu.projects")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                {t("menu.blog")}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:underline">
                {t("menu.contact")}
                </Link>
              </li>
            </ul>

            {/* Redes sociales a la dereccha */}
            <div className="flex space-x-4">
              <button
                  onClick={toggleTheme}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                  >
                    {isDarkMode ?  "🌙" : "☀️"}
              </button>
              {/*idioma */}

             <div className="flex items-center">
  {/* Botón para cambiar a Inglés */}
  {i18n.language !== "en" && (
    <button
      onClick={() => changeLanguage("en")}
      className="flex items-center space-x-2 bg-secondary text-white py-2 px-4 rounded-lg hover:bg-accent transition"
    >
      <Flag code="US" className="w-6 h-6" /> {/* Bandera de Estados Unidos */}

    </button>
  )}

  {/* Botón para cambiar a Español */}
  {i18n.language !== "es" && (
    <button
      onClick={() => changeLanguage("es")}
      className="flex items-center space-x-2 bg-secondary text-white py-2 px-4 rounded-lg hover:bg-accent transition"
    >
      <Flag code="ES" className="w-6 h-6" /> {/* Bandera de España */}

    </button>
  )}
</div>



              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white hover:text-secondary" size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white hover:text-secondary" size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white hover:text-secondary" size={24} />
              </a>
            </div>

           
          </div>
        </nav>

        {/* Contenido principal */}
        <main className="container mx-auto py-6">{children}</main>
      </body>
    </html>


  );
}
