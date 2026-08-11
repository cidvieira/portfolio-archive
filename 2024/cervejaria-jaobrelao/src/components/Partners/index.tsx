import Image from "next/image";
import s from "./s.module.css"
import SvgPartnersTitle from "./SvgTitlePartners/SvgPartnersTitle";
import { partners } from "./Partners.data";

export default function Partners(){
    return (
        <section id="parceiros">
            <div className="mx-auto max-w-screen-2xl bg-amber flex flex-col justify-center items-center gap-12 px-4 lg:px-8 py-11 lg:py-24">
                <h2 className={`flex flex-col gap-3 justify-center items-center`}>
                    <SvgPartnersTitle />
                    <span className="sr-only">Parceiros</span>
                </h2>               
                <div className="flex flex-wrap gap-12 justify-center items-center max-w-5xl">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex flex-col w-36 sm:w-64 gap-8 justify-center items-center">
                            <Image src={partner.image} alt={`Parceiro Jãobrelão | ${partner.name}`} className={`border-8 border-white rounded-full ${s.its}`} width={200} height={200} unoptimized/>
                            <div className="flex flex-col items-center">
                                <h4>
                                    {partner.svgTitle}
                                    <span className="sr-only">{partner.name}</span>
                                </h4>
                                <h5 className="uppercase font-bold text-sm md:text-xl text-center">{partner.description}</h5>
                            </div>
                        </div>
                    ))}
                    
                </div>                
            </div>
        </section>
    )
}