import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Search from './components/Search';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/view" element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;