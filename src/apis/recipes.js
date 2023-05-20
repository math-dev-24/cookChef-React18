const BASE_URL_API = 'https://restapi.fr/api/recipesMath'


export async function getRecipes(queryParam) {
    const response = await fetch(`${BASE_URL_API}${queryParam && `?${queryParam}`}`)
    if (response.ok) {
        const body = await response.json()
        return Array.isArray(body) ? body : [body]
    } else {
        throw new Error('erreur fetch recipes')
    }
}

export async function getRecipeById(_id) {
    const response = await fetch(`${BASE_URL_API}/${_id}`)
    if (response.ok) {
        return await response.json()
    } else {
        throw new Error('erreur fetch recipe')
    }
}

export async function deleteRecipe(_id) {
    const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "DELETE"
    })
    if (response.ok) {
        return _id
    } else {
        throw new Error('erreur delete')
    }

}

export async function updateRecipe(updatedRecipe) {
    const { _id, ...restRecipe } = updatedRecipe
    const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(restRecipe)
    })
    if (response.ok) {
        return await response.json()
    } else {
        throw new Error('Erreur lors de l\'update')
    }

}

export async function createRecipe(newRecipe) {
    const response = await fetch(`${BASE_URL_API}`,{
        method: "POST",
        headers: {'Content-type': "application/json"},
        body: JSON.stringify(newRecipe)
    })
    if(response.ok){
        return await response.json();
    }else{
        throw new Error('Erreur')
    }
}