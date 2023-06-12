import React from "react";
import Image from "next/image";
import telecomWall from "../public/assets/telecomWall.jpeg"

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'



export default function Dns() {
  return (
    <div className="overflow-hidden bg-white py-28 sm:py-36 md:h-screen lg:pt-32" id="dns">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-0">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-500">DNS France</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Votre tremplin vers l&apos;entreprise de demain.
              </p>
              <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                En tant qu’acteur incontournable des TIC, notre mission est 
                d’assurer auprès des entreprises une transition vers le monde de demain en proposant des solutions dédiées avec un accompagnement 
                sur mesure. Performance, ambition & innovation sont nos principales valeurs que nous partageons avec chacun de nos collaborateurs 
                ainsi que nos clients ! Notre métier consiste à mettre à votre disposition notre équipe d’experts ainsi que nos consultants 
                spécialisés dans différents domaines, intrinsèquement liés, afin de vous accompagner dans vos projets les plus stratégiques. 
                Avec plus de 150 clients à travers plus de 4 pays, nous nous sommes positionnés comme véritable partenaire de projets ambitieux 
                et complexes pour tout types d’entreprises, de la TPME à la multinationale.
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-start justify-end lg:order-first hover:scale-110 ease-in duration-300 cursor-pointer">
            <Image
              src={telecomWall}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
