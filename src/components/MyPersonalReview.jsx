import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

const rawReviewData = [
  {
    title: "UTS 1 - About Me",
    nilai_rata: 4.5,
    details: [
      {
        kriteria: "Orisinalitas",
        nilai: 5,
        penjelasan:
          "Narasi introspektif dengan gaya filosofis dan jujur, unik dan personal.",
      },
      {
        kriteria: "Keterlibatan",
        nilai: 5,
        penjelasan:
          "Pembaca terbawa dari awal hingga akhir, ritme kalimat halus dan reflektif.",
      },
      {
        kriteria: "Humor",
        nilai: 3,
        penjelasan:
          "Tidak menonjolkan humor eksplisit, namun ada kehangatan halus dan spontan.",
      },
      {
        kriteria: "Wawasan (Insight)",
        nilai: 5,
        penjelasan:
          "Memberikan pandangan mendalam tentang makna hubungan dan diri.",
      },
    ],
  },
  {
    title: "UTS 2 - My Songs",
    nilai_rata: 4.25,
    details: [
      {
        kriteria: "Orisinalitas",
        nilai: 5,
        penjelasan: "Penafsiran lagu-lagu populer secara personal dan filosofis.",
      },
      {
        kriteria: "Keterlibatan",
        nilai: 4,
        penjelasan:
          "Penyajian naratif enak dibaca; tiap lagu punya makna emosional berbeda.",
      },
      {
        kriteria: "Humor",
        nilai: 3,
        penjelasan:
          "Tidak relevan di konteks ini, tapi ekspresi tulus menjaga keseimbangan emosi.",
      },
      {
        kriteria: "Inspirasi",
        nilai: 5,
        penjelasan:
          "Refleksi mendalam tentang cinta, kehilangan, dan penerimaan.",
      },
    ],
  },
  {
    title: "UTS 3 - My Story",
    nilai_rata: 5.0,
    details: [
      {
        kriteria: "Orisinalitas",
        nilai: 5,
        penjelasan:
          "Cerita personal yang ekspresif dengan metafora saintifik dan introspektif.",
      },
      {
        kriteria: "Keterlibatan",
        nilai: 5,
        penjelasan:
          "Alur emosional kuat; pembaca merasa tenggelam dalam suasana narasi.",
      },
      {
        kriteria: "Pengembangan Narasi",
        nilai: 5,
        penjelasan:
          "Struktur rapi dan konsisten dari awal hingga refleksi akhir.",
      },
      {
        kriteria: "Inspirasi",
        nilai: 5,
        penjelasan:
          "Pesan tentang keberanian dan kejujuran diri disampaikan sangat menyentuh.",
      },
    ],
  },
  {
    title: "UTS 4 - My SHAPE",
    nilai_rata: 4.75,
    details: [
      {
        kriteria: "Orisinalitas",
        nilai: 5,
        penjelasan: "Interpretasi reflektif dan puitis dari kerangka SHAPE.",
      },
      {
        kriteria: "Keterlibatan",
        nilai: 4,
        penjelasan: "Mengundang pembaca merenung; ritme narasi tenang tapi kuat.",
      },
      {
        kriteria: "Visualisasi & Struktur",
        nilai: 5,
        penjelasan:
          "Transisi dari tabel ke piagam diri alami dan saling mendukung.",
      },
      {
        kriteria: "Wawasan (Insight)",
        nilai: 5,
        penjelasan: "Pesan hidup yang kontemplatif dan menyentuh.",
      },
    ],
  },
  {
    title: "UTS 5 - My Personal Review (Belum Dinilai)",
    nilai_rata: 0,
    details: [
      {
        kriteria: "Pemahaman Konsep Interpersonal",
        nilai: "-",
        penjelasan: "Menunggu penilaian.",
      },
      {
        kriteria: "Analisis Kritis Pesan",
        nilai: "-",
        penjelasan: "Menunggu penilaian.",
      },
      {
        kriteria: "Argumentasi (Logos)",
        nilai: "-",
        penjelasan: "Menunggu penilaian.",
      },
      {
        kriteria: "Etos & Empati",
        nilai: "-",
        penjelasan: "Menunggu penilaian.",
      },
    ],
    isPending: true,
  },
];

