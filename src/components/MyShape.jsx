import { motion } from "framer-motion";

export default function MyShape() {
  const data = [
    {
      komponen: "S – Signature Strengths",
      deskripsi:
       "Analitis, reflektif, dan mampu menggabungkan sudut pandang logika dengan intuisi kreatif."
    },
    {
      komponen: "H – Heart",
      deskripsi:
        "Tertarik pada irisan antara seni dan teknologi untuk menciptakan sesuatu yang bermakna, indah, dan fungsional.",
    },
    {
      komponen: "A – Aptitudes & Acquired Skills",
      deskripsi:
        "Desain UI/UX, 3D modeling, storytelling (copywriting), serta kepemimpinan kolaboratif.",
    },
    {
      komponen: "P – Personality",
      deskripsi:
        "INFP - Introver reflektif dengan kecenderungan pemikir; terbuka terhadap ide-ide baru dan suka menantang pola pikir.",
    },
    {
      komponen: "E – Experiences",
      deskripsi:
        "Mengikuti kepanitiaan OSIS dan menjadi tutor fisika TPB, serta menjadi pengajar les privat SMP-SMA.",
    },
  ];

  const misi =
    "Aku adalah seseorang yang percaya bahwa makna hidup tidak datang dari seberapa cepat aku berlari, tetapi dari seberapa dalam aku memahami setiap langkah. Hidup bagiku bukan perlombaan, melainkan perjalanan untuk mengenali diri, dunia, dan cara keduanya saling beresonansi.\n\nAku berusaha untuk selalu berpikir, bukan sekadar mengikuti arus. Karena aku tahu, kebenaran seringkali tidak hadir di tempat yang paling ramai, melainkan di ruang-ruang sepi di mana aku berani bertanya pada diriku sendiri.\n\nAku mencintai logika seperti aku mencintai imajinasi. Keduanya bukan dua sisi yang bertentangan, tapi dua tangan yang saling menggenggam  mencipta, menalar, dan memberi arti. Melalui seni, teknologi, dan pemikiran, aku ingin membangun sesuatu yang tidak hanya berguna, tapi juga punya jiwa.\n\nAku mungkin tidak selalu sejalan dengan kebiasaan umum, tapi di sanalah aku menemukan hidupku sendiri. Aku tidak mencari persetujuan, aku mencari pemahaman. Dan di setiap percakapan, aku ingin belajar  bukan untuk menang, tapi untuk tumbuh.\n\nAku ingin menjadi manusia yang membuat orang lain merasa aman untuk menjadi dirinya sendiri. Karena bagiku, kekuatan sejati bukan tentang siapa yang paling keras berbicara, tapi siapa yang paling tulus mendengarkan.\n\nDan jika suatu hari dunia berubah terlalu cepat, aku ingin tetap menjadi seseorang yang memilih untuk berhenti sejenak  untuk merasa, berpikir, dan bertanya, “Apa yang sebenarnya sedang aku cari?”";

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
        <table className="w-full border-collapse">
          <thead className="bg-white/20 text-purple-200">
            <tr>
              <th className="p-4 text-center">Komponen</th>
              <th className="p-4 text-center">Deskripsi Reflektif</th>
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
                <td className="p-4 font-bold text-purple-300 align-top">
                  {row.komponen}
                </td>
                <td className="p-4 text-purple-100 align-top">
                  {row.deskripsi}
                </td>
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
          Piagam Diri
        </h2>
        <p className="text-purple-100 text-justify whitespace-pre-line">{misi}</p>
      </motion.div>
    </section>
  );
}