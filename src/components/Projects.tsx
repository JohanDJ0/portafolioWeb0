"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  github: string;
  demo: string;
  showGithub?: boolean;
  showDemo?: boolean;
}

interface ProjectsProps {
  darkMode: boolean;
}

const PROJECT_PLACEHOLDER = "/project-placeholder.svg";

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects: Project[] = [
    {
      title: "ConRadMed - Sitio Web Corporativo",
      description: "Desarrollo de sitio web corporativo para Conrad Medical, empresa especializada en equipos médicos y soluciones de salud.",
      image: PROJECT_PLACEHOLDER,
      technologies: ["Vue.js", "PostgreSQL ", "Tailwind CSS", "TypeScript", "Rest api,"],
      achievements: [
        "Sitio web corporativo profesional y responsivo",
        "Optimización SEO y rendimiento web",
        "Interfaz moderna para el sector médico"
      ],
      github: "#",
      demo: "https://www.conradmed.com.mx/",
      showGithub: false,
      showDemo: true,
    },
    {
      title: "WE ARE - Plataforma de Comercio Local",
      description: "Desarrollo integral de una plataforma para digitalizar negocios locales, permitiendo a más de 50 comercios gestionar productos, ventas y clientes.",
      image: PROJECT_PLACEHOLDER,
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "JWT", "MySQL"],
      achievements: [
        "Empoderamiento digital de más de 50 negocios locales",
        "Documentación técnica completa",
        "Interfaces responsivas y seguras"
      ],
      github: "https://github.com/JohanDJ0/WE-ARE-Platform",
      demo: "https://we-are-platform.vercel.app",
      showGithub: false,
      showDemo: false,
    },
    {
      title: "Plataforma Web 3.0 - Urbanika",
      description: "Componentes interactivos y optimización de rendimiento para una plataforma Web 3.0, con integración de tecnologías blockchain.",
      image: PROJECT_PLACEHOLDER,
      technologies: ["React", "Tailwind CSS", "Web3.js"],
      achievements: [
        "20% de mejora en tiempos de carga",
        "UI moderna que aumentó la adopción de usuarios"
      ],
      github: "https://github.com/JohanDJ0/urbanika-web3",
      demo: "https://urbanika-web3.vercel.app",
      showGithub: false,
      showDemo: false,
    },
    {
      title: "E-commerce - SolucionesGAP",
      description: "Plataforma de comercio electrónico desarrollada en equipo, con gestión de productos, pagos y usuarios.",
      image: PROJECT_PLACEHOLDER,
      technologies: ["React", "Styled Components", "Node.js", "MySQL"],
      achievements: [
        "Entrega a tiempo en 4 meses",
        "Liderazgo de equipo de 4 desarrolladores"
      ],
      github: "#",
      demo: "#",
      showGithub: false,
      showDemo: false,
    },
    {
      title: "App de Reseñas de Negocios - UTTECAM",
      description: "Aplicación multiplataforma (web + móvil) para gestionar y consultar reseñas de negocios locales.",
      image: PROJECT_PLACEHOLDER,
      technologies: ["React", "React Native", "Material UI", "Odoo 16", "Auth0"],
      achievements: [
        "90% de reutilización de código entre plataformas",
        "Calificación de usabilidad de 4.5/5"
      ],
      github: "https://github.com/JohanDJ0/Community",
      demo: "#",
      showGithub: true,
      showDemo: false,
    },
    {
      title: "App Agencia de Viajes (Be&Go)",
      description: "Sistema de gestión de viajes y personalización de itinerarios para agencia de viajes.",
      image: PROJECT_PLACEHOLDER,
      technologies: ["Ionic", "Firebase"],
      achievements: [
        "Automatización de personalización de itinerarios",
        "Mejora de eficiencia de agentes en un 25%"
      ],
      github: "https://github.com/JohanDJ0/bego-travel-app",
      demo: "https://bego-travel-app.vercel.app",
      showGithub: false,
      showDemo: false,
    },
  ];

  return (
    <section id="portfolio" className="container mx-auto px-2 md:px-8 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(23,129,123,0.18)' }}
            className={`rounded-2xl overflow-hidden shadow-lg border-2 ${darkMode ? 'bg-gradient-to-br from-[#232b3b] to-[#2d3a4d] border-[#17817b]' : 'bg-white border-[#17817b]'} transition-all duration-300 flex flex-col`}
          >
            <Image
              src={project.image}
              alt=""
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
              
                             {/* Botones de GitHub y Demo */}
               <div className="flex gap-3 mt-auto pt-4">
                 {project.showGithub && project.github !== "#" && (
                   <motion.a
                     href={project.github}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                       darkMode 
                         ? 'bg-[#17817b] text-white hover:bg-[#20bfa9]' 
                         : 'bg-[#17817b] text-white hover:bg-[#20bfa9]'
                     }`}
                   >
                     <FiGithub size={18} />
                     GitHub
                   </motion.a>
                 )}
                 
                 {project.showDemo && project.demo !== "#" && (
                   <motion.a
                     href={project.demo}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 border-2 ${
                       darkMode 
                         ? 'border-[#20bfa9] text-[#20bfa9] hover:bg-[#20bfa9] hover:text-white' 
                         : 'border-[#20bfa9] text-[#20bfa9] hover:bg-[#20bfa9] hover:text-white'
                     }`}
                   >
                     <FiExternalLink size={18} />
                     Ver Demo
                   </motion.a>
                 )}
                 
                 {/* Mostrar mensaje cuando no hay botones visibles */}
                 {(!project.showGithub || project.github === "#") && (!project.showDemo || project.demo === "#") && (
                   <div className="w-full text-center py-2 text-sm text-gray-500 italic">
                     Proyecto privado
                   </div>
                 )}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
