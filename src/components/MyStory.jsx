import { motion } from "framer-motion";

export default function MyStory() {
  const stories = [
    {
      title: "Peak Storyyy",
      content:
        "heheheha heheheha heheheha heheheha heheheha heheheha heheheha heheheha heheheha heheheha heheheha heheheha heheheha heheheha heheheha  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim justo quis sapien lobortis faucibus. Proin consectetur quam et ante imperdiet placerat. Fusce dignissim, ante vel vestibulum hendrerit, dolor justo posuere ligula, et scelerisque nibh quam sit amet enim. Donec eu placerat nibh. Fusce auctor felis eu sapien hendrerit, et pharetra urna rutrum. Ut convallis, justo viverra rutrum interdum, tortor sem consequat nulla, in aliquet sem magna sit amet ex. Phasellus id purus justo. Ut id risus at magna pellentesque malesuada non at mi. Ut ultricies, lacus in rutrum eleifend, nibh nisi pretium neque, at interdum odio metus eget arcu. Fusce mattis dui purus, lobortis mollis libero pulvinar sit amet. Nam lectus massa, congue quis leo in, mattis egestas justo. Integer finibus semper rutrum. Suspendisse accumsan, metus at ornare blandit, dolor lorem auctor ante, ut eleifend risus dui vitae augue. Aenean eget tincidunt diam. Pellentesque quis magna vulputate, vehicula odio eu, iaculis libero. Vivamus aliquam, urna ut congue pharetra, turpis nulla auctor turpis, eu malesuada nisi mauris at nisl. Aenean gravida mauris vitae euismod tempus. Nullam vitae ligula iaculis, blandit ligula ac, scelerisque nisi. Praesent sed mi in risus volutpat eleifend sed vitae lectus. Fusce gravida vitae purus eget ornare. Nam eget felis arcu.",
      reflection:
        "heheheha heheheha heheheha heheheha heheheha heheheha heheheha",
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

      <div className="grid gap-8 max-w-5xl mx-auto">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 rounded-2xl p-6 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-white/15 transition"
          >
            <h2 className="text-2xl font-semibold text-yellow-200 mb-3">
              {story.title}
            </h2>
            <p className="text-purple-100 leading-relaxed mb-4 text-justify">
              {story.content}
            </p>
            <div className="border-t border-white/20 pt-3">
              <p className="italic text-yellow-100">“{story.reflection}”</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}