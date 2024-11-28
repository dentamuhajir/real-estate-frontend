import { 
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer"

import IndexArticle from "../pages/Article/Index/Index";
import Griya from "../pages/Griya/Griya";

function Main() {
    return (
        <BrowserRouter>
            <Header/>
                <div class="container mb-5">
                    <Routes>
                        <Route path="/" element={<Griya/>} />
                        <Route path="/article" element={<IndexArticle/>} />
                    </Routes>
                </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default Main;