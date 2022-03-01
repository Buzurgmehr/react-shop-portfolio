import Header from "./components/Header";
import "./styles/App.scss";
import Home from "./components/Home";
import HomeProduct from "./components/HomeProduct";
import WhyUs from "./components/WhyUs";
import Carousel from "./components/Carousel";
import {Data} from "./components/DataCarousel";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <HomeProduct/>
            <WhyUs/>
            <Carousel slides={Data}/>
            <Footer/>
        </div>
    );
}
export default App;
