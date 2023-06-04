import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

//mt-6 text-lg leading-8 text-gray-300

function Confirmation (){
    
    return(
        <div className="bg-white h-screen text-justify pt-20 w-[90%] justify-center mx-auto md:pt-10">
            <div className="prose prose-lg prose-indigo text-gray-900 lg:max-w-none sm:mx-auto sm:max-w-xl sm:text-lg md:text-xl lg:mx-0 
            text-justify h-[68vh]"> 
                <div>
                    <p className="text-gray-900 font-semibold flex mx-auto w-auto justify-center pb-10 text-2xl pt-24">
                        Formulaire envoyé avec succès !
                    </p>
                    <p className="flex mx-auto w-auto justify-center pb-6 text-lg leading-8 text-gray-500">
                        Merci d&apos;avoir pris le temps de nous contacter. Nous avons bien reçu votre message et nous y répondrons dans 
                        les plus brefs délais.
                    </p>
                    <p className="flex mx-auto w-auto justify-center pb-6 text-lg leading-8 text-gray-500">
                        En attendant, n&apos;hésitez pas à parcourir notre site pour découvrir nos services.
                    </p>
                    <p className="flex mx-auto w-auto justify-center pb-6 text-lg leading-8 text-gray-500">
                        Cliquez&nbsp;<Link href="/" className="text-black underline">ici</Link>&nbsp;pour retourner à l&apos;accueil.
                    </p>
                    <p className="flex mx-auto w-auto justify-center pb-6 text-lg leading-8 text-gray-500">A bientôt !</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Confirmation;