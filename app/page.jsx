"use client";
import { getMoviesTrending } from "@utils/requests";
import CarouselSwiper from "./components/CarouselSwiper";
import CarouselMini from "./components/CarouselMini";
import { useEffect, useState } from "react";

const page = () => {
  const [response, setResponse] = useState([]);
  const [select, setSelect] = useState([]);

  const moviesTrending = async () => {
    const data = await getMoviesTrending(`trending/all/day`);
    setResponse(data);
    setSelect(data.results[0]);
  };

  useEffect(() => {
    moviesTrending();
    document.title = "Watch Free movies Online | 123movies";
  }, []);

  return (
    <section className="landing_section container-fluid">
      <div className="container">
        <div className="banner">
          <CarouselSwiper data={response} selectedMovie={select} />
        </div>
        <CarouselMini data={response} selectedMovie={setSelect} />
      </div>
    </section>
  );
};

export default page;
