import { useEffect, useState } from "react";
import emotionStyled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { DUMMY_ID_TO_STOCK, DUMMY_KEYWORDS } from "../../mock/dummy_data";

import { DisplayTitle } from "./DisplayTitle";
import BasicComposition from "./BasicComposition";
import Keywords from "./Keywords";
import { Loading } from "../etc";

import { BASE_URL } from "../../main";
import axios from "axios";

export const DisplayPage = () => {
  const { stockId } = useParams();
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const [keywordList, setKeywordList] = useState([]);
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const falseLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setKeywordList(DUMMY_KEYWORDS[stockId]);
      setLoading1(false);
      setLoading2(false);
    };

    const fetchData1 = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/tickers/${stockId}/keywords`
        );

        setKeywordList(response.data.keywords);

        setLoading1(false);
      } catch (e) {
        console.log(`Error : ${e}`);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/tickers/${stockId}/charts`
        );

        setStockData(response.data.output2.reverse());

        setLoading2(false);
      } catch (e) {
        console.log(`Error : ${e}`);
      }
    };

    // falseLoading();
    fetchData1();
    fetchData2();
  }, []);

  if (!(loading1 || loading2)) {
    return (
      <DisplayPageContainer>
        <DisplayTitle stockName={DUMMY_ID_TO_STOCK[stockId]} />
        <BasicComposition stockData={stockData} />
        <Keywords keywordList={keywordList} />
      </DisplayPageContainer>
    );
  } else {
    return <Loading />;
  }
};

const DisplayPageContainer = emotionStyled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
