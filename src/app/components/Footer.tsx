import { Heart } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-[#f5f5f7] border-t border-[#d2d2d7] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d2d2d7] to-transparent"></div>
      </div>

      <div className="max-w-[980px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p
            className="text-[#6e6e73] flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.02 }}
          >
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <Heart className="w-4 h-4 text-[#0071e3] fill-[#0071e3]" />
            </motion.span>{" "}
            by Benil Jenish
          </motion.p>
          <p className="text-[#86868b] text-xs">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}