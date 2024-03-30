import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionBlockProps {
  title: string;
  subtitle: string;
  className?: string;
  children: ReactNode;
}

const SectionBlock: React.FC<SectionBlockProps> = ({ title, subtitle, className = "", children }) => {
  return (
    <section className={cn(`-mt-1 relative pb-0 bg-[#07080A] section-pattern`, className)}>
      <div className="pt-14 pb-10 mb:pb-10">
        <h2 className="font-semibold text-shadow text-2xl text-slate-600 text-center md:text-4xl">{title}</h2>
        <p className="font-light text-slate-500 text-center text-sm px-4 md:text-lg md:px-20">{subtitle}</p>
      </div>
      {children}
    </section>
  )
}

export default SectionBlock;