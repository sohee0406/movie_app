import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import Search from "./pages/search/Search";
import Error_page from "./pages/Error_page";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Header />
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        {/* 변수명 넣을때 :XXX 이런식으로 변수를 삽입할수 있음 */}
        <Route path="/search" element={<Search />} />
        <Route path="/*" element={<Error_page />} />
        <Footer />
      </Routes>
    </HashRouter>
  );
}
