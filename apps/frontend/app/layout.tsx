import '../styles/global.css';
import { NavBar } from './NavBar';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <title>Welcome to frontend!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
