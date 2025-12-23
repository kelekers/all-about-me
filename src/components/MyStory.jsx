import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

const ThumbUpIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
  </svg>
);

const ThumbDownIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.641a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-2.8a4 4 0 00.8-2.4z"></path>
  </svg>
);

function StoryFeedback({ user, storyTitle }) {
  const [voted, setVoted] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    const checkVote = async () => {
      try {
        // ID Dokumen Baru: Menggabungkan Judul dan User ID
        const docId = `${storyTitle}-${user.sub}`; 
        const docRef = doc(db, "story_votes", docId); // Menggunakan koleksi baru/sederhana
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setVoted(docSnap.data().vote);
          setMessage("Kamu sudah menanggapi cerita ini.");
        }
      } catch (error) {
        console.error("Gagal mengambil data vote:", error);
      }
      setLoading(false);
    };
    checkVote();
  }, [user, storyTitle]);

  const handleVote = async (voteType) => {
    if (!user) {
      setMessage("Kamu harus login untuk memberi tanggapan.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    if (voted) return;

    setLoading(true);
    try {
      const docId = `${storyTitle}-${user.sub}`;
      const docRef = doc(db, "story_votes", docId);
      const data = {
        vote: voteType,
        email: user.email,
        name: user.name,
        story: storyTitle,
        timestamp: serverTimestamp(),
      };
      await setDoc(docRef, data);
      setVoted(voteType);
      setMessage("Terima kasih atas tanggapanmu!");
    } catch (error) {
      console.error("Gagal mengirim vote: ", error);
      setMessage("Gagal mengirim tanggapan.");
    }
    setLoading(false);
  };

  if (loading && user) {
    return (
      <p className="text-sm text-purple-300 italic text-center">Memuat...</p>
    );
  }

  if (voted) {
    return (
      <p className="text-sm text-yellow-200 italic text-center">{message}</p>
    );
  }

  return (
    <div className="text-center mt-4">
      <p className="text-sm text-purple-300 mb-3">
      </p>
      <div className="flex justify-center gap-4">
        <motion.button
          onClick={() => handleVote("yes")}
          disabled={loading || voted}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(253, 224, 71, 0.2)" }}
          className="flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-yellow-400 text-yellow-300 hover:bg-yellow-500/20 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
        <ThumbUpIcon />
        </motion.button>
        <motion.button
          onClick={() => handleVote("no")}
          disabled={loading || voted}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(236, 72, 153, 0.2)" }}
          className="flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-pink-400 text-pink-300 hover:bg-red-500/20 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ThumbDownIcon />
        </motion.button>
      </div>
      {message && !voted && (
        <p className="text-sm text-red-400 italic text-center mt-2">{message}</p>
      )}
    </div>
  );
}

export default function MyStory({ user }) {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      title: "Aku Makhluk Bodoh",
      content:
        "“Tujuh panggilan tak terjawab dari temanku”. Aku yang baru saja terbangun dari tidurku berusaha mengumpulkan pundi-pundi kesadaran. “Ada apa ini?”, pikirku dalam hati. “Kamu sekelompok sama….”, aku sudah tahu apa maksudnya sebelum dia selesai berbicara. Mimpi apa aku tadi, seperseribu kemungkinan dan aku bisa sekelompok dengannya?\n\nSingkat cerita aku mengajaknya bertemu, mendiskusikan beberapa hal terkait tugas ini. Sepanjang diskusi aku mencoba terlihat tenang. Aku menjawab seperlunya dan tersenyum seperlunya. Bagiku saat itu dia sangat cantik, cantik sekali, bahkan menatapnya saja rasanya seperti meminum 3 pil hexymer. Aku pikir diam membuatku terlihat dewasa padahal diam justru membuatku tenggelam dalam bayangan ketakutanku sendiri. Setiap kali ia menatapku, ada bagian dari diriku yang ingin berkata sesuatu hanya untuk memastikan bahwa aku masih berani menjadi diriku sendiri. Tapi nyatanya, keberanian itu tetap jadi tamu yang tak datang.\n\nMemang benar kalau bahagia waktu satu jam pun terasa seperti semenit. Padahal aku sangat berharap saat itu waktu melambat, bahkan jika ditelan singularitas sekalipun. Tapi apalah daya, waktu bukanlah sesuatu yang bisa dikontrol. Jam pun menunjukkan pukul tujuh malam dan kami harus pulang. Kami berjalan keluar, hanya berjarak dua langkah. Dua langkah yang sepele, tapi malam itu rasanya seperti jurang yang memisahkan kemungkinan dengan kenyataan. Aku ingin menawarkan diri untuk mengantarnya pulang, tapi kalimat itu kandas di tenggorokan bersama semua hal yang tak pernah kuucapkan. Dan ketika ia akhirnya pergi, yang tersisa hanya bayangan punggungnya dan keheningan yang menampar kesadaranku.\n\nAku takut bukan karena dia, tapi karena aku belum siap jika ternyata aku tak cukup berarti untuknya. Rasa takut itu bukan tentang kehilangan orang lain, melainkan tentang kehilangan keyakinan pada diriku sendiri. Tapi justru dari ketakutan itulah aku belajar sesuatu bahwa keberanian bukan selalu tentang berani berbicara, melainkan berani jujur pada apa yang sebenarnya kita rasakan.\n\nMalam itu aku tidak mengantarnya pulang, tapi aku membawa pulang satu hal: kesadaran bahwa diamku bukan kekuatan, melainkan dinding yang kubangun sendiri. Dan mungkin, langkah pertama untuk menjadi lebih berani hanya semudah mengatakan, “Mau kuantar?”",
      reflection: "I hope you read this.",
    },
    // {
    //   title: "Beautiful Girl",
    //   content: "Hello",
    //   reflection: "If you have a same feeling for me, let me know",
    // },
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
            className="bg-white/10 rounded-2xl p-6 mb-5 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-white/15 transition cursor-pointer"
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
                "{selectedStory.reflection}"
              </p>

              {selectedStory.title === "Beautiful Girl" && (
                <div className="mt-6 pt-4">
                  <StoryFeedback
                    user={user}
                    storyTitle={selectedStory.title}
                  />
                </div>
              )}

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="mt-6 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}