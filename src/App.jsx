import "./styles/App.scss";
import LeftBar from "./components/LeftBar";
import Center from "./components/Center";
import RightBar from "./components/RightBar";
import { createContext } from "react";

const CartContext = createContext();

function App() {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            <div className="outer-container">
                <div className="outer-left">
                    <LeftBar></LeftBar>
                </div>
                <div className="outer-center">
                    <Center></Center>
                </div>
                <div className="outer-right">
                    <RightBar></RightBar>
                </div>
            </div>
        </CartContext.Provider>
    );
}

export default App;
