"use client";
import { Accordion } from "flowbite-react";
import { TracingBeam } from "../components/ui/tracing-beam";
import Header from "../components/Header";
import { FooterConsultorio } from "../components/Footer";

export function Asesorias() {
  
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
    ¿Cómo puedo mejorar la eficiencia operativa de mi empresa?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
      Una manera de mejorar la eficiencia operativa es identificar y eliminar cuellos de botella en los procesos. Realiza un análisis exhaustivo de tus operaciones para identificar áreas de mejora. Además, considera la implementación de tecnologías que automatizen tareas repetitivas y mejoren la comunicación interna.
      </p>
   
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel className="border-b border-gray-200">
    <Accordion.Title className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">
    ¿Cuál es la mejor estrategia para aumentar las ventas de mi producto o servicio?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
      Una estrategia efectiva para aumentar las ventas es entender a tu público objetivo y adaptar tus estrategias de marketing en consecuencia. Segmenta tu mercado, identifica las necesidades de tus clientes y comunica cómo tu producto o servicio puede resolver sus problemas o satisfacer sus deseos. Además, considera la diversificación de canales de venta y la creación de alianzas estratégicas con otras empresas.
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">
    ¿Qué medidas puedo tomar para mejorar la retención de empleados en mi empresa?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
      La retención de empleados se puede mejorar ofreciendo un ambiente de trabajo positivo y oportunidades de crecimiento profesional. Implementa programas de desarrollo personal y profesional, fomenta el trabajo en equipo y reconoce y recompensa el desempeño excepcional. Además, realiza encuestas de satisfacción laboral periódicas para identificar áreas de mejora y actuar en consecuencia.
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
    title: "Asesoria Consultorio Empresarial",
    description: (
      <>
        <p>
        Una asesoría de consultorio empresarial es un servicio ofrecido por profesionales o empresas especializadas en brindar orientación y asistencia a otras empresas en diversas áreas de gestión y desarrollo empresarial. Estas asesorías suelen abordar una amplia gama de aspectos, que van desde la planificación estratégica y la gestión financiera hasta la optimización de procesos, recursos humanos, marketing y tecnología.
        </p>
        
        <p>
        Ofresemos asesoramiento en línea o asesoría a distancia, es un servicio que proporciona orientación, asistencia y consejos a través de medios digitales y tecnologías de comunicación, como videoconferencias, correos electrónicos, mensajería instantánea o plataformas de colaboración en línea.
        </p>
       
      </>
    ),
    badge: "ASESORIA",
    image:
      "https://www.asesoriasempresa.es/wp-content/uploads/2019/06/asesoria-empresa.png",
    boton: "Pedir Asesoria Virtual"
  },
  {
    title: "Ayuda en Planificación estratégica",
    description: (
      <>
        <p>
        Ayudar a la empresa a definir su visión, misión y objetivos a largo plazo, así como a desarrollar estrategias para alcanzarlos de manera efectiva.
        </p>
        <p>
        proceso fundamental para cualquier empresa, ya que establece la dirección a largo plazo y proporciona un marco para la toma de decisiones.
        ayudamos en tu consulta en nuestro Consultorio Empresarial
        </p>
      </>
    ),
 
    image:
      "https://www.questionpro.com/blog/wp-content/uploads/2016/08/Portada-planificacion-de-estrategia.jpg",
  },
  {
    title: "Ayuda en Gestión financiera",
    description: (
      <>
        <p>
        Proporcionar asesoramiento en temas como presupuesto, gestión de efectivo, análisis financiero, obtención de financiamiento y planificación fiscal.
        </p>
        <p>
        Una gestión financiera sólida es esencial para la salud financiera y el crecimiento sostenible de una empresa. Los asesores financieros pueden proporcionar orientación especializada en estas áreas para ayudar a las empresas a tomar decisiones financieras informadas y alcanzar sus objetivos.
        </p>
      </>
    ),
    
    image:
      "https://www.ceupe.com/images/easyblog_articles/2361/b2ap3_amp_funciones-de-gestin-financiera.jpg",
  },
];
