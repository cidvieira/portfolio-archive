import s from "./s.module.css"
import SvgHeroTitleMd from "./SvgHeroTitleMd"
import SvgHeroTitle from "./SvgHeroTitle"

export default function Hero(){
    return (
        <section id='inicio'>
            <div className="mx-auto max-w-screen-2xl">
                <div className={`h-screen ${s.bgi} relative`}>
                    <div className="flex flex-col items-center gap-10 text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-auto pt-24">
                        <h1>
                            <SvgHeroTitle />
                            <SvgHeroTitleMd />
                            <span className="sr-only">A cerveja que traz a cidade e o campo num gole só!</span>
                        </h1>
                        <p className={`uppercase text-3xl md:text-[46px] text-white tracking-[2px] md:leading-[3.5rem] font-bold min-w-[310px] md:w-[610px] ${s.ts}`}>Elaborado com os melhores ingredientes e paixão pela cerveja.</p>
                    </div>
                </div> 
            </div>
        </section>
    )
}