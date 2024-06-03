import { DUMMY_NEWS } from "../../mock/dummy_data";
import { DetailTitle } from "./DetailTitle";
import NewsBox from "./NewsBox";

export const DetailPage = () => {
  return (
    <div>
      <DetailTitle />
      {DUMMY_NEWS.map((news, idx) => (
        <NewsBox key={idx} news={news} />
      ))}
    </div>
  );
};
