/*
 * APP2000 – Happy Trails
 *
 * Denne filen er tilpasset med hjelp fra ChatGPT (OpenAI).
 * KI ble brukt til forslag til React Router-oppsett,
 * navigasjon mellom sider og tilpasning av ruter
 * fra nettbutikkeksempelet til turappen.
 *
 * Koden bygger på undervisningseksempelet.
 */

import { BrowserRouter as Router, Routes, Route } from "react-router";

import Hjem from "./pages/Hjem.jsx";
import Turer from "./pages/Turer.jsx";
import Hytter from "./pages/Hytter.jsx";
import Om from "./pages/Om.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./Layout.jsx";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/turer" element={<Turer />} />
          <Route path="/hytter" element={<Hytter />} />
          <Route path="/om" element={<Om />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;