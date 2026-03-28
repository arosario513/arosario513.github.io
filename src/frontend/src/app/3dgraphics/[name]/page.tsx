import Link from "next/link";
import { notFound } from "next/navigation";
import { codeToHtml } from "shiki";
import { graphics3dProjects } from "../../data/graphics3d";
import { REPO_RAW } from "../../data/projects";
import WrlViewer from "../../components/wrl-viewer";

export function generateStaticParams() {
    return graphics3dProjects.map(({ slug }) => ({ name: slug }));
}

export default async function Graphics3DPage({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;
    const project = graphics3dProjects.find((p) => p.slug === name);
    if (!project) notFound();

    const wrlContents = await Promise.all(
        project.wrlFiles.map(async (file) => {
            const res = await fetch(`${REPO_RAW}/${project.folder}/${file}`, {
                cache: "force-cache",
            });
            if (!res.ok) return { file, html: null };
            const code = await res.text();
            const html = await codeToHtml(code, {
                lang: "plaintext",
                theme: "catppuccin-mocha",
            });
            return { file, html };
        }),
    );

    return (
        <div className="container">
            <Link href="/3dgraphics" className="btn btn-outline-danger btn-sm mb-3">
                Back
            </Link>
            <h2 className="mb-4">{project.name}</h2>
            <div className="row g-4 align-items-start">
                <div className="col-md-5">
                    {project.imageUrl && (
                        <>
                            <h6 className="text-muted mb-2">output.png</h6>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.imageUrl}
                                alt={`${project.name} output`}
                                className="w-100 rounded border project-media mb-3"
                                style={{ objectFit: "contain" }}
                            />
                        </>
                    )}
                    {project.videoUrl && (
                        <>
                            <h6 className="text-muted mb-2">output.mp4</h6>
                            <video
                                src={project.videoUrl}
                                controls
                                className="w-100 rounded border project-media"
                            />
                        </>
                    )}
                </div>
                <div className="col-md-7">
                    <WrlViewer files={wrlContents} />
                </div>
            </div>
        </div>
    );
}
