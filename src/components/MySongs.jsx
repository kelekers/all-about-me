import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MySongs() {
  const navigate = useNavigate();
  const [selectedSong, setSelectedSong] = useState(null);
  const [activeTab, setActiveTab] = useState("meaning");

  const videos = [
    {
      title: "Can't Help Falling in Love",
      id: "YuH_90giGTQ",
      meaning:
        "“Can’t Help Falling in Love” adalah tentang ketulusan yang tak bisa dijelaskan oleh logika. Kadang kita jatuh cinta bukan karena alasan, tapi karena hati memilih untuk percaya, meski tahu bisa terluka.",
      lyrics:
        '[Verse 1]\nWise men say\n"Only fools rush in"\nBut I can\'t help\nFalling in love with you\n\n[Verse 2]\nShall I stay?\nWould it be a sin\nIf I can\'t help\nFalling in love with you?\n\n[Chorus]\nLike a river flows\nSurely to the sea\nDarling, so it goes\nSome things are meant to be\n\n[Verse 3]\nTake my hand\nTake my whole life, too\nFor I can\'t help\nFalling in love with you\n\n[Chorus]\nLike a river flows\nSurely to the sea\nDarling, so it goes\nSome things are meant to be\n\n[Outro]\nTake my hand\nTake my whole life, too\nFor I can\'t help\nFalling in love with you\nFor I can\'t help\nFalling in love with you',
    },
    {
      title: "One More Time, One More Chance",
      id: "BqFftJDXii0",
      meaning:
        "“One More Time, One More Chance” bercerita tentang penyesalan dan waktu  tentang bagaimana kita sering terlambat menyadari betapa berharganya seseorang, dan keinginan sederhana untuk diberi kesempatan satu kali lagi.",
      lyrics:
        "[Verse 1]\nIf I give up what little things I have left\nThen will my heart find forgiveness\nHow much pain and sorrow do I have to face\nBefore I can see you again at last\n\nOne more time\nMake the seasons stop their endless turning\nOne more time\nOh, it's been a while since we were playing\n\n[Verse 2]\nEvery time when you and I were bickering\nI would let you have your own way in the end\nEven when you were wrapped up in yourself\nThat would only make me care for you even more\n\nOne more chance\nI'm stumbling in the distant memories\nOne more chance\nI don't know where it's I should be going\n\n[Chorus]\nI am always searching for you everywhere\nHoping to get just one glimpse of you\nIn the backstreet windows\nAt the railway station\nAlthough deep down I know you're never going to be there\nIf only I could wish upon a star\nMy wish would be to have you in my arms\nNothing I wouldn't do\nI'd give up everything\nFor the chance to just hold you one more time\n\n[Verse 3]\nIt could be so easy not to be alone\nAnyone I meet could end my loneliness\nBut it’s no good lying to myself\nSoon another stars would fall down from the sky\n\nOne more time\nMake the seasons stop their endless turning\nOne more time\nOh, it's been a while since we were playing\n\n[Chorus]\nI’m always searching for you everywhere\nHoping to get just one glimpse of you\nAt the intersection, between night and morning\nAlthough deep down I know you're never ever gonna be there\nEvery time I witness something magical\nI just want to share it once with you\nNow the morning has come, and I’m here all alone\nAnd the worst, that I wished I had said I love you\n\n[Bridge]\nAnd though our summer memories are dying, oh\nHave the sound of our hearts are fading away?\n\n[Chorus]\nI’m always searching for you everywhere\nHoping to get just one glimpse of you\nWhen the dawn is breaking, in Sakuragi City\nAlthough deep down I know you’ll never going to be there\nIf only I could wish upon a star\nMy wish would be to have you in my arms\nNothing I wouldn't do. I'd give up everything\nFor a chance just to hold you one more time\n\n[Chorus]\nI’m always searching for you anywhere\nHoping to get just one glimpse of you\nIn the morning papers, in the airport alleys\nAlthough deep down I know you're never going to be there\nEvery time I witness something magical\nI just want to share it once with you\nNow the morning has come, and I’m here all alone\nAnd the worst, I wish I should have said I love you\n\n[Chorus]\nI’m always searching for you everywhere\nHoping I will see your smiling face\nAt the railway station, waiting for the Express\nAlthough deep down I know you’ll never going to be there\nIf there was a chance to live my life again\nI will always be coming back to you\nMore than anything else than that I wouldn’t do\nNothing is more precious to me than you",
    },
    {
      title: "You'll Be in My Heart",
      id: "pFB2f1HkR-g",
      meaning:
        "Sementara “You’ll Be in My Heart” mengingatkanku bahwa kasih sayang sejati tidak selalu berarti memiliki. Kadang, mencintai berarti menjaga dari jauh, atau sekadar yakin bahwa seseorang akan baik-baik saja meski kita tidak di sana.",
      lyrics:
        "[Verse 1]\nCome stop your cryin', it will be alright\nJust take my hand, hold it tight\nI will protect you from all around you\nI will be here, don't you cry\n\n[Verse 2]\nFor one so small, you seem so strong\nMy arms will hold you, keep you safe and warm\nThis bond between us can't be broken\nI will be here, don't you cry\n\n[Chorus]\n'Cause you'll be in my heart\nYes, you'll be in my heart\nFrom this day on, now and forevermore\nYou'll be in my heart\nNo matter what they say\nYou'll be here in my heart always\n\n[Verse 3]\nWhy can't they understand the way we feel?\nThey just don't trust what they can't explain\nAnd I know we're different, but deep inside us\nWe're not that different at all\n\n[Chorus]\nAnd you'll be in my heart\nYes, you'll be in my heart\nFrom this day on, now and forevermore\n\n[Bridge]\nDon't listen to them\n'Cause what do they know? (What do they know?)\nWe need each other, to have, to hold\nThey'll see in time, I know\nWhen destiny calls you\nYou must be strong (You gotta be strong)\nI may not be with you, but you've got to hold on\nThey'll see in time, I know\nWe'll show them together\n\n[Chorus]\n'Cause you'll be in my heart\nBelieve me, you'll be in my heart\nI'll be there from this day on\nNow and forevermore\nOoh, you'll be in my heart (You'll be here in my heart, oh)\nNo matter what they say (I'll be with you)\nYou'll be here in my heart (I'll be there)\nAlways\n\n[Outro]\nAlways, I'll be with you\nAnd I'll be there for you always\nAlways and always\nJust look over your shoulder\nJust look over your shoulder\nJust look over your shoulder\nI'll be there, always",
    },
  ];

  const rangkumIntro =
    "Musik selalu menjadi cara paling jujur untuk mengungkapkan hal-hal yang sulit diucapkan dengan kata. Ada saat-saat di mana kata-kata terasa terlalu sempit untuk menampung rasa  dan di sanalah lagu-lagu ini berbicara untukku.";

  const rangkumOutro =
    "Tiga lagu ini menjadi jembatan antara rasionalitasku dan sisi lembut dalam diriku  antara logika yang mencoba memahami dan hati yang hanya ingin merasakan.\n\nDan mungkin, lewat lagu-lagu ini, aku hanya ingin berkata dengan sederhana: “Beginilah caraku mencintai  diam, tulus, dan penuh makna.”";

  const handleOpenModal = (video) => {
    setSelectedSong(video);
    setActiveTab("meaning");
  };

  return (
    <section
      id="songs"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#0e001a] via-[#1a0033] to-[#3b007d] text-white px-6 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,63,130,0.2),_transparent_50%)] blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,0,128,0.2),_transparent_60%)] blur-3xl pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] text-transparent bg-clip-text pb-2.5 shadow-10xl"
      >
        My Songs for You ♫
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center max-w-3xl mx-auto text-purple-200 font-normal mb-8 whitespace-pre-line leading-relaxed"
      >
        {rangkumIntro}
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-white-300">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            onReadMore={() => handleOpenModal(video)}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center max-w-3xl mx-auto bg-white/15 border border-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl"
      >
        <h2 className="text-xl font-bold text-pink-300 mb-3 drop-shadow-lg">
          Sebuah Penutup
        </h2>
        <p className="text-purple-100 text-justify font-normal whitespace-pre-line border-t border-white/20 pt-2">
          {rangkumOutro}
        </p>
      </motion.div>

      <AnimatePresence>
        {selectedSong && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSong(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a0033]/95 rounded-2xl p-6 md:p-8 max-w-3xl w-full border border-purple-400/30 shadow-xl text-left flex flex-col max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-200 mb-4 flex-shrink-0">
                {selectedSong.title}
              </h2>

              <div className="flex border-b border-purple-700 mb-4 flex-shrink-0">
                <button
                  onClick={() => setActiveTab("meaning")}
                  className={`py-2 px-4 font-semibold ${
                    activeTab === "meaning"
                      ? "text-pink-300 border-b-2 border-pink-300"
                      : "text-purple-300"
                  } transition-colors`}
                >
                  Maknanya Bagiku
                </button>
                <button
                  onClick={() => setActiveTab("lyrics")}
                  className={`py-2 px-4 font-semibold ${
                    activeTab === "lyrics"
                      ? "text-pink-300 border-b-2 border-pink-300"
                      : "text-purple-300"
                  } transition-colors`}
                >
                  Lirik
                </button>
              </div>

              <div className="overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === "meaning" && (
                      <p className="text-purple-100 font-normal leading-relaxed text-justify whitespace-pre-line">
                        {selectedSong.meaning}
                      </p>
                    )}
                    {activeTab === "lyrics" && (
                      <p className="text-purple-200 font-normal leading-relaxed text-justify whitespace-pre-line">
                        {selectedSong.lyrics}
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-end pt-6 flex-shrink-0">
                <button
                  onClick={() => setSelectedSong(null)}
                  className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
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

function VideoCard({ video, onReadMore }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden shadow-lg bg-black/40 border border-purple-700 flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30 hover:border-purple-500"
    >
      <div className="relative aspect-video w-full">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          />
        ) : (
          <div
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 blur-0"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center shadow-10xl bg-black/50 transition-all duration-300 group-hover:bg-black/30">
              <svg
                className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow bg-black/20">
        <h3 className="text-xl font-semibold text-yellow-200 mb-2">
          {video.title}
        </h3>
        <p className="text-purple-200 font-normal text-sm leading-relaxed mb-4 line-clamp-3">
          {video.meaning}
        </p>
        <button
          onClick={onReadMore}
          className="text-sm mt-auto font-medium text-purple-300 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 transition-all focus:outline-none self-start"
        >
          Makna & Lirik →
        </button>
      </div>
    </motion.div>
  );
}