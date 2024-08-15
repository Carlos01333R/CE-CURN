"use client";

import { Accordion } from "flowbite-react";
import { TracingBeam } from "../components/ui/tracing-beam";
import Header from "../components/Header";
import { FooterConsultorio } from "../components/Footer";

export function EmprendimientoInnovacion() {
  
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
            <a href="http://localhost/curn/php/usuario/consultorio.php" target="_blank" rel="noopener noreferrer" className="mt-2 ">{item.boton}</a>
            </div>
            
          </div>
        ))}
      </div>
      <Accordion className="border border-gray-200 shadow-md rounded-md">
        <h2 className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">Preguntas Frecuentes</h2>
  <Accordion.Panel className="border-b border-gray-200">
    <Accordion.Title className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">
    ¿Cuáles son los principales desafíos que enfrentan los emprendedores al iniciar un nuevo negocio?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
      Los emprendedores suelen enfrentarse a una serie de desafíos al iniciar un nuevo negocio, que pueden incluir la obtención de financiamiento, la identificación y penetración en el mercado objetivo, la gestión de riesgos, la construcción de un equipo talentoso, el cumplimiento de regulaciones legales y la gestión eficiente de recursos. Superar estos desafíos requiere planificación estratégica, resiliencia y capacidad para adaptarse a un entorno empresarial dinámico.
      </p>
   
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel className="border-b border-gray-200">
    <Accordion.Title className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">
    ¿Cuál es el papel de la innovación en la sostenibilidad empresarial a largo plazo?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
      La innovación desempeña un papel fundamental en la sostenibilidad empresarial a largo plazo al permitir a las empresas adaptarse a los cambios del mercado, diferenciarse de la competencia y crear valor para los clientes. Las empresas innovadoras pueden desarrollar productos y servicios que satisfagan las necesidades cambiantes de los consumidores, optimizar procesos para aumentar la eficiencia y reducir costos, y explorar nuevas oportunidades de crecimiento. Al fomentar una cultura de innovación y mantenerse a la vanguardia de las tendencias emergentes, las empresas pueden mantener su relevancia y competitividad en un entorno empresarial en constante evolución.
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">
    ¿Qué estrategias pueden emplear los emprendedores para fomentar la innovación en sus empresas?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
      Los emprendedores pueden emplear diversas estrategias para fomentar la innovación en sus empresas, como fomentar un ambiente de trabajo creativo y colaborativo, promover la experimentación y el aprendizaje continuo, incentivar la participación de los empleados en la generación de ideas y soluciones, establecer alianzas estratégicas con otras empresas o instituciones, y asignar recursos adecuados para la investigación y el desarrollo. Además, es importante estar abierto al cambio, mantenerse informado sobre las últimas tendencias y tecnologías, y buscar constantemente formas de mejorar y evolucionar el negocio.
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
    title: "Emprendimiento e Innovación",
    description: (
      <>
        <p>
       
      El emprendimiento y la innovación son dos fuerzas dinámicas que impulsan el desarrollo empresarial y el progreso social. El emprendimiento se refiere al proceso de identificar, desarrollar y llevar a cabo nuevas ideas o negocios, mientras que la innovación implica la introducción de cambios significativos que generen valor para clientes y empresas. Estos dos conceptos están estrechamente relacionados, ya que los emprendedores suelen ser agentes de cambio que introducen innovaciones en el mercado. A su vez, la innovación es un componente esencial del proceso emprendedor, permitiendo la diferenciación, la creación de valor y la adaptación a un entorno empresarial en constante evolución. Juntos, el emprendimiento y la innovación forman un motor vital para la economía, impulsando el crecimiento, la competitividad y el desarrollo sostenible.
        </p>
        
      </>
    ),
    badge: "Emprendimiento e Innovación",
    image:
      "https://gerente.com/co/wp-content/uploads/sites/16/2017/09/Consejos-para-montar-un-negocio-y-hacerse-emprendedor-en-Vitoria-Gasteiz-e1505140598267.jpeg",
    boton: "Pedir Asesoria Virtual"
  },
  {
    title: "Emprendimiento Social",
    description: (
      <>
        <p>
        se enfoca en abordar problemas sociales, ambientales o comunitarios mediante la creación de empresas o iniciativas con un propósito más allá de la generación de beneficios económicos. Estos emprendedores buscan soluciones innovadoras para desafíos como la pobreza, la educación, la salud, el medio ambiente, entre otros. El objetivo principal del emprendimiento social es generar un impacto positivo en la sociedad, al tiempo que se busca la sostenibilidad financiera.
        </p>
       
      </>
    ),
 
    image:
      "https://difusionconcausa.com/wp-content/uploads/2023/05/Emprendimiento-Social-Innovacion-e-impacto-positivo-para-un-futuro-sostenible.jpg",
  },
  {
    title: "Innovación Tecnológica",
    description: (
      <>
        <p>
        se centra en el desarrollo y la aplicación de nuevas tecnologías para resolver problemas existentes, mejorar procesos o crear productos y servicios innovadores. Este tipo de innovación puede manifestarse en diferentes campos, como la inteligencia artificial, la biotecnología, la robótica, la nanotecnología, entre otros. Los emprendedores que se dedican a la innovación tecnológica buscan crear soluciones disruptivas que transformen industrias y mejoren la calidad de vida de las personas.
        </p>
       
      </>
    ),
    
    image:
      "https://thelogisticsworld.com/wp-content/uploads/2021/02/Esquemas-de-innovacio%CC%81n-tecnolo%CC%81gica-.jpg",
  },
];
