import { useFetchRecipe } from "../../../../hooks/useFetchRecipe"
import RecipeCard from "./recipeCard/RecipeCard"
import { deleteRecipe as deleteR } from "../../../../apis/recipes"
import { useEffect, useState } from "react"
import PageManagement from "./pageManagement/PageManagement"
import SearchBar from "../../../homePage/components/Search/search"

export default function AdminRecipesList() {
    const [page, setPage] = useState(1)
    const [[recipes, setRecipes], isLoading] = useFetchRecipe()
    const [countPage, setCountPage] = useState(0)
    const [filter, setFilter] = useState('')


    async function deleteRecipe(_id) {
        deleteR(_id)
        setRecipes(recipes.filter(r => r._id !== _id))
    }

    function pageManagement(recipe, index){
        if(filter){
            return recipe.title.toLowerCase().startsWith(filter)
        }else{
            return index <= (page * 5) - 1 && index >= (page - 1) * 5
        }
    }

    useEffect(() => {
        setCountPage(Math.ceil(recipes.length / 5))
    },[recipes])

    return (
        <>
            <h1 className="text-xl underline">Liste des recettes : ({recipes.length})</h1>
            <SearchBar setFilter={setFilter}/>
            {
                filter === '' && <PageManagement pageCount={countPage} actualyPage={page} setPage={setPage} />
            }
            <ul>
                {
                    isLoading ? <div>Chargement...</div> :
                        recipes.length && recipes.filter(pageManagement).map(r => <RecipeCard recipe={r} key={r._id} deleteRecipe={deleteRecipe} />)
                }
            </ul>
            {
                filter === '' && <PageManagement pageCount={countPage} actualyPage={page} setPage={setPage} />
            }
        </>
    )
}