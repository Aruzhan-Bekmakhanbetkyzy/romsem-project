import "./styles/App.scss";
import Sidebar from "./components/Sidebar";
import Center from "./components/Center.jsx";
import RightBar from "./components/RightBar.jsx";

function App() {
    return (
        <div className="outer-container">
            <div className="outer-left">
                <Sidebar></Sidebar>
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
