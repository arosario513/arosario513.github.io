type WrlFile = { file: string; html: string | null };

type WrlViewerProps = {
    files: WrlFile[];
};

export default function WrlViewer({ files }: WrlViewerProps) {
    if (files.length === 1) {
        return (
            <>
                <h6 className="text-muted mb-2">{files[0].file}</h6>
                <div
                    className="rounded border project-code"
                    style={{ overflow: "auto", maxHeight: 600 }}
                    dangerouslySetInnerHTML={{ __html: files[0].html ?? "" }}
                />
            </>
        );
    }

    return (
        <>
            <ul className="nav nav-tabs mb-0" role="tablist">
                {files.map(({ file }, i) => (
                    <li key={file} className="nav-item" role="presentation">
                        <button
                            className={`nav-link${i === 0 ? " active" : ""}`}
                            data-bs-toggle="tab"
                            data-bs-target={`#tab-${file.replace(".", "-")}`}
                            type="button"
                            role="tab"
                        >
                            {file}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="tab-content rounded-bottom border border-top-0">
                {files.map(({ file, html }, i) =>
                    html ? (
                        <div
                            key={file}
                            className={`tab-pane fade${i === 0 ? " show active" : ""}`}
                            id={`tab-${file.replace(".", "-")}`}
                            role="tabpanel"
                            style={{ overflow: "auto", maxHeight: 600 }}
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    ) : null,
                )}
            </div>
        </>
    );
}
