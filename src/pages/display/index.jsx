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

function areDatesEqual(date1, date2) {
  const year = date2.substring(0, 4);
  const month = date2.substring(4, 6) - 1;
  const day = date2.substring(6, 8);

  const dateObject = new Date(year, month, day);
  return (
    date1.getFullYear() === dateObject.getFullYear() &&
    date1.getMonth() === dateObject.getMonth() &&
    date1.getDate() === dateObject.getDate()
  );
}

export const DisplayPage = () => {
  const { stockId } = useParams();
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const [keywordList, setKeywordList] = useState([]);
  const [stockData, setStockData] = useState(null);
  // console.log(keywordList);

  const [clickedIdx, setClickedIdx] = useState(null);

  const changeIdx = (d) => {
    const stockDate = stockData[d.dataIndex].stck_bsop_date;
    const selectKeyword = keywordList.filter((keywd) =>
      areDatesEqual(new Date(keywd.date), stockDate)
    );
    setClickedIdx(selectKeyword.size === 0 ? null : selectKeyword[0]?.name);
  };

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
        <DisplayTitle
          stockName={DUMMY_ID_TO_STOCK[stockId]}
          clickedIdx={clickedIdx}
        />
        <BasicComposition stockData={stockData} changeIdx={changeIdx} />
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
