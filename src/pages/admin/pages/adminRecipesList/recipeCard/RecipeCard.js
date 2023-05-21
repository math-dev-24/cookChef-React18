import { NavLink } from "react-router-dom"

export default function RecipeCard({ recipe, deleteRecipe }) {

    function handleClickDelete() {
        deleteRecipe(recipe._id)
    }

    return (
        <div className="bg-slate-50 container m-auto flex border my-3 drop-shadow hover:drop-shadow-none transition duration-300 rounded-xl overflow-hidden h-20">
            <img src={recipe.image} alt={recipe.title} className=" h-20 w-20" />
            <div className="font-bold m-1 flex-1">
                {recipe.title}
            </div>
            <NavLink className="border p-4 bg-green-200 hover:bg-green-600 hover:text-white duration-300 transition flex content-center items-center"
                to={`../edit/${recipe._id}`}>
                <i className="fa-solid fa-pen-to-square"></i>
            </NavLink>
            <button onClick={handleClickDelete} className="border p-4 bg-red-200 hover:bg-red-600 hover:text-white duration-300 transition"><i className="fa-solid fa-trash"></i></button>
        </div>
    )
}