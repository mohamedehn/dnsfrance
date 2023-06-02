import React from "react";
import Image from "next/image";
import about from "../public/assets/about.avif"
import Link from "next/link";

export default function JobComponent() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-screen md:pb-0 pb-[62rem]">
        <Image
          src={about}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-0">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">NOS JOBS</h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-300">
                Tu te demandes si DNS est fait pour toi ?
            </p> */}
            <p className="mt-6 text-lg leading-8 text-gray-300 text-justify">
                Chez DNS, nous croyons que chaque collaborateur est unique et détient une plus value pour le groupe.
                DNS, c&apos;est l&apos;opportunité d&apos;une carrière sur-mesure : projets, évolution, nos managers sont à l&apos;écoute et
                propose des formations régulières afin de permettre à nos équipes de monter en compétences et rester compétitifs sur le marché.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10 pt-8">
                <p>
                    Un process en 4 étapes
                </p>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-300">
                Vous échangez par téléphone avec un membre de l&apos;équipe.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
                Nous nous rencontrons et nous parlons sans filtres !
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
                Une réponse vous ai apportée qu&apos;elle soit positive ou négative accompagnée de TIPS de nos experts.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
                Si la réponse est positive, vous entrée dans le parcours d&apos;intégration.
          </p>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-xl font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10 pt-12">
                <p>
                    <Link href="/jobs" className="hover:text-blue-500">Nos opportunités <span aria-hidden="true">&rarr;</span></Link> 
                </p>
          </div>
        </div>
      </div>
    )
  }
  
