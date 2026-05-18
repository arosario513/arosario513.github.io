import { projects } from "../data/projects";
import ProjectCard from "../components/project-card";

export default function Home() {
    return (
        <div className="container">
            <div className="mb-4">
                <h1 className="mb-1">Projects</h1>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {projects.map((project) => (
                    <div key={project.slug} className="col">
                        <ProjectCard
                            name={project.name}
                            slug={project.slug}
                            href={`/projects/${project.slug}`}
                            imageUrl={"coverUrl" in project ? project.coverUrl : undefined}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
