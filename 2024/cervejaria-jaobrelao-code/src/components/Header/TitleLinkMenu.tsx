import SvgACervejaria from "./SvgMenuTitle/SvgACervejaria"
import SvgContato from "./SvgMenuTitle/SvgContato"
import SvgInicio from "./SvgMenuTitle/SvgInicio"
import SvgNossasCervejas from "./SvgMenuTitle/SvgNossasCervejas"
import SvgParceiros from "./SvgMenuTitle/SvgParceiros"
import SvgSeuEvento from "./SvgMenuTitle/SvgSeuEvento"
import SvgCampineipa from "./SvgMenuTitle/SvgSubmenuTitle/SvgCampineipa"
import SvgLouveiripa from "./SvgMenuTitle/SvgSubmenuTitle/SvgLouveiripa"
import SvgWitnhedo from "./SvgMenuTitle/SvgSubmenuTitle/SvgWitnhedo"

interface TitleLinkMenuData {
    title: string
    svgTitle: React.ReactElement
    svgTitleActive: React.ReactElement
    path: string
    submenu?: TitleLinkMenuData[]
}

export const titleLink: Array<TitleLinkMenuData> = [
    {
        title: 'Início',
        svgTitle: <SvgInicio color="text-white" />,
        svgTitleActive: <SvgInicio color="text-amber"/>,
        path: '#inicio'
    },
    {
        title: 'Nossas Cervejas',
        svgTitle: <SvgNossasCervejas color="text-white" />,
        svgTitleActive: <SvgNossasCervejas color="text-amber"/>,
        path: '#nossas-cervejas',
        submenu: [
            {
                title: 'Louveiripa',
                svgTitle: <SvgLouveiripa color="text-white" />,
                svgTitleActive: <SvgLouveiripa color="text-amber"/>,
                path: '#louveiripa'
            },
            {
                title: 'Campineipa',
                svgTitle: <SvgCampineipa color="text-white" />,
                svgTitleActive: <SvgCampineipa color="text-amber"/>,
                path: '#campineipa'
            },
            {
                title: 'Witnhedo',
                svgTitle: <SvgWitnhedo color="text-white" />,
                svgTitleActive: <SvgWitnhedo color="text-amber"/>,
                path: '#witnhedo'
            },
        ]
    },
    {
        title: 'Seu Evento',
        svgTitle: <SvgSeuEvento color="text-white" />,
        svgTitleActive: <SvgSeuEvento color="text-amber"/>,
        path: '#seu-evento'
    },
    {
        title: 'A Cervejaria',
        svgTitle: <SvgACervejaria color="text-white" />,
        svgTitleActive: <SvgACervejaria color="text-amber"/>,
        path: '#a-cervejaria'
    },
    {
        title: 'Parceiros',
        svgTitle: <SvgParceiros color="text-white" />,
        svgTitleActive: <SvgParceiros color="text-amber"/>,
        path: '#parceiros'
    },
    {
        title: 'Contato',
        svgTitle: <SvgContato color="text-white" />,
        svgTitleActive: <SvgContato color="text-amber"/>,
        path: '#contato'
    }    
] 

