import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useRef, MouseEvent } from "react";

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.6, 0.05, 0.01, 0.9],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="bg-white rounded-2xl overflow-hidden border border-[#d2d2d7] relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
          }}
          initial={{ x: "-100%", y: "-100%" }}
          whileHover={{ x: "100%", y: "100%" }}
          transition={{ duration: 0.8 }}
        />

        <div className="relative overflow-hidden aspect-[4/3]">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-4 right-4 flex gap-3">
              <motion.button
                className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Github className="w-5 h-5 text-[#1d1d1f]" />
              </motion.button>
              <motion.button
                className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.15, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ExternalLink className="w-5 h-5 text-[#1d1d1f]" />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="p-6 relative" style={{ transform: "translateZ(20px)" }}>
          <h3
            className="text-xl mb-2 text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors duration-300"
            style={{ fontWeight: 600 }}
          >
            {project.title}
          </h3>
          <p className="text-[#6e6e73] mb-4 leading-relaxed text-[17px]">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, tagIndex: number) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-[#f5f5f7] text-[#1d1d1f] text-sm rounded-full border border-[#d2d2d7]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: "#0071e3", color: "#ffffff" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with real-time inventory management and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2ODYyNDQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "Stripe"],
    },
    {
      title: "Mobile App Design",
      description: "Sleek mobile application with intuitive UI/UX and smooth animations for enhanced user engagement.",
      image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4NjQ2NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "TypeScript", "Firebase"],
    },
    {
      title: "Web Design System",
      description: "Comprehensive design system with reusable components and consistent styling across platforms.",
      image: "https://images.unsplash.com/photo-1648260296318-e91c8eb336f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc2ODY2NzI4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Figma", "React", "Tailwind"],
    },
  ];

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden" id="work">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#d2d2d7] to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#d2d2d7] to-transparent"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
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
            <span className="text-[#0071e3] text-sm tracking-wider uppercase">Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 text-[#1d1d1f]" style={{ fontWeight: 600 }}>
            Featured projects
          </h2>
          <p className="text-xl text-[#6e6e73] max-w-[700px] mx-auto leading-relaxed">
            A selection of my recent work showcasing various skills and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
