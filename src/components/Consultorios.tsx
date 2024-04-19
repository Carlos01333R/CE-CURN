
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
export function BentoGridSecondDemo() {
  return (
    
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          imagen={item.imagen} 
          ruta={item.ruta}
          className={item.className}
         
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    imagen: "https://www.asesoriasempresa.es/wp-content/uploads/2019/06/asesoria-empresa.png",
    title: "Asesoria",
    description: "Servicios profesionales ofrecidos por expertos en un campo específico para brindar orientación, asistencia o consejo a individuos o empresas que requieren ayuda en áreas particulares.",
    ruta: "asesoria",

    header: <Skeleton />,
    className: "md:col-span-2",
    
  },
  {imagen: "https://img.freepik.com/vector-gratis/ilustracion-concepto-consultoria-estrategica_114360-9336.jpg",
    title: "Consultorias",
    description: " Servicios profesionales ofrecidos por especialistas en diversos campos para diagnosticar problemas.",
    ruta: "consultoria",
    className: "md:col-span-1",
   
  },
  {imagen: "https://fundepos.ac.cr/wp-content/uploads/2022/06/Grafico-Diagrama-circular-Proceso-5-elementos-Iconos-Corporativo-Multicolor-1024x675.png",
    title: "Gestión de proyectos",
    description: "La gestión de proyectos es la disciplina de planificar, organizar, dirigir y controlar los recursos para alcanzar objetivos específicos dentro de un plazo y presupuesto determinados. ",
    header: <Skeleton />,
    ruta: "gestion",
    className: "md:col-span-1",
    
  },
  {imagen: "https://gerente.com/co/wp-content/uploads/sites/16/2017/09/Consejos-para-montar-un-negocio-y-hacerse-emprendedor-en-Vitoria-Gasteiz-e1505140598267.jpeg",
    title: "Emprendimiento e innovación ",
    description:
      "El emprendimiento es el proceso de identificar, crear y desarrollar oportunidades de negocio, mientras que la innovación implica la introducción de nuevas ideas, productos, servicios o procesos que generan valor y tienen un impacto positivo en la sociedad. ",
      ruta: "empredimiento",
    header: <Skeleton />,
    className: "md:col-span-2",
    
  },
];
