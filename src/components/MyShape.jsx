import { motion } from "framer-motion";

export default function MyShape() {
  const data = [
    {
      komponen: "S – Signature Strengths",
      deskripsi:
        "hog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog ",
      contoh:
        "hog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog ",
    },
    {
      komponen: "H – Heart",
      deskripsi:
        "hog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog ",
      contoh:
        "hog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog ",
    },
    {
      komponen: "A – Aptitudes & Acquired Skills",
      deskripsi:
        "hog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog ",
      contoh:
        "hog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog ",
    },
    {
      komponen: "P – Personality",
      deskripsi:
        "hog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog ",
      contoh:
        "hog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog ",
    },
    {
      komponen: "E – Experiences",
      deskripsi:
        "hog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog ",
      contoh:
        "hog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog ",
    },
  ];

  const misi =
    "hog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog riderhog ";

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0e001a] via-[#1a0033] to-[#3b007d] text-white px-6 py-20 flex flex-col items-center">
    
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,63,130,0.2),_transparent_50%)] blur-3xl pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,0,128,0.2),_transparent_60%)] blur-3xl pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] text-transparent bg-clip-text pb-2.5"

      >
        My SHAPE ✨
      </motion.h1>

      <div className="w-full max-w-6xl overflow-hidden rounded-2xl shadow-2xl backdrop-blur-2xl bg-white/10 border border-white/20">
        <table className="w-full border-collapse text-left">
          <thead className="bg-white/20 text-purple-200">
            <tr>
              <th className="p-4 text-center">Komponen</th>
              <th className="p-4 text-center">Deskripsi Reflektif</th>
              <th className="p-4 text-center">Contoh Implementasi Nyata</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-white/20 hover:bg-white/15 transition"
              >
                <td className="p-4 font-bold text-purple-300 align-top text-jus">
                  {row.komponen}
                </td>
                <td className="p-4 text-purple-100 align-top text-justify">
                  {row.deskripsi}
                </td>
                <td className="p-4 text-purple-100 align-top text-justify">{row.contoh}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center max-w-3xl mx-auto bg-white/15 border border-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl"
      >
        <h2 className="text-xl font-bold text-pink-300 mb-3 drop-shadow-lg">
          Pernyataan Misi Pribadi
        </h2>
        <p className="text-purple-100 leading-relaxed">{misi}</p>
      </motion.div>
    </section>
  );
}