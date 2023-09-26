"use client";
import { useState, useEffect } from "react";
import Cards from "@app/components/Cards";
import { getMovies } from "@utils/requests";

const page = () => {
  const [response, setResponse] = useState([]);
  const [pathName, setPathName] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const movies = async () => {
    const data = await getMovies(`/discover/movie?page=${page}`);
    const newMovies = data.results;
    setLoading(true);
    setResponse([...response, ...newMovies]);
  };

  const loadMoreMovies = () => {
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    movies();
    setPathName(window.location.pathname);
    document.title = "Watch Movies Online For Free | 123movies";
  }, [page]);

  return (
    <section className="movie_section container-fluid">
      <div className="container">
        <div className="row gy-3">
          <div className="header">movies</div>
          <Cards data={response} path={pathName} loading={loading}/>
          <div className="btn_load">
            <button onClick={loadMoreMovies}>
              {loading ? "load more" : "loading..."}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
