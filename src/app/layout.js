import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="romantic-container">
          <div className="romantic-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

