//import styles from "./search.module"


export default function SearchBar({setFilter}){

    function handleInput(e) {
        const filter = e.target.value
        setFilter(filter.trim().toLowerCase())
    }

    return(
        <>
            <div className="w-2/3 bg-white rounded-xl overflow-hidden m-auto my-5 flex flex-row flex-nowrap items-center drop-shadow">
                <label htmlFor="search" className="m-1"><i className="fa-solid fa-magnifying-glass"></i></label>
                <input onInput={handleInput} type="text" className="w-full h-full p-2 border-none outline-none" id="search" name="search" placeholder="Rechercher"/>
            </div>
        </>
    )
}