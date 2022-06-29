import Header from "./Header";
import Footer from "./Footer";
import Routes from "../config/Routes";
import { BrowserRouter, Route } from "react-router-dom"


export default function Layout({children}) {

    return (
        <>
            <Header/>
            <main>
                <div>
                    {children}
                </div>
            </main>
            <Footer/>
        </>
    )
}