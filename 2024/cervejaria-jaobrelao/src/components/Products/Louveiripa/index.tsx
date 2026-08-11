import Image from "next/image";
import louveiripa from "../../../../public/cervejas/cerveja-jaobrelao-louveiripa-session-ipa.png"
import SvgLouveiripaTitle from "./SvgLouveiripaTitle";
import s from "../s.module.css"

export default function Louveiripa(){
    return (
        <section id="louveiripa">
            <div className="mx-auto max-w-screen-2xl px-4 lg:px-8 py-11 lg:py-24 bg-green-950">
                <div className="flex flex-wrap gap-5 md:gap-16 justify-center items-center">
                    <Image src={louveiripa} alt="Cerveja Jãobrelão Louveiripa Session Ipa" width={221} height={640} className="w-28 sm:w-40 lg:w-[220px]" unoptimized/>
                    <div className="flex flex-col justify-center items-center">
                        <h3>
                            <SvgLouveiripaTitle />
                            <span className="sr-only">Cerveja Louveiripa</span>
                        </h3>

                        <h4 className={`font-sans text-7xl lg:text-8xl text-white mt-4 mb-8 ${s.ts}`}>Session IPA</h4>
                        
                        <table className="table-auto text-lime font-bold text-[2rem] text-center">
                            <thead className="bg-green-800">
                                <tr>
                                    <th className="px-16 py-3">ABV</th>
                                    <th className="px-16 py-3">IBU</th>
                                </tr>
                            </thead>
                            <tbody className="bg-green-400">
                                <tr>
                                    <td className="px-16 py-3">4,2%</td>
                                    <td className="px-16 py-3">35</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className={`text-white text-lg md:text-[20px] text-justify uppercase tracking-[2px] mt-10 max-w-[800px] xl:max-w-[440px] ${s.ts}`}>
                        Essa cerveja é mais que boa, é arretada de boa! <strong className="text-lime">LouveirIPA</strong> traz o sabor do interior de São Paulo direto para o copo, com um toque cítrico que é de lamber os beiços. 
                        <br />
                        <br />
                        Com um gosto que lembra colheita no pé, é como se tivessem engarrafado a alma da roça.
                        <br />
                        <br />
                        Dá uma olhada nesse rótulo, é igual a cerca de fazenda e a gente sabe que cerca boa faz vizinho virar amigo.
                        <br />
                        <br />
                        É cerveja pra tomar com os amigos na varanda, jogando uma prosa boa. Aqui, a vida é simples e feliz.
                        <br />
                        <br />
                        Então, meu amigo, pega essa LouveirIPA, abre um sorriso e brinda com o jeitão do interior paulista! 
                    </p>
                </div>
            </div>
        </section>
    )
}