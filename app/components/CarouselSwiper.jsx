"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

const CarouselSwiper = ({ data, selectedMovie }) => {
  const imageBaseURL = `https://image.tmdb.org/t/p/original`;
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper non_mobile"
      >
        <SwiperSlide key={selectedMovie.id}>
          <div className="img_container cover">
            <Image
              src={`${imageBaseURL}` + selectedMovie.backdrop_path}
              width={500}
              height={0}
              alt={`${imageBaseURL}` + selectedMovie.backdrop_path}
              className="img-fluid cover"
              priority
            />
          </div>
          <div className="container">
            <div className="details">
              <div className="title">
                {selectedMovie.name || selectedMovie.title}
              </div>
              <div className="year_rating">
                <div className="year">
                  {selectedMovie.first_air_date || selectedMovie.release_date}
                </div>
                <div className="rating">{`${selectedMovie.vote_average?.toFixed(
                  1
                )}`}</div>
              </div>
              <div className="overview">{selectedMovie.overview}</div>
              <Link
                href={
                  selectedMovie.media_type === "movie"
                    ? `/movie/${selectedMovie.id}`
                    : `/tv/${selectedMovie.id}`
                }
                className="link"
              >
                <div className="btn_watch_now">
                  <FaPlayCircle className="fa_icon" />
                  watch now
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper mobile"
      >
        {data &&
          data?.results?.map((x) => {
            return (
              <SwiperSlide key={x.id}>
                <div className="img_container cover">
                  <Image
                    src={`${imageBaseURL}` + x.backdrop_path}
                    width={500}
                    height={0}
                    alt={`${imageBaseURL}` + x.backdrop_path}
                    className="img-fluid cover"
                    priority
                  />
                </div>
                <div className="container">
                  <div className="details">
                    <div className="title">{x.name || x.title}</div>
                    <div className="year_rating">
                      <div className="year">
                        {x.first_air_date || x.release_date}
                      </div>
                      <div className="rating">{`${x.vote_average?.toFixed(
                        1
                      )}`}</div>
                    </div>
                    <div className="overview">{x.overview}</div>
                    <Link
                      href={
                        x.media_type === "movie"
                          ? `/movie/${x.id}`
                          : `/tv/${x.id}`
                      }
                      className="link"
                    >
                      <div className="btn_watch_now">
                        <FaPlayCircle className="fa_icon" />
                        watch now
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default CarouselSwiper;
