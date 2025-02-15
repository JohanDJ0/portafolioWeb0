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
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Business Information Management REST API",
      description:
        "A REST API for managing business information, built with Node.js and Express, and integrated with MySQL for data management and cloud storage for multimedia.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      technologies: [
        "Node.js",
        "Express",
        "MySQL",
        "Cloud Storage",
        "REST API",
      ],
    },
    {
      title: "Travel App",
      description:
        "An application to organize travel itineraries for Be&Go Agency",
        image: "https://res.cloudinary.com/dxh55fgry/image/upload/v1739588244/1217791_4873_u1rn9h.jpg",
      technologies: ["Ionic", "firebase"],
    },
  ];

  const experiences = [
    {
      company: "Urbanika",
      role: "Web Developer (Frontend)",
      period: "February 2024 - July 2024",
      description:
        "Developed interactive components and optimized frontend performance",
    },
    {
      company: "SolucionesGap",
      role: "Web Developer",
      period: "January 2023 - May 2023",
      description:
        "Led a team of 4 people to develop an online store to improve business operations",
    },
    {
      company: "SolucionesGap",
      role: "Web Developer",
      period: "January 2023 - May 2023",
      description:
        "Led a team of 4 people to develop an online store to improve business operations",
    },
    {
      company: "UTTECAM integrative project",
      role: "Full Stack Developer",
      period: "September 2024 - December 2024",
      description:
        "Implemented Odoo 16 for the backend and used APIs like Auth0 and Material UI to improve functionality and user experience.",
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
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-[#4ECDC4] transition-colors">
              About
            </a>
            <a
              href="#experience"
              className="hover:text-[#4ECDC4] transition-colors"
            >
              Experience
            </a>
            <a
              href="#portfolio"
              className="hover:text-[#4ECDC4] transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-[#4ECDC4] transition-colors"
            >
              Contact
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
            src="https://res.cloudinary.com/dxh55fgry/image/upload/v1739493428/services/124599.jpg"
            alt="Profile"
            className="rounded-full object-cover w-full h-full"
            width={128} // Especifica el ancho
            height={128} // Especifica el alto
          />
        </div>
        <h1 className="text-5xl font-bold mb-4">Johan Sinoe De Jesús Torres</h1>
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "UI/UX Enthusiast",
            2000,
            "React Specialist",
            2000,
            "TypeScript ",
            2000,
            "UI Designer ",
            2000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="text-2xl text-[#4ECDC4]"
        />
      </motion.section>

      <section id="about" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              I am a web developer with experience in JavaScript and TypeScript,
              specialized in React, Next.js, HTML and CSS. Focused on full stack
              development, I have solid technical skills, a great capacity for
              adaptation and extensive experience working as a team.{" "}
            </p>
            <p className="text-lg leading-relaxed">
              Additionally, I have played leadership roles, driving projects to
              achieve their objectives in dynamic and challenging environments.{" "}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-[#4ECDC4]">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "JavaScript",
                    "TypeScript",
                    "HTML5",
                    "CSS3",
                    "Tailwind",
                    "Git",
                    "Node.js",
                    "MongoDB",
                    "Figma",
                    "Postman",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#4ECDC4] bg-opacity-20 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-[#4ECDC4]">
                  Education
                </h3>
                <div className="space-y-2">
                  <p className="font-semibold">
                    Ingeniería en Desarrollo y Gestion De Software
                  </p>
                  <p className="text-sm opacity-75">
                    Universidad Tecnológica de Tecamachalco
                  </p>
                  <p className="text-sm opacity-75">2021 - 2025</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border-l-4 border-[#4ECDC4] pl-4 hover:shadow-lg p-4 rounded-r-lg transition-all"
            >
              <h3 className="text-xl font-bold text-[#4ECDC4]">
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
      <section id="portfolio" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
            <Image
  src={project.image}
  alt={project.title}
  className="w-full h-48 object-cover"
  width={500}  // Especifica el ancho en píxeles
  height={200} // Especifica el alto en píxeles
/>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#4ECDC4] text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/*       <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 hover:text-[#4ECDC4]"
                  >
                    <FiGithub /> <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 hover:text-[#4ECDC4]"
                  >
                    <span>Live Demo</span>
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 bg-white bg-opacity-20 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-[#4ECDC4] text-center">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 justify-center">
                <FiMail className="text-2xl text-[#4ECDC4]" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:john.doe@example.com"
                    className="hover:text-[#4ECDC4] transition-colors"
                  >
                    johansinoe2049@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 justify-center">
                <div className="text-2xl text-[#4ECDC4]">📱</div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-[#4ECDC4] transition-colors"
                  >
                    +(52) 249 170 97 19
                  </a>
                </div>
              </div>
              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4 text-center">
                  Connect With Me
                </h4>
                <div className="flex space-x-6 justify-center">
                  <a
                    href="https://github.com/JohanDJ0?tab=repositories"
                    className="group"
                    aria-label="GitHub Profile"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#4ECDC4] group-hover:bg-[#4ECDC4] transition-all duration-300">
                      <FiGithub className="text-xl group-hover:text-white" />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/johan-de-jesus-67993b288/"
                    className="group"
                    aria-label="LinkedIn Profile"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#4ECDC4] group-hover:bg-[#4ECDC4] transition-all duration-300">
                      <FiLinkedin className="text-xl group-hover:text-white" />
                    </div>
                  </a>
                  <a
                    href="mailto:johansinoe2049@gmail.com"
                    className="group"
                    aria-label="Email Me"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#4ECDC4] group-hover:bg-[#4ECDC4] transition-all duration-300">
                      <FiMail className="text-xl group-hover:text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
