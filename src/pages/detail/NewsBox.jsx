import emotionStyled from "@emotion/styled";
import { Link } from "react-router-dom";

const NewsBox = ({ news }) => {
  return (
    <NewsContainer>
      <NewsTitle>{news.title}</NewsTitle>
      <MakeFlex>
        <Link to={news.url} target="_blank">
          <img src={news.imageUrl} style={{ width: "130px" }} />
        </Link>
        <NewsBody>{news.summary}</NewsBody>
      </MakeFlex>
    </NewsContainer>
  );
};

const NewsContainer = emotionStyled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const NewsTitle = emotionStyled.span`
  color: purple;
  font-weight: 900;
  font-size: 16px;
`;

const NewsBody = emotionStyled.span`
  font-size: 14px;
`;

const MakeFlex = emotionStyled.div`
  display: flex;
  gap: 20px;
`;

export default NewsBox;
