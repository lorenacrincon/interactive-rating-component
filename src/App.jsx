import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ThankYou from "./pages/ThankYou";
import "./App.css";
import "./styles/home.css";
import "./styles/thankYou.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
