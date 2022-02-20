import React from "react";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import Index from "./Component/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
