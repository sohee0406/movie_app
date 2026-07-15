export default function Header() {
  return (
    <header className="px-[20px] lg:px-[80px] xl:px-[200px] pv-6 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <div className="text-red-500 font-bold text-lg xl:text-2xl tracking-tight">
        {/* traking 자간 조정 */}
        <link to={"/"}>Movie</link>
      </div>

      <ul className="flex gap-[80px] font-bold">
        <li className="hover:text-red-500 transition">
          <link to={"/"}>Home</link>
        </li>
        <li className="hover:text-red-500 transition">
          <link to={"/search"}>search</link>
        </li>
      </ul>
    </header>
  );
}
