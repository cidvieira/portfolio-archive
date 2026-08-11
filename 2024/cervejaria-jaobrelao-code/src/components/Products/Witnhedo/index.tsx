import Image from "next/image";
import witnhedo from "../../../../public/cervejas/cerveja-jaobrelao-witnhedo-witbier.png"
import SvgWitnhedoTitle from "./SvgWitnhedoTitle";
import s from "../s.module.css"

export default function Witnhedo(){
    return (
        <section id="witnhedo">
            <div className="mx-auto max-w-screen-2xl px-4 lg:px-8 py-11 lg:py-24 bg-rose-800">
                <div className="flex flex-wrap gap-5 md:gap-16 xl:gap-20 justify-center items-center">
                    <Image src={witnhedo} alt="Cerveja Jãobrelão Witnhedo Witbier com Pimenta Rosa" width={221} height={640} className="w-28 sm:w-40 lg:w-[220px]" unoptimized/>
                    <div className="flex flex-col justify-center items-center">
                        <h3>
                            <SvgWitnhedoTitle />
                            <span className="sr-only">Cerveja Witnhedo</span>
                        </h3>

                        <h4 className={`font-sans text-7xl lg:text-8xl text-white mt-4 mb-8 text-center ${s.ts}`}>Witbier com <span className="block">Pimenta Rosa</span></h4>
                        
                        <table className="table-auto text-rose-950 font-bold text-[2rem] text-center">
                            <thead className="bg-rose-400">
                                <tr>
                                    <th className="px-16 py-3">ABV</th>
                                    <th className="px-16 py-3">IBU</th>
                                </tr>
                            </thead>
                            <tbody className="bg-rose-200">
                                <tr>
                                    <td className="px-16 py-3">5,2%</td>
                                    <td className="px-16 py-3">17</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className={`text-white text-lg md:text-[20px] text-justify uppercase tracking-[2px] mt-10 max-w-[800px] xl:max-w-[440px] ${s.ts}`}>
                        <strong className="text-rose-200">Witnhedo</strong>: Sabor Caipira, Toque de Pimenta Rosa Essa cerveja é chique demais, é coisa de tirar o chapéu!
                        <br />
                        <br />
                        <strong className="text-rose-200">Witnhedo</strong> é mais que uma Witbier, é um pedaço do sertão com um toque de pimenta rosa. Viu o pescador e o cachorro? 
                        Eles tão lá na beira do lago, pescando ao pôr do sol. É a cena mais linda do interior.
                        <br />
                        <br />
                        É cerveja pra tomar na varanda, vendo o sol se pôr e imaginando as histórias que esse fazendeiro e seu cachorro têm pra contar. 
                        <br />
                        <br />
                        Então, <strong className="text-rose-950">Jãobrelão</strong>, pega tua caneca, faz um brinde e mergulha nesse sabor único de <strong className="text-rose-200">Witnhedo</strong>, a cerveja caipira com um toque sofisticado.
                    </p>
                </div>
            </div>
        </section>
    )
}