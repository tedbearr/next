import "./global.css";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="font-roboto">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        ></link>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        {children}
      </body>
    </html>
  );
}
