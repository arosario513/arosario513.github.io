import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import BootstrapJS from "./components/bootstrap-js";

export const metadata: Metadata = {
    title: "COMP-3600",
    description:
        "All my work from COMP-3600 (Computer Graphics) class is included here",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-bs-theme="dark">
            <body>
                <BootstrapJS />
                <Header />
                <div className="container-fluid mt-3">{children}</div>
            </body>
        </html>
    );
}
