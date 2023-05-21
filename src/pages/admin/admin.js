import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "./components/AdminNav/AdminNav";

export default function AdminPage() {
    useEffect(() => {
        document.title = "CookChef | Admin"
    })
    return (
        <div className="flex-1">
            <div className="container m-auto p-5 my-5 border rounded-xl bg-white hover:drop-shadow drop-shadow-lg">
                <h3 className="text-center text-2xl font-bold">Interface Admin</h3>
                <hr />
                <AdminNav />
                <hr className="mb-4"/>
                <Suspense fallback={ <p>Loading...</p>} >
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
}