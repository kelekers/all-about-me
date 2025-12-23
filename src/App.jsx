import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";

// UTS
import AboutMe from "./components/AboutMe.jsx";
import MyStory from "./components/MyStory.jsx";
import MySongs from "./components/MySongs.jsx";
import LoginPage from "./components/LoginPage.jsx";
import MyShape from "./components/MyShape.jsx";
import MyPersonalReview from "./components/MyPersonalReview.jsx";

// UAS
import MyConcepts from "./components/MyConcepts.jsx";
import MyOpinions from "./components/MyOpinions.jsx";
import MyInnovations from "./components/MyInnovations.jsx";
import MyKnowledge from "./components/MyKnowledge.jsx";
import MyProfessionalReview from "./components/MyProfessionalReview.jsx";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogin = (userData) => setUser(userData);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  console.log("User di App:", user);

  return (
  <Router>
    <div className="bg-[#0e001a] min-h-screen text-white">
      {user && <Navbar onLogout={handleLogout} />}

      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LandingPage user={user} />} />

            // UTS
            <Route path="/about" element={<AboutMe />} />
            <Route path="/songs" element={<MySongs />} />
            <Route path="/stories" element={<MyStory user={user} />} />
            <Route path="/my-shape" element={<MyShape />} />
            <Route path="/review" element={<MyPersonalReview />} />
            
            // UAS
            <Route path="/concepts" element={<MyConcepts />} />
            <Route path="/opinions" element={<MyOpinions />} />
            <Route path="/innovations" element={<MyInnovations />} />
            <Route path="/knowledge" element={<MyKnowledge />} />
            <Route path="/professional-review" element={<MyProfessionalReview />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </div>
  </Router>
);
}

export default App;