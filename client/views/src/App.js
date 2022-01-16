import "./App.css";
import Form from "./form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormData from "./data";

function App() {
  return (
    <div className="App" id="main">
      <Router>
        <Routes>
          <Route path="/formdata" element={<FormData />} />
          <Route exact path="/" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
