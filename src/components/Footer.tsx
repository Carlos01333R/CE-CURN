
"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsTwitter } from "react-icons/bs";

export function FooterConsultorio() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLA7pXMY27M8YC7HeTDE808yUxmoTpihXPsOUumYJ&s"
              alt="logo curn"
              className="w-40 md:mb-5"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="CORPORACIÓN" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.uninunez.edu.co/politicas/politicadatospersonalescurn.html" >Politica de tratamiento de datos</Footer.Link>
                <Footer.Link href="https://axis.uninunez.edu.co:2641/soporte/">PQRS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="INFORMACION" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.uninunez.edu.co/sedes.html?ml=1">Contacto</Footer.Link>
                <Footer.Link href="tel:6056439499">Telefono</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="mt-4"/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Carlos Rodriguez" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/uninunezcolombia" icon={BsFacebook} />
            <Footer.Icon href="https://twitter.com/uninunez" icon={BsTwitter} />
            <Footer.Icon href="https://plus.google.com/+curneduco" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
