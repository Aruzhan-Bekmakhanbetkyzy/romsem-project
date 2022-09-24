import './index.css'
import Header from './components/Header';
import Corpse from './components/Corpse'
import LeftBar from './components/LeftBar';
import Center from './components/Center';
import RightBar from './components/RightBar';


function App() {
  return (
    <div>
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
