import "./styles/App.scss";
import Center from "./components/Center";
import RightBar from "./components/RightBar";
import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="outer-container">
            <div className="outer-left">
               <Logo />
               <Sidebar />
            </div>
            <div className="outer-center">
                <Center></Center>
            </div>
            <div className="outer-right">
                <RightBar></RightBar>
            </div>
        </div>
    );
}

export default App;
