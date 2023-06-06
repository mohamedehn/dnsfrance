import React from "react";
import job from "../public/data.json";
import { useRouter } from 'next/router';


export default function JobDescription() {
  const router = useRouter();
  const { id } = router.query; // Récupérer l'ID à partir de router.query

  // Vérifier si l'ID est défini ou en cours de chargement
  if (!id) {
    return <div>Chargement...</div>;
  }

  const parsedId = parseInt(id); // Convertir l'ID en nombre entier

  const product = job.find((offer) => offer.id === parsedId);

  if (!product) {
    return <div className="pt-28">Offre d&apos;emploi introuvable.</div>;
  }

  return (
    <div className="jobDetail mx-auto max-w-7xl px-4 sm:px-6">
      {/* Afficher les détails de l'offre d'emploi */}
      <div className="" key={product.id}>
                            <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-10">
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">{product.title}</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
                                </div>
                                <div className="border-t border-gray-200">
                                    <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500"></dt> 
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"></dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Intitulé du poste</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{product.title}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Date de publication</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{product.date}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Rémunération</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">A déterminer selon le profil</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Description</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{product.description}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Votre profil : </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                            <div className="flex w-0 flex-1 items-center">
                                            {product.missions}
                                                <span className="ml-2 w-0 flex-1 truncate"></span>
                                            </div>
                                            </li>
                                        </ul>
                                        </dd>
                                    </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
    </div>
  );
}
