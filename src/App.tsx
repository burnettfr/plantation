import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BaileyPage from "./components/BaileyPage";
import BleakHallPage from "./components/BleakHallPage";
import BlueHousePage from "./components/BlueHousePage";
import BrickHousePage from "./components/BrickHousePage";
import BrooklandPage from "./components/BrooklandPage";
import CassinaPage from "./components/CassinaPage";
import CrawfordPage from "./components/CrawfordPage";
import CypressPage from "./components/CypressPage";
import FrogmorePage from "./components/FrogmorePage";
import MiddletonPage from "./components/MiddletonPage";
import OakIslandPage from "./components/OakIslandPage";
import OldHousePage from "./components/OldHousePage";
import SeasidePage from "./components/SeasidePage";
import SunnySidePage from "./components/SunnySidePage";
import SwallowBluffPage from "./components/SwallowBluffPage";
import WindsorPage from "./components/WindsorPage";
import WoodruffPage from "./components/WoodruffPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bailey-page" element={<BaileyPage />} />
        <Route path="/bleakHall-page" element={<BleakHallPage />} />
        <Route path="/blueHouse-page" element={<BlueHousePage />} />
        <Route path="/brickHouse-page" element={<BrickHousePage />} />
        <Route path="/brookland-page" element={<BrooklandPage />} />
        <Route path="/cassina-page" element={<CassinaPage />} />
        <Route path="/crawford-page" element={<CrawfordPage />} />
        <Route path="/cypress-page" element={<CypressPage />} />
        <Route path="/frogmore-page" element={<FrogmorePage />} />
        <Route path="/middleton-page" element={<MiddletonPage />} />
        <Route path="/oakIsland-page" element={<OakIslandPage />} />
        <Route path="/oldHouse-page" element={<OldHousePage />} />
        <Route path="/seaside-page" element={<SeasidePage />} />
        <Route path="/sunnySide-page" element={<SunnySidePage />} />
        <Route path="/swallowBluff-page" element={<SwallowBluffPage />} />
        <Route path="/windsor-page" element={<WindsorPage />} />
        <Route path="/woodruff-page" element={<WoodruffPage />} />
      </Routes>
    </div>
  );
}

export default App;
