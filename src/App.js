import Header from "./components/Header";
import "./styles/App.scss";
import Home from './components/Home';
import HomeProduct from './components/HomeProduct';
function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <HomeProduct/>  
        </div>
    );
}
export default App;
