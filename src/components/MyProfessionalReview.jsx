import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Simulasi Penilaian AI
const aiAssessment = [
  { module: "UAS-1 Concepts", score: 4.8, comment: "Konsep Project DOVE sangat kuat dalam aspek 'Usefulness'. Kejelasan alur evakuasi sangat logis." },
  { module: "UAS-2 Opinions", score: 4.5, comment: "Argumen etika tentang AI dalam perang sangat 'Compelling'. Perlu sedikit tambahan data statistik." },
  { module: "UAS-3 Innovations", score: 4.9, comment: "Fitur 'Mesh Network' adalah solusi kebaruan (Novelty) yang sangat relevan untuk zona konflik." },
  { module: "UAS-4 Knowledge", score: 4.7, comment: "Kurasi teknologi stack akurat. Validitas referensi hukum internasional sangat baik." },
];

export default function MyProfessionalReview() {
  // Hitung rata-rata
  const avgScore = (aiAssessment.reduce((acc, curr) => acc + curr.score, 0) / aiAssessment.length).toFixed(1);

  return (
    <section className="min-h-screen bg-[#0e001a] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center mb-6"
        >
            <h1 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Professional Review</h1>
            <p className="text-gray-400 mt-2">AI Self Assessment & Peer Review</p>
        </motion.div>

        {/* AI Score Card */}
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gradient-to-br from-[#1a0033] to-[#2d004d] p-8 rounded-3xl border border-purple-500/30 shadow-2xl relative overflow-hidden mb-16"
        >
            <div className="absolute top-0 right-0 p-4 bg-purple-500/20 rounded-bl-2xl border-b border-l border-purple-500/30">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-200">AI Score</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full border-4 border-purple-500 flex items-center justify-center bg-black/50 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                    <span className="text-4xl font-black text-white">{avgScore}</span>
                </div>
                <div className="flex-1 space-y-4 w-full">
                    {aiAssessment.map((item, idx) => (
                        <div key={idx} className="bg-white/5 p-3 rounded-lg border border-white/5 flex justify-between items-center">
                            <div>
                                <h4 className="font-bold text-purple-300">{item.module}</h4>
                                <p className="text-xs text-gray-400 italic">"{item.comment}"</p>
                            </div>
                            <span className="font-bold text-yellow-400">{item.score}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>

        {/* Peer Assessment Section (Button Link) */}
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center bg-white/5 p-10 rounded-3xl border border-white/10"
        >
            <h3 className="text-2xl font-bold mb-4 text-white">Peer Assessment</h3>
            <a 
                href="https://docs.google.com/spreadsheets/d/17AJPBYgKAa7dwoUKn3uYNDBGM5MmhHXrVAzTQWw2F3A/edit?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 group"
            >
                <span>📄 Buka Spreadsheet Penilaian</span>
                <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
        </motion.div>

      </div>
    </section>
  );
}