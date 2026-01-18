import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Next.js", level: 88 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 83 },
        { name: "MongoDB", level: 87 },
      ],
    },
    {
      category: "Tools & Design",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Git", level: 93 },
        { name: "Docker", level: 78 },
        { name: "AWS", level: 75 },
      ],
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#fbfbfd] relative overflow-hidden" id="skills">
      {/* Simplified grid background - reduced from 20 to 10 lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-[#d2d2d7] will-change-transform"
            style={{ top: `${i * 10}%` }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: i * 0.03 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        ))}
      </div>

      <div className="max-w-[980px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-[#0071e3] text-sm tracking-wider uppercase">Expertise</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 text-[#1d1d1f]" style={{ fontWeight: 600 }}>
            Skills & expertise
          </h2>
          <p className="text-xl text-[#6e6e73] max-w-[700px] mx-auto leading-relaxed">
            A diverse skill set covering the full spectrum of modern web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCard key={category.category} category={category} index={categoryIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, index }: { category: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.6, 0.05, 0.01, 0.9],
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="group bg-white rounded-2xl p-8 border border-[#d2d2d7] relative overflow-hidden"
        whileHover="hover"
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background: "linear-gradient(135deg, rgba(0, 113, 227, 0.03) 0%, rgba(0, 113, 227, 0.08) 100%)",
          }}
          variants={{
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.4 }}
        />

        <motion.h3
          className="text-xl mb-8 text-[#1d1d1f] relative"
          style={{ fontWeight: 600 }}
          whileHover={{ x: 10, transition: { duration: 0.3 } }}
        >
          {category.category}
          <motion.span
            className="absolute -bottom-2 left-0 h-0.5 bg-[#0071e3]"
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true }}
          />
        </motion.h3>

        <div className="space-y-6 relative">
          {category.skills.map((skill: any, skillIndex: number) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <motion.span
                  className="text-[17px] text-[#1d1d1f]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                >
                  {skill.name}
                </motion.span>
                <motion.span
                  className="text-[#6e6e73] text-[17px] tabular-nums"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + skillIndex * 0.1 + 0.2 }}
                >
                  {skill.level}%
                </motion.span>
              </div>

              <div className="h-1.5 bg-[#e8e8ed] rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full rounded-full relative overflow-hidden"
                  style={{
                    background: "linear-gradient(90deg, #0071e3 0%, #0077ed 100%)",
                  }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.2 + skillIndex * 0.15,
                    ease: [0.6, 0.05, 0.01, 0.9],
                  }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                    }}
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
