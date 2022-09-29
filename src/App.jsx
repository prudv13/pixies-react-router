import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/search/:imgname" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
