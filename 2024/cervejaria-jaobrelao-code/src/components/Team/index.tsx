import Image from "next/image";
import s from "./s.module.css"
import SvgTeamTitle from "./SvgTeamTitle";
import ale from "../../../public/equipe/ale-quaresma.png"
import pedro from "../../../public/equipe/pedro-dourado.png"
import SvgAleName from "./SvgAleName";
import SvgPedroName from "./SvgPedroName";

export default function Team(){
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl bg-amber flex flex-col justify-center items-center gap-12 px-4 lg:px-8 py-11 lg:py-24">
                <h2 className={`flex flex-col gap-3 justify-center items-center`}>
                    <SvgTeamTitle />
                    <span className="sr-only">Nossa Equipe</span>
                </h2>
                <h3 className={`text-black font-bold text-lg md:text-[22px] tracking-[2px] uppercase text-center w-auto max-w-5xl ${s.ts}`}>
                    Nossa equipe é formada por profissionais que tem como missão superar as expectativas e satisfação de nossos clientes, buscando entender as necessidades para transformá-las em soluções.
                </h3>                
                <div className="flex flex-col sm:flex-row gap-14 justify-center items-center">
                    <div className="flex flex-col gap-10 justify-center items-center">
                        <Image src={ale} alt="Alê Quaresma | Sócio Fundador" className={`border-8 border-white rounded-full ${s.its}`} unoptimized/>
                        <div>
                            <h4>
                                <SvgAleName />
                                <span className="sr-only">Alê Quaresma</span>
                            </h4>
                            <h5 className="uppercase font-bold text-xl text-center">Sócio Fundador</h5>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 justify-center items-center">
                        <Image src={pedro} alt="Pedro Dourado | Sócio Fundador" className={`border-8 border-white rounded-full ${s.its}`} unoptimized/>
                        <div>
                            <h4>
                                <SvgPedroName />
                                <span className="sr-only">Pedro Dourado</span>
                            </h4>
                            <h5 className="uppercase font-bold text-xl text-center">Sócio Fundador</h5>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    )
}