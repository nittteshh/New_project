import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Addblog from "./pages/blog/Addblog";
import Editblog from "./pages/blog/Editblog";
import SingleBlog from "./pages/blog/SingleBlog";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/addblog" element={<Addblog />} />
        <Route path="/blog/editblog" element={<Editblog />} />
        <Route path="/blog/id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
