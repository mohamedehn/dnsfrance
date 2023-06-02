import {Fragment} from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import React from 'react';


function Mentions() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

  return (
    <div className='bg-white h-full text-justify'>
        <div className="relative md:bg-white md:p-6 mx-auto max-w-7xl px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-1 lg:gap-6">
                <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 
                md:text-xl lg:mx-0 text-justify pt-14">
                  <div>
                    <p className='text-gray-900 font-semibold flex mx-auto w-auto justify-center pt-10' id='mentions'>MENTIONS LEGALES</p>
                    <p className='text-gray-900 font-semibold pt-10 pb-5'>1 - PROPRIÉTÉ</p> 
                    <p className='text-lg leading-8'>
                        Le présent site est la propriété de DNS France <br/>
                        Siège social : 333 cours du 3ème millénaire 69791 Saint-Priest - Tél : 04 78 70 08 74 <br/>
                        Email: contact@datanetworksolutions.fr <br/>
                        Entreprise/ Association créée en 2021 – Code 7120B - Convention IDCC 1596 - SIRET : 90317739200029 <br/>
                        {/* Directeur de la publication : nom, fonction et entreprise <br/> */}
                        Toute reproduction même partielle est interdite sans autorisation préalable.
                    </p> 
                  </div>
                  <div>
                    <p className='text-gray-900 font-semibold pt-10 pb-5'>2 - PRESTATAIRES</p>
                    <p className='text-lg leading-8'>
                        Création / Conception / Développement : <br/>
                        Nom entreprise : Coding Corp <br/>
                        SIRET : en cours d&apos;immatriculation <br/> 
                        Email : mohamed.ebarhmatin@gmail.com <br/>
                        Web : https://mohamedehn.github.io/portfolio <br/>
                        Hébergement : HOSTINGER
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-900 font-semibold flex mx-auto w-auto justify-center pt-10 pb-10' id='politique'>
                        POLITIQUE DE CONFIDENTIALITÉ
                    </p>
                    <p className='text-lg leading-8'>
                        Les internautes accédant au site www.nomentreprise.fr peuvent être amenés à fournir des informations nominatives ou 
                        à caractère personnel dans le cadre des services proposés par l’association Prestat’air.
                    </p>
                    <p className='text-lg leading-8'>
                        L’entreprise DNS France est responsable de traitement au sens du Règlement (UE) 2016/679 dit Règlement Général pour 
                        la Protection des Données ou « RGPD », pour la collecte et le traitement des données à caractère personnel effectuées 
                        sur le site accessible à l’adresse URL: <br/> https://datanetworksolutions.fr/
                    </p>
                    <p className='pt-3'>L’entreprise DNS France traite les données personnelles collectées via son site pour les finalités suivantes :</p>
                    <p className='text-lg leading-8'>
                        -	Afin de permettre au visiteur du site d’obtenir des informations sur les services proposés par l&apos;entreprise DNS 
                            France et les conditions d’éligibilité.<br/>
                        Conformément au RGPD, le visiteur du site dispose sur ses données personnelles des droits suivants :<br/>
                        -	Un droit d’accès<br/>
                        -	Un droit de rectification<br/>
                        -	Un droit d’effacement<br/>
                        -	Le cas échéant, d’un droit à la portabilité de ses données<br/>
                        -	Un droit de demander la limitation du traitement de ses données et/ ou de s’y opposer<br/>
                        -	Le cas échéant, un droit de retirer son consentement<br/>
                        -	Un droit de définir des directives relatives au sort de ses données après sa mort<br/>
                        Le visiteur peut exercer ses droits en envoyant soit :<br/>
                        -	Un courriel au Responsable de Traitement de DNS France <br/>
                        -	Un courrier à l’attention du Responsable de Traitement à l’adresse suivante :<br/>
                        DNS France <br/>
                        333 cours du 3ème millénaire<br/>
                        69791 Saint-Priest<br/>
                    </p>
                    <p className='pt-3 text-justify text-lg leading-8'>
                        Si le visiteur estime que DNS France n’a pas correctement répondu à ses sollicitations, il dispose d’un 
                        droit d’introduire une réclamation auprès de la CNIL. DNS France limite la collecte des données 
                        personnelles au strict nécessaire au regard des finalités des traitements de données, elles sont destinées à 
                        l’association Prestat’air mais sont susceptibles d’être transférées à des organismes publics afin de mieux répondre 
                        à la demande du visiteur.
                    </p>
                    <p className='text-lg leading-8'>
                        Les données ne sont en aucun cas communiquées, ni vendues, ni cédées, louées et / ou commercialisées à des tiers au 
                        sens du RGPD.
                    </p>
                    <p className='text-lg leading-8'>
                        Les données sont stockées exclusivement sur le territoire Français et ne font l’objet d’aucun transfert en dehors de 
                        l’Union Européenne.
                    </p>
                    <p className='text-lg leading-8'>
                        Les données seront conservées tant que le visiteur souhaite recevoir des informations, et le temps nécessaire à la 
                        gestion de sa demande.
                    </p>
                    <p className='text-lg leading-8'>
                        DNS France veille à ce que toutes les mesures techniques et organisationnelles afin de protéger les 
                        données personnelles soient mises en œuvre, ces règles de confidentialités et de sécurité sont également imposées à 
                        l’ensemble du personnel de DNS France , ainsi qu’à tous les prestataires et sous-traitants travaillant 
                        pour DNS France.
                    </p>
                  </div>
                  <div className="rounded-md shadow w-[25%] justify-center flex mx-auto mt-10">
                    <Link
                        href="/"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base 
                        font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg no-underline"
                    >
                        Accueil
                    </Link> 
                </div>
                </div>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">
              </div>
            </div>
    </div>
  )
}

export default Mentions