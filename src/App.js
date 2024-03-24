import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { Map } from "./components/pages/Map";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/map" element={<Map />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
