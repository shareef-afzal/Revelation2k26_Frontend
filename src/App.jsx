import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage.jsx";
import EventsPage from "./pages/EventPage/EventPage.jsx";
import Login from "./components/Login/Login.jsx";
import ProfilePage from "./pages/ProfilePage/profilepage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import EventDetailsPage from "./components/EventBoard.jsx";
import EventRules from "./components/Rules.jsx";
import UserDashboard from "./components/DashboardPage.jsx";
import Faqs from "./pages/FAQs/Faqs.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import GalleryPage from "./pages/GalleryPage/GalleryPage.jsx";
import TeamsPage from "./pages/TeamsPage/TeamsPage.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("Token"));

  useEffect(() => {
    const storedToken = localStorage.getItem("Token");
    if (storedToken) setToken(storedToken);
  }, []);

  console.log(token);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomePage Token={token} setToken={setToken} />}
        />
        <Route
          path="/events"
          element={<EventsPage Token={token} setToken={setToken} />}
        />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/profile" element={<ProfilePage setToken={setToken} />} />
        <Route path="/event/:id" element={
          <div className="bg-[url('/grid.png')] bg-cover bg-center bg-fixed">
            <Navbar Token={token} setToken={setToken} />
            <EventDetailsPage />
            <EventRules />
            <Footer />
          </div>
        } />
        <Route path="/dashboard/:id" element= {
            <ProtectedRoute Token={token}>
              <UserDashboard Token={token} setToken={setToken} />
            </ProtectedRoute>
          } />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/gallery" element={<GalleryPage Token={token} setToken={setToken} />}/>
        <Route path="/teams" element={<TeamsPage Token={token} setToken={setToken} />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
