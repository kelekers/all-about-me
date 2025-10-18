import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0e001a] via-[#1a0033] to-[#3b007d] text-white px-6 py-20"
    >

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-3xl" />
          <img
            src={profilePic}
            alt="Abhinaya Rajendra Fargaz"z
            className="relative w-56 h-56 object-cover rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/30"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] text-transparent bg-clip-text text-justify">
            About Me
          </h2>
          <p className="text-white mb-4 leading-relaxed text text-justify">
            Halo! Aku{" "}
            <span className="text-purple-400 font-bold">
              Abhinaya Rajendra Fargaz
            </span>
            , mahasiswa{" "}
            <span className="text-purple-300">
              Sistem dan Teknologi Informasi ITB
            </span>
            . Aku orang yang suka berpikir dan mencari tahu hal-hal di balik sesuatu. 
            Rasanya menyenangkan ketika bisa menggabungkan logika dan imajinasi untuk 
            memahami dunia dengan caraku sendiri. Aku tertarik pada seni dan teknologi, 
            mulai dari desain dan gambar, coding, sampai 3D modeling di Blender atau SolidWorks. 
            Semua itu menjadi cara bagiku untuk menyalurkan rasa ingin tahu dan menciptakan sesuatu yang punya makna.
          </p>

          <p className="text-gray-400 mb-4 leading-relaxed text-justify">
            Kadang aku menyampaikan pendapat yang tidak sejalan dengan kebiasaan umum, 
            tapi justru di situ aku merasa hidup. Ada kepuasan tersendiri ketika bisa membuat 
            orang berhenti sejenak dan berpikir, “iya juga ya.” Aku tidak mencari konfrontasi, 
            aku hanya suka melihat sesuatu dari sisi yang belum banyak diperhatikan orang lain.
          </p>

          <p className="text-white mb-4 leading-relaxed text-justify">
            Buatku, daya tarik seseorang tidak datang dari seberapa keras ia meyakinkan orang lain, 
            tetapi dari seberapa nyaman ia membuat orang di sekitarnya. Aku percaya hubungan yang baik 
            lahir ketika kita mau mendengar tanpa memaksakan kehendak sendiri.
          </p>

          <p className="text-gray-400 leading-relaxed text-justify">
            Aku senang berbincang tentang banyak hal, mulai dari sejarah dunia, sains, 
            hingga teori konspirasi atau topik acak yang memancing rasa ingin tahu. 
            Apa pun bisa jadi bahan obrolan selama ada ruang untuk berpikir, bertanya, 
            dan saling tukar pandangan. Karena pada akhirnya, yang paling menarik bukan hanya 
            topiknya, tapi proses menemukan sudut pandang baru bersama orang lain.
          </p>


        </motion.div>
      </div>
    </section>
  );
}
