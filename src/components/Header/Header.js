import styles from "./Header.module.sass"
import {useState} from "react";
import NavPhone from "./components/NavPhone";
import { NavLink } from "react-router-dom";


export default function Header(){
    const [showMenu, setShowMenu] = useState(false)

    return(
        <>
            <header className={`${styles.header} bg-white flex flex-row items-center relative`}>
                <NavLink to="/" className="cursor-pointer flex-1 text-2xl font-bold ml-5">COOK CHEF</NavLink>
                <ul className="hidden md:flex">
                    <NavLink to="/admin" className="m-1 px-5 bg-orange-600 rounded-2xl cursor-pointer text-white flex flex-row items-center hover:bg-white hover:text-orange-600 transition duration-300 border hover:border-orange-600">
                        <i className="fa-sharp fa-solid fa-unlock mr-2"></i>
                        Panel admin
                    </NavLink>
                    <NavLink to="wishlist" className="m-1 p-2 border border-orange-600 rounded-2xl transition duration-300 hover:bg-orange-600 hover:text-white cursor-pointer">
                        <i className="fa-solid fa-heart mr-2"></i>
                        WishList
                    </NavLink>
                </ul>
                <i className="fa-solid fa-bars block md:hidden cursor-pointer" onClick={() => setShowMenu(!showMenu)}></i>
                { showMenu &&
                    <>
                        <div className="calc" onClick={() => setShowMenu(false)}></div>
                        <NavPhone />
                    </>

                }
            </header>
        </>
    )
}