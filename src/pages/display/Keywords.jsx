import emotionStyled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Keyword = ({ keyword }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/main/detail/${keyword}`);
  };

  return <KeywordBox onClick={handleClick}>{keyword}</KeywordBox>;
};

const Keywords = ({ keywordList }) => {
  return (
    <KeywordList>
      {keywordList.map((keyword) => (
        <Keyword keyword={keyword.name} key={keyword.id} />
      ))}
    </KeywordList>
  );
};

const KeywordList = emotionStyled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const KeywordBox = emotionStyled.button`
  background-color: #ddd;
  padding: 5px 8px;
  border-radius: 3px;
  font-weight: 900;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: purple;
    color: white;
  }
`;

export default Keywords;
