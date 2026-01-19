import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const title = "Creative Developer- AI & Dev";

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      id="home"
    >
      {/* Floating orbs - optimized with will-change and reduced complexity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full will-change-transform"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear", // Changed to linear for better performance
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full will-change-transform"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear", // Changed to linear for better performance
          }}
        />
      </div>

      <motion.div
        className="max-w-[980px] mx-auto px-6 py-20 relative z-10 w-full"
        style={{ opacity, scale }}
      >
        <motion.div className="text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-[#d2d2d7]/50 rounded-full text-sm text-[#1d1d1f]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
              </span>
              Working on modern web & AI
            </span>
          </motion.div>

          {/* Animated Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl tracking-tight mb-4 text-[#1d1d1f]"
            style={{ fontWeight: 600 }}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {title.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-[#1d1d1f] mb-2"
              style={{ fontWeight: 600 }}
            >
              I craft beautiful, scalable experiences
            </motion.p>

            <motion.p className="text-lg sm:text-xl md:text-2xl text-[#6e6e73] mb-8">
              Using modern web technologies, AI-powered solutions, and deep user research to solve real problems.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-4 justify-center items-center flex-wrap mb-12"
          >
            <motion.button
              onClick={() => {
                const workSection = document.getElementById('work');
                workSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group relative px-6 py-3 bg-[#10b981] text-white rounded-full overflow-hidden text-[17px] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View my work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-[#059669]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group relative px-6 py-3 border-2 border-[#10b981] text-[#10b981] rounded-full overflow-hidden text-[17px] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact me</span>
              <motion.div
                className="absolute inset-0 bg-[#10b981]"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute inset-0 flex items-center justify-center text-white"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Contact me
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex gap-6 justify-center"
          >
            {[
              { icon: Github, href: "https://github.com/Beniljenish" },
              { icon: Linkedin, href: "www.linkedin.com/in/benil-jenish" },
              { icon: Mail, href: "beniljenish@gmail.com" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className="relative w-11 h-11 flex items-center justify-center border border-[#d2d2d7] rounded-full group overflow-hidden"
                  whileHover={{ scale: 1.1, borderColor: "#10b981" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5 text-[#1d1d1f] relative z-10 group-hover:text-white transition-colors" />
                  <motion.div
                    className="absolute inset-0 bg-[#10b981]"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        style={{ y }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#86868b] rounded-full flex justify-center p-2"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-[#86868b] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}