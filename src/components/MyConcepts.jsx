import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const conceptsData = [
  {
    id: 1,
    category: "Clarity (Kejelasan Konsep)",
    icon: "👁️",
    title: "Project DOVE: Digital Observation for Victim Evacuation",
    description: "Sebuah sistem komando otonom berbasis Artificial Intelligence yang dirancang bukan untuk memenangkan perang, melainkan untuk memitigasi dampak kemanusiaan.",
    detail: "Konsep ini berfokus pada kejelasan alur informasi: Dari satelit -> Pemrosesan AI -> Notifikasi ke Smartphone warga sipil dan NGO."
  },
  {
    id: 2,
    category: "Logic (Logika Sistem)",
    icon: "🧠",
    title: "Predictive Warfare Analysis",
    description: "Menggunakan Machine Learning untuk menganalisis pola pergerakan pasukan dan suplai logistik militer.",
    detail: "AI akan mendeteksi anomali (misal: penumpukan kendaraan lapis baja) dan mengonversinya menjadi probabilitas serangan."
  },
  {
    id: 3,
    category: "Validity (Validitas Data)",
    icon: "📊",
    title: "Historical Conflict Dataset & Geospatial Data",
    description: "Model AI dilatih menggunakan dataset konflik global 50 tahun terakhir.",
    detail: "Validitas dijamin melalui verifikasi silang (cross-referencing) antara citra satelit termal dan laporan lapangan."
  },
  {
    id: 4,
    category: "Usefulness (Daya Guna)",
    icon: "🕊️",
    title: "Humanitarian Aid Optimization",
    description: "Memastikan bantuan kemanusiaan (obat & pangan) sampai ke titik yang tepat.",
    detail: "Berguna bagi PBB untuk merencanakan koridor kemanusiaan yang presisi."
  },
];

export default function MyConcepts() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="min-h-screen bg-[#0e001a] text-white px-6 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-yellow-300 tracking-widest text-sm font-semibold uppercase mb-2">UAS-1 • My Masterpiece</h2>
          <h1 className="text-5xl font-black bg-gradient-to-r from-[#b88900] via-[#ffd966] to-[#fff8e1] text-transparent bg-clip-text pb-3">My Concepts</h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">Menjawab tantangan "Konflik dan Perang" dengan integrasi AI.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {conceptsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setActiveCard(activeCard === item.id ? null : item.id)}
              className={`p-8 rounded-3xl border transition-all duration-300 cursor-pointer group relative overflow-hidden ${activeCard === item.id ? "bg-white/15 border-yellow-400/50" : "bg-white/5 border-white/10 hover:bg-white/10"}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-yellow-200 font-bold text-sm uppercase mb-1">{item.category}</h3>
                  <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                </div>
              </div>
              <p className="text-purple-100 leading-relaxed mb-4 text-justify">{item.description}</p>
              <motion.div initial={false} animate={{ height: activeCard === item.id ? "auto" : 0, opacity: activeCard === item.id ? 1 : 0 }} className="overflow-hidden">
                <div className="pt-4 border-t border-white/10 mt-2">
                  <p className="text-sm text-gray-300 italic"><strong className="text-yellow-300 not-italic">Deep Dive: </strong>{item.detail}</p>
                </div>
              </motion.div>
              <div className="mt-4 flex justify-end">
                 <span className={`text-xs uppercase tracking-widest transition-colors ${activeCard === item.id ? 'text-yellow-300' : 'text-purple-400'}`}>{activeCard === item.id ? "Tutup Detail" : "Baca Detail"}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}