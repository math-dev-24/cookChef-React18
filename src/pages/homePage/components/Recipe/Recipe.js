import styles from "./Recipe.module.sass"

export default function Recipe({recipe, updateRecipe, deleteRecipe}){

    function handleClickLike() {
        updateRecipe({...recipe, liked: !recipe.liked})
    }

    async function handleClickDelete(e){
        e.stopPropagation()
        deleteRecipe(recipe._id)
    }

    return(
        <>
            <div className={`${styles.recipe} relative`} onClick={handleClickLike}>
                <div className={styles.imageContainer}>
                    <img src={recipe.image} alt="recipe"/>
                </div>
                <div className={styles.recipeContent}>
                    <h3>{recipe.title}</h3>
                    {
                        !recipe.liked ? (<i className="fa-regular fa-heart"></i>) : (<i className="fa-solid fa-heart"></i>)
                    }
                </div>
                <div className='absolute top-2 right-2 z-40 text-white hover:text-red-600 transition duration-300' onClick={handleClickDelete}>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </div>
        </>
    )
}