import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./pages/error";
import Home from "./pages/home";
import Bookmark from "./pages/bookmark";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv-series" element={<TvSeries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
