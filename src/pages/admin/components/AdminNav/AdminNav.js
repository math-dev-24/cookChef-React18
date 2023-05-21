import { NavLink } from "react-router-dom";

export default function AdminNav() {
    return (
        <nav className="flex">
            <NavLink to="recipes"
                className={({ isActive }) => isActive ? "bg-orange-600 text-white p-3 block font-bold" : "border p-3 block"}
            ><i class="fa-solid fa-cookie-bite mr-2"></i>
                <span>Recette</span>
            </NavLink>
            <NavLink to="users"
                className={({ isActive }) => isActive ? "bg-orange-600 text-white p-3 block font-bold" : "border p-3 block"}
            ><i className="fa-solid fa-user mr-2"></i>
                Users
            </NavLink>
        </nav>
    )
}