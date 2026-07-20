import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./components/pages/MainPage";
import SPFormsPage from "./components/pages/SPFormsPage";
import PuzzlePage from "./components/pages/PuzzlePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/sp-forms" element={<SPFormsPage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
      </Route>
    </Routes>
  );
}

export default App;
