import Link from "next/link";
import { REPO_RAW } from "../data/projects";

type ProjectCardProps = {
    name: string;
    slug: string;
    href: string;
};

export default function ProjectCard({ name, slug, href }: ProjectCardProps) {
    return (
        <div className="card h-100 project-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={`${REPO_RAW}/${slug}/output.png`}
                alt={`${name} output`}
                className="card-img-top bg-body-tertiary"
                style={{ height: 180, objectFit: "contain" }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">{name}</h5>
                <Link href={href} className="btn btn-outline-danger btn-sm mt-auto">
                    View
                </Link>
            </div>
        </div>
    );
}
