// import "./globals.css";


// in this folder we can add fonts, add navigation and styling
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}