import "./App.css";
import Form from "./form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormData from "./data";
import Home from "./Home";
import Nav from "./NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/data" element={<FormData />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
