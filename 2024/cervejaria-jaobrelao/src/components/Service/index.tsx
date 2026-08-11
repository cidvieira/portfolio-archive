import Image from "next/image";
import s from "./s.module.css"
import Link from "next/link";
import beers from "../../../public/cervejas-jaobrelao.png"
import SvgServiceTitle from "./SvgServiceTitle";

export default function Service(){
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl bg-white flex flex-col lg:flex-row">                
                <div className="flex flex-col gap-12 justify-center lg:items-start w-full lg:w-1/2 px-4 md:px-11 xl:px-16 py-11 lg:py-24">
                    <h2>
                        <SvgServiceTitle />
                        <span className="sr-only">Uma experiência cervejeira única!</span>
                    </h2>
                    <p className={`text-black font-bold text-lg md:text-[22px] tracking-[4px] uppercase max-w-[800px] ${s.ts}`}>
                        E aí, sô! Quer ter um pedaço da nossa cervejaria aí na sua casa? 
                        <br /><br />
                        Imagina só, OCÊ curtindo um relaxo no sofá e tomando aquela gelada que OCê mais gosta! 
                        <br /><br />
                        A gente entrega todas as nossas CERVEJAS pra OCÊ, rapidin! É só chamar a gente e pedir a sua preferida. Vai ser ARRETADO DE BOM!
                    </p>
                    <button className="bg-amber font-bold text-black text-[32px] xl:text-[36px] uppercase tracking-[6px] rounded-full px-11 lg:px-12 xl:px-[72px] py-10 w-auto hover:bg-black hover:text-amber transition-all">
                        <Link href="#" title="Peça aqui!" target="_blank">Peça aqui</Link>
                    </button>
                </div>
                <div className={`${s.bgi} lg:w-1/2 h-[800px] lg:h-auto relative flex justify-center items-center`}>
                    <Image src={beers} alt="Uma experiência cervejeira! | Peça aqui!" width={447} height={546} className="aboslute w-[340px] md:w-[450px]" unoptimized/>
                </div>
            </div>
        </section>
    )
}