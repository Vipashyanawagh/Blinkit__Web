import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import MilkCards from "./components/landing/MilkCards";
import LoginPage from "./components/landing/LoginPage";
import SignupPage from "./components/landing/SignupPage";
import Navbar from "./components/landing/Navbar";
import CategoryPage from "./components/landing/CategoryPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cn" element={<MilkCards />} />
        <Route path="/prn" element={<MilkCards />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;