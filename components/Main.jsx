import react from "react"
import Image from "next/image"
import working from "../public/assets/working.avif"

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';



export default function Main() {

  return (
    <div className="bg-white max-w-full" id="/"> 

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-0 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-[12.8rem] lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Data Network Solutions
                </h1>
                <p className="mt-6 text-xl leading-8">
                  IT - TELECOM - ENGINEERING
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  L&apos;étape la plus importante pour une entreprise, est de passer à la suivante
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#about"
                    className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    A Propos de DNS
                  </a>
                  <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
                    Contactez-nous <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={working}
            alt="/"
          />
        </div>
      </div>
    </div>
  )
}



// export default function Example() {
//   return (
//     <div className="overflow-hidden bg-white md:py-32 py-52">
//       <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
//           <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Data Network Solutions</h2>
//             <p className="mt-6 text-xl leading-8 text-gray-600">
//               IT - TELECOM - ENGINEERING
//             </p>
//             <p className="mt-6 text-base leading-7 text-gray-600">
//               L&apos;étape la plus importante pour une entreprise, est de passer à la suivante
//             </p>
//   )
// }
