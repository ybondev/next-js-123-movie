"use client";
import Details from "@app/components/Details";
import Recommendations from "@app/components/Recommendations";
import Similar from "@app/components/Similar";
import {
  getTVShows,
  getTVShowsRecommendation,
  getTVShowsSimilar,
} from "@utils/requests";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [response, setResponse] = useState([]);
  const [recommendationsResponse, setRecommendationsResponse] = useState([]);
  const [similarResponse, setSimilarResponse] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [pathName, setPathName] = useState("");
  const [title, setTitle] = useState("");

  const tvShowDetails = async () => {
    const data = await getTVShows(`tv/${params.id}`);
    setResponse(data);
    setTitle(data?.original_title || data?.title || data?.original_name);

    const recommendations_data = await getTVShowsRecommendation(params.id);
    setRecommendationsResponse(recommendations_data);

    const similar_data = await getTVShowsSimilar(`tv/${params.id}/similar`);
    setSimilarResponse(similar_data);

    const trailer = data?.videos.results?.find(
      (vid) => vid.name === "Main Trailer" || "Official Trailer"
    );
    setTrailer(trailer?.key);
  };

  useEffect(() => {
    tvShowDetails();
    setPathName(window.location.pathname);
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
