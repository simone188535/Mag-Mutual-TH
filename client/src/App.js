import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AllRoutes from "./components/AllRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <AllRoutes />
      </div>
    </Router>
  );
}

export default App;
