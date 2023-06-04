import Image from "next/image"; //useful to import images with next without import it from any files like react
import { useRouter } from "next/router";
import logo from "../public/assets/logo.png"

import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {TagIcon, Bars3Icon, BoltIcon, RssIcon, SunIcon, SquaresPlusIcon, XMarkIcon,} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from "next/link"; 

const group = [
  { name: 'A Propos de DNS', 
    description: 'Tout savoir sur le groupe DNS', 
    href: '#about', 
    icon: TagIcon },
  { name: 'Green Energy Solutions', 
    description: "Conseils, études et travaux en matière d'économie énergétique", 
    href: '#ges', 
    icon: SunIcon },
  { name: 'DNS France', 
    description: "Conseil et d’ingénierie spécialisée dans la transition digitale & énergétique", 
    href: '#dns', 
    icon: RssIcon },
  { name: 'DNS Foundation', 
    description: "DNS place l'humain au coeur de ses valeurs", 
    href: '/foundation', 
    icon: SquaresPlusIcon },
    // { name: 'DNS IT', 
  //   description: 'Communication, développement web, SEO, social media et community management', 
  //   href: '#', 
  //   icon: ArrowPathIcon },
]

export default function Navbar() {

  const router = useRouter();
    
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // permet de fermer le menu sur la version mobile lors d'un clique sur un lien
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white fixed w-full z-50 max-w-full">
      <nav className="flex max-w-full items-center justify-between p-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-16" src={logo} alt="/" width={130} height={64} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">
              Accueil
          </Link>
          {router.pathname === "/" && (
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">
              Le Groupe DNS
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>
          
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {group.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-500" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          )}
          {(router.pathname === "/" || router.pathname === "/foundation" || router.pathname === "/jobs" || router.pathname === "/actu"
          || router.pathname === "/mentions" || router.pathname === "/cookies") && (
          <Link href="/actu" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">
            L&apos;Actu
          </Link>
          )}
          <Link href="/jobs" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">
            Nos Jobs
          </Link>
          {router.pathname === "/" && (
          <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">
            Contact
          </a>
          )}
        </Popover.Group>
        
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
                <span className="sr-only">Your Company</span>
                <Image className="h-[64px] w-[130px]" src={logo} alt="/" width={130} height={64}/>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-2 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 pt-12">
                  {group.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900
                      hover:text-blue-500"
                      onClick={closeMobileMenu}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 py-2">
                <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500"
                    onClick={closeMobileMenu}
                  >
                    Accueil
                  </Link>
                  <Link
                    href="/actu"
                    className="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500"
                    onClick={closeMobileMenu}
                  >
                    L&apos;Actu
                  </Link>
                  <Link
                    href="/jobs"
                    className="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500"
                    onClick={closeMobileMenu}
                  >
                    Nos Jobs
                  </Link>
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500"
                    onClick={closeMobileMenu}
                  >
                    DNS Foundation
                  </Link>
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
