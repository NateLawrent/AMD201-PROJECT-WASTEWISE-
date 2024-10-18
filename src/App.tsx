import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import WasteCategories from './pages/WasteCategories';
import WasteItems from './pages/WasteItems';
import Challenges from './pages/Challenges';
import ScoreBoard from './pages/ScoreBoard';

function App() {
  return (
    <Router basename="/AMD201-Waste-Management-App-">
      <div className="min-h-screen bg-green-50 flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/categories" element={<WasteCategories />} />
            <Route path="/items" element={<WasteItems />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/scoreboard" element={<ScoreBoard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
