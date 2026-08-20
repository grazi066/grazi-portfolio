import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

import erpFinanceiro from "../assets/projects/erp-financeiro-simulado.png";
import rhEnterprise from "../assets/projects/rh-enterprise.png";
import miniErp from "../assets/projects/mini-erp.png";
import limosConfeitaria from "../assets/projects/limos-confeitaria.png";
import climaHogwarts from "../assets/projects/clima-hogwarts.png";

type Project = {
  id: string;
  title: string;
  description: string;
  techs: string[];
  repoUrl: string;
  deployUrl?: string;
  image: { src: string; alt: string };
};

const projects: Project[] = [
  {
    id: "ERP",
    title: "ERP Financeiro Simulado",
    description:
      "Monorepo de um ERP financeiro com backend em Spring Boot (Java 21) e frontend em React. Cobre o ciclo completo de contas a pagar e a receber: cadastro de fornecedores/clientes, títulos financeiros com controle de status, baixas com proteção contra concorrência (optimistic locking), fluxo de caixa realizado x projetado e conciliação bancária automática via importação de CSV.",
    techs: ["Spring Boot", "Java", "React", "TypeScript", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/grazi066/erp-financeiro-simulado",
    deployUrl: "https://frontend-five-lovat-72.vercel.app",
    image: { src: erpFinanceiro, alt: "ERP Financeiro Simulado" },
  },
  {
    id: "RH",
    title: "RH Enterprise",
    description:
      "Plataforma corporativa de gestão de Recursos Humanos com Next.js 16 e Prisma. Módulos de colaboradores, cargos, benefícios, férias com sincronização automática de status, folha de pagamento e uma trilha de auditoria (Audit Log) imutável para ações sensíveis como alteração de salário e exclusão de colaborador.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Prisma", "PostgreSQL"],
    repoUrl: "https://github.com/grazi066/rh-enterprise",
    deployUrl: "https://rh-enterprise.vercel.app",
    image: { src: rhEnterprise, alt: "RH Enterprise" },
  },
  {
    id: "ERP",
    title: "Mini ERP",
    description:
      "ERP simplificado para pequenos negócios, com processamento de vendas transacional (ACID): baixa automática de estoque e lançamento financeiro sincronizados dentro da mesma transação. Dashboard analítico 100% em Server Components, sem camadas de API intermediárias.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Prisma", "PostgreSQL", "Recharts"],
    repoUrl: "https://github.com/grazi066/mini-erp",
    deployUrl: "https://mini-erp-teal-two.vercel.app",
    image: { src: miniErp, alt: "Mini ERP" },
  },
  {
    id: "E-commerce",
    title: "Limos Confeitaria",
    description:
      "E-commerce de uma confeitaria artesanal de brownies, com login via Supabase, pagamento via Pix com QR Code gerado no padrão do Banco Central, e notificação automática de pedido por e-mail via Resend, disparada por uma Supabase Edge Function.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Zustand"],
    repoUrl: "https://github.com/grazi066/limos-confeitaria",
    deployUrl: "https://limos-confeitaria.vercel.app",
    image: { src: limosConfeitaria, alt: "Limos Confeitaria" },
  },
  {
    id: "Dashboard",
    title: "Clima Hogwarts",
    description:
      "Dashboard de clima com tema inspirado no universo de Hogwarts, consumindo uma API pública de previsão do tempo e exibindo os dados de forma temática e visual.",
    techs: ["React", "JavaScript", "CSS"],
    repoUrl: "https://github.com/grazi066/clima-Hogwarts",
    deployUrl: "https://clima-dashboard-ten.vercel.app",
    image: { src: climaHogwarts, alt: "Clima Hogwarts" },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 md:px-24 pt-8 pb-16 text-foreground">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          className="text-xl text-violet-400 font-medium mb-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projetos.
        </motion.h3>

        <motion.p
            className="text-foreground leading-relaxed mt-0 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
        >
            Aqui estão alguns projetos que já trabalhei:
        </motion.p>

        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group rounded-2xl p-6 border border-muted bg-indigo-50/60 shadow-md dark:bg-violet-600/20 backdrop-blur-sm transition duration-300 ease-in-out hover:scale-102 hover:-translate-y-1"
              >
                {/* Imagem do projeto */}
                <div className="relative mb-5 -mt-3 w-[110%] -ml-[5%] overflow-hidden rounded-xl">
                  {/* Mantém proporção e evita layout shift */}
                  <div className="aspect-[16/9]">
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Número / título / descrição / techs / link... */}
                <div className="w-fit text-sm bg-indigo-400/20 text-indigo-600 dark:text-indigo-300 font-light px-2 py-0.5 rounded-full mb-1 font-mono">
                  {project.id}
                </div>
                <h3 className="text-lg text-indigo-600 dark:text-indigo-300 font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-foreground font-light mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, j) => (
                    <span
                      key={j}
                      className="text-xs bg-indigo-400/20 text-indigo-600 dark:text-indigo-300 font-light px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.deployUrl ?? project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                  >
                    {project.deployUrl ? "Ver projeto" : "Ver código"} <ArrowUpRight size={16} className="ml-1" />
                  </a>
                  {project.deployUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-300"
                    >
                      <Github size={16} className="mr-1" /> Código
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.p
            className="mt-10 text-center text-sm italic text-zinc-400 dark:text-zinc-400 font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Projetos em breve...
          </motion.p>
        )}
      </div>
    </section>
  );
}
