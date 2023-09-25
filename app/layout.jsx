import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "123 Movies - ybon.dev",
};

function layout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <Nav />
        {children}
      </body>
    </html>
  );
}

export default layout;
