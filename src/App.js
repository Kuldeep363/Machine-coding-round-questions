import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./styles.css";
import { Suspense, lazy } from "react";

const CommentFeature = lazy(()=>import("./components/commentFeature"))
const StarRating = lazy(()=>import("./components/starRating"))
const Home = lazy(()=>import("./components/home"))

export default function App() {
  return (
    <div className="App">
      <h1>Machine coding round</h1>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/comment-feature" element={<CommentFeature/>} />
            <Route path="/star-rating" element={<StarRating/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
