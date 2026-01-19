import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-[#d2d2d7]/50 shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[980px] mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center gap-3 text-xl text-[#1d1d1f]"
            style={{ fontWeight: 600 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://drive.google.com/file/d/15fG6V__2VSQ6JZBs4fMXsvWq1lAnEtK6/view?usp=sharing"
              alt="Benil Jenish Logo"
              className="h-8 w-8 object-contain"
              onError={(e) => {
                // Hide image gracefully if logo not added yet
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <span>Benil's Portfolio</span>
          </motion.div>
          
          <div className="flex gap-8 items-center">
            {["Work", "About", "Skills", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#1d1d1f] hover:text-[#10b981] transition-colors text-sm relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#10b981] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
