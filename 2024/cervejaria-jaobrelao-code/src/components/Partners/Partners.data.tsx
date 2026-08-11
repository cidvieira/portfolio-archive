import SvgBeerBusiness from "./SvgTitlePartners/SvgBeerBusiness"
import SvgCogumelo from "./SvgTitlePartners/SvgCogumelo"
import SvgGamingNBeer from "./SvgTitlePartners/SvgGamingNBeer"
import SvgStudioLetra from "./SvgTitlePartners/SvgStudioLetra"
import SvgValetes from "./SvgTitlePartners/SvgValetes"

interface PartnersData {
    image: string
    name: string
    svgTitle: React.ReactElement    
    description: string
}

export const partners: Array<PartnersData> = [
    {
        image: "/parceiros/cervejaria-cogumelo.png",
        name: "Cervejaria Cogumelo",
        svgTitle: <SvgCogumelo />,
        description: "Produção"
    },
    {
        image: "/parceiros/beer-business.png",
        name: "Beer Business",
        svgTitle: <SvgBeerBusiness />,
        description: "Desenvolvimento"
    },
    {
        image: "/parceiros/studio-letra.png",
        name: "Studio Letra",
        svgTitle: <SvgStudioLetra />,
        description: "Artes Visuais"
    },
    {
        image: "/parceiros/gaming-n-beer.png",
        name: "Gaming'n Beer",
        svgTitle: <SvgGamingNBeer />,
        description: "Marketing"
    },
    {
        image: "/parceiros/valetes-burger.png",
        name: "Valetes Burger",
        svgTitle: <SvgValetes />,
        description: "Parceiro Comercial"
    },
] 

