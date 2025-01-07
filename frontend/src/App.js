import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Menu from '../src/pages/menu/Menu';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
