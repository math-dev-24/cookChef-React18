import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.sass";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { SeedRecipe } from './data/seed';
import { useFetchRecipe } from "./hooks";

export default function App() {

    const [[recipes]] = useFetchRecipe(1)
    if (!recipes) {
        SeedRecipe()
        SeedRecipe()
    }


    return (
        <div className={` bg-slate-100 flex flex-col ${styles.containerApp}`}>
            <Header />
            <div className="flex-1">
                <Suspense >
                    <div className="flex-1">
                        <Outlet />
                    </div>
                </Suspense>
            </div>
            <Footer />
        </div>
    );
}


