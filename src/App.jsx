import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import DonationTracker from './components/DonationTracker';
import EventInfo from './components/EventInfo';
import FAQ from './components/FAQ';
import EventHighlights from "./components/EventHighlights";
import CommunityBoard from './components/CommunityBoard';
import { Container } from 'react-bootstrap';
import VolunteerPage from './components/VolunteerPage';

function App() {
  return (
    <HashRouter>
      <Header />
      <Container fluid style={{ marginTop: '110px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/donate" element={<DonationTracker />} />
          <Route path="/event-info" element={<EventInfo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/highlights" element={<EventHighlights />} />
          <Route path="/community" element={<CommunityBoard />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
        </Routes>
      </Container>
      <Footer />
    </HashRouter>
  );
}

export default App;
