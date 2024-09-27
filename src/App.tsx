import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SecondPage from "./components/SecondPage";
import BaileyPage from "./components/BaileyPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/bailey-page" element={<BaileyPage />} />
      </Routes>
    </div>
  );
}

export default App;
