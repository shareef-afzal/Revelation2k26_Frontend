import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../../config/config";

import revelation from "../../assets/revelationlogo1.png";
import iiestLogo from "../../assets/iiest_logo.png";
import ascLogo from "../../assets/asce_logo.png";

import homeIcon from "../../assets/icons/home.png";
import eventsIcon from "../../assets/icons/calendar.png";
import sponsorsIcon from "../../assets/icons/sponsor.png";
import teamsIcon from "../../assets/icons/teams.png";
import galleryIcon from "../../assets/icons/gallery.png"; // ✅ ADD THIS ICON

const Navbar = ({ Token }) => {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [isValidToken, setIsValidToken] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const activeSection =
    location.pathname === "/profile" ? null : location.pathname;

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const token = localStorage.getItem("Token");
    if (token) {
      try {
        const userResponse = await axios.get(`${API_URL}/api/auth/status`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (userResponse.status === 200) {
          setUserData(userResponse.data.user);
          setIsValidToken(true);
        } else {
          setIsValidToken(false);
          localStorage.removeItem("Token");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsValidToken(false);
        localStorage.removeItem("Token");
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (path) => {
    if (path === "/sponsors") {
      if (location.pathname === "/") {
        document
          .getElementById("sponsors-section")
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/#sponsors");
        setTimeout(() => {
          document
            .getElementById("sponsors-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    } else {
      navigate(path);
      setMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "/", icon: homeIcon, label: "Home" },
    { id: "/events", icon: eventsIcon, label: "Events" },
    { id: "/gallery", icon: galleryIcon, label: "Gallery" }, // ✅ ADDED
    { id: "/sponsors", icon: sponsorsIcon, label: "Sponsors" },
    { id: "/teams", icon: teamsIcon, label: "Teams" },
  ];

  return (
    <>
      <nav
        className={`fixed top-2 left-2 right-3 w-[96dvw] md:w-[98.5dvw] bg-gray-900 text-white flex items-center justify-between px-3 py-1 border-2 border-gray-600 rounded-lg shadow-lg z-50 bg-opacity-0 backdrop-blur-lg transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-[115%]"
        }`}
      >
        {/* Logos */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="https://revelation2k25.tech" target="_blank" rel="noreferrer">
            <img
              src={revelation}
              alt="Revelation Logo"
              className="w-28 sm:w-36 md:w-44 cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
          <a href="https://www.iiests.ac.in" target="_blank" rel="noreferrer">
            <img
              src={iiestLogo}
              alt="IIEST Logo"
              className="w-7 sm:w-8 md:w-10 hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/academic-society-of-computer-engineers-asce-iiest-shibpur/posts/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ascLogo}
              alt="ASC Logo"
              className="w-7 sm:w-8 md:w-10 hover:scale-110 transition-transform"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className={`px-3 py-2 text-lg rounded-lg flex items-center gap-2 transition-all duration-300
                ${
                  activeSection === id || hovered === id
                    ? "bg-red-700 text-white px-4 py-2 font-serif font-medium"
                    : "bg-transparent text-white hover:text-gray-400"
                }`}
            >
              <img
                src={icon}
                alt={label}
                className="w-6 sm:w-8 filter brightness-200 contrast-200 drop-shadow-md"
              />
              {(hovered === id || activeSection === id) && <span>{label}</span>}
            </button>
          ))}
        </div>

        {/* Profile/Login (Desktop) */}
        <div className="hidden lg:block pr-3">
          {Token && isValidToken ? (
            <div
              onClick={() => handleNavigation("/profile")}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black border-2 border-red-600 cursor-pointer hover:scale-110 transition-transform"
            >
              {userData.picture && (
                <img
                  src={userData.picture}
                  alt="Profile"
                  className="w-full h-full rounded-full"
                />
              )}
            </div>
          ) : (
            <button
              className="mr-4 px-5 py-2 border-2 border-red-600 rounded-lg hover:shadow-red-500 shadow-md"
              onClick={() => handleNavigation("/login")}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl hover:scale-110 transition-transform"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-56 bg-gray-950 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6">
          {menuItems.map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              className="flex items-center gap-2 w-full px-4 py-2 text-lg hover:bg-red-600"
            >
              <img
                src={icon}
                alt={label}
                className="w-6 filter brightness-200 contrast-200"
              />
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
