import { useEffect, useState } from "react";
import {
  getNowPlaying,
  getPopular,
  getRated,
  getUpcoming,
} from "../../api/movieapi";

export default function Home() {
  cosnt[(movieData, setMovieData)] = useState({});

  useEffect(() => {
    (async () => {
      try {
        // setMovieData;
        // const nowPlaying = await getNowPlaying();
        // const popular = await getNowPlaying();
        // const rated = await getNowPlaying();
        // const upcoming = await getNowPlaying();

        const [nowPlaying, popular, rated, upcoming] = await Promise.all([
          getNowPlaying(),
          getPopular(),
          getRated(),
          getUpcoming(),
        ]);
        // setMovieData((nowPlaying, popular, rated, upcoming));

        // setNowData(nowPlaying);
        // setPopData(popular);
        // setRatedData(rated);
        // setUpcomingData(upcoming);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(`현재 상영 영화: ${nowData}`);
  console.log(`인기 영화: ${popData}`);
  console.log(`최고 평점: ${RatedData}`);
  console.log(`예정 영화: ${UpcomingData}`);

  // *예외
  // =>try ~ catch
  // =>조건문과 비슷하게 코드나 함수에 오류나 문제점이 발생했을때
  // 핸들링 처리 가능함
  // =>if문과 차이점은 if문은 무조건 조건을 작성해야되지만
  // try는 조건없이 문제점으 ㄹ잡아낼수 있음

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
  console.log(movieData.nowPlaying.respone.results);

  return (
    <div className="min-h-screen">
      HOME
      <section
        style={{ background: `#808080 url() no-repet center / cover` }}
        className="h-[80hv] px-[20px] lg:px-[80px] xl:px-[200px] relative "
      >
        <div
          className="absolute bottom-[100px] left-[20px]
        lg:left-[80px] xl:left-[200px]"
        >
          <h3 className="text-[30px] lg:text-[50px] xl:text-[70px] font-semibold">
            INto MOvie title
          </h3>
          <p className="text-[14px] xl:text-[18px] opacity-70 max-w-[800px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.consequuntur
            obcaecati aliquid cumque veniam. Nesci
          </p>
        </div>
      </section>
    </div>
  );
}
