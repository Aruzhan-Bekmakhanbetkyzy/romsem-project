import "./styles/App.scss";
import LeftBar from "./components/LeftBar";
import Center from "./components/Center";
import RightBar from "./components/RightBar";

function App() {
    return (
        <div className="outer-container">
            <div>
                <LeftBar></LeftBar>
            </div>
            <div>
                <Center></Center>
            </div>
            <div>
                <RightBar></RightBar>
            </div>
        </div>
    );
}

export default App;
