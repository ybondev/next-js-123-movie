"use client";
import Cards from "@app/components/Cards";
import { getMovieQuery } from "@utils/requests";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [response, setResponse] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [pathName, setPathName] = useState("");

  const searchData = async () => {
    const data = await getMovieQuery(params.id);
    setResponse(data);
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
    console.log("path", window.location.pathname);
  }, []);
  return (
    <section className="search_section container-fluid">
      <div className="container">
        <div className="row">
          <div className="header_id">search results for: {searchTitle}</div>
          <Cards data={response} path={pathName} />
        </div>
      </div>
    </section>
  );
};

export default page;
