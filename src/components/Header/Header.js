import styles from "./Header.module.sass"
import {useState} from "react";
import NavPhone from "./components/NavPhone";


export default function Header({setPage}){
    const [showMenu, setShowMenu] = useState(false)

    return(
        <>
            <header className={`${styles.header} bg-white flex flex-row items-center relative`}>
                <h1 onClick={() => setPage('homepage')} className="cursor-pointer flex-1 text-2xl font-bold ml-5">COOK CHEF</h1>
                <ul className="hidden md:flex">
                    <div onClick={() => setPage('admin')} className="m-1 px-5 bg-orange-600 rounded-2xl cursor-pointer text-white flex flex-row items-center hover:bg-white hover:text-orange-600 transition duration-300 border hover:border-orange-600">
                        <i className="fa-solid fa-right-left mr-2"></i>
                        Ajouter une recette
                    </div>
                    <div className="m-1 px-5 bg-orange-600 rounded-2xl cursor-pointer text-white flex flex-row items-center hover:bg-white hover:text-orange-600 transition duration-300 border hover:border-orange-600">
                        <i className="fa-solid fa-heart mr-2"></i>
                        WishList
                    </div>
                    <div className="m-1 p-2 border border-orange-600 rounded-2xl transition duration-300 hover:bg-orange-600 hover:text-white cursor-pointer">
                        <i className="fa-solid fa-power-off mr-2"></i>
                        Connexion
                    </div>
                </ul>
                <i className="fa-solid fa-bars block md:hidden cursor-pointer" onClick={() => setShowMenu(!showMenu)}></i>
                { showMenu &&
                    <>
                        <div className="calc" onClick={() => setShowMenu(false)}></div>
                        <NavPhone setPage={setPage}/>
                    </>

                }
            </header>
        </>
    )
}