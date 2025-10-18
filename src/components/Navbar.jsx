import { Link, useLocation } from "react-router-dom";

export default function Navbar({ onLogout }) {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="inline-flex items-center gap-8 px-8 py-5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg translate-y-[-20%]">

        <ul className="flex gap-8 text-sm font-medium text-white">
          {[
            { name: "Home", path: "/" },
            { name: "About Me", path: "/about" },
            { name: "My Story", path: "/stories" },
            { name: "My Songs", path: "/songs" },
            { name: "My SHAPE", path: "/my-shape" },
            { name: "My PR", path: "/review" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`transition-colors hover:text-purple-300 ${
                  location.pathname === item.path
                    ? "text-purple-400 font-semibold"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {user && (
          <div className="flex items-center gap-3 ml-6">
            {user.picture && (
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 rounded-full border border-purple-400"
              />
            )}
            <button
              onClick={onLogout}
              className="text-sm text-red-300 hover:text-red-400 transition font-medium"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}