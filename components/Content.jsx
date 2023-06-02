import React from 'react'
import Image from 'next/image'
import content from "../public/assets/content.avif"

import {UserIcon, CheckCircleIcon, DocumentTextIcon} from '@heroicons/react/20/solid'

export default function Content() {
  return (
    <div className="relative bg-white h-screen lg:pb-0 md:pb-[60rem] pb-[65rem]" id='content'>
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end h-screen">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image className="absolute inset-0 h-full w-full bg-gray-50 object-cover" src={content} alt=""/>
          </div> 
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            {/* <p className="text-base font-semibold leading-7 text-blue-500">3 Axes</p> */}
            {/* <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1> */}
            {/* <p className="mt-6 text-xl leading-8 text-gray-700">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
              aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
              egestas fringilla sapien.
            </p> */}
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
             
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <DocumentTextIcon className="mt-1 h-5 w-5 flex-none text-blue-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-black">Vision.</strong> 
                        <p className='text-gray-600 text-justify'>
                            Performance, ambition & innovation sont nos principales valeurs que nous partageons avec chacun de nos 
                            collaborateurs ainsi que nos clients !
                        </p> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserIcon className="mt-1 h-5 w-5 flex-none text-blue-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-black">Mission</strong> 
                        <p className='text-gray-600 text-justify'>
                            En tant qu’acteur incontournable des TIC, notre mission est d’assurer auprès des entreprises une transition vers le 
                            monde de demain en proposant des solutions dédiées avec un accompagnement sur mesure.
                        </p>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-500" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-black">Objectif</strong> 
                        <p className='text-gray-600 text-justify'>
                            Vous accompagner dans vos projets les plus stratégiques répondant aux défis du numérique, des réseaux futurs ainsi 
                            que des énergies renouvelables.
                        </p>
                  </span>
                </li>
              </ul>
              {/* <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p> */}
              {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
