export const REPO_RAW =
    "https://raw.githubusercontent.com/arosario513/COMP-3600/main";

export const projects = [
    { slug: "bmw", name: "BMW Logo" },
    { slug: "emoji", name: "Emoji" },
    { slug: "emoji2", name: "Emoji #2" },
    { slug: "flag", name: "Flag" },
    { slug: "ghosts", name: "Pac-man Ghosts" },
    { slug: "inicial", name: "Inicial" },
    { slug: "inter", name: "Inter" },
    { slug: "owl", name: "Owl" },
    { slug: "pacman", name: "Pac-Man" },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];
