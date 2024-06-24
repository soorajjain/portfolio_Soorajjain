import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./pages/main/HeroSection";
import Layout from "./components/Layout/Layout";
import About from "./pages/main/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HeroSection />
                <About />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
