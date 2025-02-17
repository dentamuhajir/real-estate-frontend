import { 
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer"

import IndexArticle from "../pages/Article/Index/Index";
import ReadpageArticle from "../pages/Article/Readpage/Readpage";
import Griya from "../pages/Home/Griya";
import BuyAbility from "../pages/BuyAbility/BuyAbility";
import Property from "../pages/Property/Property";
import Register from "../pages/Auth/Register/Register";
import Import from "../pages/Auth/Import/Import";


function Main() {
    return (
        <BrowserRouter>
            <Header/>
                <div class="container mb-5">
                    <Routes>
                        <Route path="/" element={<Griya/>} />
                        <Route path="/article" element={<IndexArticle/>} />
                        <Route path="/article/readpage/:id/:slug" element={<ReadpageArticle/>} />
                        <Route path="/buy-ability" element={<BuyAbility/>} />
                        <Route path="/property" element={<Property/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/import" element={<Import/>} />

                    </Routes>
                </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default Main;