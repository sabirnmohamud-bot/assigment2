import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import ViewBlog from "./Pages/ViewBlog";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/viewblog/:id" element={<ViewBlog />} />
        
      </Routes>
    </div>
  );
};

export default App;
