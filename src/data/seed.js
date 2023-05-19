import {dataRecipe} from "./recipes.data";

export async function SeedRecipe(){
    await fetch('https://restapi.fr/api/recipesMath', {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(dataRecipe)
    })
}