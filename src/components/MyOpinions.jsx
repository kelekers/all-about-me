import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const opinionsData = [
  {
    id: 1, rubric: "Compelling", title: "AI: Pedang Bermata Dua",
    content: "Menggunakan AI untuk presisi serangan mengurangi korban salah sasaran, namun mendelegasikan keputusan fatal pada mesin menghapus beban moral.",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 2, rubric: "Informatif", title: "Efisiensi vs Etika",
    content: "Sistem seperti 'Iron Dome' memiliki sukses >90%. Namun, ketergantungan pada data historis bisa bias dan memicu konflik baru.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3, rubric: "Persuasif", title: "Diplomat Digital",
    content: "Kita harus mengubah AI dari 'Senjata Perang' menjadi 'Diplomat Digital' untuk mensimulasikan dampak negosiasi damai.",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4, rubric: "Engaging", title: "Skenario 2045",
    content: "Perang fisik mungkin berkurang, tapi perang siber akan membuat setiap warga sipil menjadi kombatan tanpa sadar.",
    color: "from-purple-500 to-pink-500"
  },
];

export default function MyOpinions() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-[#0e001a] text-white px-6 py-24 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-15">
          <h2 className="text-yellow-300 text-sm font-bold uppercase mb-3">UAS-2 • Critical Thinking</h2>
          <h1 className="text-5xl font-black mb-14">My Opinions</h1>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {opinionsData.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 relative overflow-hidden group">
               <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.color}`} />
               <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 bg-gradient-to-r ${item.color} text-black/80`}>{item.rubric}</span>
               <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
               <p className="text-gray-300 text-justify">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}