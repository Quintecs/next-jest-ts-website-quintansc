import type { ReactNode } from "react";

export interface SkillCardProps {
  title: string;
  subtitle: string;
  textContent: string;
  icon: ReactNode;
  link: string;
  theme: {
    colorBackgroundIcon: string;
    cardBackgroundColor: string;
    cardBackroundTitleColor: string;
    textTitleColor?: string;
  };
}

export default function SkillCard({
  title,
  subtitle,
  textContent,
  icon,
  link,
  theme,
}: SkillCardProps) {
  return (
    <div
      className="flex min-h-[270px] flex-col overflow-hidden rounded-xl border border-white/5"
      style={{ backgroundColor: theme.cardBackgroundColor }}
    >
      <div className="flex">
        <div
          className="flex w-1/3 items-center justify-center py-4"
          style={{ backgroundColor: theme.colorBackgroundIcon }}
        >
          {icon}
        </div>
        <div
          className="flex w-2/3 flex-col justify-center px-4"
          style={{
            backgroundColor: theme.cardBackroundTitleColor,
            color: theme.textTitleColor,
          }}
        >
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-between gap-4 p-5 text-center">
        <p className="text-sm leading-relaxed" style={{ color: theme.colorBackgroundIcon }}>
          {textContent}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-85"
          style={{ backgroundColor: theme.colorBackgroundIcon }}
        >
          Abrir Documentação
        </a>
      </div>
    </div>
  );
}
