import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

import Nihad from "./Nihad";
import Gijo from "./Gijo";
import Hari from "./Hari";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nihad" element={<Nihad />} />

          <Route path="/gijo" element={<Gijo />} />

          <Route path="/hari" element={<Hari />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
