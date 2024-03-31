import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./static/router";
import Header from "./components/header/Header";

import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer";
import BlogInner from "./pages/blog-inner/BlogInner";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/blog-inner" element={<BlogInner />} />
        <Route path="/" element={<Home />} />
        {
          ROUTERS?.map(({ id, url, element }) =>
            <Route
              key={id}
              path={url}
              element={element} />
          )
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
