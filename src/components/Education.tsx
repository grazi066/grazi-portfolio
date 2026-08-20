import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ===== Tipos ===== */
type EducationItem = {
  degree: string;
  school: string;
  period: string;
  bullets?: string[];
};

/* ===== Dados ===== */
const education: EducationItem[] = [
  {
    degree: "Bacharelado em Engenharia de Software",
    school: "UNDB - Unidade de Ensino Superior Dom Bosco",
    period: "fevereiro 2024 – junho 2028 (em andamento)",
  },
];

/* ===== Animações ===== */
const easeSoft: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeSoft, staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeSoft } },
};

/* ===== Section Education ===== */
export default function Education() {
  return (
    <section id="education" className="w-full px-5 sm:px-6 md:px-24 py-14 md:py-16 scroll-mt-28">
      <div className="max-w-5xl mx-auto pb-28">
        {/* título + intro */}
        <motion.h3
          className="text-xl text-violet-400 font-medium mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Educação.
        </motion.h3>

        <motion.p
          className="font-light text-sm md:text-base text-foreground mb-8 md:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Formação acadêmica.
        </motion.p>

        {/* ===== Timeline ===== */}
        {education.length > 0 ? (
          <div className="pl-2 relative">
            <motion.ol
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="
                relative space-y-8 sm:space-y-10
                before:content-[''] before:absolute before:left-4 before:top-0
                before:h-full before:w-px before:bg-gradient-to-b
                before:from-violet-300/90 before:via-violet-400/90 before:to-violet-300/60
                before:shadow-[0_0_10px_1px_rgba(167,139,250,0.35)]
                after:content-[''] after:absolute after:left-4 after:-top-3
                after:h-3 after:w-px after:bg-violet-300/80
              "
            >
              {education.map((ed, idx) => (
                <motion.li
                  key={idx}
                  variants={item}
                  className="
                    relative pl-8 md:pl-10
                    before:content-[''] before:absolute before:left-[10px] before:top-1.5
                    before:h-3 before:w-3 before:rounded-full before:bg-violet-400
                    before:ring-4 before:ring-violet-400/25
                    before:border before:border-white/70
                    before:shadow-[0_0_18px_0_rgba(167,139,250,0.45)]
                  "
                >
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{ed.degree}</h4>
                    <span className="text-sm text-indigo-600 dark:text-indigo-300 font-light">
                      {ed.school}
                    </span>
                    <p className="text-xs text-indigo-600 dark:text-indigo-300 font-light mt-1">
                      ({ed.period})
                    </p>

                    {ed.bullets?.length ? (
                      <ul className="mt-3 space-y-2">
                        {ed.bullets.map((b, i) => (
                          <li key={i} className="text-sm leading-relaxed text-foreground font-light">
                            <span className="mr-2 select-none text-foreground">–</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        ) : (
          <motion.p
            className="text-sm italic text-zinc-400 dark:text-zinc-400 font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Em breve...
          </motion.p>
        )}
      </div>
    </section>
  );
}
