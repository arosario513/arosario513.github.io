export const REPO_RAW =
    "https://raw.githubusercontent.com/arosario513/COMP-3600/main";

export const projects = [
    { slug: "emoji", name: "Emoji" },
    { slug: "flag", name: "Flag" },
    { slug: "inicial", name: "Inicial" },
    { slug: "inter", name: "Inter" },
    { slug: "owl", name: "Owl" },
    { slug: "pacman", name: "Pac-Man" },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];
