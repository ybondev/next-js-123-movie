"use client";
import { useState, useEffect } from "react";
import Cards from "@app/components/Cards";
import { getMovies } from "@utils/requests";

const page = () => {
  const [response, setResponse] = useState([]);
  const [pathName, setPathName] = useState("");

  const movies = async () => {
    const data = await getMovies(`/discover/movie`);
    setResponse(data);
  };

  useEffect(() => {
    movies();
    setPathName(window.location.pathname);
    document.title = "Watch Movies Online For Free | 123movies";
  }, []);
  return (
    <section className="movie_section container-fluid">
      <div className="container">
        <div className="row gy-3">
          <div className="header">movies</div>
          <Cards data={response} path={pathName} />
        </div>
      </div>
    </section>
  );
};

export default page;
