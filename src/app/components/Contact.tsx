import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "beniljenish@gmail.com",
      href: "mailto:beniljenish@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+918220727721",
      href: "tel:+918220727721",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai,India",
      href: "#",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden" id="contact">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d2d2d7 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
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
            <span className="text-[#0071e3] text-sm tracking-wider uppercase">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl tracking-tight mb-4 text-[#1d1d1f]" style={{ fontWeight: 600 }}>
            Let's work together
          </h2>
          <p className="text-xl text-[#6e6e73] max-w-[700px] mx-auto leading-relaxed">
            Have a project in mind? Let’s build something intelligent together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1, // Reduced delay for faster appearance
                    ease: [0.6, 0.05, 0.01, 0.9],
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group flex items-center gap-4 p-6 bg-[#fbfbfd] border border-[#d2d2d7] rounded-2xl relative overflow-hidden will-change-transform"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-[#0071e3] opacity-0 group-hover:opacity-5"
                    transition={{ duration: 0.2 }}
                  />

                  <motion.div
                    className="w-12 h-12 bg-[#0071e3] rounded-xl flex items-center justify-center relative z-10 will-change-transform"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                  
                  <div className="relative z-10">
                    <p className="text-sm text-[#6e6e73] mb-1">{info.label}</p>
                    <p className="text-[17px] text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors" style={{ fontWeight: 500 }}>
                      {info.value}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 text-[#0071e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            viewport={{ once: true }}
          >
            <div className="bg-[#fbfbfd] rounded-2xl p-8 border border-[#d2d2d7]">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-[17px] text-[#1d1d1f]" style={{ fontWeight: 500 }}>
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#d2d2d7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all text-[17px]"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-[17px] text-[#1d1d1f]" style={{ fontWeight: 500 }}>
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#d2d2d7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all text-[17px]"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-[17px] text-[#1d1d1f]" style={{ fontWeight: 500 }}>
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#d2d2d7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all resize-none text-[17px]"
                    placeholder="Your idea starts here..."
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="group relative w-full px-6 py-3 bg-[#0071e3] text-white rounded-full overflow-hidden text-[17px]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-[#0077ed]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
