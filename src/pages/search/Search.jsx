import { getSearch } from "../../api/movieApi";

export default function Search() {
  const searchData = getSearch("여름");
  console.log(searchData);
  return <div>Search</div>;
}
