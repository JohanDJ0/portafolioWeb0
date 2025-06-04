"use client"; // Agrega esto al principio del archivo
import Image from "next/image"; // Importa el componente Image

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false); // Inicializa con un valor por defecto
  useEffect(() => {
    // Solo se ejecuta en el cliente
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
  }, []);

  const projects = [
    {
      title: "WE ARE - Plataforma de Comercio Local",
      description: "Desarrollo integral de una plataforma para digitalizar negocios locales, permitiendo a más de 50 comercios gestionar productos, ventas y clientes.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "JWT", "MySQL"],
      achievements: [
        "Empoderamiento digital de más de 50 negocios locales",
        "Documentación técnica completa",
        "Interfaces responsivas y seguras"
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Plataforma Web 3.0 - Urbanika",
      description: "Componentes interactivos y optimización de rendimiento para una plataforma Web 3.0, con integración de tecnologías blockchain.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Web3.js"],
      achievements: [
        "20% de mejora en tiempos de carga",
        "UI moderna que aumentó la adopción de usuarios"
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "E-commerce - SolucionesGAP",
      description: "Plataforma de comercio electrónico desarrollada en equipo, con gestión de productos, pagos y usuarios.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Styled Components", "Node.js", "MySQL"],
      achievements: [
        "Entrega a tiempo en 4 meses",
        "Liderazgo de equipo de 4 desarrolladores"
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "App de Reseñas de Negocios - UTTECAM",
      description: "Aplicación multiplataforma (web + móvil) para gestionar y consultar reseñas de negocios locales.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "React Native", "Material UI", "Odoo 16", "Auth0"],
      achievements: [
        "90% de reutilización de código entre plataformas",
        "Calificación de usabilidad de 4.5/5"
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "App Agencia de Viajes (Be&Go)",
      description: "Sistema de gestión de viajes y personalización de itinerarios para agencia de viajes.",
      image: "https://res.cloudinary.com/dxh55fgry/image/upload/v1739588244/1217791_4873_u1rn9h.jpg",
      technologies: ["Ionic", "Firebase"],
      achievements: [
        "Automatización de personalización de itinerarios",
        "Mejora de eficiencia de agentes en un 25%"
      ],
      github: "#",
      demo: "#",
    },
  ];

  const experiences = [
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
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Image
            src="https://res.cloudinary.com/dxh55fgry/image/upload/v1749000361/IMG-20221103-WA0015_t6pn6a.jpg"
            alt="Perfil"
            className="rounded-full object-cover w-full h-full"
            width={128}
            height={128}
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

      <section id="about" className="container mx-auto px-2 md:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Sobre mí</h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-center">
              Soy desarrollador web con experiencia en JavaScript y TypeScript, especializado en React, Next.js, HTML y CSS. Enfocado en desarrollo full stack, tengo sólidas habilidades técnicas, gran capacidad de adaptación y amplia experiencia trabajando en equipo.
            </p>
            <p className="text-lg leading-relaxed text-center">
              Además, he desempeñado roles de liderazgo, impulsando proyectos para lograr sus objetivos en entornos dinámicos y desafiantes.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12 w-full">
              {/* Habilidades Técnicas */}
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: darkMode ? '0 8px 32px 0 rgba(23,129,123,0.25)' : '0 8px 32px 0 rgba(32,191,169,0.18)' }}
                className={`rounded-2xl p-8 shadow-lg transition-all duration-300 flex flex-col items-start min-h-[420px] border-2 ${darkMode ? 'bg-gradient-to-br from-[#232b3b] to-[#2d3a4d] border-[#17817b]' : 'bg-white border-[#17817b]'} `}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🛠</span>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-[#17817b]' : 'text-[#17817b]'}`}>Habilidades Técnicas</h3>
                </div>
                <div className="space-y-4 w-full">
                  <div>
                    <h4 className={`font-semibold mb-1 flex items-center gap-2 ${darkMode ? 'text-[#20bfa9]' : 'text-[#17817b]'}`}><span className="text-lg">💻</span> Frontend</h4>
                    <ul className="ml-4 space-y-1 text-base">
                      <li><span className="font-semibold">Frameworks/Librerías:</span> React, Next.js, Vue.js, Ionic</li>
                      <li><span className="font-semibold">Estilos:</span> Tailwind CSS, Material UI, CSS-in-JS (Styled Components)</li>
                      <li><span className="font-semibold">Móvil:</span> React Native, Ionic</li>
                      <li><span className="font-semibold">Enfoque:</span> Interfaces responsivas, optimización de rendimiento</li>
                    </ul>
                  </div>
                  <div className="border-t border-[#17817b] pt-3">
                    <h4 className={`font-semibold mb-1 flex items-center gap-2 ${darkMode ? 'text-[#20bfa9]' : 'text-[#17817b]'}`}><span className="text-lg">🖥️</span> Backend</h4>
                    <ul className="ml-4 space-y-1 text-base">
                      <li><span className="font-semibold">Lenguajes/Frameworks:</span> Node.js, Express.js</li>
                      <li><span className="font-semibold">APIs:</span> REST</li>
                      <li><span className="font-semibold">Autenticación:</span> JWT, Auth0, Firebase Auth</li>
                    </ul>
                  </div>
                  <div className="border-t border-[#17817b] pt-3">
                    <h4 className={`font-semibold mb-1 flex items-center gap-2 ${darkMode ? 'text-[#20bfa9]' : 'text-[#17817b]'}`}><span className="text-lg">🗄️</span> Bases de Datos</h4>
                    <ul className="ml-4 space-y-1 text-base">
                      <li><span className="font-semibold">SQL:</span> MySQL, PostgreSQL</li>
                      <li><span className="font-semibold">NoSQL:</span> MongoDB, Firebase Firestore</li>
                    </ul>
                  </div>
                  <div className="border-t border-[#17817b] pt-3">
                    <h4 className={`font-semibold mb-1 flex items-center gap-2 ${darkMode ? 'text-[#20bfa9]' : 'text-[#17817b]'}`}><span className="text-lg">☁️</span> Cloud/DevOps</h4>
                    <ul className="ml-4 space-y-1 text-base">
                      <li>Firebase (Auth, Firestore, Cloud Functions)</li>
                    </ul>
                  </div>
                  <div className="border-t border-[#17817b] pt-3">
                    <h4 className={`font-semibold mb-1 flex items-center gap-2 ${darkMode ? 'text-[#20bfa9]' : 'text-[#17817b]'}`}><span className="text-lg">🧰</span> Herramientas</h4>
                    <ul className="ml-4 space-y-1 text-base">
                      <li>Control de versiones: Git/GitHub</li>
                      <li>Diseño/Prototipado: Figma</li>
                      <li>Testing APIs: Postman</li>
                      <li>Desarrollo: React Developer Tools, Vite</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              {/* Habilidades Blandas */}
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(32,191,169,0.18)' }}
                className={`rounded-2xl p-8 shadow-lg transition-all duration-300 flex flex-col items-start min-h-[420px] border-2 ${darkMode ? 'bg-gradient-to-br from-[#232b3b] to-[#2d3a4d] border-[#20bfa9]' : 'bg-white border-[#20bfa9]'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🚀</span>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-[#20bfa9]' : 'text-[#17817b]'}`}>Habilidades Blandas</h3>
                </div>
                <ul className="ml-2 space-y-3 text-base w-full">
                  <li className="flex items-start gap-2"><span className="text-[#20bfa9] text-lg">⭐</span> Liderazgo técnico (gestión de equipos de 3-5 personas)</li>
                  <li className="flex items-start gap-2"><span className="text-[#20bfa9] text-lg">⭐</span> Metodologías ágiles: Scrum, Kanban</li>
                  <li className="flex items-start gap-2"><span className="text-[#20bfa9] text-lg">⭐</span> Comunicación efectiva (stakeholders, equipos multidisciplinarios)</li>
                  <li className="flex items-start gap-2"><span className="text-[#20bfa9] text-lg">⭐</span> Resolución de problemas (enfoque en eficiencia y UX)</li>
                  <li className="flex items-start gap-2"><span className="text-[#20bfa9] text-lg">⭐</span> Adaptabilidad (Web 3.0, proyectos académicos/profesionales)</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
      <section id="portfolio" className="container mx-auto px-2 md:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Mis Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(23,129,123,0.18)' }}
              className={`rounded-2xl overflow-hidden shadow-lg border-2 ${darkMode ? 'bg-gradient-to-br from-[#232b3b] to-[#2d3a4d] border-[#17817b]' : 'bg-white border-[#17817b]'} transition-all duration-300 flex flex-col`}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
                width={800}
                height={224}
                priority={index === 0}
                quality={80}
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-[#20bfa9]' : 'text-[#17817b]'}`}>{project.title}</h3>
                <p className="mb-3 text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${darkMode ? 'bg-[#17817b] text-white' : 'bg-[#17817b] bg-opacity-20 text-[#1A2238]'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.achievements && (
                  <ul className="mb-4 ml-4 list-disc text-sm space-y-1">
                    {project.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
