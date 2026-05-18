import Link from "next/link";
import { notFound } from "next/navigation";
import { codeToHtml } from "shiki";
import { projects, REPO_RAW } from "../../data/projects";

export function generateStaticParams() {
    return projects.map(({ slug }) => ({ name: slug }));
}

interface ReadmeSection {
    title: string;
    code: string;
    imageUrl: string;
}

function parseReadmeSections(markdown: string): ReadmeSection[] {
    const sections: ReadmeSection[] = [];
    for (const part of markdown.split(/\n(?=## )/)) {
        const titleMatch = part.match(/^## (.+)/);
        if (!titleMatch) continue;
        const codeMatch = part.match(/```html\n([\s\S]*?)```/);
        const imageMatch = part.match(/!\[output\]\((.+?)\)/);
        if (codeMatch && imageMatch) {
            sections.push({
                title: titleMatch[1].trim(),
                code: codeMatch[1].trim(),
                imageUrl: imageMatch[1].trim(),
            });
        }
    }
    return sections;
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;
    const project = projects.find((p) => p.slug === name);
    if (!project) notFound();

    if ("readme" in project && project.readme) {
        const res = await fetch(`${REPO_RAW}/${project.slug}/README.md`, {
            cache: "force-cache",
        });
        if (!res.ok) notFound();

        const markdown = await res.text();
        const sections = parseReadmeSections(markdown);
        const highlighted = await Promise.all(
            sections.map((s) =>
                codeToHtml(s.code, { lang: "html", theme: "catppuccin-mocha" }),
            ),
        );

        return (
            <div className="container">
                <Link href="/projects" className="btn btn-outline-danger btn-sm mb-3">
                    Back
                </Link>
                <h2 className="mb-4">{project.name}</h2>
                <div className="d-flex flex-column gap-4">
                    {sections.map((section, i) => (
                        <div key={section.title}>
                            <h5 className="mb-3">{section.title}</h5>
                            <div className="row g-3 align-items-start">
                                <div className="col-md-3">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={section.imageUrl}
                                        alt={`${section.title} output`}
                                        className="img-fluid rounded border project-media"
                                    />
                                </div>
                                <div className="col-md-9">
                                    <div
                                        className="rounded"
                                        style={{ overflow: "auto" }}
                                        dangerouslySetInnerHTML={{ __html: highlighted[i] }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

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
                        className="img-fluid rounded border project-media"
                    />
                </div>
                <div className="col-md-7">
                    <h6 className="text-muted mb-2">Form1.cs</h6>
                    <div
                        className="rounded"
                        style={{ overflow: "auto", maxHeight: 600 }}
                        dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    />
                </div>
            </div>
        </div>
    );
}
