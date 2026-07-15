import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getNowPlaying,
  getPopular,
  getRated,
  getUpcoming,
} from "../../api/movieapi";

export default function Home() {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        // setMovieData;
        // const nowPlaying = await getNowPlaying();
        // const popular = await getPopular();
        // const rated = await getRated();
        // const upcoming = await getUpcoming();

        const [nowPlaying, popular, rated, upcoming] = await Promise.all([
          getNowPlaying(),
          getPopular(),
          getRated(),
          getUpcoming(),
        ]);

        setMovieData({
          nowPlaying,
          popular,
          rated,
          upcoming,
        });

        // setNowData(nowPlaying);
        // setPopData(popular);
        // setRatedData(rated);
        // setUpcomingData(upcoming);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(`현재 상영 영화: ${nowData}`);
  // console.log(`인기 영화: ${popData}`);
  // console.log(`최고 평점: ${RatedData}`);
  // console.log(`예정 영화: ${UpcomingData}`);

  // *예외
  // => try ~ catch
  // => 조건문과 비슷하게 코드나 함수에 오류나 문제점이 발생했을때
  // 핸들링 처리 가능함
  // => if문과 차이점은 if문은 무조건 조건을 작성해야되지만
  // try는 조건없이 문제점을 잡아낼수 있음

  // useEffect(() => {
  //   const movieData = async () => {
  //     const nowPlayingData = await getNowPlaying();
  //     console.log(nowPlayingData);
  //   };
  //   movieData();
  // }, []);

  // const [num, setNum] = useState(0);

  // useEffect(() => {
  //   console.log("랜더링 실행");
  // });

  // useEffect(() => {
  //   console.log("처음 랜더링시 1회 실행");
  // }, []);

  // useEffect(() => {
  //   console.log("num 값이 변경될때마다 실행");
  // }, [num]);

  console.log(movieData?.nowPlaying?.results?.[1]?.title);
  console.log(movieData?.nowPlaying?.results?.[1]?.overview);

  return (
    <div className="min-h-screen">
      HOME
      <section
        style={{
          background: `#808080 url(https://image.tmdb.org/t/p/original${
            movieData?.nowPlaying?.results?.[1]?.backdrop_path
          }) no-repeat center / cover`,
        }}
        className="h-[80vh] px-[20px] lg:px-[80px] xl:px-[200px] relative"
      >
        <div
          className="absolute bottom-[100px] left-[20px]
          lg:left-[80px] xl:left-[200px]"
        >
          <h3 className="text-[30px] lg:text-[50px] xl:text-[70px] font-semibold">
            {movieData?.nowPlaying?.results?.[1]?.title}
          </h3>

          <p className="text-[14px] xl:text-[18px] opacity-70 max-w-[800px] mt-4 mb-16">
            {movieData?.nowPlaying?.results?.[1]?.overview?.slice(0, 100) +
              "..."}
          </p>

          <Link
            to={`/movie/${movieData?.nowPlaying?.results?.[0]?.id}`}
            className="px-8 py-4 bg-red-500 rounded-lg hover:bg-red-700 transition"
          >
            More View &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
