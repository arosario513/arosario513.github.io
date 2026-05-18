import Link from "next/link";
import { presentations } from "./data";

export default function PresentationsPage() {
    return (
        <div className="container">
            <div className="mb-4">
                <h1 className="mb-1">Presentations</h1>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {presentations.map(({ slug, name }) => (
                    <div key={slug} className="col">
                        <div className="card h-100 project-card">
                            <div
                                className="card-img-top d-flex align-items-center justify-content-center bg-body-tertiary"
                                style={{ height: 180 }}
                            >
                                <i
                                    className="bi bi-file-earmark-pdf"
                                    style={{ fontSize: "4rem", color: "#cc0000" }}
                                />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mb-3">{name}</h5>
                                <Link
                                    href={`/presentations/${slug}`}
                                    className="btn btn-outline-danger btn-sm mt-auto"
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
