import emotionStyled from "@emotion/styled";
import { Link } from "react-router-dom";

const NewsBox = ({ news }) => {
  return (
    <NewsContainer>
      <NewsTitle>{news.title}</NewsTitle>
      <NewsBody>{news.detail}</NewsBody>
      <div style={{ textAlign: "right" }}>
        <Shortcut
          to="https://n.news.naver.com/mnews/article/016/0002308823"
          target="_blank"
        >
          바로가기
        </Shortcut>
      </div>
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
  font-size: 12px;
`;

const Shortcut = emotionStyled(Link)`
  text-decoration: none;
  margin-right: 10px;

  background-color: #d896ff;
  padding: 3px 8px;
  border-radius: 999px;
  color: white;

  font-weight: 900;
  font-size: 14px;

  &:hover {
    background-color: #800080;
  }
`;

export default NewsBox;
