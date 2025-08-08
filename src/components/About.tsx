"use client";
import React from "react";
import { motion } from "framer-motion";

// Función para manejar la descarga del CV
const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/Cv Johan Sinoe De Jesus Torres Desarrollo de software.pdf';
  link.download = 'CV_Johan_Torres_Desarrollo_Software.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

interface AboutProps {
  darkMode: boolean;
}



const About: React.FC<AboutProps> = ({ darkMode }) => {

  const attributeCards = [
    {
      icon: "<>",
      title: "Desarrollo",
      subtitle: "Soluciones técnicas innovadoras"
    },
    {
      icon: "⚙️",
      title: "Diseño",
      subtitle: "Experiencias visuales atractivas"
    },
    {
      icon: "👥",
      title: "Colaboración",
      subtitle: "Trabajo efectivo en equipo"
    },
    {
      icon: "◎",
      title: "Enfoque",
      subtitle: "Orientado a resultados"
    },
    {
      icon: "♡",
      title: "Pasión",
      subtitle: "Comprometido con la excelencia"
    },
    {
      icon: "💡",
      title: "Creatividad",
      subtitle: "Pensamiento innovador"
    }
  ];

  const values = [
    { text: "Impacto global", icon: "🌐" },
    { text: "Orientación a objetivos", icon: "🎯" },
    { text: "Calidad humana", icon: "♡" }
  ];

  return (
    <section id="about" className="container mx-auto px-2 md:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#17817b] to-[#20bfa9] bg-clip-text text-transparent">
          Sobre mí
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#17817b] to-[#20bfa9] mx-auto mb-12 rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Columna izquierda - Descripción personal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold mb-8 text-[#17817b]">
                Profesional creativo y comprometido
              </h3>
              <div className="space-y-6 text-xl leading-relaxed">
                <p>
                  Soy una persona apasionada por la innovación y el desarrollo de soluciones que realmente importen. Mi enfoque se centra en combinar creatividad y técnica para crear experiencias excepcionales que conecten con las personas.
                </p>
                <p>
                  Creo firmemente en el poder de la colaboración y el aprendizaje continuo. Cada proyecto es una oportunidad para crecer, innovar y generar un impacto positivo en la comunidad.
                </p>
              </div>
            </div>

            {/* Mis valores */}
            <div>
              <h4 className="text-2xl font-bold mb-6 text-[#17817b]">Mis valores</h4>
              <div className="flex flex-wrap gap-4">
                {values.map((value, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className={`px-6 py-3 rounded-full text-base font-medium border ${
                      darkMode 
                        ? 'bg-gray-800 text-gray-200 border-gray-600' 
                        : 'bg-gray-100 text-gray-700 border-gray-300'
                    }`}
                  >
                    <span className="mr-2">{value.icon}</span>
                    {value.text}
                  </motion.span>
                ))}
              </div>
            </div>

                         {/* Botón Descargar CV */}
             <motion.button
               onClick={handleDownloadCV}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-3 cursor-pointer text-lg ${
                 darkMode 
                   ? 'bg-[#17817b] text-white hover:bg-[#20bfa9]' 
                   : 'bg-[#17817b] text-white hover:bg-[#20bfa9]'
               }`}
             >
               <span className="text-xl">⬇️</span>
               Descargar CV
             </motion.button>
          </motion.div>

          {/* Columna derecha - Grid de atributos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {attributeCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
                }}
                className={`p-8 rounded-lg border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-600' 
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="text-3xl mb-4 text-[#17817b]">{card.icon}</div>
                <h4 className={`font-bold mb-3 text-lg ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {card.title}
                </h4>
                <p className={`text-base ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {card.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
