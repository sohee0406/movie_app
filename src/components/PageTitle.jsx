import { Helmet } from "react-helmet-async";

export default function PageTitle({ title }) {
  console.log("title:", title);
  return (
    <Helmet>
      <title> {`${title} | MOVIE`} </title>
    </Helmet>
  );
}
