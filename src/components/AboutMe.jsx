import { motion } from "framer-motion";
import profilePicUrl from "../assets/profile.jpeg";
import gambar from "../assets/gambar.jpeg";
import blender from "../assets/blender.jpeg";
import foto from "../assets/foto.jpeg";

const works = [
  {
    type: "Gambar",
    url: gambar,
    alt: "Girl in Blue Kimono",
  },
  {
    type: "Fotografi",
    url: foto,
    alt: "A Shy Moon",
  },
  {
    type: "3D Modeling",
    url: blender,
    alt: "Your Eyes",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutMe() {

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0e001a] via-[#1a0033] to-[#3b007d] text-white px-6 py-20"
    >
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-3xl" />
          <img
            src={profilePicUrl}
            alt="Abhinaya Rajendra Fargaz"
            className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-yellow-400 shadow-xl shadow-purple-500/30"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] text-transparent bg-clip-text text-center md:text-left">
            About Me
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed text-justify">
            Halo! Aku{" "}
            <span className="text-yellow-300 font-bold">
              Abhinaya Rajendra Fargaz
            </span>
            , mahasiswa{" "}
            <span className="text-yellow-300">
              Sistem dan Teknologi Informasi ITB
            </span>
            . Aku orang yang suka berpikir dan mencari tahu hal-hal di balik
            sesuatu. Rasanya menyenangkan ketika bisa menggabungkan logika dan
            imajinasi untuk memahami dunia dengan caraku sendiri.
          </p>

          <div className="my-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-300 text-center md:text-left">
              Tools & Minat
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-gray-800 border border-purple-600 text-yellow-300 text-sm font-medium px-4 py-1 rounded-full shadow-md">
                Desain Grafis
              </span>
              <span className="bg-gray-800 border border-purple-600 text-yellow-300 text-sm font-medium px-4 py-1 rounded-full shadow-md">
                Coding
              </span>
              <span className="bg-gray-800 border border-purple-600 text-yellow-300 text-sm font-medium px-4 py-1 rounded-full shadow-md">
                3D Modeling
              </span>
              <span className="bg-gray-800 border border-purple-600 text-yellow-300 text-sm font-medium px-4 py-1 rounded-full shadow-md">
                Blender
              </span>
              <span className="bg-gray-800 border border-purple-600 text-yellow-300 text-sm font-medium px-4 py-1 rounded-full shadow-md">
                SolidWorks
              </span>
              <span className="bg-gray-800 border border-purple-600 text-yellow-300 text-sm font-medium px-4 py-1 rounded-full shadow-md">
                Sains
              </span>
              <span className="bg-gray-800 border border-purple-600 text-yellow-300 text-sm font-medium px-4 py-1 rounded-full shadow-md">
                Sejarah
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-6xl w-full mx-auto mt-10 md:mt-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
          My Hobbies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-white-300">
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer border-white-300"
            >
              <img
                src={work.url}
                alt={work.alt}
                className="w-full h-auto object-cover transition duration-300 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-lg font-bold text-yellow-300">{work.type}</p>
                <p className="text-sm text-gray-200">{work.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-8 italic text-medium">
          *Lebih lengkap bisa cek {" "}
            <span className="text-gray-400 font-bold">
              @kelekerss
            </span>
        </p>
      </motion.div>

      <div className="max-w-6xl w-full mx-auto mt-16 pt-10 border-t border-purple-800/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-pink-400">
              Sudut Pandang
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-justify">
              Kadang aku menyampaikan pendapat yang tidak sejalan dengan kebiasaan
              umum, tapi justru di situ aku merasa hidup.
            </p>
            <blockquote className="my-4 border-l-4 border-yellow-500 pl-4 italic text-gray-200 text-lg text-justify bg-black/20 p-2 rounded-lg">
              Ada kepuasan tersendiri ketika bisa membuat orang berhenti sejenak
              dan berpikir, “iya juga ya.”
            </blockquote>
            <p className="text-gray-300 mb-4 leading-relaxed text-justify">
              Aku tidak mencari konfrontasi, aku hanya suka melihat sesuatu dari
              sisi yang belum banyak diperhatikan orang lain.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-pink-400">
              Koneksi
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-justify">
              Buatku, daya tarik seseorang tidak datang dari seberapa keras ia
              meyakinkan orang lain, tetapi dari seberapa nyaman ia membuat orang
              di sekitarnya. Aku percaya hubungan yang baik lahir ketika kita mau
              mendengar tanpa memaksakan kehendak sendiri.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              Aku senang berbincang tentang banyak hal, mulai dari sejarah dunia,
              sains, hingga teori konspirasi atau topik acak. Apa pun bisa jadi
              bahan obrolan selama ada ruang untuk berpikir, bertanya, dan saling
              tukar pandangan. Karena pada akhirnya, yang paling menarik bukan
              hanya topiknya, tapi proses menemukan sudut pandang baru bersama
              orang lain.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}