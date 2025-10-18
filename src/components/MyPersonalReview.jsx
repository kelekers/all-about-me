import { motion } from "framer-motion";

export default function MyPersonalReview() {
  const table = [
    {
      kriteria: "Freshness",
      nilai: "5",
      penjelasan:
        "Cerita terasa segar karena berangkat dari pengalaman pribadi dalam lomba internasional di Manila. Ide tentang 'keheningan sebagai bentuk komunikasi' jarang diangkat dan menjadi pembeda yang kuat dibanding kisah reflektif umum.",
    },
    {
      kriteria: "Engagement",
      nilai: "5",
      penjelasan:
        "Alur jelas dan emosional — pembaca mengikuti perjalanan dari cemas menjadi sadar dan tenang. Perubahan makna di akhir memberi daya tarik kuat.",
    },
    {
      kriteria: "Humor",
      nilai: "4",
      penjelasan:
        "Humor halus dan kontekstual, seperti kalimat 'baru kali ini aku dipuji karena tidak bicara.' Hangat dan menyeimbangkan nuansa reflektif.",
    },
    {
      kriteria: "Inspiration",
      nilai: "5",
      penjelasan:
        "Pesan kuat dan membekas — bahwa diam dan mendengarkan adalah bentuk komunikasi penting. Cerita mengundang refleksi mendalam.",
    },
  ];

  const refleksi =
    "Ceritaku merepresentasikan diriku saat menghadapi tekanan. Saya cenderung ingin hasil cepat, namun pengalaman ini mengingatkan bahwa mendengarkan bisa lebih efektif. Saya belajar bahwa komunikasi baik datang dari ketulusan untuk memahami, bukan hanya kecepatan berpikir.";

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0e001a] via-[#1a0033] to-[#3b007d] text-white px-6 py-20">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,63,130,0.2),_transparent_50%)] blur-3xl pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,0,128,0.2),_transparent_60%)] blur-3xl pointer-events-none" />
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#000000] via-[#ffdd45] to-[#ffffff] text-transparent bg-clip-text pb-2.5"
      >
        My Personal Review ✨
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="overflow-hidden rounded-2xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl max-w-6xl mx-auto"
      >
        <table className="w-full border-collapse text-left">
          <thead className="bg-white/20 text-purple-200">
            <tr>
              <th className="p-4 text-center">Kriteria</th>
              <th className="p-4 text-center">Nilai</th>
              <th className="p-4 text-center">Penjelasan</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-white/20 hover:bg-white/15 transition"
              >
                <td className="p-4 font-semibold text-purple-300 align-top">
                  {row.kriteria}
                </td>
                <td className="p-4 text-center text-purple-200 align-top">
                  {row.nilai}
                </td>
                <td className="p-4 text-justify text-purple-100 align-top">
                  {row.penjelasan}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10 bg-white/15 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-lg max-w-5xl mx-auto"
      >
        <h3 className="text-xl font-semibold text-pink-300 mb-3">Refleksi</h3>
        <p className="text-purple-100 leading-relaxed">{refleksi}</p>
      </motion.div>
    </section>
  );
}