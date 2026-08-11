"use client"

import { useState } from 'react'
import logo from "../../../public/logo-jaobrelao.png"
import Image from 'next/image'
import Link from 'next/link'
import HandleScroll from './HandleScroll'
import { titleLink } from './TitleLinkMenu'
import { Cross1Icon, TextAlignCenterIcon } from '@radix-ui/react-icons'


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { activeSection } = HandleScroll()

    return (
        <header className="bg-white fixed top-0 w-full z-40">
            <nav className="mx-auto max-w-screen-2xl px-4 lg:px-8 py-px flex items-center justify-between relative" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/">
                        <span className="sr-only">Cervejaria Jãobrelão</span>
                        <Image width={300} height={90} className="w-[132px] lg:w-[300px]" src={logo} alt="Logo Cervejaria Jãobrelão" unoptimized/>
                    </Link>
                </div>
                <ul className="hidden lg:flex items-end">
                    {titleLink.map((item, index) => (
                        <li key={index} className={`${item.title === "Nossas Cervejas" ? "group": ""} mx-3 relative py-5`} >
                            <Link 
                                href={item.path}
                                title={item.title}                                 
                            >  
                                <span className='sr-only'>{item.title}</span>
                                {activeSection === item.path.substring(1) ? item.svgTitleActive : item.svgTitle}                                    
                            </Link>
                            {item.submenu === undefined ? null : 
                                <ul className="hidden group-hover:flex flex-col justify-center absolute -left-3 py-5 w-[168px] rounded-lg">
                                    {item.submenu.map((i, index) => (
                                        <li key={index} className="px-3 py-2 last:pb-5 last:rounded-b-lg bg-white">
                                            <Link 
                                                href={i.path}
                                                title={i.title}                                                     
                                            >  
                                                <span className='sr-only'>{i.title}</span>
                                                {activeSection === i.path.substring(1) ? i.svgTitleActive : i.svgTitle}                                    
                                            </Link>
                                        </li>                              
                                    ))}         
                                </ul>
                            }
                        </li>                              
                    ))}                
                </ul>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-hidden="true"
                    >
                        <span className="sr-only">Abrir menu</span>
                        <TextAlignCenterIcon width={22} height={24} />     
                    </button>
                </div>
            </nav>
            <div style={{transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s"}} className={`bg-white z-10 w-screen h-screen inset-y-0 absolute ${mobileMenuOpen ? "z-50 visible opacity-100 right-0" : "-right-full opacity-0 invisible" }`}>            
                <div className="flex items-center justify-between p-4">
                    <Link href="/">
                        <span className="sr-only">Cervejaria Jãobrelão</span>
                        <Image width={132} height={40} src={logo} alt="Cervejaria Jãobrelão" unoptimized/>
                    </Link>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Fechar menu</span>
                        <Cross1Icon width={16} height={16} />
                    </button>
                </div>
                <nav className="grid justify-center place-content-center h-[calc(100vh_-_5rem)]">
                    <ul className="flex flex-col items-center gap-8 my-8 ">
                        {titleLink.map((item, index) => (
                            <li key={index} className={`${item.title === "Nossas Cervejas" ? "group": ""} mx-2 relative flex flex-col justify-center items-center`} >
                                <Link 
                                    href={item.path}
                                    title={item.title} 
                                    onClick={() => setMobileMenuOpen(false)}
                                >  
                                    <span className='sr-only'>{item.title}</span>
                                    {activeSection === item.path.substring(1) ? item.svgTitleActive : item.svgTitle}
                                </Link>
                                {item.submenu === undefined ? null : 
                                    <ul className="flex flex-col justify-center items-center gap-3 bg-white py-5">
                                      {item.submenu.map((i, index) => (
                                            <li key={index} className="px-3">
                                                <Link 
                                                    href={i.path}
                                                    title={i.title}
                                                    onClick={() => setMobileMenuOpen(false)} 
                                                >  
                                                    <span className='sr-only'>{i.title}</span>
                                                    {activeSection === i.path.substring(1) ? i.svgTitleActive : i.svgTitle}                                    
                                                </Link>
                                            </li>                              
                                        ))}         
                                    </ul>
                                }
                            </li>  
                        ))}
                    </ul>
                </nav>           
            </div>
        </header>
  )
}
