import styles from "./Recipe.module.sass"
import {useContext} from "react";
import {ApiContext} from "../../../../context/ApiContext";

export default function Recipe({recipe: {_id, liked, title, image}, updateRecipe, deleteRecipe}){
    const BASE_URL_API = useContext(ApiContext)

    async function handleClickLike() {
        try{
            const response = await fetch(`${BASE_URL_API}/${_id}`, {
                method: "PATCH",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify({
                    liked: !liked
                })
            })
            if (response.ok){
                const updatedRecipe = await response.json()
                updateRecipe(updatedRecipe)
            }
        }catch (e){
            console.log(e)
        }
    }

    async function handleClickDelete(e){
        e.stopPropagation()
        try{
            const response = await fetch(`${BASE_URL_API}/${_id}`, {
                method: "DELETE"
            })
            if (response.ok){
                deleteRecipe(_id)
            }
        }catch (e){
            console.log(e)
        }
    }

    return(
        <>
            <div className={`${styles.recipe} relative`} onClick={handleClickLike}>
                <div className={styles.imageContainer}>
                    <img src={image} alt="recipe"/>
                </div>
                <div className={styles.recipeContent}>
                    <h3>{title}</h3>
                    {
                        !liked ? (<i className="fa-regular fa-heart"></i>) : (<i className="fa-solid fa-heart"></i>)
                    }
                </div>
                <div className='absolute top-2 right-2 z-40 text-white hover:text-red-600 transition duration-300' onClick={handleClickDelete}>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </div>
        </>
    )
}