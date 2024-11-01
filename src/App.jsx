import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Features } from "./pages/Home/Features.jsx";
import { Footer } from "./pages/Home/Footer.jsx";
import { HeroSection } from "./pages/Home/HeroSection.jsx";
import { Navbar } from "./pages/Home/Navbar.jsx";
import Login from "./pages/Login/Loginindex.jsx"; // Ajuste o caminho aqui

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HeroSection />
                <Features />
                <Footer />
              </>
            }
          />{" "}
          {/* Página inicial renderizando HeroSection, Features e Footer */}
          <Route path="/login" element={<Login />} />{" "}
          {/* Rota para a página de login */}
        </Routes>
      </div>
    </Router>
  );
};
