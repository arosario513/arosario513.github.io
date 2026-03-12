import Link from "next/link";
import { projects, REPO_RAW } from "../data/projects";

export default function Home() {
    return (
        <div className="container">
            <div className="mb-4">
                <h1 className="mb-1">Projects</h1>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {projects.map(({ slug, name }) => (
                    <div key={slug} className="col">
                        <div className="card h-100 project-card">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`${REPO_RAW}/${slug}/output.png`}
                                alt={`${name} output`}
                                className="card-img-top bg-body-tertiary"
                                style={{
                                    height: 180,
                                    objectFit: "contain",
                                }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mb-3">{name}</h5>
                                <Link
                                    href={`/projects/${slug}`}
                                    className="btn btn-outline-danger btn-sm mt-auto"
                                >
                                    View Code
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
