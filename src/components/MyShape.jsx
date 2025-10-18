import { motion } from "framer-motion";

export default function MyShape() {
  const data = [
    {
      komponen: "S – Signature Strengths (Kekuatan Khas)",
      deskripsi:
        "Analitis, adaptif, visioner, reflektif. Memiliki pola pikir sistematis dan kemampuan membaca struktur kompleks. Senang membangun solusi dari ide abstrak.",
      contoh:
        "Menjadi penghubung ide & teknis pada proyek Studify dan prototype Trufman; cepat menemukan pola error dan menyusun solusi efisien.",
    },
    {
      komponen: "H – Heart (Nilai & Gairah)",
      deskripsi:
        "Nilai utama: integritas, tanggung jawab, dan pertumbuhan. Tertarik pada bagaimana teknologi meningkatkan nilai kemanusiaan.",
      contoh:
        "Membuat konsep ZeroToHero – microlearning Gen-Z, menggabungkan UI/UX dengan empati pengguna; aktif di kolaborasi antar-lembaga kampus.",
    },
    {
      komponen: "A – Aptitudes & Acquired Skills (Bakat & Keterampilan)",
      deskripsi:
        "Cepat belajar, problem solver, fokus pada inovasi dan kerapian sistem.",
      contoh:
        "Hard Skills: React, Supabase, Flask, SQL, Network & Security. Soft Skills: Leadership, Empati, Communication, Teamwork.",
    },
    {
      komponen: "P – Personality (Profil Kepribadian)",
      deskripsi:
        "INTP-T / “Builder-Thinker”: logis tapi imajinatif, rasional namun reflektif. Cocok di lingkungan dengan kebebasan berpikir dan eksplorasi ide.",
      contoh:
        "Menyimbangkan kerja individu & kolaborasi dalam tim besar seperti Kementerian Kolaborasi Lembaga dan FSAE ITB.",
    },
    {
      komponen: "E – Experiences (Pengalaman Hidup)",
      deskripsi:
        "Pernah mengalami kegagalan, penolakan, dan tanggung jawab besar dalam organisasi; menumbuhkan ketahanan, empati, dan disiplin.",
      contoh:
        "Memimpin 100+ lembaga sebagai Dirjen; partisipasi di CTF, FSAE, dan berbagai proyek digital kampus.",
    },
  ];

  const misi =
    "Menggunakan kemampuan analitis dan kreativitas untuk membangun sistem—baik teknologi maupun manusia—yang selaras antara logika dan nurani; menjadi jembatan antara data dan empati.";

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
                <td className="p-4 font-semibold text-purple-300 align-top text-jus">
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
        <h2 className="text-2xl font-semibold text-pink-300 mb-3 drop-shadow-lg">
          Pernyataan Misi Pribadi
        </h2>
        <p className="text-purple-100 leading-relaxed">{misi}</p>
      </motion.div>
    </section>
  );
}