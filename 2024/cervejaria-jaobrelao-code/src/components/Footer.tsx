import Contact from "./Contact";

export default function Footer(){
    return(
        <footer>

            <Contact />

            <div className="bg-black px-4 lg:px-8 py-8">
                <p className="text-xs text-white text-center tracking-[1px] uppercase">©2024 Jãobrelão | Todos os direitos reservados.</p>
            </div>
            
        </footer>
    )
}