import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Johan Sinoe De Jesús Torres | Desarrollador Full Stack | Portafolio Web",
  description:
    "Portafolio de Johan Sinoe De Jesús Torres, Desarrollador Full Stack con experiencia en React, Node.js, Web 3.0, e-commerce y apps móviles. Resultados medibles, liderazgo técnico y adaptabilidad. Experiencia en RECcreative, Urbanika, SolucionesGAP y UTTECAM.",
  keywords: [
    "Johan Sinoe De Jesús Torres",
    "Desarrollador Full Stack",
    "React",
    "Node.js",
    "Next.js",
    "Web 3.0",
    "e-commerce",
    "apps móviles",
    "portafolio",
    "Tailwind CSS",
    "MySQL",
    "Odoo",
    "México",
    "JavaScript",
    "TypeScript",
    "Desarrollador web Puebla",
    "Liderazgo técnico",
    "Resultados medibles",
    "Proyectos integradores",
    "RECcreative",
    "Urbanika",
    "SolucionesGAP",
    "UTTECAM",
  ],
  openGraph: {
    title: "Johan Sinoe De Jesús Torres | Desarrollador Full Stack | Portafolio Web",
    description:
      "Portafolio de Johan Sinoe De Jesús Torres, Desarrollador Full Stack con experiencia en React, Node.js, Web 3.0, e-commerce y apps móviles. Resultados medibles, liderazgo técnico y adaptabilidad.",
    url: "https://portafolioweb0-production.up.railway.app/",
    siteName: "Portafolio de Johan Sinoe De Jesús Torres",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dxh55fgry/image/upload/v1749000361/IMG-20221103-WA0015_t6pn6a.jpg",
        width: 800,
        height: 800,
        alt: "Perfil de Johan Sinoe De Jesús Torres"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Johan Sinoe De Jesús Torres | Desarrollador Full Stack | Portafolio Web",
    description:
      "Portafolio de Johan Sinoe De Jesús Torres, Desarrollador Full Stack con experiencia en React, Node.js, Web 3.0, e-commerce y apps móviles.",
    images: [
      "https://res.cloudinary.com/dxh55fgry/image/upload/v1749000361/IMG-20221103-WA0015_t6pn6a.jpg"
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Datos estructurados JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Johan Sinoe De Jesús Torres",
              "jobTitle": "Desarrollador Full Stack",
              "url": "https://portafolioweb0-production.up.railway.app/",
              "email": "johansinoe2049@gmail.com",
              "telephone": "+52 249 170 97 19",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Puebla",
                "addressCountry": "MX"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Universidad Tecnológica de Tecamachalco"
              },
              "knowsAbout": [
                "React", "Node.js", "Next.js", "Web 3.0", "e-commerce", "apps móviles", "MySQL", "Odoo", "JavaScript", "TypeScript"
              ],
              "sameAs": [
                "https://github.com/JohanDJ0?tab=repositories",
                "https://www.linkedin.com/in/johan-de-jesus-67993b288/"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
