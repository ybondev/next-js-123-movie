"use client";
import Image from "next/image";
import Link from "next/link";

const Cards = ({ data, path, loading }) => {
  const imageBaseURL = `https://image.tmdb.org/t/p`;

  return (
    <>
      {data &&
        data.map((x) => {
          return (
            <div className="col-6 col-md-3 col-lg-2" key={x.id}>
              <Link
                href={
                  path === `/movie`
                    ? `/movie/${x.id}`
                    : `/tv/${x.id}` && x.media_type === "movie"
                    ? `/movie/${x.id}`
                    : `/tv/${x.id}`
                }
                className="link"
              >
                <div className="wrapper">
                  <Image
                    src={
                      loading && x?.poster_path
                        ? `${imageBaseURL}/w500` + x.poster_path
                        : "https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015265032-KYY1AQ4NCW6NB7BK1NDH/placeholder-image-vertical.png"
                    }
                    width={500}
                    height={0}
                    alt=""
                    priority
                    className={loading ? "img-fluid" : "loading-pulse"}
                  />
                  {loading ? (
                    <div className="details">
                      <div className="title">{x.title || x?.name}</div>
                      <div className="overview">{x.overview}</div>
                    </div>
                  ) : null}
                  {loading ? (
                    <>
                      {x.vote_average >= 7 ? (
                        <div className="rating green">
                          <span>
                            {((x.vote_average * 100) / 10).toFixed(0)}%
                          </span>
                        </div>
                      ) : (
                        <>
                          {x.vote_average >= 4 ? (
                            <>
                              <div className="rating orange">
                                <span>
                                  {((x.vote_average * 100) / 10).toFixed(0)}%
                                </span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="rating red">
                                <span>
                                  {((x.vote_average * 100) / 10).toFixed(0)}%
                                </span>
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </>
                  ) : null}
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default Cards;
