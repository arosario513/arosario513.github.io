import { graphics3dProjects } from "../data/graphics3d";
import ProjectCard from "../components/project-card";

export default function Graphics3D() {
    return (
        <div className="container">
            <div className="mb-4">
                <h1>3D Graphics</h1>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {graphics3dProjects.map(({ slug, name }) => (
                    <div key={slug} className="col">
                        <ProjectCard name={name} slug={slug} href={`/3dgraphics/${slug}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
