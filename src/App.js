import BG from './assets/bg.svg';
import './App.css';
import MainLayout from './Layout/MainLayout';

function App() {
  return (
    <div className="App w-100 h-100 position-relative">
      <BackgroundImage />
      <MainLayout />
    </div>
  );
}

export default App;

const BackgroundImage = () => {
  return <div className="position-absolute" style={{ top: 50, left: -120, zIndex: -100 }}>
    <img src={BG} className="w-100 h-100" />
  </div>
}