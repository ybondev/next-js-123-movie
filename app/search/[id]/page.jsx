"use client";
import Cards from "@app/components/Cards";
import { getMovieQuery } from "@utils/requests";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [response, setResponse] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [pathName, setPathName] = useState("");
  const [page, setPage] = useState(1);

  const searchData = async () => {
    const data = await getMovieQuery(`${params.id}&page=${page}`);
    const newMovies = data.results;
    setResponse([...response, ...newMovies]);
  };

  const loadMoreMovies = () => {
    setPage(page + 1);
  };

  const removeString = () => {
    let title = params.id;
    let result = title.replaceAll("%20", " ");
    setSearchTitle(result);
  };

  useEffect(() => {
    searchData();
    removeString();
    setPathName(window.location.pathname);
    document.title = `Search Results: ${searchTitle} | 123movies`;
  }, [searchTitle, page]);
  return (
    <section className="search_section container-fluid">
      <div className="container">
        <div className="row gy-3">
          <div className="header_id">search results for: {searchTitle}</div>
          <Cards data={response} path={pathName} />
          <div className="btn_load">
            <button onClick={loadMoreMovies}>load more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
