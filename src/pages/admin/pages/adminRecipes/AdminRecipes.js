import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AdminRecipeNav from "../../components/AdminRecipeNav.js/AdminRecipeNav";

export default function AdminRecipes(){
    return (
        <>
            <h2 className="text-xl font-semibold">Gestion des recettes :</h2>
            <AdminRecipeNav />
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
}