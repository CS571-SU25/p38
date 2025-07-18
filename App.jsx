import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router'

import AboutUs from './components/AboutUs'
import OtherInfo from './components/OtherInfo'
import Header from './components/Header';
import CountdownTimer from './components/CountdownTimer';
import SignupForm from './components/SignupForm';
import DonationTracker from './components/DonationTracker';
import EventInfo from './components/EventInfo';
import FAQ from './components/FAQ';
{/* import EventHighlights from "./components/EventHighlights"; */}

function App() {
  return (
    <HashRouter>
      <Header />
      <CountdownTimer />

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/donate" element={<DonationTracker />} />
        <Route path="/event-info" element={<EventInfo />} />
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/highlights" element={<EventHighlights />} />*/}
      </Routes>
    </HashRouter>
  );
}

export default App;