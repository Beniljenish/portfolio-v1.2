import { motion, useScroll, useTransform } from "motion/react";
import { Code2, Palette, Rocket } from "lucide-react";
import { useRef } from "react";

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Engineered for clarity, maintainability, and growth. Built to scale.",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Thoughtfully crafted interfaces focused on usability, clarity, and seamless user interaction.",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimized at every layer to deliver instant load times and smooth, responsive experiences.",
    },
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[#fbfbfd] relative overflow-hidden" id="about">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(0, 113, 227, 0.1) 0%, transparent 70%)",
          y,
        }}
      />

      <div className="max-w-[980px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-[#0071e3] text-sm tracking-wider uppercase">About Me</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 text-[#1d1d1f]" style={{ fontWeight: 600 }}>
            Passionate about building intelligent digital products
          </h2>
          <p className="text-xl text-[#6e6e73] max-w-[700px] mx-auto leading-relaxed">
            Developer focused on modern web technologies, AI innovation, and user-first design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="group relative p-8 bg-white rounded-2xl border border-[#d2d2d7] overflow-hidden"
                  whileHover="hover"
                >
                  {/* Hover gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, rgba(0, 113, 227, 0.02) 0%, rgba(0, 113, 227, 0.05) 100%)",
                    }}
                  />

                  <motion.div
                    className="w-12 h-12 bg-[#0071e3] rounded-xl flex items-center justify-center mb-5 relative"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-xl mb-3 text-[#1d1d1f] relative" style={{ fontWeight: 600 }}>
                    {feature.title}
                  </h3>
                  <p className="text-[#6e6e73] leading-relaxed text-[17px] relative">
                    {feature.description}
                  </p>

                  {/* Bottom line animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-[#0071e3]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
