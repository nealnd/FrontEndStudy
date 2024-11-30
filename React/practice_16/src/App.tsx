import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Newsletter } from "./pages/Newsletter";
import { SingleCocktail } from "./pages/SingleCocktail";
import { Navbar } from "./pages/NavBar";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <section className="page">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/newsletter" element={<Newsletter></Newsletter>}></Route>
          <Route
            path="/cocktail/:id"
            element={<SingleCocktail></SingleCocktail>}
          ></Route>
        </Routes>
      </section>
      <ToastContainer />
    </Router>
  );
}

export default App;
