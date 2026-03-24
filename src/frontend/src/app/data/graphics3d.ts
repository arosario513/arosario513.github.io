export const graphics3dProjects = [
    {
        slug: "solar-system",
        name: "Solar System",
        wrlFile: "solar-system.wrl",
        videoUrl:
            "https://github.com/user-attachments/assets/e612e976-48af-4bf9-8561-b04e3c9513e1",
    },
] as const;

export type Graphics3DSlug = (typeof graphics3dProjects)[number]["slug"];
