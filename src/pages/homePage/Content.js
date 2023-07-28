import Recipe from "./components/Recipe/Recipe";
import { useEffect, useState } from "react";
import SearchBar from "./components/Search/search";
import { useFetchRecipe } from "../../hooks";
import { deleteRecipe as deleteR, updateRecipe as updateR } from "../../apis/recipes";

export default function Content() {
    const [filter, setFilter] = useState('')
    const [page, setPage] = useState(1)
    const [[recipes, setRecipes], isLoading] = useFetchRecipe(page)

    async function updateRecipe(updatedRecipe) {
        const savedRecipe = await updateR(updatedRecipe)
        setRecipes(recipes.map(r => r._id === savedRecipe._id ? savedRecipe : r))
    }

    async function deleteRecipeById(_id) {
        const recipeId = await deleteR(_id)
        setRecipes(recipes.filter(r => r._id !== recipeId))
    }

    useEffect(() => {
        document.title = "CookChef | Home"
    })

    return (
        <>
            <div className="md:p-10 flex-1 flex flex-col container m-auto">
                <h1 className="my-5 font-bold text-2xl">Découvrez nos nouvelles recettes | <small className="italic">{recipes.length}</small></h1>
                <div className="flex-1 md:p-5 w-full bg-white rounded-2xl drop-shadow-lg">
                    <div>
                        <SearchBar setFilter={setFilter} />
                        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                            {
                                isLoading ? <div className="text-sm py-10">Chargement...</div> :
                                    recipes.filter(r => r.title.toLowerCase().startsWith(filter)).map(r => (
                                        <Recipe key={r._id} recipe={r} updateRecipe={updateRecipe} deleteRecipe={deleteRecipeById} />
                                    ))
                            }
                        </div>
                        <div onClick={() => setPage(page + 1)} className="bg-gray-500 text-white w-1/4 m-auto p-5 text-center rounded-lg cursor-pointer transition duration-300 hover:scale-x-105">
                            Charger plus de recette
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}