"use client"
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className='fixed top-2 z-50 px-4 w-full'>
            <div className='container flex justify-between items-center rounded-lg bg-black py-3'>

                <div className="flex flex-shrink-0 items-center justify-between">
                    <Image
                        className='mr-2'
                        src="/EsLogo.png"
                        width={40}
                        height={40}
                        alt='Logo'
                    />
                    <div className="text-white text-sm tracking-tighter">RealEs</div>
                </div>

                <div className='hidden lg:flex'>
                    <ul className='flex items-center gap-4'>
                        {NAV_LINKS.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.url}
                                    className='text-sm text-white hover:text-neutral-500'>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='hidden text-sm text-white gap-4 lg:flex'>
                    <Button variant={'outline'} className='mr-2 bg-black'>Sign in</Button>
                    <Button className='bg-slate-800'>Contact</Button>
                </div>


                <div className="flex-col justify-end text-white md:flex lg:hidden">
                    <Button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {isOpen && (
                <div className='rounded-md bg-black lg:hidden'>

                    <ul className='flex flex-col items-center'>
                        {NAV_LINKS.map((item, index) => (
                            <li key={index} className='py-6'>
                                <Link
                                    href={item.url}
                                    className='text-white hover:text-gray-300'>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className='flex items-center justify-center pb-8 lg:hidden text-white'>
                        <Button variant={'outline'} className='mr-2 bg-black'>Sign in</Button>
                        <Button className='bg-slate-800'>Contact</Button>
                    </div>

                </div>
            )}


        </nav>
    )
}

export default NavBar