import "./index.css";
import "./App.css";
// import Navbar from './components/NabBar';
// import About from "./pages/About";
// import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Nav />
      <Home />
      <AnimatePresence mode="wait"></AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
