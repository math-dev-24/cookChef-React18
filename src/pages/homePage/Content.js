import Recipe from "./components/Recipe/Recipe";
import {useContext, useState} from "react";
import {ApiContext} from "../../context/ApiContext";
import SearchBar from "./components/Search/search";
import {useFetchData} from "../../hooks";

export default function Content(){
    const [filter, setFilter] = useState('')
    const [page, setPage] = useState(1)
    const url = useContext(ApiContext)
    const [[recipes, setRecipes], isLoading] = useFetchData(url, page)

    function updateRecipe(updatedRecipe){
        setRecipes(recipes.map(r => r._id === updatedRecipe._id ? updatedRecipe : r))
    }

    function deleteRecipe(_id){
        setRecipes(recipes.filter(r => r._id !== _id))
    }

    return (
        <>
            <div className="md:p-10 flex-1 flex flex-col container m-auto">
                <h1 className="my-5 font-bold text-2xl">Découvrez nos nouvelles recettes | <small className="italic">{recipes.length}</small></h1>
                <div className="flex-1 md:p-5 w-full bg-white rounded-2xl drop-shadow-lg">
                    <div>
                        <SearchBar setFilter={setFilter} />
                        <div className='flex flex-row flex-wrap items-center content-center'>
                            {
                                isLoading ? <div className="text-sm py-10">Chargement...</div> :
                                recipes.filter(r => r.title.toLowerCase().startsWith(filter)).map(r => (
                                    <Recipe key={r._id} recipe={r} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe}/>
                                ))
                            }
                        </div>
                        <div onClick={() => setPage(page+1)} className="bg-gray-500 text-white w-1/4 m-auto p-5 text-center rounded-lg cursor-pointer transition duration-300 hover:scale-x-105">
                            Charger plus de recette
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}