
import "./globals.css"
import { inter } from "./ui/fonts";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${inter.className} antialiased`}>
      <nav>My navbar</nav>
      {children}
      <footer>My footer</footer>
    </body>
    </html>
    
  );
}
