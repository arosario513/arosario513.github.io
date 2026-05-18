export const graphics3dProjects = [
    {
        slug: "solar-system",
        name: "Solar System",
        folder: "solar-system",
        sourceFiles: ["solar-system.wrl"],
        videoUrl:
            "https://github.com/user-attachments/assets/e612e976-48af-4bf9-8561-b04e3c9513e1",
        imageUrl: null,
    },
    {
        slug: "cabin",
        name: "Cabin",
        folder: "vrml",
        sourceFiles: [
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
    {
        slug: "office",
        name: "Office",
        folder: "office",
        sourceFiles: [
            "office.x3d",
            "bookshelf.x3d",
            "chair.x3d",
            "clock.x3d",
            "desk.x3d",
            "lamp.x3d",
            "plant.x3d",
            "room.x3d",
        ],
        videoUrl: null,
        imageUrl:
            "https://raw.githubusercontent.com/arosario513/COMP-3600/main/office/output.png",
    },
] as const;

export type Graphics3DSlug = (typeof graphics3dProjects)[number]["slug"];
