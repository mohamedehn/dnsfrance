import React from "react";
import Image from "next/image";
import definition from "../public/assets/poleDefinition.avif"

export default function PoleDefinition() {
    return (
      <div className="relative bg-gray-900 h-screen md:pb-0 pb-[115rem]">
        <div className="relative h-screen overflow-hidden bg-blue-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2 cursor-pointer">
          <Image className="h-full w-full object-cover cursor-pointer" src={definition} alt="/"/>
          <svg
            viewBox="0 0 926 676"
            aria-hidden="true"
            className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
              fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
              fillOpacity=".4"
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            />
            <defs>
              <linearGradient
                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl lg:px-8">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-2 lg:pr-0 xl:pl-16 pt-6 text-justify">
            <p className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl lg:pt-20 sm:pt-0">IT</p>
            <p className="mt-3 text-base leading-6 text-gray-400">
              Notre but est d’offrir à chaque entreprise, des solutions adaptées permettant d’intégrer des technologies toujours plus intelligentes 
              dans les organisations tout en garantissant une sécurité optimale de ses données, dans le but d’accroitre son CA et de faire face à 
              la concurrence.DATA, Cloud, IA, Hébergement, Cyber Sécurité et Développement web & mobile sont les principaux domaines où nos experts IT
              vous accompagnent 24/24 et 7/7 sur site ou bien à distance.
            </p>
            <p className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-2xl">Telecom</p>
            <p className="mt-3 text-base leading-6 text-gray-400">
              Notre mission est d’accompagner les opérateurs, les collectivités ainsi que les entreprises partenaires dans la conception, la 
              construction et la maintenance des réseaux fixes & mobiles de demain. De l’ingénierie à la supervision en passant par le déploiement, 
              nos experts FTTx, transmission & mobile, vous accompagnent 24/24 et 7/7 sur site ou bien à distance.
            </p>
            <p className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-2xl">Energies</p>
            <p className="mt-3 leading-6 text-gray-400">
              Notre mission est donc de vous accompagner sur la question de la transition énergétique et de vous conseiller sur une stratégie
              d’investissement dans les sources d’énergie et de contrôle des émissions carbone. Nos experts en efficacité énergétique ont
              conçu et développé des solutions mixtes permettant d’intégrer des énergies renouvelables dans la chaîne de valeur énergétique
              et d’optimiser celle-ci.
            </p>
          </div>
        </div>
      </div>
    )
  }
  