import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Watch Free movies Online | 123movies",
  description: "Watch Free movies Online | 123movies",
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
