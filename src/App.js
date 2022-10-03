import "./styles/App.scss";
import LeftBar from "./components/LeftBar";
import Center from "./components/Center";
import RightBar from "./components/RightBar";

function App() {
    return (
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
    );
}

export default App;
