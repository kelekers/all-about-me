import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Data Knowledge
// Rubrik: Kurasi (Curation), Kejelasan (Clarity), Akurasi (Accuracy), Daya Guna (Utility)
const knowledgeData = [
    {
        category: "Tech Stack (Akurasi)",
        items: [
            { name: "TensorFlow JS", desc: "Library ML untuk menjalankan model deteksi pola langsung di browser (Edge AI)." },
            { name: "React + Vite", desc: "Framework UI performa tinggi untuk dashboard real-time." },
            { name: "Firebase Firestore", desc: "Database NoSQL untuk sinkronisasi data insiden secara real-time." }
        ]
    },
    {
        category: "Research Resources (Kurasi)",
        items: [
            { name: "SIPRI Yearbook 2024", desc: "Data valid tentang persenjataan dan pelucutan senjata global." },
            { name: "Geneva Conventions", desc: "Dasar hukum kemanusiaan internasional yang menjadi 'rules' bagi AI." },
            { name: "MIT Tech Review", desc: "Artikel: 'When AI goes to war' sebagai referensi etika." }
        ]
    }
];

export default function MyKnowledge() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0e001a] text-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-12"
            >
                <h2 className="text-yellow-300 tracking-widest text-sm font-bold uppercase mb-2">UAS-4 • Technical Foundation</h2>
                <h1 className="text-5xl font-black text-blue-300">My Knowledge</h1>
            </motion.div>

            <div className="space-y-12">
                {knowledgeData.map((section, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.2 }}
                        className="bg-white/5 rounded-3xl p-8 border border-white/10"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-blue-200 border-b border-white/10 pb-2">{section.category}</h3>
                        <div className="grid gap-4">
                            {section.items.map((item, i) => (
                                <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 hover:bg-white/5 rounded-xl transition">
                                    <div className="md:w-1/3 font-bold text-lg text-yellow-100">{item.name}</div>
                                    <div className="md:w-2/3 text-gray-400 text-sm">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 p-6 bg-blue-900/20 rounded-2xl border border-blue-500/30 text-center">
                <h4 className="text-xl font-bold text-blue-200 mb-2">Refleksi Pembelajaran (Daya Guna)</h4>
                <p className="text-gray-300 italic">"Memahami bahwa teknologi dalam perang bukan hanya soal canggihnya rudal, tapi canggihnya penyelamatan nyawa. Pengetahuan ini saya kurasi untuk membangun Project DOVE."</p>
            </div>
        </div>
    </section>
  );
}