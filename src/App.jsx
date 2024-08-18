import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Addblog from "./pages/blog/Addblog";
import Editblog from "./pages/blog/Editblog";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/addblog" element={<Addblog />} />
        <Route path="/blog/editblog" element={<Editblog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
