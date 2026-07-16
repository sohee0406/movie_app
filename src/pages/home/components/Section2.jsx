import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { W500_URL } from "../../../constans/imgBaseUrl";

export default function Section2({ data }) {
  console.log(data);
  return (
    <section>
      <h2 className="text-2xl lg:text-3xl xl:text-4xl mb-8">현재 상영중</h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        breakpoints={{
          320: {
            spaceBetween: 10,
            slidesPerView: 2.5,
          },
          640: {
            spaceBetween: 15,
            slidesPerView: 3.3,
          },
          1024: {
            spaceBetween: 20,
            slidesPerView: 5.3,
          },
        }}
      >
        {data?.result?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className="xl:h-[400px]">
                <img
                  className="w-full h-full object-cover"
                  src={W500_URL + movie.poster_path}
                  alt={movie.title}
                />
              </div>
              <h3 className="text-base lg:text-lg mt-[15px] font-[600]">
                {movie.title}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
