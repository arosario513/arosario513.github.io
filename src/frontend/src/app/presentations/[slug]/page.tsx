import Link from "next/link";
import { notFound } from "next/navigation";
import { presentations } from "../data";

export function generateStaticParams() {
    return presentations.map(({ slug }) => ({ slug }));
}

export default async function PresentationPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const presentation = presentations.find((p) => p.slug === slug);
    if (!presentation) notFound();

    return (
        <div className="container">
            <Link
                href="/presentations"
                className="btn btn-outline-danger btn-sm mb-2"
            >
                Back
            </Link>
            <h2 className="mb-2">{presentation.name}</h2>
            <object
                data={`/docs/${slug}.pdf`}
                type="application/pdf"
                className="w-100 rounded border project-media mb-4"
                style={{ height: "80vh" }}
            >
                <p>
                    Your browser cannot display the PDF.{" "}
                    <a href={`/docs/${slug}.pdf`} className="text-danger">
                        Download it here.
                    </a>
                </p>
            </object>
        </div>
    );
}
