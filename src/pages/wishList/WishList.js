import { useFetchRecipe } from "../../hooks"
import WishRecipeCard from "./WishRecipeCard/WishRecipeCard"
import { updateRecipe as updateR } from "../../apis/recipes";
import { useEffect } from "react";

export default function WishList(){
    const [[recipes, setRecipes], isLoading] = useFetchRecipe()

    async function unlikeRecipe(updatedRecipe){
        const savedRecipe = await updateR(updatedRecipe)
        setRecipes(recipes.map(r => r._id === savedRecipe._id ? savedRecipe : r))
    }

    useEffect(() => {
        document.title = "CookChef | WishList"
    })

    return (
        <div className="container m-auto p-5 my-5 border rounded-xl bg-white hover:drop-shadow drop-shadow-lg">
            <h1 className="text-xl mb-4">WhishList</h1>
            <ul>
                { 
                    isLoading ? <div>Chargement...</div> :
                        recipes.filter(r => r.liked).map(r => <WishRecipeCard recipe={r} key={r._id} unlikeRecipe={unlikeRecipe} />)
                }
            </ul>
        </div>
    )
}