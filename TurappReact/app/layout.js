import "./globals.css";

export const metadata = {
  title: "TiU Trails | Find your next way out there",
  description:
    "Discover hiking trails and mountain cabins across Utopia with TiU.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
