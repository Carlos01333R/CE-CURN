"use client";

import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import "../App.css"
import Header from "../components/Header";

const content = [
  {
    title: "Asesorias",
    description:
      "ervicios profesionales ofrecidos por expertos en un campo específico para brindar orientación, asistencia o consejo a individuos o empresas que requieren ayuda en áreas particulares.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://www.asesoriasempresa.es/wp-content/uploads/2019/06/asesoria-empresa.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Consultorias",
    description:
      "Servicios profesionales ofrecidos por especialistas en diversos campos para diagnosticar problemas.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://www.comunicare.es/wp-content/uploads/2021/02/consultoria-1-1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Gestión de proyectos",
    description:
      "La gestión de proyectos es la disciplina de planificar, organizar, dirigir y controlar los recursos para alcanzar objetivos específicos dentro de un plazo y presupuesto determinados.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://cdn.lynda.com/course/568990/568990-1646917639465-16x9.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Emprendimiento e Innovación",
    description:
      "El emprendimiento es el proceso de identificar, crear y desarrollar oportunidades de negocio, mientras que la innovación implica la introducción de nuevas ideas, productos, servicios o procesos que generan valor y tienen un impacto positivo en la sociedad. aligned, and maintain the flow of your work without any interruptions.",
   
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://www.redinnovacion.org/sites/default/files/tipos-innovacion-empresarial.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <>
    <Header/>
      <StickyScroll content={content} />
      
 
    </>
  );
}
