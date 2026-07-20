import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../../api/movieapi";
import { W500_URL } from "../../constans/imgBaseUrl";
import Loading from "../../components/Loading";
import PageTitle from "../../components/PageTitle";

export default function Movie() {
  const { id } = useParams();
  // =>url 의 매개변수 값을 객체로 반환

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const detail = await getDetail(id);
        setData(detail.response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <Loading />;
  console.log(data);

  return (
    <div>
      <PageTitle title={data?.title} />

      <section className="min-h-screen px-[20px] lg:px-[80px] xl:px-[200px] py-[100px]">
        <div className="flex gap-[120px] items-center">
          <img src={`${W500_URL}${data?.poster_path}`} className="w-[500px] " />

          <div>
            <h2 className="text-4xl font-bold mb-6">{data?.title}</h2>
            <div className="flex gap-10 mb-4">
              {/* 개봉일 */}
              <p className=" text-gray-300">{data?.release_date}</p>
              {/* 상영시간 */}
              <p className=" text-gray-300">{data?.runtime} 분</p>
              {/* 평점 */}
              <p className=" text-gray-300">★ {data?.vote_average}</p>
            </div>
            {/* 장르 */}
            <div className="flex gap-2 m-4">
              {data?.genres?.map((genre) => (
                <span key={genre.id} className=" text-gray-300">
                  ▸{genre.name}
                </span>
              ))}
            </div>

            {/* 줄거리 */}
            <p className="leading-8 max-w-[600px]">{data?.overview}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
