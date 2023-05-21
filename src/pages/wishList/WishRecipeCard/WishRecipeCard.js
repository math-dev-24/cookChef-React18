export default function WishRecipeCard({ recipe, unlikeRecipe }) {


    function handleUnlike(){
        const newRecipe = {...recipe, liked: false}
        unlikeRecipe(newRecipe)
    }

    return (
        <li className="p-1 m-2 border-b flex content-center items-center">
            <img alt={recipe.title} src={recipe.image} className="h-14 w-14" />
            <div className="ml-5 flex-1 font-semibold">{recipe.title}</div>
            <button onClick={handleUnlike} className="border border-orange-600 p-2 rounded text-orange-600 hover:bg-orange-600 hover:text-white transition duration-300">Unlike</button>
        </li>
    )
}