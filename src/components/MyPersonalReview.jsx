import { motion } from "framer-motion";

export default function MyPersonalReview() {
  const tablesData = [
    {
      title: "UTS 1 - About Me",
      data: [
        {
          kriteria: "Orisinalitas",
          nilai: "5",
          penjelasan:
            "Narasi introspektif dengan gaya filosofis dan jujur, unik dan personal.",
        },
        {
          kriteria: "Keterlibatan",
          nilai: "5",
          penjelasan:
            "Pembaca terbawa dari awal hingga akhir, ritme kalimat halus dan reflektif.",
        },
        {
          kriteria: "Humor",
          nilai: "3",
          penjelasan:
            "Tidak menonjolkan humor eksplisit, namun ada kehangatan halus dan spontan.",
        },
        {
          kriteria: "Wawasan (Insight)",
          nilai: "5",
          penjelasan:
            "Memberikan pandangan mendalam tentang makna hubungan dan diri.",
        },
      ],
    },
    {
      title: "UTS 2 - My Story",
      data: [
        {
          kriteria: "Orisinalitas",
          nilai: "5",
          penjelasan:
            "Penafsiran lagu-lagu populer secara personal dan filosofis.",
        },
        {
          kriteria: "Keterlibatan",
          nilai: "4",
          penjelasan:
            "Penyajian naratif enak dibaca; tiap lagu punya makna emosional berbeda.",
        },
        {
          kriteria: "Humor",
          nilai: "3",
          penjelasan:
            "Tidak relevan di konteks ini, tapi ekspresi tulus menjaga keseimbangan emosi.",
        },
        {
          kriteria: "Inspirasi",
          nilai: "5",
          penjelasan:
            "Refleksi mendalam tentang cinta, kehilangan, dan penerimaan.",
        },
      ],
    },
    {
      title: "UTS 3 - My Songs",
      data: [
        {
          kriteria: "Orisinalitas",
          nilai: "5",
          penjelasan:
            "Cerita personal yang ekspresif dengan metafora saintifik dan introspektif.",
        },
        {
          kriteria: "Keterlibatan",
          nilai: "5",
          penjelasan:
            "Alur emosional kuat; pembaca merasa tenggelam dalam suasana narasi.",
        },
        {
          kriteria: "Pengembangan Narasi",
          nilai: "5",
          penjelasan:
            "Struktur rapi dan konsisten dari awal hingga refleksi akhir.",
        },
        {
          kriteria: "Inspirasi",
          nilai: "5",
          penjelasan:
            "Pesan tentang keberanian dan kejujuran diri disampaikan sangat menyentuh.",
        },
      ],
    },
    {
      title: "UTS 4 - My SHAPE",
      data: [
        {
          kriteria: "Orisinalitas",
          nilai: "5",
          penjelasan:
            "Interpretasi reflektif dan puitis dari kerangka SHAPE.",
        },
        {
          kriteria: "Keterlibatan",
          nilai: "4",
          penjelasan:
            "Mengundang pembaca merenung; ritme narasi tenang tapi kuat.",
        },
        {
          kriteria: "Humor",
          nilai: "5",
          penjelasan:
            "Transisi dari tabel ke piagam diri alami dan saling mendukung.",
        },
        {
          kriteria: "Wawasan (Insight)",
          nilai: "5",
          penjelasan:
            "Pesan hidup yang kontemplatif dan menyentuh.",
        },
      ],
    },
    {
      title: "UTS 5 - My Personal Review",
      data: [
        {
          kriteria: "Pemahaman Konsep Interpersonal",
          nilai: "0",
          penjelasan:
            "-",
        },
        {
          kriteria: "Analisis Kritis Pesan",
          nilai: "0",
          penjelasan:
            "-",
        },
        {
          kriteria: "Argumentasi (Logos)",
          nilai: "0",
          penjelasan:
            "-",
        },
        {
          kriteria: "Etos & Empati",
          nilai: "0",
          penjelasan:
            "-",
        },
        {
          kriteria: "Rekomendasi Perbaikan",
          nilai: "0",
          penjelasan:
            "-",
        },
      ],
    },
    {
      title: "Rekap Nilai",
      data: [
        {
          kriteria: "UTS-1",
          nilai: "4.5",
          penjelasan:
            "Sangat Baik",
        },
        {
          kriteria: "UTS-2",
          nilai: "4.25",
          penjelasan:
            "Sempurna",
        },
        {
          kriteria: "UTS-3",
          nilai: "5.0",
          penjelasan:
            "Sangat Baik",
        },
        {
          kriteria: "UTS-4",
          nilai: "4.75",
          penjelasan:
            "Sangat Baik",
        },
        {
          kriteria: "UTS-5",
          nilai: "4.6",
          penjelasan:
            "Sangat Baik",
        },
        {
          kriteria: "TOTAL",
          nilai: "4.62 / 5",
          penjelasan:
            "Sangat Baik",
        },
      ],
    },
  ];

  const refleksi =
    "Mengerjakan rangkaian tugas UTS dari All About Me hingga My Personal Review menjadi perjalanan yang tidak sekadar akademik, melainkan proses mengenal diri sendiri secara lebih dalam. Setiap bagian menuntutku untuk membuka lapisan-lapisan pikiran dan perasaan yang sebelumnya mungkin tidak kusadari.\n\nPada UTS-1 (All About Me), aku belajar bahwa memperkenalkan diri bukan hanya tentang menyebut siapa aku, tetapi tentang menunjukkan mengapa aku menjadi seperti sekarang. Di situ aku menyadari bahwa keunikan bukan sesuatu yang harus disembunyikan, melainkan dirawat dan dibagikan sebagai identitas yang utuh.\n\nMelalui UTS-2 (My Songs for You), aku menemukan bahwa lagu dapat menjadi bahasa universal yang menjembatani logika dan emosi. Saat menulis refleksi tiap lagu, aku belajar bahwa perasaan yang sulit diungkap seringkali bisa diterjemahkan melalui seni. Musik menjadi medium yang jujur, bukan hanya untuk mengekspresikan cinta, tetapi juga untuk menerima kehilangan dan memaknai keikhlasan.\n\nPada UTS-3 (My Story for You), aku menghadapi cermin dari sisi diriku yang paling rapuh. Cerita itu mengajarkanku bahwa diam bukan selalu kebijaksanaan, terkadang ia adalah bentuk ketakutan. Namun dari ketakutan itulah muncul keberanian untuk mengenali dan menerima diri sendiri. Momen ini menjadi titik balik bagiku dalam memahami bahwa kejujuran emosional adalah bagian penting dari komunikasi interpersonal.\n\nDi UTS-4 (My SHAPE), aku menemukan keterhubungan antara pengalaman hidup, bakat, dan nilai pribadi. Menulis “Piagam Diri” membuatku mengerti bahwa kekuatan seseorang tidak selalu ditentukan oleh kecepatan atau pencapaian, tetapi oleh pemahaman yang mendalam terhadap arah dan makna dari setiap langkah. Aku menyadari bahwa keseimbangan antara logika dan perasaan adalah fondasi penting dalam membangun versi terbaik dari diriku.\n\nAkhirnya, UTS-5 (My Personal Review) menjadi refleksi menyeluruh tentang bagaimana aku berkomunikasi, berpikir, dan berempati. Di sini aku belajar untuk meninjau ulang bukan hanya isi pesanku, tetapi juga niat di balik setiap kata. Aku memahami bahwa komunikasi yang efektif bukan sekadar tentang seberapa jelas kita berbicara, melainkan seberapa tulus kita mendengarkan.\n\nDari keseluruhan proses ini, aku menyimpulkan bahwa tugas-tugas UTS bukan hanya menilai kemampuan berbicara atau menulis, tetapi menumbuhkan kesadaran interpersonal. Aku menjadi lebih sadar bahwa di balik setiap percakapan ada nilai, perasaan, dan kesempatan untuk tumbuh bersama orang lain.\n\nKe depan, aku ingin terus membawa semangat reflektif ini dalam kehidupan akademik maupun pribadi — agar setiap interaksi bukan hanya menjadi pertukaran informasi, tetapi juga pertukaran makna.\n\n“Pada akhirnya, mengenal diri adalah bentuk komunikasi paling jujur yang bisa dilakukan manusia.”";

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0e001a] via-[#1a0033] to-[#3b007d] text-white px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,63,130,0.2),_transparent_50%)] blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,0,128,0.2),_transparent_60%)] blur-3xl pointer-events-none" />
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] text-transparent bg-clip-text pb-2.5"
      >
        My Personal Review ✨
      </motion.h1>

      {tablesData.map((tableItem, index) => (
        <div key={index} className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-2xl font-bold text-center mb-4 text-yellow-300"
          >
            {tableItem.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
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
                {tableItem.data.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="border-t border-white/20 hover:bg-white/15 transition"
                  >
                    <td className="p-4 font-bold text-purple-300 align-top">
                      {row.kriteria}
                    </td>

                    <td
                      className={`p-4 text-center text-purple-200 align-top ${
                        row.kriteria === "TOTAL" ? "font-bold text-yellow-200" : ""
                      }`}
                    >
                      {row.nilai}
                    </td>

                    <td
                      className={`p-4 text-justify text-purple-100 align-top ${
                        row.kriteria === "TOTAL" ? "font-bold text-yellow-200" : ""
                      }`}
                    >
                      {row.penjelasan}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10 bg-white/15 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-lg max-w-5xl mx-auto"
      >
        <h3 className="text-xl font-bold text-pink-300 text-center mb-3">
          Refleksi
        </h3>
        <p className="text-purple-100 leading-relaxed whitespace-pre-line text-justify">{refleksi}</p>
      </motion.div>
    </section>
  );
}