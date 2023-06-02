import React from "react"
import Image from "next/image"
import telecom from "../public/assets/telecom.jpeg"
import it from "../public/assets/it.jpeg"
import enr from "../public/assets/enr.jpeg"



const posts = [
    {
        id: 1,
        title: 'Pôle Telecom',
        href: '#',
        description: "De nos jours, les télécoms ont une grande importance et une place essentielle dans le fonctionnement d’une entreprise en ouvrant la voie à de multiples innovations et à de nouveaux modèles économiques.",
        imageUrl: telecom
    },
    {
        id: 2,
        title: 'Pôle IT',
        href: '#',
        description: "Face à cette ère du numérique, ou le digital est devenu un outil plus que jamais indispensable, il est devenu primordial pour une entreprise de bénéficier de solutions IT performantes afin de rester compétitif sur son marché et de protéger sa structure de manière efficace..",
        imageUrl: it
      },
      {
        id: 3,
        title: 'Pôle Energies',
        href: '#',
        description: "Avec l’accélération de la transformation digitale des entreprises ainsi que le déploiement massif des réseaux de nouvelles générations, les énergies sont de plus en plus sollicitées pour assurer des besoins en consommation qui ne cessent de croitre. Nos experts en efficacité énergétique ont conçu et développé des solutions mixtes permettant d’intégrer des énergies renouvelables dans la chaîne de valeur énergétique et d’optimiser celle-ci.",
        imageUrl: enr
      },
  ]
  
  export default function Pole() {
    return (
      <div className="bg-white py-24 sm:py-20 max-w-full" id="poles">
        <div className="mx-auto max-w-full">
          <div className="mx-auto max-w-full text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-8">Nos domaines d&apos;activités</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Nos activités sont déclinés sous pôles.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 pl-[35px]">
        {
            posts.map((post) =>(
                <div key={post.id} className="relative flex items-center md:h-[415px] h-[405px] md:w-[90%] w-[90%] shadow-xl shadow-gray-400 rounded-xl 
                      group hover:bg-gradient-to-r from-[#ced5d8] to-[#4c77e6] mb-14 md:mb-0 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Image className="rounded-xl group-hover:opacity-10 md:h-full h-full md:w-[100%] w-[100%] object-cover 
                      absolute flex" src={post.imageUrl} alt="/"/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-l text-black tracking-wider text-justify w-[265px]">{post.description}</h3>
                    </div>
                    <div className="relative top-[180px] left-[15px] md:left-[25px] md:right-[300px] text-white text-l group-hover:hidden">
                      <h1>{post.title}</h1>
                    </div>
                </div>
            ))
        }
        </div>
          {/* <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 
                lg:pt-80"
              >
                <Image src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div> */}
        </div>
      </div>
    )
  }
  