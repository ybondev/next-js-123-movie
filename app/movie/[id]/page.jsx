"use client";
import Collection from "@app/components/Collection";
import Details from "@app/components/Details";
import Recommendations from "@app/components/Recommendations";
import Similar from "@app/components/Similar";
import {
  getMovieCollection,
  getMovieDetails,
  getMovieRecommendation,
  getMovieSimilarDetails,
} from "@utils/requests";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [response, setResponse] = useState([]);
  const [collectionResponse, setCollectionResponse] = useState([]);
  const [similarResponse, setSimilarResponse] = useState([]);
  const [recommendationsResponse, setRecommendationsResponse] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [pathName, setPathName] = useState("");
  const [title, setTitle] = useState("");

  const movieDetails = async () => {
    const data = await getMovieDetails(params.id);
    setResponse(data);
    setTitle(data?.title || data?.name);

    if (data?.belongs_to_collection?.id) {
      const collection_data = await getMovieCollection(
        data?.belongs_to_collection?.id
      );
      setCollectionResponse(collection_data);
    } else {
    }

    const similar_data = await getMovieSimilarDetails(params.id);
    setSimilarResponse(similar_data);

    const recommendations_data = await getMovieRecommendation(params.id);
    setRecommendationsResponse(recommendations_data);

    const trailer = data?.videos.results?.find(
      (vid) => vid.name === "Main Trailer" || "Official Trailer"
    );
    setTrailer(trailer?.key);
  };

  useEffect(() => {
    movieDetails();

    if (window.location.pathname.match("/movie")) {
      setPathName("/movie");
    } else {
      console.log("false");
    }

    document.title = `Watch ${title} For Free Online | 123movies`;
  }, [title]);
  return (
    <section className="movie_details_section container-fluid">
      <div className="container">
        <div className="row">
          <Details
            data={response}
            trailer={trailer}
            playing={playing}
            setPlaying={setPlaying}
          />
        </div>
        <div className="collection_id">
          <Collection collection={collectionResponse} />
        </div>
        <div className="recommendations_id">
          <Recommendations
            recommendations={recommendationsResponse}
            path={pathName}
          />
        </div>
        <div className="similar_id">
          <Similar similar={similarResponse} path={pathName} />
        </div>
      </div>
    </section>
  );
};

export default page;
