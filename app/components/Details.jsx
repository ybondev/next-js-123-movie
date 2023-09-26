"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ReactPlayer from "react-player";

const Details = ({ data, trailer, playing, setPlaying, loading }) => {
  const imageBaseURL = `https://image.tmdb.org/t/p`;
  return (
    <div className="col-md-12">
      <div className="movie_details">
        <div className="img_container">
          <Image
            src={
              data?.poster_path
                ? `${imageBaseURL}/w300` + data?.poster_path
                : "https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015265032-KYY1AQ4NCW6NB7BK1NDH/placeholder-image-vertical.png"
            }
            width={0}
            height={0}
            priority
            alt=""
            className="img-fluid"
          />
          {trailer ? (
            <button
              className="btn_play_trailer"
              onClick={() => setPlaying(true)}
            >
              {playing ? "playing..." : "play trailer"}
            </button>
          ) : (
            <button className="btn_play_trailer" disabled>
              no trailer available
            </button>
          )}
        </div>
        <div className="details">
          <div className="title">{data?.title || data?.name}</div>
          <div className="overview">{data?.overview}</div>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="genres">
                Genre:
                {data?.genres?.map((x) => {
                  return (
                    <span className="dark_gray" key={x.id}>
                      {x.name},
                    </span>
                  );
                })}
              </div>
              <div className="langugae">
                Language:
                {data?.spoken_languages?.map((x) => {
                  return (
                    <span className="dark_gray" key={x.iso_639_1}>
                      {x.name || x.english_name}
                    </span>
                  );
                })}
              </div>
              <div className="country">
                Country:
                {data?.production_countries?.map((x) => {
                  return (
                    <span
                      className="dark_gray"
                      key={x.iso_3166_1}
                    >{`${x.name},`}</span>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6">
              <div className="release_date">
                Release Date:
                <span className="dark_gray">
                  {data?.release_date || data?.first_air_date}
                </span>
              </div>
              {data?.runtime ? (
                <>
                  <div className="episode">
                    Runtime:
                    <span className="dark_gray">{data?.runtime}m</span>
                  </div>
                </>
              ) : (
                <div className="episode">
                  Episodes:
                  <span className="dark_gray">{data?.number_of_episodes}</span>
                </div>
              )}
              <div className="rating">
                Rating:
                <span className="dark_gray">
                  <FaStar className="fa_icon" />
                  {data?.vote_average?.toFixed(1)}/10
                </span>
              </div>
            </div>
          </div>
        </div>
        {playing ? (
          <>
            <ReactPlayer
              url={`https://www.youtube.com/embed/${trailer}`}
              playing={true}
              className="trailer"
            />
            <button
              className="btn_close_trailer"
              onClick={() => setPlaying(false)}
              style={{ zIndex: "1" }}
            >
              {playing ? "close trailer" : ""}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
