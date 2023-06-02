import React from "react";
import Image from "next/image";
import edf from "../public/assets/edf.webp"
import cia from "../public/assets/cia.png"
import cera from "../public/assets/cera.png"
import tdf from "../public/assets/tdf.png"
import circet from "../public/assets/circet.jpeg"
import bibby from "../public/assets/bibby.png"


export default function Clients() {
    return (
      <div className="bg-white py-24 sm:py-32 h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Trusted by the most innovative teams</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Le Groupe DNS c&apos;est avant tout une histoire de confiance.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                Voici quelqu&apos;un de nos partenaires. Si vous envisagez de collaborer avec notre structure
                ou si vous souhaitez simplement avoir des informations supplémentaire, un formulaire de contact est à votre disposition
                en cliquant sur le lien ci-dessous.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a href="#contact" className="text-sm font-semibold text-gray-900">
                  Contactez-nous<span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-28 lg:mx-0 lg:max-w-none lg:pl-8">
              <Image
                className="max-h-14 w-full object-contain object-left hover:scale-110 ease-in duration-300 cursor-pointer"
                src={edf}
                alt="edf"
                width={105}
                height={48}
              />
              <Image
                className="max-h-12 w-full object-contain object-left hover:scale-110 ease-in duration-300 cursor-pointer"
                src={cia}
                alt="cia tp"
                width={104}
                height={48}
              />
              <Image
                className="max-h-12 w-full object-contain object-left hover:scale-110 ease-in duration-300 cursor-pointer"
                src={cera}
                alt="cera"
                width={140}
                height={48}
              />
              <Image
                className="max-h-16 w-full object-contain object-left hover:scale-110 ease-in duration-300 cursor-pointer"
                src={tdf}
                alt="tdf"
                width={136}
                height={48}
              />
              <Image
                className="max-h-20 w-full object-contain object-left hover:scale-110 ease-in duration-300 cursor-pointer"
                src={circet}
                alt="circet"
                width={158}
                height={48}
              />
              <Image
                className="max-h-20 w-full object-contain object-left hover:scale-110 ease-in duration-300 cursor-pointer"
                src={bibby}
                alt="bibby factor"
                width={147}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  