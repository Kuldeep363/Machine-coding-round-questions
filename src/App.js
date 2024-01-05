import CommentFeature from "./components/commentFeature";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Comment Box</h1>
      <h2>Machine coding round - Part 1</h2>
      <div className="comment-feature-wrapper">
        <CommentFeature />
      </div>
    </div>
  );
}
