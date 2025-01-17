import { 
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer"

import IndexArticle from "../pages/Article/Index/Index";
import ReadpageArticle from "../pages/Article/Readpage/Readpage";
import Griya from "../pages/Griya/Griya";
import Application from "../pages/Application/Application";
<<<<<<< Updated upstream
=======
import Property from "../pages/Property/Property";
>>>>>>> Stashed changes

function Main() {
    return (
        <BrowserRouter>
            <Header/>
                <div class="container mb-5">
                    <Routes>
                        <Route path="/" element={<Griya/>} />
                        <Route path="/article" element={<IndexArticle/>} />
                        <Route path="/article/readpage/:id/:slug" element={<ReadpageArticle/>} />
                        <Route path="/application" element={<Application/>} />
<<<<<<< Updated upstream
=======
                        <Route path="/propery" element={<Property/>} />
>>>>>>> Stashed changes
                    </Routes>
                </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default Main;