import { Book, Calendar, ChevronDown, Cpu, Crosshair, Filter, Grid, Sliders, TrendingUp,  User,  XSquare } from "react-feather"

export const SideNavItem1=[
    {
        link:"/",
        title:"Dashboards",
        icon:<Grid size={"18px"} className="align-self-center" />
    },
    {
        link:"/sessions",
        title:"Sessions",
        icon:<Calendar size={"18px"} className="align-self-center" />
    },
    {
        link:"/issues",
        title:"Issues",
        icon:<XSquare size={"18px"} className="align-self-center" />
    }
]
export const SideNavItem2=[
    {
        link:"/metrics",
        title:"Metrics",
        icon:<Sliders size={"18px"} className="align-self-center" />
    },
    {
        link:"/heatmaps",
        title:"Heatmaps",
        icon:<Cpu size={"18px"} className="align-self-center" />
    },
    {
        link:"/path-analysis",
        title:"Path Analysis",
        icon:<TrendingUp size={"18px"} className="align-self-center" />
    },
    {
        link:"/conversion-funnels",
        title:"Conversion Funnels",
        icon:<Filter size={"18px"} className="align-self-center" />
    }
]
export const SideNavItem3=[
    {
        link:"/definitions",
        title:"Definitions",
        icon:<Crosshair size={"18px"} className="align-self-center" />
    }
]
export const SideNavItem4=[
    {
        link:"/documentation",
        title:"Docs",
        icon:<Book size={"18px"} className="align-self-center" />
    },
    {
        link:"/notification",
        title:"What's New",
        icon:<Calendar size={"18px"} className="align-self-center" />
    },
    {
        link:"/support",
        title:"Support",
        icon:<User size={"18px"} className="align-self-center" />
    }
]

export const IssuesNav = [
{title:"show",btn:"Developer Issues",tooltip:"lorem ipsum5"},
{title:"in",btn:"entire project",tooltip:"lorem ipsum5",btnExtraIcon:<Filter size={"18px"} className="align-self-center" />},
{title:"that",btn:"have occured",tooltip:"lorem ipsum5"},
{title:"within",btn:"last week",tooltip:"lorem ipsum5",btnExtraIcon:<Calendar size={"18px"} className="align-self-center" />}
]

export const IssuesData = [
    {
        error:"Network Error",
        errorDetails:"server error: internal server error",
        action:"query getApp",
        histogramData:{},
        severity:"",
        sessions:"2.5k",
        lastSeen:{
            day:"7 days ago",
            platform:"Browser"
        }
    },
    {
        error:"JS Error",
        errorDetails:"syntaxError: unexpected token?",
        action:"https://app.relog.com/issues",
        histogramData:{},
        severity:"",
        sessions:"2.5k",
        lastSeen:{
            day:"7 days ago",
            platform:"Browser"
        }
    },
    {
        error:"JS Error",
        errorDetails:"Reference Error: login not defined",
        action:"/assets/app.js in ?",
        histogramData:{},
        severity:"",
        sessions:"2.5k",
        lastSeen:{
            day:"7 days ago",
            platform:"Browser"
        }
    },
]