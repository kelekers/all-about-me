import { motion } from "framer-motion";

export default function LandingPage({ user }) {
  return (
    <div className="relative h-screen w-screen text-white bg-gradient-to-r from-[#0e001a] via-[#1a0033] to-[#3b007d] overflow-hidden">
      {/* background lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,63,130,0.2),_transparent_50%)] blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,0,128,0.2),_transparent_60%)] blur-3xl pointer-events-none" />

      <section className="flex flex-col justify-center items-center text-center min-h-[110vh] pb-10 w-full">
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
          className="text-5xl sm:text-6xl font-bold mt-3 mb-6 leading-snug bg-clip-text text-transparent bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] pb-2.5"
        >
          {user?.name || user?.email || "Pengguna"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 max-w-xl"
        >
          Semoga tugas ini dapat dimaknai dengan apik dan selamat membaca!
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-6 py-3 rounded-full bg-purple-500/20 backdrop-blur-lg border border-purple-400/50 text-purple-200 hover:bg-purple-500/30 transition"
        >
          <h2
            transition={{ duration: 1 }}
            className="text-sm uppercase tracking-widest text-purple-300"
          >
            K01-
            <span className="text-purple-200 font-medium">
              18224087
            </span>
          </h2>
        </motion.button>
      </section>
    </div>
  );
}