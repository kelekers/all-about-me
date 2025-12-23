import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Data Inovasi: Project DOVE
// Rubrik: Guna (Usefulness), Kebaruan (Novelty), Desain (Design), Dampak (Impact)
const innovationsData = [
  {
    id: 1,
    rubric: "Usefulness (Guna)",
    title: "Real-time Evacuation Routing",
    desc: "Algoritma navigasi yang dinamis, mengubah rute evakuasi warga sipil secara real-time menghindari zona merah pertempuran aktif.",
    detail: "Berbeda dengan Google Maps yang mencari rute tercepat, DOVE mencari rute 'teraman' menggunakan data balistik dan pergerakan pasukan.",
    icon: "🛡️"
  },
  {
    id: 2,
    rubric: "Novelty (Kebaruan)",
    title: "Decentralized Mesh Network",
    desc: "Tetap berfungsi saat internet dimatikan. Menggunakan teknologi mesh peer-to-peer antar smartphone warga.",
    detail: "Inovasi ini mengatasi masalah umum di zona perang: pemutusan internet (internet blackout). HP warga menjadi 'tower' darurat satu sama lain.",
    icon: "📡"
  },
  {
    id: 3,
    rubric: "Design (Desain)",
    title: "Panic-Proof UI/UX",
    desc: "Antarmuka yang dirancang khusus untuk kondisi stres tinggi. Minim teks, dominasi simbol universal, dan mode 'Low Light'.",
    detail: "Desain memperhitungkan psikologis pengguna yang panik. Satu tombol besar 'I AM SAFE' untuk melapor ke keluarga.",
    icon: "🎨"
  },
  {
    id: 4,
    rubric: "Impact (Dampak)",
    title: "Zero Collateral Vision",
    desc: "Target mengurangi korban jiwa sipil hingga 60% dalam konflik urban.",
    detail: "Dampak terukur melalui simulasi Monte Carlo. Memberikan data akurat bagi NGO untuk distribusi bantuan.",
    icon: "📉"
  }
];

export default function MyInnovations() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0e001a] text-white px-6 py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
             <h2 className="text-yellow-300 tracking-widest text-sm font-bold uppercase mb-2">UAS-3 • Masterpiece Prototype</h2>
             <h1 className="text-5xl font-black pb-3 bg-gradient-to-r from-green-300 to-emerald-500 text-transparent bg-clip-text">Project DOVE Innovations</h1>
             <p className="text-gray-400 max-w-2xl mx-auto">Fitur unggulan sistem peringatan dini konflik berbasis AI.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {innovationsData.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-green-500/30 transition-all group"
                >
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-4xl bg-white/10 p-3 rounded-xl">{item.icon}</span>
                        <span className="text-xs font-mono text-green-400 border border-green-500/30 px-2 py-1 rounded">{item.rubric}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-green-300 transition-colors">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.desc}</p>
                    <div className="bg-black/30 p-4 rounded-lg border-l-2 border-green-500">
                        <p className="text-sm text-gray-400 italic">"{item.detail}"</p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Prototype Visual Mockup (Simple CSS Shape) */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 p-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 text-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h3 className="text-2xl font-bold mb-6 relative z-10">System Architecture Mockup</h3>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <div className="p-4 bg-blue-900/40 rounded-xl border border-blue-500/50 w-40">Satelit Input</div>
                <div className="self-center text-2xl">→</div>
                <div className="p-4 bg-purple-900/40 rounded-xl border border-purple-500/50 w-40 shadow-[0_0_15px_rgba(168,85,247,0.5)]">AI Processing Core</div>
                <div className="self-center text-2xl">→</div>
                <div className="p-4 bg-green-900/40 rounded-xl border border-green-500/50 w-40">User Alert App</div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}