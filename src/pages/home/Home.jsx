import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  getNowPlaying,
  getPopular,
  getRated,
  getUpcoming,
} from "../../api/movieapi";
import Section1 from "../../components/Section1";
import Loading from "../../components/Loading";

export default function Home() {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
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
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // console.log(`현재 상영 영화: ${nowData}`);
  // console.log(`인기 영화: ${popData}`);
  // console.log(`최고 평점: ${RatedData}`);
  // console.log(`예정 영화: ${UpcomingData}`);

  // *예외
  // => try ~ catch ~ finally
  // => 조건문과 비슷하게 코드나 함수에 오류나 문제점이 발생했을때
  // 핸들링 처리 가능함
  // => if문과 차이점은 if문은 무조건 조건을 작성해야되지만
  // try는 조건없이 문제점을 잡아낼수 있음
  // => finally는 try catch 와 상관없이 마지막에 무조건 실행되는 코드를 작성함

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Section1 data={movieData} />
    </div>
  );
}
