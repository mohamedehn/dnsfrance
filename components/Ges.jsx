import React from "react";
import Image from "next/image";
import pv from "../public/assets/pv.jpeg"

export default function Ges() {

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 h-screen pt-[10rem]" id="ges">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg pt-10 md:pt-0">
              <h2 className="text-base font-semibold leading-7 text-blue-500">Green Energy Solutions</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ensemble, pour demain.</p>
              <p className="mt-6 text-gray-600 text-lg leading-8 text-justify">
                Green Energy Solutions est une filiale du Groupe DNS de conseils, d&apos;études et de travaux en matière d&apos;économie énergétique 
                destinée  aux particuliers et aux professionnelles. Soucieux des problématiques liées à l&apos;environnement, nous avons pour ambition de 
                promouvoir les énergies renouvelables et permettre à tout un chacun de les adopter et de faire baisser de manière significative les
                consommations d&apos;énergies.
              </p>          
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-14 text-xl font-light tracking-tight text-gray-900 sm:text-2xl text-right">
                <a href="https://greenenergysolutions.fr/" className="underline hover:text-blue-500">En savoir +</a> 
              </p>      
            </div>
          </div>
          <div className="sm:px-6 lg:px-0 pt-10">
            <div className="relative isolate overflow-hidden sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pr-0 lg:mx-0 lg:max-w-none cursor-pointer
            hover:scale-110 ease-in duration-300">
              {/* <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-500 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              /> */}
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none hidden md:block">
                <a href="https://greenenergysolutions.fr/">
                  <Image
                    src={pv}
                    alt="/"
                    width={2432}
                    height={1442}
                    className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                  />
                </a>
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
