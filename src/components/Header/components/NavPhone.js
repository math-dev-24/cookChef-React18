
export default function NavPhone({setPage}){

    return(
        <>
            <ul className="md:hidden absolute top-14 right-1/4 text-center bg-gray-50 z-20 border border-orange-600 rounded-2xl p-14 w-1/2 drop-shadow-md">
                <li onClick={() => setPage('admin')} className="cursor-pointer transition duration-300 my-5 font-bold">Ajouter une recette</li>
                <li className="cursor-pointer transition duration-300 my-5 font-bold">WishList</li>
                <li className="cursor-pointer transition duration-300 my-5 font-bold">Connexion</li>
            </ul>
        </>
    )
}