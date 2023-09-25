"use client";
import { useState, useEffect } from "react";
import Cards from "@app/components/Cards";
import { getTVShowsSeries } from "@utils/requests";

const page = () => {
  const [response, setResponse] = useState([]);
  const [pathName, setPathName] = useState("");

  const movies = async () => {
    const data = await getTVShowsSeries(`/discover/tv`);
    setResponse(data);
  };

  useEffect(() => {
    movies();
    setPathName(window.location.pathname);
    document.title = "Watch TV-Series Online For Free | 123movies";
  }, []);
  return (
    <section className="movie_section container-fluid">
      <div className="container">
        <div className="row gy-3">
          <div className="header">tv-series</div>
          <Cards data={response} path={pathName} />
        </div>
      </div>
    </section>
  );
};

export default page;
