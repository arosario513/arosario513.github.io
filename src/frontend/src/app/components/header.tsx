import Link from "next/link";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand fw-semibold">
                    COMP-3600
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#urls"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="urls">
                    <div className="navbar-nav">
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                        <Link href="/projects" className="nav-link">
                            Projects
                        </Link>
                        <Link href="/3dgraphics" className="nav-link">
                            3D Graphics
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
