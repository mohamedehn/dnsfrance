import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import GoogleMap from "./GoogleMaps";

export default function Form (){

    //on initialise un objet contenant les différentes partis du formulaire afin de les initialiser avec "an empty strings"
  const formInitialDetails = {
    firstName : "",
    lastName : "",
    email : "",
    phone : "",
    subject : "",
    message : "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails); 
  const [buttonText, setButtonText] = useState("Envoyé"); //gestion de l'état du bouton envoyer
  const [status, setStatus] = useState({});
  const router = useRouter(); // pour rediriger sur la page de confirmation

  const onFormUpdate = (category, value) =>{
    setFormDetails({
      ...formDetails,
      [category] : value,
    })
  };

  //function pour envoyer l'email
  const handleSubmit = async (e) =>{
    e.preventDefault(); //pour éviter que la page se rafraichisse
    setButtonText("Envoi en cours")
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
  
      if (response.ok) {
        setStatus({
          success: true,
          message: "Formulaire envoyé avec succès!",
        });
        router.push("/confirmation");
      } else {
        setStatus({
          danger: false,
          message: "Un problème est survenu...",
        });
      }
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
      setStatus({
        danger: false,
        message: "Une erreur s'est produite lors de l'envoi du formulaire.",
      });
    }
  
    setButtonText("Envoyé");
    setFormDetails(formInitialDetails);
  };

  // les variable ci-dessous permettent de récupérer les cookies et ainsi vérifier si ils sont accepté ou non
  // on interviendra ensuite sur le bouton envoyer afin de le rendre inactif si les cookies ont été rejetées ou en attente de choix
  const [isCookiesAccepted, setIsCookiesAccepted] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie.split(';').find(cookie => cookie.trim().startsWith('cookiesAccepted='));
    const isAccepted = cookiesAccepted && cookiesAccepted.split('=')[1] === 'true';
    setIsCookiesAccepted(isAccepted);
  }, []);

//fonction qui permettra d'afficher un message d'alerte
  function handleClick() {
    if (!isCookiesAccepted) {
      alert("Veuillez accepter les cookies pour continuer.");
    }
  }
  
  // function qui permet de bloquer l'envoi du formulaire, de supprimer les cookies du local storage, de refresh la page + afficher popUpCookies
  const acceptCookies = (event) => {
    event.preventDefault();
    localStorage.removeItem("cookiesAccepted");
    window.location.reload();
  };

    return (
      <div className="bg-white" id='contact'>
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <div className="relative bg-white shadow-2xl">
          <h2 className="sr-only ">Contactez&#8209;nous</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-white py-10 px-6 sm:px-10 xl:p-12">
              <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Contactez-nous</h3>
              <p className="mt-6 max-w-3xl text-base text-gray-900 text-justify">
                Nos services sont disponibles pour vous répondre du lundi au vendredi, de 8h30 à 12h et de 13h30 à 17h. 
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-gray-900">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-900" aria-hidden="true" />
                  <span className="ml-3">04 78 70 08 74 </span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-gray-900">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-900" aria-hidden="true" />
                  <span className="ml-3">
                    <a href="maito:contact@association-prestatair.com" className='no-underline text-gray-900'>
                      contact@datanetworksolutions.fr
                    </a>
                  </span>
                </dd>
              </dl>
              <div>
              <div className="map-container-2 w-full pt-10">
                <GoogleMap/>
              </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">Ecrivez-nous un message</h3>
              <form onSubmit={handleSubmit} encType="multipart/form-data" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                    Prénom
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      value={formDetails.firstName}
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      onChange={(e) => onFormUpdate("firstName", e.target.value)}
                      className="block w-full rounded-sm border-gray-300 py-3 px-4 text-gray-900 shadow-lg focus:border-gray-900 focus:ring-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                    Nom
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      value={formDetails.lastName}
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-lg focus:border-gray-900 focus:ring-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      value={formDetails.email}
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-lg focus:border-gray-900 focus:ring-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                      Téléphone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optionnel
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      value={formDetails.phone}
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-lg focus:border-gray-900 focus:ring-gray-900"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                    Objet
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      value={formDetails.subject}
                      name="subject"
                      id="subject"
                      onChange={(e) => onFormUpdate("subject", e.target.value)}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-lg focus:border-gray-900 focus:ring-gray-900"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 caractères
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      required
                      value={formDetails.message}
                      name="message"
                      rows={4}
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-lg focus:border-gray-900 focus:ring-gray-900"
                      aria-describedby="message-max"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between col-span-2">
                  {/* <div className="relative">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-900">
                      Pièce jointe<span className="text-sm font-normal text-gray-500">(optionnel)</span> 
                    </label>
                    <input 
                      type="file"
                      id="file" 
                      name="file" 
                      value={formDetails.file}
                      onChange={(e) => onFormUpdate("file", e.target.value)}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-lg focus:border-gray-900 focus:ring-gray-900"/>
                  </div> */}
                  {isCookiesAccepted ? 
                  <div className="sm:col-span-2 sm:justify-end block">
                  <button
                    type="submit"
                    onClick={handleClick}
                    disabled={!isCookiesAccepted} // permet de vérifier si l'utilisateur à accepté ou non les cookies
                    className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 
                    px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 
                    focus:ring-[#9aabb2] focus:ring-offset-2 sm:w-auto"
                  >
                    {buttonText}
                  </button> 
                  {status.message && (
                    <div>
                      <p className={status.success === false ? "danger, text-red-700" : "success, text-green-600"}>
                        {status.message}
                      </p>
                    </div>
                  )}
                  </div> :
                  <div>
                    <button onClick={acceptCookies}>Merci d&apos;accepter au préalable les cookies en cliquant ici</button>
                  </div>
                }
                </div>
                {/* {isCookiesAccepted ? 
                  <div className="sm:col-span-2 sm:justify-end block">
                  <button
                    type="submit"
                    onClick={handleClick}
                    disabled={!isCookiesAccepted} // permet de vérifier si l'utilisateur à accepté ou non les cookies
                    className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 
                    px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 
                    focus:ring-[#9aabb2] focus:ring-offset-2 sm:w-auto"
                  >
                    {buttonText}
                  </button> 
                  {status.message && (
                    <div>
                      <p className={status.success === false ? "danger, text-red-700" : "success, text-green-600"}>
                        {status.message}
                      </p>
                    </div>
                  )}
                  </div> :
                  <div>
                    <button onClick={acceptCookies}>Merci d&apos;accepter au préalable les cookies en cliquant ici</button>
                  </div>
                } */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
    