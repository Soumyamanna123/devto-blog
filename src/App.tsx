import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import ArticleDetails from "./pages/ArticleDetails";
import AuthorDetails from "./pages/AuthorDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetails/>} />
          <Route path="/user/:username" element ={<AuthorDetails/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
