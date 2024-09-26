import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
