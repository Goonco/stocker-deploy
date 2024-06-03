import emotionStyled from "@emotion/styled";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

export const DisplayTitle = ({ stockName }) => {
  return (
    <DisplayPageContainer>
      <NameBox>
        <LeaderboardIcon fontSize="large" />
        <StockName>{stockName}</StockName>
      </NameBox>
      <TimeBox>24.01.15 - 24.04.15</TimeBox>
    </DisplayPageContainer>
  );
};

const DisplayPageContainer = emotionStyled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StockName = emotionStyled.span``;

const NameBox = emotionStyled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  font-size: 30px;
  font-weight: 900;
`;

const TimeBox = emotionStyled.span`
  width: fit-content;
  background-color: #ebebeb;
  color: white;
  font-size: 15px;
  font-weight: 900;
  padding: 6px 13px;
  border-radius: 10px;
  background-color: purple;
`;
