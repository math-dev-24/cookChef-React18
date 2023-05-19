import * as yup from "yup"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useContext} from "react";
import {ApiContext} from "../../../context/ApiContext";


export default function AddRecipe(){
    const BASE_URL = useContext(ApiContext)
    const defaultValues = {
        title: '',
        image: ''
    }

    const recipeSchema = yup.object({
        title: yup.string().required('Le titre de la recette doit être renseigné').min(8, 'Le titre doit être explicite'),
        image: yup.string().required('Il faut renseigner l\'image').url('L\'image doit être un lien valide')
    })

    const {formState: {errors, isSubmitting}, register, handleSubmit, reset, setError} = useForm({
        defaultValues,
        resolver: yupResolver(recipeSchema)
    })

    async function submit(values){
        try{
            const response = await fetch(BASE_URL,{
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body : JSON.stringify(values)
            })
            if (response.ok){
                reset(defaultValues)
            }else{
                setError('generic', {type:'generic', message: 'Il y a eu une erreur'})
            }
        }catch (e){
            setError('generic', {type:'generic', message: 'Il y a eu une erreur'})
        }
    }

    return(
        <form onSubmit={handleSubmit(submit)} className="flex flex-col content-center items-center my-14 w-full">
            <h3 className="text-xl mb-5">Ajouter une recette</h3>
            <div className="flex flex-col">
                <label htmlFor="title">Nom de la recette</label>
                <input type="text" { ...register('title') } name="title" className="outline-0 p-1 border border-slate-300 rounded-lg m-1"/>
                { errors.title && <p className="text-xs italic text-red-500">{errors.title.message}</p>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="image">Image de la recette :</label>
                <input type="text" { ...register('image') } name="image" className="outline-0 p-1 border border-slate-300 rounded-lg m-1"/>
                { errors.image && <p className="text-xs italic text-red-500">{errors.image.message}</p>}
            </div>
            { errors.generic && <p className="text-xl text-red-500">{errors.generic.message}</p> }
            <button type="submit" disabled={isSubmitting} className="border border-green-600 p-2 hover:text-white hover:bg-green-600 mt-5 text-green-600 rounded hover:scale-x-110 transition duration-300">Ajouter !</button>
        </form>
    )
}