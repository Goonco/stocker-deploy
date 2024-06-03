import { useEffect, useState } from "react";
import emotionStyled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { DUMMY_ID_TO_STOCK } from "../../mock/dummy_data";

import { DisplayTitle } from "./DisplayTitle";
import BasicComposition from "./test";
import Keywords from "./Keywords";
import { Loading } from "../etc";

export const DisplayPage = () => {
  const { stockId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const falseLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    falseLoading();
  }, []);

  if (!loading) {
    return (
      <DisplayPageContainer>
        <DisplayTitle stockName={DUMMY_ID_TO_STOCK[stockId]} />
        <BasicComposition stockId={stockId} />
        <Keywords />
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
