import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.sass";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";


export default function App() {
    return (
        <div className={` bg-slate-100 flex flex-col ${styles.containerApp}`}>
            <Header />
            <div className="flex-1">
                <Suspense >
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
        </div>
    );
}


