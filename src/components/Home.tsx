import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../assets/profile.jpg";

export default function Home() {
  return (
    <section id="home" className="scroll-mt-24 min-h-screen flex items-center justify-center px-4 text-foreground">
      <div className="p-8 rounded-3xl shadow-lg text-center max-w-lg w-full transition-colors duration-500 bg-[var(--card)] text-[var(--card-foreground)]">
        <img
          src={profilePhoto}
          alt="Foto de Grazielle Lima"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-2 border-background object-cover shadow-[0_0_20px_5px_rgba(139,92,246,0.6)] dark:shadow-[0_0_30px_10px_rgba(99,102,241,0.8)]"
        />

        <h1 className="text-2xl font-bold mb-1">Grazielle Lima</h1>
        <span className="text-base text-indigo-600 dark:text-indigo-400 font-medium">
          Desenvolvedora Full-Stack
        </span>
        <p className="text-[var(--card-foreground)]/80 leading-relaxed mt-2 font-light">
          Desenvolvedora Full-Stack apaixonada por construir produtos completos, de interfaces modernas em React/Next.js a APIs robustas com Node, Java e PostgreSQL. Gosto de entender o problema de ponta a ponta e entregar soluções com arquitetura sólida, além de uma tela elegante.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://github.com/grazi066"
            target="_blank"
            rel="noreferrer"
            className="group bg-[var(--card-foreground)]/10 hover:bg-[var(--card-foreground)]/20 text-[var(--card-foreground)] p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/grazielle-lima-a4a431426/"
            target="_blank"
            rel="noreferrer"
            className="group bg-[var(--card-foreground)]/10 hover:bg-[var(--card-foreground)]/20 text-[var(--card-foreground)] p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
