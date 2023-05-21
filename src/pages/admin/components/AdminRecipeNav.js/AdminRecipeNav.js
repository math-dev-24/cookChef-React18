import { NavLink } from "react-router-dom";

export default function AdminRecipeNav(){
    return (
        <nav className="flex content-center items-center">
            <NavLink to="list" className={({ isActive }) => isActive ? "bg-slate-300 m-2 p-2 block " : "block p-2 italic"}>Listing des recettes</NavLink>
            <NavLink to="form" className={({isActive}) => isActive ? "bg-slate-300 m-2 p-2 block " : "block p-2 italic"}>Ajouter</NavLink>
        </nav>
    )
}