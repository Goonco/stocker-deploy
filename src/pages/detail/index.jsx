import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DUMMY_NEWS } from "../../mock/dummy_data";
import { DetailTitle } from "./DetailTitle";
import NewsBox from "./NewsBox";
import { Loading } from "../etc";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../main";
import axios from "axios";

export const DetailPage = () => {
  const { keywordId } = useParams();
  const [newsList, setNewsList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const falseLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setNewsList(DUMMY_NEWS);
      setLoading(false);
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/tickers/${searchParams.get(
            "stockId"
          )}/keywords/${keywordId}/news`
        );

        setNewsList(response.data.news);

        setLoading(false);
      } catch (e) {
        console.log(`Error : ${e}`);
      }
    };

    // falseLoading();
    fetchData();
  }, []);

  if (loading) return <Loading />;
  else {
    return (
      <div>
        <DetailTitle />
        {newsList.map((news, idx) => (
          <NewsBox key={idx} news={news} />
        ))}
      </div>
    );
  }
};