const refleksi =
  "Mengerjakan rangkaian tugas UTS dari All About Me hingga My Personal Review menjadi perjalanan yang tidak sekadar akademik, melainkan proses mengenal diri sendiri secara lebih dalam. Setiap bagian menuntutku untuk membuka lapisan-lapisan pikiran dan perasaan yang sebelumnya mungkin tidak kusadari.\n\nPada UTS-1 (All About Me), aku belajar bahwa memperkenalkan diri bukan hanya tentang menyebut siapa aku, tetapi tentang menunjukkan mengapa aku menjadi seperti sekarang. Di situ aku menyadari bahwa keunikan bukan sesuatu yang harus disembunyikan, melainkan dirawat dan dibagikan sebagai identitas yang utuh.\n\nMelalui UTS-2 (My Songs for You), aku menemukan bahwa lagu dapat menjadi bahasa universal yang menjembatani logika dan emosi. Saat menulis refleksi tiap lagu, aku belajar bahwa perasaan yang sulit diungkap seringkali bisa diterjemahkan melalui seni. Musik menjadi medium yang jujur, bukan hanya untuk mengekspresikan cinta, tetapi juga untuk menerima kehilangan dan memaknai keikhlasan.\n\nPada UTS-3 (My Story for You), aku menghadapi cermin dari sisi diriku yang paling rapuh. Cerita itu mengajarkanku bahwa diam bukan selalu kebijaksanaan, terkadang ia adalah bentuk ketakutan. Namun dari ketakutan itulah muncul keberanian untuk mengenali dan menerima diri sendiri. Momen ini menjadi titik balik bagiku dalam memahami bahwa kejujuran emosional adalah bagian penting dari komunikasi interpersonal.\n\nDi UTS-4 (My SHAPE), aku menemukan keterhubungan antara pengalaman hidup, bakat, dan nilai pribadi. Menulis “Piagam Diri” membuatku mengerti bahwa kekuatan seseorang tidak selalu ditentukan oleh kecepatan atau pencapaian, tetapi oleh pemahaman yang mendalam terhadap arah dan makna dari setiap langkah. Aku menyadari bahwa keseimbangan antara logika dan perasaan adalah fondasi penting dalam membangun versi terbaik dari diriku.\n\nAkhirnya, UTS-5 (My Personal Review) menjadi refleksi menyeluruh tentang bagaimana aku berkomunikasi, berpikir, dan berempati. Di sini aku belajar untuk meninjau ulang bukan hanya isi pesanku, tetapi juga niat di balik setiap kata. Aku memahami bahwa komunikasi yang efektif bukan sekadar tentang seberapa jelas kita berbicara, melainkan seberapa tulus kita mendengarkan.\n\nDari keseluruhan proses ini, aku menyimpulkan bahwa tugas-tugas UTS bukan hanya menilai kemampuan berbicara atau menulis, tetapi menumbuhkan kesadaran interpersonal. Aku menjadi lebih sadar bahwa di balik setiap percakapan ada nilai, perasaan, dan kesempatan untuk tumbuh bersama orang lain.\n\nKe depan, aku ingin terus membawa semangat ini dalam kehidupan akademik maupun pribadi agar setiap interaksi bukan hanya menjadi pertukaran informasi, tetapi juga pertukaran makna.\n\n“Pada akhirnya, mengenal diri adalah bentuk komunikasi paling jujur yang bisa dilakukan manusia.”";

const calculateTotalScore = (data) => {
  let totalNilai = 0;
  let jumlahUTS = 0;

  data.forEach((item) => {
    if (item.nilai_rata > 0) {
      totalNilai += item.nilai_rata;
      jumlahUTS += 1;
    }
  });

  if (jumlahUTS === 0) {
    return { score: "N/A", grade: "Menunggu Nilai" };
  }

  const average = totalNilai / jumlahUTS;
  const score = average.toFixed(2);

  let grade;
  if (average >= 4.5) grade = "Sempurna";
  else if (average >= 4.0) grade = "Sangat Baik";
  else if (average >= 3.0) grade = "Baik";
  else grade = "Perlu Peningkatan";

  return { score: `${score} / 5`, grade };
};

const accordionVariants = {
  open: { opacity: 1, height: "auto", transition: { duration: 0.4 } },
  closed: { opacity: 0, height: 0, transition: { duration: 0.4 } },
};

const getIcon = (kriteria) => {
  if (kriteria.includes("Orisinalitas")) return "💡";
  if (kriteria.includes("Keterlibatan") || kriteria.includes("Kedalaman"))
    return "✨";
  if (kriteria.includes("Humor") || kriteria.includes("Visualisasi")) return "🎨";
  if (kriteria.includes("Wawasan") || kriteria.includes("Analisis")) return "🧠";
  if (kriteria.includes("Inspirasi")) return "🔥";
  if (kriteria.includes("Pengembangan Narasi")) return "📖";
  return "⭐";
};

const ReviewItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isPending = item.isPending;

  const getBackgroundColor = () => {
    if (isPending) return "bg-yellow-800/20 hover:bg-yellow-800/30";
    if (item.nilai_rata >= 4.5) return "bg-green-800/20 hover:bg-green-800/30";
    return "bg-purple-800/20 hover:bg-purple-800/30";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`mb-4 rounded-xl border border-purple-600/50 shadow-2xl overflow-hidden cursor-pointer ${getBackgroundColor()}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-4 flex justify-between items-center transition-all duration-300">
        <h3 className="text-xl font-semibold text-yellow-200">
          {item.title}
        </h3>
        <div className="flex items-center space-x-2">
          {isPending ? (
            <span className="text-lg font-bold text-yellow-300">
              Menunggu Nilai
            </span>
          ) : (
            <span className="text-lg font-bold text-pink-300">
              Rata-rata: {item.nilai_rata.toFixed(2)} / 5
            </span>
          )}
          <motion.svg
            className="w-5 h-5 text-purple-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={accordionVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="p-4 border-t border-purple-600/50"
          >
            <h4 className="text-lg font-bold text-pink-300 mb-3">
              Detail Kriteria Penilaian
            </h4>
            <div className="space-y-3">
              {item.details.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <span className="text-2xl flex-shrink-0">
                    {getIcon(detail.kriteria)}
                  </span>
                  <div className="flex-grow">
                    <p className="font-semibold text-purple-300">
                      {detail.kriteria}{" "}
                      <span
                        className={`font-extrabold ml-2 ${
                          detail.nilai >= 4 ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        ({detail.nilai})
                      </span>
                    </p>
                    <p className="text-sm text-purple-100">
                      {detail.penjelasan}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const exportToCSV = (data) => {
  let csv = "UTS,Nilai Rata-rata,Penjelasan\n";

  data.forEach(uts => {
    const utsTitle = `"${uts.title}"`;
    const utsNilai = uts.isPending ? '0' : uts.nilai_rata;
    const utsGrade = uts.isPending ? 'Menunggu Penilaian' : (uts.nilai_rata >= 4.8 ? 'Sempurna' : 'Baik');
    csv += `${utsTitle},${utsNilai},"${utsGrade}"\n`;

    uts.details.forEach(detail => {
      csv += `"  - ${detail.kriteria}",${detail.nilai},"${detail.penjelasan.replace(/"/g, '""')}"\n`;
    });
  });

  const finalScore = calculateTotalScore(data);
  csv += `\nTOTAL RATA-RATA,${finalScore.score.split(" /")[0]},"${finalScore.grade}"\n`;

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "Rekap_Penilaian_UTS.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
      console.error("Browser tidak mendukung download otomatis.");
  }
};

export default function MyPersonalReview() {
  const finalScore = useMemo(() => calculateTotalScore(rawReviewData), []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0e001a] via-[#1a0033] to-[#3b007d] text-white px-6 py-20 flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,63,130,0.2),_transparent_50%)] blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,0,128,0.2),_transparent_60%)] blur-3xl pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] text-transparent bg-clip-text pb-2.5"
      >
        My Personal Review
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-xl w-full p-8 mb-12 rounded-2xl border-2 border-pink-500/50 shadow-2xl bg-black/30 backdrop-blur-sm text-center"
      >
        <p className="text-lg font-medium text-pink-300 mb-2">
          REKAP NILAI SEMENTARA
        </p>
        <h2 className="text-7xl font-extrabold mb-2 bg-gradient-to-r from-green-400 to-yellow-300 text-transparent bg-clip-text leading-tight">
          {finalScore.score}
        </h2>
        <p classNameName="text-3xl font-bold text-yellow-200">
          {finalScore.grade}
        </p>
        <p className="mt-4 text-sm italic text-purple-300">
          "Pencapaian yang menunjukkan refleksi dan orisinalitas yang kuat."
        </p>

        <motion.button
          onClick={() => exportToCSV(rawReviewData)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-2 bg-pink-600 rounded-full text-white font-semibold shadow-lg hover:bg-pink-700 transition flex items-center justify-center mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Detail CSV
        </motion.button>
      </motion.div>

      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center text-pink-300 mb-6 drop-shadow-lg">
          Detail UTS Review
        </h2>
        {rawReviewData.map((item, index) => (
          <ReviewItem key={index} item={item} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="mt-16 bg-white/15 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-lg max-w-5xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-pink-300 text-center mb-3">
          Refleksi Proses
        </h3>
        <p className="text-purple-100 leading-relaxed whitespace-pre-line text-justify border-t border-white/20 pt-2">
          {refleksi}
        </p>
      </motion.div>
    </section>
  );
}