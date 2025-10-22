import { useGoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function LoginPage({ onLogin }) {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const userInfo = await res.json();

        localStorage.setItem("user", JSON.stringify(userInfo));
        onLogin(userInfo);

        await setDoc(doc(db, "users", userInfo.sub), {
          name: userInfo.name,
          email: userInfo.email,
          picture: userInfo.picture,
          loginAt: new Date().toISOString(),
        });

        console.log("User data saved to Firestore:", userInfo);
      } catch (err) {
        console.error("Failed to fetch user info:", err);
      }
    },
    onError: () => console.log("Login Failed"),
  });

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0e001a] via-[#1a0033] to-[#3b007d] text-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 text-transparent bg-clip-text pb-2.5"
      >
        Silakan Login ✨
      </motion.h1>

      <motion.button
        onClick={() => login()}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex items-center gap-3 bg-white text-gray-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google logo"
          className="w-6 h-6"
        />
        Sign in with Google
      </motion.button>
    </section>
  );
}