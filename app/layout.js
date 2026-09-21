

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      
      <nav>My navbar</nav>
      {children}
      <footer>My footer</footer>
    </body>
    </html>
    
  );
}
