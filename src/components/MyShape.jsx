import { motion } from "framer-motion";

const SHAPECard = ({ item, index }) => {
  const getIcon = (komponen) => {
    switch (komponen.charAt(0)) {
      case "S":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-yellow-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "H":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-pink-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        );
      case "A":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1v-3m2-8a3 3 0 00-3-3H9a3 3 0 00-3 3v8l5 2 5-2V7z"
            />
          </svg>
        );
      case "P":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-green-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        );
      case "E":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-red-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m10.606-10.607a4 4 0 11-5.656 0 4 4 0 015.656 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/10 p-6 rounded-xl border border-purple-700/50 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:shadow-pink-500/20"
    >
      <div className="flex items-center space-x-4 mb-3">
        {getIcon(item.komponen)}
        <h3 className="text-xl font-bold text-yellow-200">
          {item.komponen.split(" – ")[0]}
        </h3>
      </div>
      <p className="text-sm font-semibold text-purple-300 mb-2">
        {item.komponen.split(" – ")[1]}
      </p>
      <p className="text-purple-100 text-sm font-normal">{item.deskripsi}</p>
    </motion.div>
  );
};

export default function MyShape() {
  const data = [
    {
      komponen: "S – Signature Strengths",
      deskripsi:
        "Analitis, reflektif, dan mampu menggabungkan sudut pandang logika dengan intuisi kreatif.",
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
        "INFP - Introver reflektif dengan kecenderungan pemikir, terbuka terhadap ide-ide baru, dan suka menantang pola pikir.",
    },
    {
      komponen: "E – Experiences",
      deskripsi:
        "Mengikuti kepanitiaan OSIS dan menjadi tutor fisika TPB, serta menjadi pengajar les privat SMP-SMA.",
    },
  ];

  const piagamDiriIntro =
    "Aku adalah seseorang yang percaya bahwa makna hidup tidak datang dari seberapa cepat aku berlari, tetapi dari seberapa dalam aku memahami setiap langkah. Hidup bagiku bukan perlombaan, melainkan perjalanan untuk mengenali diri, dunia, dan cara keduanya saling beresonansi.";

  const piagamDiriDetail =
    "Aku berusaha untuk selalu berpikir, bukan sekadar mengikuti arus. Karena aku tahu, kebenaran seringkali tidak hadir di tempat yang paling ramai, melainkan di ruang-ruang sepi di mana aku berani bertanya pada diriku sendiri.\n\nAku mencintai logika seperti aku mencintai imajinasi. Keduanya bukan dua sisi yang bertentangan, tapi dua tangan yang saling menggenggam  mencipta, menalar, dan memberi arti. Melalui seni, teknologi, dan pemikiran, aku ingin membangun sesuatu yang tidak hanya berguna, tapi juga punya jiwa.\n\nAku mungkin tidak selalu sejalan dengan kebiasaan umum, tapi di sanalah aku menemukan hidupku sendiri. Aku tidak mencari persetujuan, aku mencari pemahaman. Dan di setiap percakapan, aku ingin belajar  bukan untuk menang, tapi untuk tumbuh.\n\nAku ingin menjadi manusia yang membuat orang lain merasa aman untuk menjadi dirinya sendiri. Karena bagiku, kekuatan sejati bukan tentang siapa yang paling keras berbicara, tapi siapa yang paling tulus mendengarkan.\n\nDan jika suatu hari dunia berubah terlalu cepat, aku ingin tetap menjadi seseorang yang memilih untuk berhenti sejenak  untuk merasa, berpikir, dan bertanya, “Apa yang sebenarnya sedang aku cari?”";

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0e001a] via-[#1a0033] to-[#3b007d] text-white px-6 py-20 flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,63,130,0.2),_transparent_50%)] blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,0,128,0.2),_transparent_60%)] blur-3xl pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] text-transparent bg-clip-text pb-2.5"
      >
        My SHAPE
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto text-purple-200 font-normal italic mb-12 border-b border-purple-500/50 pb-4"
      >
        "{piagamDiriIntro}"
      </motion.p>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <SHAPECard key={index} item={item} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center max-w-4xl mx-auto bg-white/15 border border-white/20 rounded-2xl p-8 shadow-2xl backdrop-blur-2xl"
      >
        <h2 className="text-2xl font-bold text-pink-300 mb-4 drop-shadow-lg">
          Piagam Diri
        </h2>
        <p className="text-purple-100 text-justify font-normal whitespace-pre-line leading-relaxed border-t border-white/20 pt-2">
          {piagamDiriDetail}
        </p>
      </motion.div>
    </section>
  );
}