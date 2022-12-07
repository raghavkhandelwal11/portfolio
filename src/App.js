import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Home/>
      </BrowserRouter>

    </div>
  );
}

export default App;
