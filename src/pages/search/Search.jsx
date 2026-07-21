import { useState } from "react";
import { getSearch } from "../../api/movieApi";
import PageTitle from "../../components/PageTitle";
import { FileSearchCorner } from "lucide-react";
import { useScrollTop } from "../../lib/useScrollTop";
import { Link } from "react-router-dom";
import { NO_IMG, W500_URL } from "../../constants/imgBaseUrl";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);

  useScrollTop();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    const searchData = await getSearch(keyword);
    setData(searchData.results);
  };

  return (
    <div className="min-h-screen mt-30 px-[20px] lg:px-[80px] xl:px-[200px]">
      <PageTitle title={"검색"} />

      <form onSubmit={onSubmit}>
        <div className="relative w-full max-w-xl">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="
              w-full
              px-5
              pr-12
              py-3
              rounded
              bg-white/10
              border
              border-white/20
              focus:border-red-500
              outline-none
              focus:ring-2
              focus:ring-red-500/30
              transition
            "
            type="text"
            placeholder="영화를 검색해보세요"
          />

          <FileSearchCorner
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={22}
          />
        </div>
      </form>

      {data.length > 0 ? (
        <div className="mt-[30px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`} className="group">
              <div className="h-[300px] overflow-hidden rounded-xl">
                <img
                  src={
                    movie.poster_path ? W500_URL + movie.poster_path : NO_IMG
                  }
                  alt={movie.id}
                />
              </div>

              <h3 className="mt-2 font-semibold">{movie.title}</h3>
            </Link>
          ))}
        </div>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </div>
  );
}
