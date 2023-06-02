import React from "react"
import about from "../public/assets/about.avif"
import Image from "next/image"
import { useState, useEffect, useRef } from 'react';

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = null;
    const step = Math.ceil((end - start) / duration * 10); // Calculer le pas pour chaque itération
    const countUp = () => {
      setCount((prevCount) => {
        const newCount = prevCount + step;
        if (newCount >= end) {
          clearInterval(timer);
          return end;
        }
        return newCount;
      });
    };
    timer = setInterval(countUp, 50); // Définir l'intervalle de temps
    return () => clearInterval(timer);
  }, [start, end, duration]);

  return <span>{count.toLocaleString()}</span>; // Formatter les données avec des séparateurs de milliers
};

const links = [
    { name: 'Nos pôles', href: '#poles' },
    // { name: 'Nos experts', href: '#experts' },
    { name: 'Nos valeurs', href: '#content' },
  ]
  const stats = [
    { name: 'Présent dans 4 pays', value: '4' },
    { name: 'Plus de 100 sites', value: '100' },
    { name: 'Clients', value: '150' },
  ]
  
  export default function About() {

      //va permettre aux compteurs de démarrer lorsque les éléments sont visible à l'écran
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => observer.disconnect();
    }, []);

    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 sm:h-screen" id="about">
        <Image
          src={about}
          alt="/"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="max-w-full absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10 md:pt-0">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
                Data Network Solutions est une startup indépendante de conseil et d’ingénierie spécialisée dans la transition digitale & énergétique,
                ainsi que dans les réseaux de télécommunications.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white" ref={ref}>
                    {isVisible &&<Counter start={0} end={stat.value} duration={900} />}
                  </dd>
                </div>
              ))}
              <div className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">Notre engagement</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">illimité</dd>
                </div>
            </dl>
          </div>
        </div>
      </div>
    )
  }
  