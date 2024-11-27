import { 
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer"

import Article from "../pages/Article/Article";
import Griya from "../pages/Griya/Griya";

function Main() {
    return (
        <BrowserRouter>
            <Header/>
                <div class="container mb-5">
                    <Routes>
                        <Route path="/article" element={<Article/>} />
                        <Route path="/" element={<Griya/>} />
                    </Routes>
                </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default Main;