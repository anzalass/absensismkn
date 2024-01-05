import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage";
import Loginpage from "./page/Loginpage";
import Registerpage from "./page/Registerpage";
import Detailproductpage from "./page/Detailproductpage";
import Belisekarang from "./page/Belisekarang";
import Cartpage from "./page/Cartpage";
import Profilepage from "./page/Profilepage";
import Wishlistpage from "./page/Wishlistpage";
import AktivasiPage from "./page/AktivasiPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Registerpage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/detail/:id" element={<Detailproductpage />} />
          <Route path="/belisekarang/:id" element={<Belisekarang />} />
          <Route path="/keranjang" element={<Cartpage />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/wish" element={<Wishlistpage />} />
          <Route path="/aktivasi" element={<AktivasiPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
