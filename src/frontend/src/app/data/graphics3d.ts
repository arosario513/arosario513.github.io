export const graphics3dProjects = [
    {
        slug: "solar-system",
        name: "Solar System",
        folder: "solar-system",
        wrlFiles: ["solar-system.wrl"],
        videoUrl:
            "https://github.com/user-attachments/assets/e612e976-48af-4bf9-8561-b04e3c9513e1",
        imageUrl: null,
    },
    {
        slug: "cabin",
        name: "Cabin",
        folder: "vrml",
        wrlFiles: [
            "cabin.wrl",
            "fireplace.wrl",
            "forest.wrl",
            "ground.wrl",
            "pool.wrl",
            "trees.wrl",
        ],
        videoUrl:
            "https://github.com/user-attachments/assets/169e704c-12ca-45a2-aac1-6aa854c1c5d3",
        imageUrl:
            "https://raw.githubusercontent.com/arosario513/COMP-3600/main/vrml/output.png",
    },
] as const;

export type Graphics3DSlug = (typeof graphics3dProjects)[number]["slug"];
