import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0e001a] via-[#1a0033] to-[#3b007d] text-white px-6 py-24"
    >

      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-3xl" />
          <img
            src={profilePic}
            alt="Abhinaya Rajendra Fargaz"z
            className="relative w-56 h-56 object-cover rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/30"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Hello! I’m{" "}
            <span className="text-purple-400 font-bold">
              Abhinaya Rajendra Fargaz
            </span>
            , a student of{" "}
            <span className="text-purple-300">
              Information Technology Systems at ITB
            </span>
            . I’m passionate about creativity, digital innovation, and building
            meaningful experiences through technology and design.
          </p>

          <p className="text-gray-400">
            Outside of academics, I love expressing myself through writing,
            music, and visual art. I believe that technology is not just about
            solving problems — it’s about connecting people and emotions.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 rounded-full bg-purple-500/20 backdrop-blur-lg border border-purple-400/50 text-purple-200 hover:bg-purple-500/30 transition"
          >
            View My Works →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
