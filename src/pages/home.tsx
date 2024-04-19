
"use client";
import { BentoGridSecondDemo } from '../components/Consultorios';
import { FooterConsultorio } from '../components/Footer';
import Header from '../components/Header';
import { ImagenCorporativa } from '../components/ImagenCurn';
import Navlist from '../components/Opciones'
import "../App.css"
function Component() {


  return (
    <section>
   <Header/>
<ImagenCorporativa/>
  <section className='main'>
  <Navlist/>
<BentoGridSecondDemo/>
  </section>
 <FooterConsultorio/>
   </section>
  );
}


export default Component