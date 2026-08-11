import Campineipa from "./Campineipa"
import Louveiripa from "./Louveiripa"
import SvgProductsTitle from "./SvgProductsTitle"
import Witnhedo from "./Witnhedo"

export default function Products(){
    return (
        <section id="nossas-cervejas">
            <div className="mx-auto max-w-screen-2xl px-4 lg:px-8 py-11 lg:py-24 bg-amber ">
                <h2 className="flex justify-center items-center">
                    <SvgProductsTitle />
                    <span className="sr-only">Nossas Cervejas</span>
                </h2>
            </div>
            <Louveiripa />

            <Campineipa />

            <Witnhedo />

        </section>
    )
}