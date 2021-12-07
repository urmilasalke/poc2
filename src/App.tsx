import React, { Suspense, lazy } from "react";
import Home from "./components/Home";
import Admission from "./components/Admission";
import Contactus from "./components/Contactus";
import Header from "./components/Header";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import PrePrimary from "./components/PrePrimary";
import Primary from "./components/Primary";
import Secondary from "./components/Secondary";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const Aboutus = lazy(() => import("./components/Aboutus"));
function App() {
  return (
    <Router>
      <TopHeader />
      <Header />
      <div className="page">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/primary" element={<Primary />} />
            <Route path="/secondary" element={<Secondary />} />
            <Route path="/preprimary" element={<PrePrimary />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
