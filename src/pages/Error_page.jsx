import { Link } from "react-router-dom";

export default function Error_page() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <p className="text-red-500 text-xl font-bold mb-4">MOVIE</p>

        <h1 className="text-[120px] md:text-[200px] font-black leading-none text-white drop-shadow-lg">
          404
        </h1>

        <h2 className="text-xl md:text-3xl font-bold mt-10">
          페이지를 찾을 수 없습니다.
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mt-10 leading-relaxed">
          요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 px-8 py-4 rounded-4xl bg-red-600 hover:bg-red-700 transition duration-300 font-semibold text-lg"
        >
          홈으로 돌아가기 →
        </Link>
      </div>
    </div>
  );
}
