import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../public/assets/logo.png"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const dns = [
    { name: 'A propos de DNS', href: '#' },
    { name: 'Green Energy Solutions', href: '#'},
    { name: 'DNS Works', href: '#' },
    { name: 'DNS Consulting', href: '#' },
  ]


function Navbar() {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] flex items-center justify-between'>
        <div className='w-auto'>
            <Link href="/">
                <Image src={logo} alt="/" width="125" height="50"/>
            </Link>
        </div>
        <div className='mx-10 w-auto'>
            <ul className='flex justify-around w-auto'>
                <Link href="/">
                    <li className='ml-10 text-l uppercase hover:border-b'>
                    <Popover className="relative">
                        <Popover.Button className="inline-flex items-center">
                            <span className=''>LE GROUPE DNS</span>
                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
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
                            <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                            <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                {dns.map((item) => (
                                <div key={item.name} className="relative rounded-lg p-4 hover:bg-gray-50">
                                    <a href={item.href} className="ml-10 text-l uppercase">
                                        {item.name}
                                    </a>
                                </div>
                                ))}
                            </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    </li>
                </Link>
                <Link href="/">
                    <li className='ml-10 text-l uppercase hover:border-b'>ACTU</li>
                </Link>
                <Link href="/">
                    <li className='ml-10 text-l uppercase hover:border-b'>NOS METIERS</li>
                </Link>
                <Link href="/">
                    <li className='ml-10 text-l uppercase hover:border-b'>CARRIERES</li>
                </Link>
                <Link href="/">
                    <li className='ml-10 text-l uppercase hover:border-b'>CONTACT</li>
                </Link>
            </ul>
        </div>

                <h1>Data Network Solutions</h1> 
                <h2>IT - TELECOM - ENGINEERING</h2> 
                <p>L&apos;étape la plus importante pour une entreprise, est de passer à la suivante</p>
    </div>
  )
}

export default Navbar