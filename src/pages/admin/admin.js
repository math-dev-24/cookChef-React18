import AddRecipe from "./components/addRecipe";

export default function AdminPage(){

    return(
        <div className="flex-1">
            <div className="container m-auto p-5 my-5 border rounded-xl bg-white drop-shadow-lg">
                <h3 className="text-center text-2xl font-bold">Page d'admin</h3>
                <hr/>
                <AddRecipe />
            </div>
        </div>
    )
}