import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="container">
            <h1 className="mb-3">Portafolio Electronico</h1>
            <div className="row">
                <div className="col-md">
                    <Image
                        src="/images/wojak.png"
                        className="img-fluid rounded mb-3"
                        alt="wojak"
                        width={480}
                        height={1}
                    />
                </div>
                <div className="col">
                    <p>[root@arch ~]# whoami</p>
                    <p className="fw-normal">
                        &gt; Soy estudiante del bachillerato de Ciencias de Computadoras de
                        la Universidad Interamericana de Puerto Rico, recinto de Arecibo{" "}
                        <br /> <br />
                        &gt; Estudio ciencias de computadoras porque me interesa la
                        ciberseguridad; inspirado por el juego Watchdogs 2 <br />
                        <br />
                        &gt; De los cursos que mas me gusto seria el de Backend Development
                        por el trabajo final <br />
                        <br />
                        &gt; Yo trabajaria en cualquier compania que me pague bien
                    </p>
                    <Link href="/projects" className="btn btn-outline-danger">
                        View Projects
                    </Link>
                </div>
            </div>
        </div>
    );
}
