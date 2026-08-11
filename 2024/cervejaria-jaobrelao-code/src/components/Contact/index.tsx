import Image from "next/image";
import logo from "../../../public/logo-jaobrelao-light.png"
import SvgContact from "./SvgContact/SvgContact";
import Link from "next/link";
import IconWhatsApp from "./SvgContact/IconWhatsApp";
import IconEmail from "./SvgContact/IconEmail";
import SvgAddress from "./SvgContact/SvgAddress";
import IconPlace from "./SvgContact/IconPlace";
import SvgFollow from "./SvgContact/SvgFollow";
import IconInstagram from "./SvgContact/IconInstagram";
import IconLinkedin from "./SvgContact/IconLinkedin";

export default function Contact(){
    return (
        <section id="contato">
            <div className="mx-auto max-w-screen-2xl bg-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 px-4 lg:px-8 py-11 lg:py-24">                              
                <div className="flex justify-center md:justify-start w-auto">
                    <Image src={logo} alt="Cervejaria Jãobrelão" width={224} height={200} unoptimized/>    
                </div>
                <div className="flex flex-col min-w-[300px] max-w-[300px]">
                    <h3>
                        <SvgContact />    
                        <span>Contato</span>
                    </h3>
                    <div className="flex flex-col gap-5">
                        <Link href="#" target="_blank" title="Contato pelo WhatsApp" className="flex flex-row items-center gap-3 text-white hover:text-amber font-bold text-[22px] tracking-[2px] transition-colors">
                            <IconWhatsApp />
                            <span>(19) 99999-9999</span>
                        </Link>
                        <Link href="#" target="_blank" title="Contato por e-mail" className="flex flex-row items-center gap-3 text-white hover:text-amber font-bold text-[22px] tracking-[2px] uppercase transition-colors">
                            <IconEmail />
                            <span>email@jaobrelao.com.br</span>
                        </Link>
                    </div>
                </div>                    
                <div className="flex flex-col w-auto">
                    <h3>
                        <SvgAddress />    
                        <span>Endereço</span>
                    </h3>
                    <div className="flex flex-col gap-5">
                        <Link href="#" target="_blank" title="Endereço" className="flex flex-row items-center gap-3 text-white font-bold text-[22px] tracking-[2px] uppercase">
                            <IconPlace />
                            <span>Louveira - sp</span>
                        </Link>
                    </div>
                </div>                    
                <div className="flex flex-col w-auto min-w-[220px] max-w-[220px]">
                    <h3>
                        <SvgFollow />    
                        <span>Siga-nos</span>
                    </h3>
                    <div className="flex flex-row gap-5">
                        <Link href="#" target="_blank" title="Instagram Cervejaria Jãobrelão" className="flex justify-center items-center bg-amber border-white border-[6px] rounded-full size-24 hover:bg-white hover:border-amber transition-all">
                            <IconInstagram />
                        </Link>
                        <Link href="#" target="_blank" title="LinkedIn Cervejaria Jãobrelão" className="flex justify-center items-center bg-amber border-white border-[6px] rounded-full size-24 hover:bg-white hover:border-amber transition-all">
                            <IconLinkedin />
                        </Link>
                    </div>
                </div>                    
            </div>
        </section>
    )
}