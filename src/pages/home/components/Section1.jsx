import { Link } from "react-router-dom";
import { ORIGINAL_URL } from "../../../constans/imgBaseUrl";
import { Helmet } from "react-helmet-async";

export default function Section1({ data }) {
  // response.result가 없으면 렌더링하지 않음
  if (!data?.nowPlaying?.response?.result?.length) return null;

  // 첫 번째 영화
  const movie = data.nowPlaying.response.result[0];

  return (
    <section
      style={{
        background: `#808080 url(${ORIGINAL_URL}${movie.backdrop_path}) no-repeat center / cover`,
      }}
      className="mb-[40px] h-[80vh] px-[20px] lg:px-[80px] xl:px-[200px] relative"
    >
      <div className="absolute bottom-[100px] left-[20px] lg:left-[80px] xl:left-[200px]">
        <h3 className="text-[30px] lg:text-[50px] xl:text-[70px] font-semibold">
          {movie.title}
        </h3>

        <p className="text-[14px] xl:text-[18px] opacity-70 max-w-[800px] mt-4 mb-16">
          {movie.overview.slice(0, 100)}...
        </p>

        <Link
          to={`/movie/${movie.id}`}
          className="px-8 py-4 bg-red-500 rounded-lg hover:bg-red-700 transition"
        >
          More View →
        </Link>
      </div>
    </section>
  );
}
