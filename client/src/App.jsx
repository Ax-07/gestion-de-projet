import './App.css';
import Banner from './components/layout/Banner';
import Home from './pages/Home';
import ReactModal from 'react-modal';
import { Routes, Route } from "react-router-dom";
import Page2 from './pages/Page2';


function App() {
  return (
    <div className='app-wrapper'>
      <header>
        <Banner />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-2" element={<Page2/>} />
      </Routes>
      <footer>
        {/* Contenu du footer */}
      </footer>
    </div>
  );
}

export default App;
ReactModal.setAppElement('#root');
