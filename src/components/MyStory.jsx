import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MyStory() {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      title: "Aku Makhluk Bodoh",
      content:
        "“Tujuh panggilan tak terjawab dari temanku”. Aku yang baru saja terbangun dari tidurku berusaha mengumpulkan pundi-pundi kesadaran. “Ada apa ini?”, pikirku dalam hati. “Kamu sekelompok sama….”, aku sudah tahu apa maksudnya sebelum dia selesai berbicara. Mimpi apa aku tadi, seperseribu kemungkinan dan aku bisa sekelompok dengannya?\n\nAku mengajaknya membahas tugas kelompok di selasar, mendiskusikan beberapa hal terkait tugas ini. Sepanjang diskusi, aku mencoba terlihat tenang. Aku menjawab seperlunya, tersenyum seperlunya, tapi entah kenapa kata-kata selalu tertahan di ujung lidah. Aku pikir diamku membuatku terlihat dewasa padahal diam justru membuatku tenggelam dalam bayangan ketakutan sendiri. Setiap kali ia menatapku, ada bagian dari diriku yang ingin berkata sesuatu hanya untuk memastikan bahwa aku masih berani menjadi diriku sendiri. Tapi nyatanya, keberanian itu tetap jadi tamu yang tak datang.\n\nMemang benar kalau bahagia waktu satu jam pun terasa seperti semenit. Padahal aku sangat berharap saat itu waktu melambat, bahkan jika ditelan singularitas sekalipun. Tapi apalah daya, waktu bukanlah sesuatu yang bisa dikontrol. Jam pun menunjukkan pukul tujuh malam dan kami harus pulang. Kami berjalan keluar, hanya berjarak dua langkah. Dua langkah yang sepele, tapi malam itu rasanya seperti jurang yang memisahkan kemungkinan dengan kenyataan. Aku ingin menawarkan diri untuk mengantarnya pulang, tapi kalimat itu kandas di tenggorokan bersama semua hal yang tak pernah kuucapkan. Dan ketika ia akhirnya pergi, yang tersisa hanya bayangan punggungnya dan keheningan yang menampar kesadaranku.\n\nAku takut bukan karena dia, tapi karena aku belum siap jika ternyata aku tak cukup berarti untuknya. Rasa takut itu bukan tentang kehilangan orang lain, melainkan tentang kehilangan keyakinan pada diriku sendiri. Tapi justru dari ketakutan itulah aku belajar sesuatu bahwa keberanian bukan selalu tentang berani berbicara, melainkan berani jujur pada apa yang sebenarnya kita rasakan.\n\nMalam itu aku tidak mengantarnya pulang, tapi aku membawa pulang satu hal: kesadaran bahwa diamku bukan kekuatan, melainkan dinding yang kubangun sendiri. Dan mungkin, langkah pertama untuk menjadi lebih berani hanya semudah mengatakan, “Mau kuantar?”",
      reflection: "I hope you read this.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0e001a] via-[#1a0033] to-[#3b007d] text-white px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] text-transparent bg-clip-text pb-2.5"
      >
        My Story ✨
      </motion.h1>

      <div className="gap-8 max-w-6xl mx-auto">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/10 rounded-2xl p-6 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-white/15 transition cursor-pointer"
            onClick={() => setSelectedStory(story)}
          >
            <h2 className="text-xl font-semibold text-yellow-200 mb-3">
              {story.title}
            </h2>
            <p className="text-purple-100 leading-relaxed text-justify line-clamp-6 mb-3">
              {story.content}
            </p>
            <p className="italic text-yellow-100 border-t border-white/20 pt-2">
              "{story.reflection}"
            </p>
            <p className="text-purple-300 text-sm mt-2 italic">Read more →</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedStory && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a0033]/95 rounded-2xl p-8 max-w-3xl w-full border border-purple-400/30 shadow-xl text-left overflow-y-auto max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold text-yellow-200 mb-4">
                {selectedStory.title}
              </h2>
              <p className="text-purple-100 leading-relaxed mb-6 text-justify whitespace-pre-line">
                {selectedStory.content}
              </p>
              <p className="italic text-yellow-100 border-t border-white/20 pt-3">
                “Thank you for reading.”
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="mt-6 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}