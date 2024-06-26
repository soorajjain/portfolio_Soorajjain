import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./pages/main/HeroSection";
import Layout from "./components/Layout/Layout";
import About from "./pages/main/About";
import Contact from "./pages/Contact";
import RecentWork from "./pages/main/RecentWork";

function App() {
  return (
    <div>
      <BrowserRouter basename="/portfolio_Soorajjain">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HeroSection />
                <About />
                <RecentWork />
              </Layout>
            }
          />
          <Route
            path="/Contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
