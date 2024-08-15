"use client";

import { Accordion } from "flowbite-react";
import { TracingBeam } from "../components/ui/tracing-beam";
import Header from "../components/Header";
import { FooterConsultorio } from "../components/Footer";

export function Consultorias() {
  
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
    ¿Cuál es la diferencia entre consultoría y coaching empresarial?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
      a principal diferencia radica en el enfoque y la metodología utilizada. La consultoría empresarial se centra en proporcionar soluciones específicas y recomendaciones basadas en la experiencia y el conocimiento del consultor. Por otro lado, el coaching empresarial se centra en ayudar a los individuos, generalmente líderes o equipos, a desarrollar habilidades, alcanzar metas y maximizar su potencial a través de un proceso de preguntas, reflexión y retroalimentación. Mientras que el consultor proporciona respuestas y soluciones, el coach ayuda a que los individuos encuentren sus propias respuestas y desarrollen sus capacidades.
      </p>
   
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel className="border-b border-gray-200">
    <Accordion.Title className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">
    ¿Cuánto tiempo tomará ver resultados después de implementar las recomendaciones de la consultoría?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
      El tiempo para ver resultados puede variar según la complejidad de los problemas abordados, la industria, el tamaño de la empresa y otros factores. En algunos casos, los resultados pueden ser evidentes en cuestión de semanas o meses, especialmente si se trata de cambios operativos o estratégicos significativos. Sin embargo, en otras situaciones, los resultados pueden llevar más tiempo en manifestarse, especialmente si implican cambios culturales o de comportamiento dentro de la organización. Es importante tener expectativas realistas y estar preparado para un proceso gradual de implementación y seguimiento.
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title className="font-semibold py-4 px-6 bg-white border-gray-200 border-l border-r rounded-t-md">
    ¿Cómo puedo medir el retorno de inversión (ROI) de contratar servicios de consultoría empresarial?
    </Accordion.Title>
    <Accordion.Content className="p-6">
      <p className="mb-2 text-gray-700 dark:text-gray-400">
      El ROI de la consultoría empresarial puede evaluarse mediante indicadores clave de rendimiento (KPIs) que estén alineados con los objetivos y metas de la empresa. Estos KPIs pueden incluir aumento de ingresos, reducción de costos, mejora de la satisfacción del cliente, aumento de la productividad, entre otros. Además de los KPIs cuantitativos, también es importante considerar los beneficios cualitativos, como el desarrollo de capacidades internas, la mejora de la cultura organizacional y la capacidad de adaptación al cambio. Realizar un seguimiento regular de estos indicadores antes, durante y después de la consultoría ayudará a evaluar su impacto y calcular el ROI de manera efectiva.
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
    title: "Consultoria Consultorio Empresarial",
    description: (
      <>
        <p>
        es un servicio ofrecido por profesionales o empresas especializadas en brindar asesoramiento y orientación a emprendedores y empresarios en diversas áreas relacionadas con la gestión y el desarrollo de negocios. Estos consultorios suelen proporcionar asesoría en aspectos como estrategia empresarial, gestión financiera, marketing, recursos humanos, tecnología, entre otros.
        </p>
        
        <p>
        Ofresemos Consultoria en línea o Consultoria a distancia, es un servicio que proporciona orientación, asistencia y consejos a través de medios digitales y tecnologías de comunicación. Este tipo de consultoría permite a los clientes recibir orientación y asistencia sin la necesidad de tener reuniones físicas con el consultor.
        </p>
       
      </>
    ),
    badge: "Consultoria",
    image:
      "https://img.freepik.com/vector-gratis/ilustracion-concepto-consultoria-estrategica_114360-9336.jpg",
    boton: "Pedir Asesoria Virtual"
  },
  {
    title: "Consultoría de Tecnología de la Información (TI)",
    description: (
      <>
        <p>
        La consultoría de TI se centra en ayudar a las empresas a utilizar la tecnología de manera eficaz para mejorar sus procesos empresariales, aumentar la eficiencia operativa y obtener ventajas competitivas. Los consultores de TI pueden ofrecer servicios que van desde la evaluación y selección de sistemas informáticos hasta la implementación de soluciones de software personalizadas.
        </p>
        
      </>
    ),
 
    image:
      "https://techcenterperu.com/blog/wp-content/uploads/2022/03/tipos-de-servicio-de-consultoria-TI.png",
  },
  {
    title: "Consultoría de Estrategia Empresarial",
    description: (
      <>
        <p>
        se enfoca en ayudar a las empresas a desarrollar y ejecutar estrategias efectivas para alcanzar sus objetivos comerciales a largo plazo. Los consultores de estrategia trabajan en estrecha colaboración con la alta dirección para analizar el entorno competitivo, identificar oportunidades de crecimiento, definir la dirección estratégica y diseñar planes de acción para su implementación. 
        </p>
      
      </>
    ),
    
    image:
      "https://i0.wp.com/ambs.education/wp-content/uploads/2023/03/45-1.jpg?resize=795%2C525&ssl=1",
  },
];
