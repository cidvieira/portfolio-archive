import Image from "next/image";
import campineipa from "../../../../public/cervejas/cerveja-jaobrelao-campineipa-new-england-ipa.png"
import SvgCampineipaTitle from "./SvgCampineipaTitle";
import s from "../s.module.css"

export default function Campineipa(){
    return (
        <section id="campineipa">
            <div className="mx-auto max-w-screen-2xl px-4 lg:px-8 py-11 lg:py-24 bg-orange-800">
                <div className="flex flex-wrap gap-5 md:gap-16 xl:gap-20 justify-center items-center">
                    <Image src={campineipa} alt="Cerveja Jãobrelão Campineipa New England Ipa" width={221} height={640} className="w-28 sm:w-40 lg:w-[220px] order-2 lg:order-3" unoptimized/>
                    <div className="flex flex-col justify-center items-center order-1 lg:order-2">
                        <h3>
                            <SvgCampineipaTitle />
                            <span className="sr-only">Cerveja Campineipa</span>
                        </h3>

                        <h4 className={`font-sans text-7xl lg:text-8xl text-white mt-4 mb-8 text-center ${s.ts}`}>New England <br /> IPA</h4>
                        
                        <table className="table-auto text-orange-950 font-bold text-[2rem] text-center">
                            <thead className="bg-orange-400">
                                <tr>
                                    <th className="px-16 py-3">ABV</th>
                                    <th className="px-16 py-3">IBU</th>
                                </tr>
                            </thead>
                            <tbody className="bg-orange-200">
                                <tr>
                                    <td className="px-16 py-3">7%</td>
                                    <td className="px-16 py-3">60</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className={`text-white text-lg md:text-[20px] text-justify uppercase tracking-[2px] mt-10 max-w-[800px] xl:max-w-[440px] order-3 lg:order-1 ${s.ts}`}>
                        <strong className="text-orange-200">CampiNEIPA</strong>: A Estrada, o Vento e a Cerva Essa cerveja é mais gostosa que café de coador! 
                        <br />
                        <br />
                        A <strong className="text-orange-200">CampiNEIPA</strong> é feita com o gosto da cidade grande, mas o coração lá na fazenda. 
                        <br />
                        <br />
                        Olha aí o motoca e seu fiel amigo, pronto pra pegar a estrada e curtir o melhor da vida no interior. 
                        <br />
                        <br />
                        Então, meus amigos, levantem as canecas e brindem à aventura com a <strong className="text-orange-200">CampiNEIPA</strong>, a cerveja que traz a cidade e o campo num gole só!
                        <br />
                        <br />
                        Então, meu amigo, pega essa LouveirIPA, abre um sorriso e brinda com o jeitão do interior paulista! 
                    </p>
                </div>
            </div>
        </section>
    )
}