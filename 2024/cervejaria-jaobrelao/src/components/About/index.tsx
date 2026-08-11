import Image from "next/image";
import s from "./s.module.css"
import logo from "../../../public/logo-jaobrelao-2.png"
import SvgAboutTitle from "./SvgAboutTitle";
import HandleScroll from "../Header/HandleScroll";

export default function About(){     

    return (
        <section id="a-cervejaria" >
            <div className="mx-auto max-w-screen-2xl bg-black flex flex-col lg:flex-row">                 
                <div className={`${s.bgi} lg:w-1/2 h-[800px] lg:h-auto relative flex justify-center items-center`}>
                    <Image src={logo} alt="Cervejaria Jãobrelão" width={464} height={400} className="absolute w-[340px] lg:w-[464px]" unoptimized/>
                </div>   

                <div className="flex flex-col gap-12 justify-center lg:w-1/2 px-4 md:px-11 xl:px-16 py-11 lg:py-24">
                    <h2>
                        <SvgAboutTitle />
                        <span className="sr-only">Prazer, somos a cervejaria Jãobrelão</span>
                    </h2>
                    <p className={`text-white text-lg md:text-[22px] tracking-[4px] uppercase max-w-[800px]`}>
                        Uma cervejaria cigana, que desenvolve suas próprias receitas e produz em uma das melhores fábricas de produção de cerveja terceirizada. 
                        <br /><br />
                        Nossos ingredientes são escolhidos com cuidado para levar uma experiência diferenciada para quem bebe.  
                        <br /><br />
                        Nascida em Louveira, interior de São Paulo, carregamos a simplicidade do interior nos nossos rótulos e proporcionamos momentos únicos de prosa, companheirismo e união ao redor de uma <strong>Jãobrelão</strong>.
                    </p>
                </div>                
            </div>
        </section>
    )
}