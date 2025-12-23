import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getAuth, signOut } from "firebase/auth";

export default function Navbar({ onLogout }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // State untuk Dropdown Desktop
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  // Ambil data user dari localStorage (Sesuai request tampilan lama)
  const user = JSON.parse(localStorage.getItem("user"));

  // Efek scroll untuk mengubah background navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onLogout();
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // Struktur Menu
  const menus = [
    { title: "Home", path: "/" },
    { title: "About Me", path: "/about" },
    {
      title: "UTS Collection",
      id: "uts",
      items: [
        { label: "UTS 1 - All About Me", path: "/about" },
        { label: "UTS 2 - My Songs", path: "/songs" },
        { label: "UTS 3 - My Story", path: "/stories" },
        { label: "UTS 4 - My Shape", path: "/my-shape" },
        { label: "UTS 5 - Personal Review", path: "/review" },
      ],
    },
    {
      title: "UAS Masterpiece",
      id: "uas",
      items: [
        { label: "UAS 1 - My Concepts", path: "/concepts" },
        { label: "UAS 2 - My Opinions", path: "/opinions" },
        { label: "UAS 3 - My Innovations", path: "/innovations" },
        { label: "UAS 4 - My Knowledge", path: "/knowledge" },
        { label: "UAS 5 - Professional Review", path: "/professional-review" },
      ],
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0e001a]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-purple-900/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2 group">
          <span className="bg-gradient-to-r from-yellow-400 to-purple-500 text-transparent bg-clip-text group-hover:from-purple-400 group-hover:to-yellow-400 transition-all duration-500">
            @kelekers
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {menus.map((menu) => (
            <div
              key={menu.title}
              className="relative"
              onMouseEnter={() => menu.items && setActiveDropdown(menu.id)}
              onMouseLeave={() => menu.items && setActiveDropdown(null)}
            >
              {menu.items ? (
                // --- MENU DENGAN DROPDOWN ---
                <div className="cursor-pointer px-3 py-2 text-white/80 hover:text-yellow-300 transition font-medium flex items-center gap-1 group">
                  {menu.title}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === menu.id ? "rotate-180 text-yellow-300" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>

                  {/* Dropdown Content */}
                  <AnimatePresence>
                    {activeDropdown === menu.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#1a0033]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="py-2">
                          {menu.items.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              onClick={() => setActiveDropdown(null)}
                              className={`block px-5 py-3 text-sm transition-all duration-200 border-l-2 ${
                                location.pathname === item.path
                                  ? "border-yellow-400 bg-white/10 text-yellow-300"
                                  : "border-transparent text-gray-300 hover:bg-white/5 hover:text-white hover:border-purple-400"
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // --- MENU BIASA ---
                <Link
                  to={menu.path}
                  className={`px-3 py-2 transition font-medium relative ${
                    location.pathname === menu.path
                      ? "text-yellow-300"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {menu.title}
                  {location.pathname === menu.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-yellow-400 to-purple-500"
                    />
                  )}
                </Link>
              )}
            </div>
          ))}

          {/* USER PROFILE SECTION (Integrasi Kode Lama) */}
          {user && (
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-white/10">
              {user.picture ? (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-9 h-9 rounded-full border border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-400">
                    <span className="text-white text-xs">{user.name?.charAt(0)}</span>
                </div>
              )}
              
              <div className="hidden xl:flex flex-col items-start">
                  <span className="text-xs text-white/90 font-medium max-w-[100px] truncate">{user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="text-[10px] text-red-300 hover:text-red-400 transition font-bold uppercase tracking-wider"
                  >
                    Logout
                  </button>
              </div>
              
              {/* Logout button icon only for smaller desktop screens */}
              <button onClick={handleLogout} className="xl:hidden text-red-300 hover:text-red-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-4">
           {/* Show Mini Profile on Mobile Header too */}
           {user && (
              <img
                src={user.picture}
                alt="Profile"
                className="w-8 h-8 rounded-full border border-purple-400"
              />
           )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0e001a] border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
              {/* User Profile in Mobile Menu */}
              {user && (
                  <div className="flex items-center gap-3 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                    <img src={user.picture} alt={user.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="text-white font-semibold text-sm">{user.name}</p>
                        <p className="text-white/50 text-xs">{user.email}</p>
                    </div>
                  </div>
              )}

              {menus.map((menu) => (
                <div key={menu.title}>
                  {menu.items ? (
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-widest text-yellow-500/70 font-bold mt-4 mb-2">
                        {menu.title}
                      </p>
                      {menu.items.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block pl-4 py-2 text-sm ${
                            location.pathname === item.path
                              ? "text-yellow-300 font-semibold"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          • {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={menu.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3 text-lg font-medium border-b border-white/5 ${
                        location.pathname === menu.path ? "text-yellow-300" : "text-white"
                      }`}
                    >
                      {menu.title}
                    </Link>
                  )}
                </div>
              ))}
              
              <button
                onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                }}
                className="w-full text-left py-4 text-red-400 font-bold mt-4 border-t border-white/10 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}