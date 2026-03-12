import Link from "next/link";

export default function Header() {
    return (
        <nav className="navbar navbar-expand bg-body-tertiary border-bottom">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand fw-semibold">COMP-3600</Link>
                <div className="navbar-nav me-auto">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/projects" className="nav-link">Projects</Link>
                </div>
            </div>
        </nav>
    );
}
