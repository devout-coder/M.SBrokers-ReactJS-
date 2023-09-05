import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Stock from "./Stock";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stock/:symbol" element={<Stock />} />
      </Routes>
    </BrowserRouter>
  );
}
