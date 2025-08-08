"use client"; // Agrega esto al principio del archivo
import Image from "next/image"; // Importa el componente Image

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import Projects from "../components/Projects";
import About from "../components/About";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false); // Inicializa con un valor por defecto
  useEffect(() => {
    // Solo se ejecuta en el cliente
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
  }, []);



  const experiences = [
    {
      company: "ConRadMed",
      role: "Desarrollador Full Stack",
      period: "Abril 2025 - Presente | México",
      description: "Desarrollo integral del sitio web corporativo para Conradmed, empresa especializada en análisis médicos. Responsabilidades: Diseño UX/UI, Frontend con Vue.js y Tailwind CSS, Backend con PostgreSQL y REST API, optimización SEO y rendimiento web. Tecnologías: Vue.js, TypeScript, PostgreSQL, REST API, Tailwind CSS.",
    },
    {
      company: "RECcreative",
      role: "Desarrollador Full Stack",
      period: "Diciembre 2024 - Abril 2025 | Puebla, México",
      description: "Lideré el desarrollo integral de una plataforma de comercio local (WE ARE) utilizando: Frontend: React + Vite, Tailwind CSS, Backend: Node.js (Express.js), autenticación JWT, Base de datos: MySQL (modelo relacional normalizado). Logros clave: Empoderé a más de 50 negocios locales con herramientas digitales y entregué documentación técnica completa.",
    },
    {
      company: "Urbanika",
      role: "Desarrollador Frontend (Web 3.0)",
      period: "Febrero 2024 - Julio 2024",
      description: "Construí componentes interactivos y optimicé el rendimiento para una plataforma Web 3.0. Stack tecnológico: React, Tailwind CSS, Web3.js. Logros: 20% más rápido en tiempos de carga mediante lazy loading y UI moderna que aumentó la adopción de usuarios.",
    },
    {
      company: "Soluciones Gobierno (SolucionesGAP)",
      role: "Desarrollador Full Stack",
      period: "Enero 2023 - Mayo 2023",
      description: "Desarrollé y lancé una plataforma de comercio electrónico. Equipo: Lideré 4 desarrolladores. Tecnologías: React (Styled Components), Node.js, MySQL. Resultados: Entrega a tiempo en 4 meses.",
    },
    {
      company: "UTTECAM Proyectos Integradores",
      role: "Desarrollador Full Stack - App de Reseñas de Negocios",
      period: "Septiembre 2024 - Diciembre 2024",
      description: "Creé una aplicación multiplataforma (web + móvil). Frontend: React, React Native, Material UI. Backend: Odoo 16, integración Auth0. Aspectos destacados: 90% de reutilización de código entre plataformas y calificación de usabilidad de 4.5/5.",
    },
    {
      company: "Agencia de Viajes (Be&Go)",
      role: "Desarrollador Full Stack",
      period: "Enero 2023 - Abril 2023",
      description: "Desarrollé un sistema de gestión de viajes con personalización automatizada de itinerarios y mejora de la eficiencia de los agentes en un 25%.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#1A2238] text-[#E6E6E6]" : "bg-[#F4F4F4] text-[#1A2238]"
      }`}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portafolio</h1>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-[#17817b] transition-colors">
              Sobre mí
            </a>
            <a
              href="#experience"
              className="hover:text-[#17817b] transition-colors"
            >
              Experiencia
            </a>
            <a
              href="#portfolio"
              className="hover:text-[#17817b] transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              className="hover:text-[#17817b] transition-colors"
            >
              Contacto
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Cambiar modo oscuro/claro"
            >
              {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 py-20 text-center"
      >
        <div className="relative w-40 h-40 mx-auto mb-8">
          <Image
            src="https://res.cloudinary.com/dxh55fgry/image/upload/v1749000361/IMG-20221103-WA0015_t6pn6a.jpg"
            alt="Foto de perfil de Johan Sinoe De Jesús Torres"
            className="rounded-full object-cover w-full h-full"
            width={160}
            height={160}
          />
        </div>
        <h1 className="text-5xl font-bold mb-4">Johan Sinoe De Jesús Torres</h1>
        <TypeAnimation
          sequence={[
            "Desarrollador Full Stack",
            2000,
            "Entusiasta de UI/UX",
            2000,
            "Especialista en React",
            2000,
            "TypeScript ",
            2000,
            "Diseñador de Interfaces ",
            2000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="text-2xl text-[#17817b]"
        />
      </motion.section>

      <About darkMode={darkMode} />

      <section id="experience" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Experiencia</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border-l-4 border-[#17817b] pl-4 hover:shadow-lg p-4 rounded-r-lg transition-all bg-white bg-opacity-5"
            >
              <h3 className="text-xl font-bold text-[#17817b]">
                {exp.company}
              </h3>
              <p className="text-lg font-semibold">{exp.role}</p>
              <p className="text-sm opacity-75 mb-2">{exp.period}</p>
              <p className="text-base">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Portfolio Section */}
      <Projects darkMode={darkMode} />

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-2 md:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Contáctame</h2>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Tarjeta de correo */}
            <div className={`rounded-2xl p-8 flex flex-col items-center shadow-lg border-2 ${darkMode ? 'bg-gradient-to-br from-[#232b3b] to-[#2d3a4d] border-[#17817b]' : 'bg-white border-[#17817b]'}`}>
              <FiMail className="text-4xl mb-3 text-[#17817b]" />
              <h3 className="text-lg font-bold mb-1 text-[#17817b]">Correo electrónico</h3>
              <a
                href="mailto:johansinoe2049@gmail.com"
                className="text-base font-medium hover:underline text-center break-all"
              >
                johansinoe2049@gmail.com
              </a>
            </div>
            {/* Tarjeta de teléfono */}
            <div className={`rounded-2xl p-8 flex flex-col items-center shadow-lg border-2 ${darkMode ? 'bg-gradient-to-br from-[#232b3b] to-[#2d3a4d] border-[#20bfa9]' : 'bg-white border-[#20bfa9]'}`}>
              <span className="text-4xl mb-3 text-[#20bfa9]">📱</span>
              <h3 className="text-lg font-bold mb-1 text-[#20bfa9]">Teléfono</h3>
              <a
                href="tel:+522491709719"
                className="text-base font-medium hover:underline text-center"
              >
                +(52) 249 170 97 19
              </a>
            </div>
          </motion.div>
          {/* Redes sociales */}
          <div className="mt-12 flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-4 text-center text-[#17817b]">Conecta conmigo</h4>
            <div className="flex space-x-6 justify-center">
              <a
                href="https://github.com/JohanDJ0?tab=repositories"
                className="group"
                aria-label="Perfil de GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#17817b] group-hover:bg-[#17817b] transition-all duration-300">
                  <FiGithub className="text-2xl group-hover:text-white text-[#17817b]" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/johan-de-jesus-67993b288/"
                className="group"
                aria-label="Perfil de LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#20bfa9] group-hover:bg-[#20bfa9] transition-all duration-300">
                  <FiLinkedin className="text-2xl group-hover:text-white text-[#20bfa9]" />
                </div>
              </a>
              <a
                href="mailto:johansinoe2049@gmail.com"
                className="group"
                aria-label="Envíame un correo"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#17817b] group-hover:bg-[#17817b] transition-all duration-300">
                  <FiMail className="text-2xl group-hover:text-white text-[#17817b]" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
