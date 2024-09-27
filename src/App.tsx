import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BaileyPage from "./components/BaileyPage";
import BleakHallPage from "./components/BleakHallPage";
import BlueHousePage from "./components/BlueHousePage";
import BrickHousePage from "./components/BrickHousePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bailey-page" element={<BaileyPage />} />
        <Route path="/bleakHall-page" element={<BleakHallPage />} />
        <Route path="/blueHouse-page" element={<BlueHousePage />} />
        <Route path="/brickHouse-page" element={<BrickHousePage />} />
      </Routes>
    </div>
  );
}

export default App;
