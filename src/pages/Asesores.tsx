
import { FooterConsultorio } from "../components/Footer"
import Header from "../components/Header"

const posts = [
    {
      id: 1,
      title: 'Estudios Realizados',
      href: '#',
      description:
        'egresado de la Universidad Simón Bolívar, en Convenio con IAFIC. Actualmente se desempeña como Docente Asesor del Consultorio Jurídico Área Civil y Casa de Justicia Canapote, Chiquinquirá y Country.',
      author: {
        name: 'Caballero Vélez Antonio Carlo',
        role: 'Abogado',
        href: '#',
        imageUrl:
          'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png',
      },
    },
    {
        id: 1,
        title: 'Estudios Realizas',
        href: '#',
        description:
          'abogada, egresada de la Universidad de Cartagena. Actualmente se desempeña como Docente Asesor Consultorio Jurídico Área Familia y Casa de Justicia Country. Es especialista en Derecho de Familia, de la Universidad Externado de Colombia y la Universidad de Cartagena.',
        author: {
          name: 'Espinosa Buelvas Martha Raquel',
          role: 'Abogada',
          href: '#',
          imageUrl:
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png',
        },
      },
      {
        id: 1,
        title: 'Estudios Realizados',
        href: '#',
        description:
          'abogada, egresada de la Universidad de Cartagena. Actualmente se desempeña como Docente Asesor del Consultorio Jurídico, Área de Derecho de Familia y Casa de Justicia Canapote. Es especialista en Derecho de Familia de la Universidad Externado de Colombia y la Universidad de Cartagena.',
        author: {
          name: 'Pardo de Howard Antonia Esperanza',
          role: 'Abogada',
          href: '#',
          imageUrl:
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
        },
      },
    // More posts...
  ]
  
  export default function PageAsesores() {
    return (
        <>
        <Header/>
      <div className="bg-white mb-8 mt-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Asesores Empresarial</h2>
            <p className="mt-2 text-sm text-gray-600">
            Nuestros asesores empresarial actuan como un socio estratégico que proporciona orientación, experiencia y apoyo a las empresas para ayudarlas a mejorar su desempeño, maximizar su potencial y alcanzar el éxito empresarial.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                
                <div className="group relative">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    <FooterConsultorio/>
      </>
    )
  }
  