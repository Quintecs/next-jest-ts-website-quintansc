import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowSmRight } from "react-icons/hi";

export interface ProjectShowcaseProps {
  title: string;
  description?: string | null;
  urlImage: string;
  flags?: string[];
  projectUrl: string;
}

export default function ProjectShowcase({
  title,
  description,
  urlImage,
  flags = [],
  projectUrl,
}: ProjectShowcaseProps) {
  return (
    <div className="flex w-full flex-col gap-6 pb-8">
      <Image
        src={urlImage}
        width={1600}
        height={375}
        alt={`Projeto ${title}`}
        className="h-auto w-full"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-4 px-6 md:flex-row">
        <div className="max-w-xl">
          <h3 className="font-display text-2xl font-bold">{title}</h3>
          <p className="break-words text-muted">{description}</p>
        </div>
        <div className="flex flex-col items-start gap-4 py-4 md:items-end">
          <div className="flex flex-wrap gap-2">
            {flags.map((flag) => (
              <span
                key={flag}
                className="rounded-lg border border-[#DAD9DE]/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#DAD9DE]"
              >
                {flag}
              </span>
            ))}
          </div>
          <Link
            href={projectUrl}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary-light hover:underline"
          >
            Acessar projeto completo <HiOutlineArrowSmRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
