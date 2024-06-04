import emotionStyled from "@emotion/styled";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Keyword = ({ keyword, keywordId, keywordDate }) => {
  const { stockId } = useParams();
  const navigate = useNavigate();

  const date = new Date(keywordDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = date.getDate().toString().padStart(2, "0");

  const handleClick = () => {
    navigate(
      `/main/detail/${keywordId}?name=${keyword}&stockId=${stockId}&date=${`${year}-${month}-${day}`}`
    );
  };

  const [isHover, setIsHover] = useState(false);

  return (
    <KeywordBox
      onClick={handleClick}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {keyword}
      {isHover && <HoverBox>{`${year}-${month}-${day}`}</HoverBox>}
    </KeywordBox>
  );
};

const Keywords = ({ keywordList }) => {
  return (
    <KeywordList>
      {keywordList.map((keyword) => (
        <Keyword
          keyword={keyword.name}
          key={keyword.id}
          keywordId={keyword.id}
          keywordDate={keyword.date}
        />
      ))}
    </KeywordList>
  );
};

const KeywordList = emotionStyled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const HoverBox = emotionStyled.div`
  font-size: 13px;
  font-weight:500;
`;

const KeywordBox = emotionStyled.button`
  background-color: #ddd;
  padding: 5px 8px;
  border-radius: 3px;
  font-weight: 900;
  font-size: 16px;
  cursor: pointer;
  height: fit-content;

  position: relative;

  &:hover {
    background-color: purple;
    color: white;
  }
`;

export default Keywords;
