import type { ReactNode } from "react";
import {
  SiNextdotjs,
  SiSpringboot,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
} from "react-icons/si";

import java from "../assets/java.svg";
import ts from "../assets/typescript.svg";
import node from "../assets/nodejs.svg";
import tailwind from "../assets/tailwind.svg";
import react from "../assets/react.svg";

type IconProps = {
  icon: ReactNode;
  label?: string;
  size?: "sm" | "md" | "lg";          // tamanho da bolinha
  className?: string;
};

function Icon({ icon, label = "tech", size = "sm", className }: IconProps) {
  const wrap = {
    sm: "h-12 w-12",
    md: "h-14 w-14",
    lg: "h-16 w-16",
  }[size];

  return (
    <div
      className={`rounded-full border border-violet-500/80 dark:border-none bg-white dark:bg-violet-500/15 flex items-center justify-center shadow-md ${wrap} ${className ?? ""}`}
      aria-label={label}
    >
      {icon}
    </div>
  );
}

function ImgIcon({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="h-7 w-7" />;
}

const stack = [
  { key: "react", label: "React", icon: <ImgIcon src={react} alt="React" /> },
  { key: "nextjs", label: "Next.js", icon: <SiNextdotjs size={28} className="text-foreground" /> },
  { key: "typescript", label: "TypeScript", icon: <ImgIcon src={ts} alt="TypeScript" /> },
  { key: "nodejs", label: "Node.js", icon: <ImgIcon src={node} alt="Node.js" /> },
  { key: "tailwind", label: "Tailwind CSS", icon: <ImgIcon src={tailwind} alt="Tailwind CSS" /> },
  { key: "java", label: "Java", icon: <ImgIcon src={java} alt="Java" /> },
  { key: "springboot", label: "Spring Boot", icon: <SiSpringboot size={28} className="text-[#6DB33F]" /> },
  { key: "postgresql", label: "PostgreSQL", icon: <SiPostgresql size={28} className="text-[#336791] dark:text-[#4f95c7]" /> },
  { key: "prisma", label: "Prisma", icon: <SiPrisma size={26} className="text-indigo-500" /> },
  { key: "supabase", label: "Supabase", icon: <SiSupabase size={28} className="text-[#3ECF8E]" /> },
];

export default function Ecosystem() {
  return (
    <div className="w-full px-2">
      <div className="mx-auto max-w-[600px]">
        {/* DESKTOP / TABLET: grid fixo 5 colunas x 2 linhas */}
        <div className="hidden md:grid grid-cols-5 gap-x-10 gap-y-10 lg:gap-x-12 lg:gap-y-12 place-items-center">
          {stack.map((s) => (
            <Icon key={s.key} icon={s.icon} label={s.label} size="lg" />
          ))}
        </div>

        {/* MOBILE: flex com quebras controladas */}
        <div className="md:hidden flex flex-wrap items-center justify-center gap-6 mt-4 max-w-[360px] mx-auto">
          {stack.map((s) => (
            <Icon key={s.key} icon={s.icon} label={s.label} size="lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
