import Link from "next/link";
import { notFound } from "next/navigation";
import { codeToHtml } from "shiki";
import { projects, REPO_RAW } from "../../data/projects";

export function generateStaticParams() {
    return projects.map(({ slug }) => ({ name: slug }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;
    const project = projects.find((p) => p.slug === name);
    if (!project) notFound();

    const res = await fetch(`${REPO_RAW}/${project.slug}/Form1.cs`, {
        cache: "force-cache",
    });
    if (!res.ok) notFound();

    const code = await res.text();
    const highlightedCode = await codeToHtml(code, {
        lang: "csharp",
        theme: "catppuccin-mocha",
    });

    return (
        <div className="container">
            <Link href="/projects" className="btn btn-outline-danger btn-sm mb-3">
                Back
            </Link>
            <h2 className="mb-4">{project.name}</h2>
            <div className="row g-4 align-items-start">
                <div className="col-md-5">
                    <h6 className="text-muted mb-2">output.png</h6>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={`${REPO_RAW}/${project.slug}/output.png`}
                        alt={`${project.name} output`}
                        className="img-fluid rounded border"
                    />
                </div>
                <div className="col-md-7">
                    <h6 className="text-muted mb-2">Form1.cs</h6>
                    <div
                        style={{ borderRadius: 6, overflow: "auto", maxHeight: 600 }}
                        dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    />
                </div>
            </div>
        </div>
    );
}
