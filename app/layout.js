export const metadata = {
    title: "Miora Randrianasy Portfolio",
    description: "Astrophysics & Data Science Portfolio"
};

import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}