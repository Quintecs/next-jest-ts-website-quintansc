import { getRepository } from "./github";

export type ProjectFlag = "front" | "back";

export interface Project {
  name: string;
  description: string;
  created_at: string;
  html_url: string;
  image: string;
  banner?: string;
  flag: ProjectFlag;
  tags: string[];
}

const catalog: Project[] = [
  {
    name: "MoveIT-NextJS",
    description:
      "Aplicação de produtividade construída com Next.js, baseada na técnica Pomodoro, com sistema de níveis e desafios.",
    created_at: "2021-03-19T00:00:00Z",
    html_url: "https://github.com/QuintansC/MoveIT-NextJS",
    image: "/trello.webp",
    banner: "/1project.png",
    flag: "front",
    tags: ["Frontend", "React", "Next.js"],
  },
  {
    name: "Clean-API",
    description:
      "API em Node.js com TypeScript aplicando princípios de Clean Architecture e testes automatizados.",
    created_at: "2023-11-01T00:00:00Z",
    html_url: "https://github.com/QuintansC/Clean-API",
    image: "/tsnode.png",
    banner: "/project2.png",
    flag: "back",
    tags: ["Backend", "API", "Node"],
  },
  {
    name: "crud-nest",
    description:
      "CRUD completo construído com NestJS e TypeScript, seguindo boas práticas de arquitetura em camadas.",
    created_at: "2024-05-01T00:00:00Z",
    html_url: "https://github.com/QuintansC/crud-nest",
    image: "/node.png",
    flag: "back",
    tags: ["Backend", "API", "NestJS"],
  },
];

export function getProjectCatalog(): Project[] {
  return catalog;
}

export function findProject(name: string): Project | undefined {
  return catalog.find(
    (project) => project.name.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Dados curados do catálogo, enriquecidos com a API do GitHub quando
 * disponível — nunca falha por indisponibilidade da API.
 */
export async function getProject(name: string): Promise<Project | null> {
  const base = findProject(name);
  if (!base) return null;

  const repo = await getRepository(base.name);
  if (!repo) return base;

  return {
    ...base,
    description: repo.description ?? base.description,
    created_at: repo.created_at,
    html_url: repo.html_url,
  };
}
