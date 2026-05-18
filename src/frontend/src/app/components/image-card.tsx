type ImageCardProps = {
    name: string;
    imageUrl: string;
};

export default function ImageCard({ name, imageUrl }: ImageCardProps) {
    return (
        <div className="card h-100 project-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={imageUrl}
                alt={name}
                className="card-img-top bg-body-tertiary"
                style={{ height: 180, objectFit: "contain" }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">{name}</h5>
                <a
                    href="https://www.printables.com/model/534255-mario-coin"
                    className="btn btn-outline-danger btn-sm mt-auto"
                >
                    View Source
                </a>
            </div>
        </div>
    );
}
