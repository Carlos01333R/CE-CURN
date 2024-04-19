"use client";

import { Accordion } from "flowbite-react";
import { TracingBeam } from "../components/ui/tracing-beam";
import Header from "../components/Header";
import { FooterConsultorio } from "../components/Footer";

export function GestionPreyectos() {
  
  return (
    <>
    <Header/>
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
          <h2 className="mb-2 text-[#ff9400]">{item.badge}</h2>
           

            <p className="text-xl mb-4">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="300"
                  width="300"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
             
            </div>
            <div className="mt-3 hover:underline text-lg text-[#00897b] py-1 mb-4">
            <a href="https://half-length-occurre.000webhostapp.com/curn/" target="_blank" rel="noopener noreferrer" className="mt-2 ">{item.boton}</a>
            </div>
            
          </div>
        ))}
      </div>
      <Accordion className="border border-gray-200 shadow-md rounded-md">
        <h2 className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">Preguntas Frecuentes</h2>
  <Accordion.Panel className="border-b border-gray-200">
    <Accordion.Title className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">
    ¿Cuál es la diferencia entre la gestión de proyectos tradicional y la gestión de proyectos ágil?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
      La gestión de proyectos tradicional, también conocida como enfoque en cascada, sigue un proceso lineal y secuencial, donde las actividades se planifican detalladamente al inicio del proyecto y cualquier cambio posterior puede ser costoso y complicado de implementar. Por otro lado, la gestión de proyectos ágil se basa en valores como la adaptabilidad, la colaboración y la entrega continua de valor al cliente. Los proyectos se dividen en iteraciones cortas y frecuentes, llamadas sprints, y los equipos trabajan de manera colaborativa, adaptándose a los cambios según las necesidades del cliente o las condiciones del mercado.
      </p>
   
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel className="border-b border-gray-200">
    <Accordion.Title className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">
    ¿Cómo se manejan los riesgos en la gestión de proyectos?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
      La gestión de riesgos es un proceso integral en la gestión de proyectos que implica identificar, evaluar, mitigar y monitorear los riesgos potenciales que pueden afectar el éxito del proyecto. Esto incluye identificar riesgos en todas las etapas del proyecto, evaluar su probabilidad e impacto, desarrollar estrategias de mitigación para reducir su impacto o probabilidad, y monitorear continuamente el entorno del proyecto para identificar nuevos riesgos o cambios en los existentes.
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">
    ¿Cuál es la importancia de la comunicación en la gestión de proyectos?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
      La comunicación efectiva es fundamental en la gestión de proyectos para garantizar que todas las partes interesadas estén alineadas, informadas y comprometidas con los objetivos y el progreso del proyecto. Esto incluye establecer canales de comunicación claros y abiertos, mantener a todas las partes interesadas actualizadas sobre el progreso y los cambios en el proyecto, resolver conflictos de manera oportuna y garantizar que se entiendan las expectativas y responsabilidades de cada persona involucrada en el proyecto. Una comunicación efectiva contribuye a la transparencia, la confianza y el éxito general del proyecto.
      </p>
     
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">
    ¿Como puedo pedir una asesoria virtual?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
     puedes perdir una asesoria virtual atrevez de nuestra sito de consultas en linea, Ofresemos asesoramiento en línea o asesoría a distancia, es un servicio que proporciona orientación, asistencia y consejos a través de medios digitales y tecnologías de comunicación, como videoconferencias, correos electrónicos, mensajería instantánea o plataformas de colaboración en línea.
     </p>
     <p className="text-gray-500 dark:text-gray-400">
         
            <a
              href="https://half-length-occurre.000webhostapp.com/curn/" 
              target="_blank" rel="noopener noreferrer"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Pedir una Asesoria Virtual&nbsp;
            </a>
            estas asesorias son de manera virtual, el objetivo de esta es brindar asesoramiento de manera oportuna y rapidas
          </p>
     
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>

    </TracingBeam>
   
    <FooterConsultorio/>
    </>
  );
}



const dummyContent = [
  {
    title: "Gestion de Proyectos",
    description: (
      <>
        <p>
       
        La gestión de proyectos es un proceso fundamental para llevar a cabo iniciativas de manera efectiva y eficiente, asegurando que se cumplan los objetivos establecidos dentro de las restricciones de tiempo, costo, calidad y alcance. Desde la planificación detallada hasta la ejecución coordinada y el control continuo, este enfoque sistemático permite a los equipos trabajar de manera organizada y colaborativa para alcanzar los resultados deseados. Al mantener un monitoreo constante del progreso y tomar medidas correctivas según sea necesario, la gestión de proyectos ayuda a minimizar los riesgos y maximizar las oportunidades de éxito. Además, el cierre formal del proyecto y la evaluación post-implementación permiten aprender de la experiencia y mejorar continuamente los procesos para futuras iniciativas. En resumen, la gestión de proyectos es una herramienta esencial para cualquier organización que busque llevar a cabo proyectos de manera efectiva y lograr sus metas estratégicas.
        </p>
        
       
      </>
    ),
    badge: "Gestion de Proyectos",
    image:
      "https://fundepos.ac.cr/wp-content/uploads/2022/06/Grafico-Diagrama-circular-Proceso-5-elementos-Iconos-Corporativo-Multicolor-1024x675.png",
    boton: "Pedir Asesoria Virtual"
  },
  {
    title: "Gestión de Proyectos Tradicional (o en Cascada)",
    description: (
      <>
        <p>
        En este enfoque, el proyecto se divide en fases secuenciales y lineales, donde cada fase debe completarse antes de pasar a la siguiente. Las actividades se planifican detalladamente al inicio del proyecto y cualquier cambio posterior puede ser costoso y complicado de implementar. Es adecuado para proyectos con requisitos bien definidos y estables, donde la incertidumbre es baja y los objetivos son claros desde el principio. La gestión de proyectos tradicional sigue un proceso riguroso y estándar, con un énfasis en el control y la documentación.
        </p>
      
      </>
    ),
 
    image:
      "https://pandorafms.com/blog/wp-content/uploads/2018/10/Breve-Historia-de-la-Gestion-de-Proyectos.jpg",
  },
  {
    title: "Gestión de Proyectos Ágil",
    description: (
      <>
        <p>
        Este enfoque se basa en valores y principios ágiles, que priorizan la adaptabilidad, la colaboración y la entrega continua de valor al cliente. Los proyectos se dividen en iteraciones cortas y frecuentes, llamadas sprints, donde se desarrolla y entrega un conjunto de funcionalidades. Los equipos multidisciplinarios trabajan de manera colaborativa y se adaptan a los cambios según las necesidades del cliente o las condiciones del mercado. La gestión de proyectos ágil es adecuada para proyectos complejos y dinámicos, donde los requisitos pueden evolucionar a lo largo del tiempo y la innovación es clave para el éxito.
        </p>
       
      </>
    ),
    
    image:
      "https://altertecnia.com/wp-content/uploads/metodologias-agiles-portada.png",
  },
];
