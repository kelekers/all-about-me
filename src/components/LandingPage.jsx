import { motion } from "framer-motion";

export default function LandingPage({ user }) {
  return (
    <div className="relative h-screen w-screen text-white bg-gradient-to-r from-[#0e001a] via-[#1a0033] to-[#3b007d] overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,63,130,0.25),_transparent_60%)] blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,128,255,0.25),_transparent_60%)] blur-3xl pointer-events-none" />

      <motion.div
        className="absolute top-1/3 left-1/4 w-52 h-52 rounded-full bg-purple-400/30 blur-2xl shadow-[0_0_60px_30px_rgba(168,85,247,0.2)]"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1 right-1/5 w-72 h-72 rounded-full bg-pink-400/20 blur-2xl shadow-[0_0_80px_40px_rgba(244,114,182,0.15)]"
        animate={{ y: [0, 40, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[20%] right-[30%] w-32 h-32 bg-indigo-400/20 blur-lg rotate-45 shadow-[0_0_60px_30px_rgba(129,140,248,0.2)]"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-[10%] right-[20%] w-40 h-40 bg-blue-400/20 blur-lg rotate-[25deg] shadow-[0_0_70px_35px_rgba(96,165,250,0.2)]"
        animate={{
          rotate: [25, 385],
          scale: [1, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      <section className="relative flex flex-col justify-center items-center text-center min-h-[110vh] pb-10 w-full z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm uppercase tracking-widest text-purple-400"
        >
          Selamat Datang
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl sm:text-6xl font-bold mt-3 mb-3 leading-snug bg-clip-text text-transparent bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] pb-2.5"
        >
          {user?.name || user?.email || "Pengguna"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 max-w-xl mb-8"
        >
          Semoga tugas ini dapat dimaknai dengan apik dan selamat membaca!
        </motion.p>

        <div className="flex flex-col items-center">
          <span className="text-purple-200 medium-text italic mb-1 font-medium">
            brought to you by:
          </span>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-0 px-6 py-3 rounded-full bg-purple-500/20 backdrop-blur-lg border border-purple-400/50 text-purple-200 hover:bg-purple-500/30 transition"
          >
            <h2 className="text-sm uppercase tracking-widest text-purple-300">
              K01-
              <span className="text-purple-200 font-medium">18224087</span>
            </h2>
          </motion.button>
        </div>
      </section>
    </div>
  );
}