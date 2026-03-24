import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Visualiser from './pages/Visualiser';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <ChatBot />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/visualiser" element={<Layout><Visualiser /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
