import { NavLink } from "react-router-dom";

export default function AdminNav() {
    return (
        <nav className="flex">
            <NavLink to="recipes"
                className={({ isActive }) => isActive ? "bg-orange-600 text-white p-3 block" : "border p-3 block"}
            >Recette</NavLink>
            <NavLink to="users"
                className={({ isActive }) => isActive ? "bg-orange-600 text-white p-3 block" : "border p-3 block"}
            >Users</NavLink>
        </nav>
    )
}