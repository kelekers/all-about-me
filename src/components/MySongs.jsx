import { motion } from "framer-motion";
import { useState } from "react";

export default function MySongs() {
  const videos = [
    {
      title: "Can't Help Falling in Love",
      id: "YuH_90giGTQ",
    },
    {
      title: "One More Time, One More Chance",
      id: "BqFftJDXii0",
    },
    {
      title: "You'll Be in My Heart",
      id: "pFB2f1HkR-g",
    },
  ];

  return (
    <section
      id="songs"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#0e001a] via-[#1a0033] to-[#3b007d] text-white px-6 py-24 font-medium border-white"
    >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,63,130,0.2),_transparent_50%)] blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,0,128,0.2),_transparent_60%)] blur-3xl pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-10 bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] text-transparent bg-clip-text pb-2.5 shadow-10xl"
      >
        My Songs for You ♫
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-white-300">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-black/40 border border-purple-700"
    >
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
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 "
          />
        
          <div className="absolute inset-0 flex flex-col justify-center items-center shadow-10xl bg-black/40 backdrop-blur-sm transition group-hover:backdrop-blur-0">
            <svg
              className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <p className="mt-3 text-purple-200 text-sm">{video.title}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}