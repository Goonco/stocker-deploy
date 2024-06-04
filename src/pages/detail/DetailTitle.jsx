import emotionStyled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";

export const DetailTitle = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <DisplayPageContainer>
      <KeywordName>{searchParams.get("name")}</KeywordName>
      <KeywordTime>📌 {searchParams.get("date")}</KeywordTime>
    </DisplayPageContainer>
  );
};

const DisplayPageContainer = emotionStyled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

const KeywordTime = emotionStyled.span`
  font-size: 20px;
  font-weight: 900;
`;

const KeywordName = emotionStyled.span`
  background-color: #ebebeb;
  padding: 8px 13px;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 900;
`;
