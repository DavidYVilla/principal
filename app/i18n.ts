import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador o el seleccionado
  .use(initReactI18next) // Configura React
  .init({
    fallbackLng: "es", // Idioma predeterminado
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
    resources: {
      en: {
        translation: {

          menu: {
            title: "My Project Portfolio",
            home: "HOME",
            about: "ABOUT",
            skills: "SKILLS",
            projects: "PROJECTS",
            blog: "BLOG",
            contact: "CONTACT",
            language: "LANGUAJE",
            navigation: "Navigation",
            conect: "Connect",
            contactme: "Contact me",
            phone: "Phone",
            derechos: "All rights reserved.",
          },
          hero: {
            title: "ELECTRONIC ENGINEER & FULL STACK DEVELOPER" ,
            subt1: "Creating technological solutions",
            subt2: "that integrate hardware and software",
            text: "Specialized in the development of modern web applications and embedded systems, I offer comprehensive solutions that combine technological innovation with functional and elegant interfaces.",
            buton: "Projects"
          },
          about: {
            title: "About Me",
            text1: "I am an Electronic Engineer with a deep passion for technology and software development. With a solid background in designing and implementing cutting-edge technological solutions, I merge my expertise in electronics with advanced full-stack development skills to deliver robust, innovative, and efficient applications.",
            see_more: "Learn More"
          },
          skills: {
            title0: "Skills",
            title1: "Electronic Engineering",
            title2: "Full Stack Developer",
          },
          projects: {
            title: "Projects",
            butt: "View all Projects"
          },
          contact: {
            title: "Contact",
            text: "Do you have a project in mind? Let's talk!",
            namein: "Name",
            nameplace: "First name and last name",
            emailin: "E-mail",
            emailplace: "Your email",
            messa: "Message",
            messaplace: "Your Message",
            send: "Send",
          },
        },
      },
      es: {
        translation: {
          menu: {
            title: "Mi Portafolio",
            home: "INICIO",
            about: "SOBRE MÍ",
            skills: "HABILIDADES",
            projects: "PROYECTOS",
            blog: "BLOG",
            contact: "CONTACTO",
            language: "IDIOMA",
            navigation: "Navegación",
            conect: "Conéctate",
            contactme: "Contáctame",
            phone: "Teléfono",
            derechos: "Todos los derechos reservados.",
          },
          hero: {
            title: "INGENIERO ELECTRÓNICO & DESARROLLADOR FULL STACK" ,
            subt1: "Creando soluciones tecnológicas",
            subt2: "que integran hardware y software",
            text: "Especializado en el desarrollo de aplicaciones web modernas y sistemas embebidos. Ofrezco soluciones completas que combinan innovación tecnológica con interfaces funcionales y elegantes.",
            buton: "Ver Proyectos"
          },
          about: {
            title: "Sobre mí",
            text1: "Soy un Ingeniero Electrónico apasionado por la tecnología y el desarrollo de software. Con experiencia en el diseño y desarrollo de soluciones tecnológicas innovadoras, combino mis conocimientos en electrónica con mis habilidades en desarrollo full stack para crear aplicaciones robustas y eficientes.",
            see_more: "Ver más"
          },
          skills: {
            title0: "Habilidades",
            title1: "Ingeniería Electrónica",
            title2: "Desarrollador de Pila Completa",
          },
          projects: {
            title: "Proyectos",
            butt: "Ver todos los Proyectos"
          },
          contact: {
            title: "Contacto",
            text: "¿Tienes un proyecto en mente? ¡Hablemos!",
            namein: "Nombre",
            nameplace: "Tu nombre",
            emailin: "E-mail",
            emailplace: "Tu email",
            messa: "Mensaje",
            messaplace: "Tu Mensaje",
            send: "Enviar",
          },
        },
      },
    },
  });

export default i18n;