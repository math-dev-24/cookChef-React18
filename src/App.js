import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.sass";
import Content from "./pages/homePage/Content";
import {useEffect, useState} from "react";
import AdminPage from "./pages/admin/admin";


export default function App() {
    const [page, setPage] = useState('homepage')

    useEffect(()=> {
        document.timeline = "CookChef"
    })

  return (
      <div className={` bg-slate-100 flex flex-col ${styles.containerApp}`}>
          <Header setPage={setPage} />
          {page === 'homepage' && <Content />}
          {page === "admin" && <AdminPage/>}
          <Footer/>
      </div>
  );
}


