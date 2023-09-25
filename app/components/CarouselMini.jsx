"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";
const CarouselMini = ({ data, selectedMovie }) => {
  const imageBaseURL = `https://image.tmdb.org/t/p`;
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper cover_flow"
      >
        {data.results?.map((x) => {
          return (
            <SwiperSlide onClick={() => selectedMovie(x)}>
              <div className="img_container" key={x.id}>
                <Image
                  src={`${imageBaseURL}/w500` + x.poster_path}
                  width={500}
                  height={0}
                  alt=""
                  className="img-fluid"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CarouselMini;
