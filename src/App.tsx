import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import { HeroUIProvider } from "@heroui/system";

export default function App() {
  return (
    <HeroUIProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HeroUIProvider>
  );
}
