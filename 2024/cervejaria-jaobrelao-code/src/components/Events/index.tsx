import s from "./s.module.css"
import SvgEventsTitle from "./SvgEventsTitle";
import Link from "next/link";

export default function Events(){

    return (
        <section id="seu-evento" >
            <div className="mx-auto max-w-screen-2xl bg-amber flex flex-col lg:flex-row">                
                <div className="flex flex-col gap-12 justify-center items-center lg:items-start w-full lg:w-1/2 px-4 md:px-11 xl:px-16 py-11 lg:py-24">
                    <h2 className={`flex flex-col gap-3 justify-center items-center text-white text-[28px] md:text-4xl xl:text-5xl tracking-[6px] uppercase text-center text-stroke-[3px] text-stroke-white ${s.ts}`}>
                        Sua Festa, Seu Evento
                        <SvgEventsTitle />
                        <span className="sr-only">Nosso Chopp</span>
                    </h2>
                    <p className={`text-black font-bold text-lg md:text-[22px] tracking-[4px] uppercase max-w-[800px] ${s.ts}`}>
                        A Jãobrelão está pronta para transformar seu evento em uma experiência inesquecível!
                        <br /><br />
                        Imagine um chopp geladinho, cremoso e feito com o maior carinho, servido diretamente do nosso carro personalizado, no conforto do seu espaço. 
                        <br /><br />
                        Seja um churrasco no quintal, uma festa de aniversário ou um evento corporativo, nós levamos a alegria e o sabor da nossa cerveja artesanal até você.
                    </p>
                    <button className="bg-black font-bold text-white text-[32px] xl:text-[36px] uppercase tracking-[4px] rounded-full px-10 lg:px-12 xl:px-[72px] py-10 w-auto hover:bg-white hover:text-black transition-all">
                        <Link href="#" title="Reserve seu evento" target="_blank">Reserve seu evento</Link>
                    </button>
                </div>
                <div className={`${s.bgi} lg:w-1/2 h-[800px] lg:h-auto`}></div>
                
            </div>
        </section>
    )
}