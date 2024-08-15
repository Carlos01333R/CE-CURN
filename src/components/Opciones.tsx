
"use client";
import "../App.css"
import { Sidebar } from "flowbite-react";
import {  HiOutlineClock, HiOutlineBookOpen, HiOutlineDocumentReport,HiOutlineClipboardCheck, HiOutlineEye } from "react-icons/hi";
import {  Modal, Button} from "flowbite-react";
import { useState } from "react";

import '../App.css'
function Navlist() {
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
  return (

    <>
    <div className="menu">
    <Sidebar aria-label="Default sidebar example" className="menu">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item onClick={() => setOpenModal(true)} icon={HiOutlineClock} className="cursor-pointer">
            Horarios de Atencion
          </Sidebar.Item>
          
          <Sidebar.Item href="https://unicurn.sharepoint.com/sites/public/Documentos/public/normatividad/acuerdos/AC05-JUL21-2017-Reglamento%20Interno%20y%20C%c3%b3digo%20%c3%a9tica%20Centro%20de%20Conciliaci%c3%b3n.pdf.pdf?ga=1"
          target="_blank" rel="noopener noreferrer" 
          icon={HiOutlineBookOpen} label="Curn" labelColor="dark">
            Reglamento
          </Sidebar.Item>
          <Sidebar.Item onClick={() => setOpenModal2(true)} icon={HiOutlineClipboardCheck} label="3" className="cursor-pointer">
            Requisitos
          </Sidebar.Item>
          <Sidebar.Item href="https://www.uninunez.edu.co/convenioscjctg.html" 
          target="_blank" rel="noopener noreferrer" 
          icon={HiOutlineDocumentReport}>
            Convenios
          </Sidebar.Item>
          <Sidebar.Item onClick={() => setOpenModal3(true)} icon={HiOutlineEye} className="cursor-pointer">
            Mision y vision
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  

    </div>

   
    <Modal show={openModal} onClose={() => setOpenModal(false)}  className="modal">
        <Modal.Header className="text-center"></Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base text-black text-center">HORARIO DE ATENCION</p>
            <img src="https://axis.uninunez.edu.co/public/web/images/web/contactos.png" alt="" className="w-28 h-24 m-auto"/>
            <div className="w-[70%] m-auto">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 m-auto">
            Líneas teléfonicas: <br/>
            <strong>Línea gratuita nacional 018005184324</strong>
            <span className="text-[#00bca9] m-auto"> +57 5 6439499 | Cartagena, Bolivar, Colombia</span><br />
            <span className="text-[#00bca9] m-auto"> +57 5 3198826 | Barranquilla, Atlantico, Colombia</span>
            </p>
            </div>

            <div className="w-[70%] m-auto">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 m-auto">
           
            <strong>Correos electrónicos institucionales:</strong><br />
            <span className="text-[#00bca9] m-auto"> contactenos@uninunez.edu.co </span><br />
            <strong>Direcciones de correspondencia:</strong><br />
            <span className="text-base leading-relaxed text-gray-500 dark:text-gray-400">Centro Calle de la Soledad N° 5 -70 | Cartagena, Bolivar, Colombia
Cra 54, N° 66-54 | Barranquilla, Atlantico, Colombia</span>
            </p>
            </div>
           

         
          </div>
        </Modal.Body>
        <Modal.Footer>
        
          <Button color="red" onClick={() => setOpenModal(false)} className="border-red-600 m-auto">
            CERRAR
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={openModal2} onClose={() => setOpenModal2(false)} className="modal2">
        <Modal.Header className="text-center"></Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className=" text-black text-center text-xl">Requisitos para solicitar servicios al Consultorio Jurídico y Centro de Conciliación Cartagena</p>
          
            <div className="w-[90%] m-auto">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 m-auto">
            Para acceder a los servicios de este Consultorio Jurídico y Centro de Conciliación, el usuario deberá presentar los siguientes documentos:
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 m-auto">
           
            <br/>
            <span>1. Identificarse con documento de identidad del usuario y/o convocante.</span>
            <br />
            <span>2. Presentar factura de un servicio público para validar el estrato socioeconómico 
            </span>
            <br />
            <span>3. La solicitud del trámite, sea escrita o verbal.</span>
            <br />
            <span>4. Las pruebas y/o documentos necesarios para el estudio de la solicitud y para la legal y diligente atención por parte de este Consultorio Jurídico y Centro de Conciliación: </span>
            <br />
            <strong>
            A. Poder, cuando se presenta través de apoderado Abogado.
            </strong>
            <br />
            <strong>
            B. Certificado de Cámara de Comercio, cuando el Convocado sea una Persona Jurídica.
            </strong>
            <br /><br />
            <strong>ALIMENTOS:</strong>
            <br />
            <span>- Cédula de Ciudadanía de las partes</span>
            <br />
            <span> - Registro Civil de Nacimiento tratándose de Niños y Niñas para acreditar parentesco (Fijación, Regulación, y Exoneración de Cuota Alimentaria).</span>
            <br /><br />
            <strong>OBLIGACIONES CIVILES:</strong>
            <br />
            <span>- Cédula de Ciudadanía.</span>
            <br />
            <span> - Título Valor o Quirografario..</span>
            <br />
            <span>- Contrato</span>
            <br /><br />
            <strong>DECLARACIÓN DE UNIÓN MARITAL DE HECHO:</strong>
            <br />
            <span>-Asistir conjunta y voluntariamente al Centro de Conciliación para validar el trámite.</span>
            <br />
            <span> - Presentar Cédula de Ciudadanía de las partes declarantes.</span>
            <br />
            <span>- Aportar factura de un servicio público para acreditar el estrato socioeconómico</span>
            <br />
            <span>
            Si hay hijos, aportar Registro Civil de Nacimiento para acreditar parentesco.
            </span>
            <br /><br />
            <span>Este Consultorio Jurídico y Centro de Conciliación está habilitado sólo para tramitar casos cuya cuantia la cuantía no supere los 50 Salarios Mínimos Legales Mensuales Vigentes (SMLMV) y en los casos señalados en el articulo 9º de la ley 2113 de 2021</span>

            </p>

            </div>       
          </div>
        </Modal.Body>
        <Modal.Footer>
        
          <Button color="red" onClick={() => setOpenModal2(false)} className="border-red-600 m-auto">
            CERRAR
          </Button>
        </Modal.Footer>
      </Modal>

      
    <Modal show={openModal3} onClose={() => setOpenModal3(false)} className="modal2">
        <Modal.Header className="text-center"></Modal.Header>
        <Modal.Body>
        <div className="space-y-6">
            <p className=" text-black text-center text-xl">MISIÓN DEL CONSULTORIO JURÍDICO Y CENTRO DE CONCILIACIÓN</p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 m-auto">
            Brindar a nuestros estudiantes formación integral en la atención jurídica especializada de todas las áreas del Derecho y en Mecanismos Alternativos de Solución de Conflictos, en tolerancia y en manejo de soluciones equitativas, para ofrecer a la comunidad asesoría jurídica en todas las áreas del Derecho, representación judicial y trámite de procesos conciliatorios, con eficiencia, eficacia, agilidad, imparcialidad, rigor académico, profesionalismo jurídico y atención de calidad. Contamos con un sistema eficiente de organización y gestión empresarial y un ejercicio profesional de probada competencia y experiencia certificadas.
            
            
              </p>

              <p className=" text-black text-center text-xl">VISIÓN DEL CONSULTORIO JURÍDICO Y CENTRO DE CONCILIACIÓN</p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 m-auto">
            Mantener siempre la vanguardia en la prestación de los servicios de asesoría jurídica, representación judicial y atención de trámites conciliatorios a nuestros Usuarios, con excelente calidad jurídica, profesional y de atención al cliente, así como mantener un escenario óptimo de cooperación con la Justicia, con evidente liderazgo en la ciudad y proyección en las comunidades más desfavorecidas. Además, mantener la permanente formación integral de nuestros estudiantes en la atención jurídica en todas las áreas del Derecho, en Mecanismos Alternativos de Solución de Conflictos, en tolerancia y en manejo de soluciones equitativas, recurriendo siempre a la Conciliación para la solución de los mismos.
            
            
              </p>

            </div>
        </Modal.Body>
        <Modal.Footer>
        
          <Button color="red" onClick={() => setOpenModal3(false)} className="border-red-600 m-auto">
            CERRAR
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  );
}

export default Navlist