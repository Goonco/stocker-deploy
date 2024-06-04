import emotionStyled from "@emotion/styled";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

export const DisplayTitle = ({ stockName }) => {
  const today = new Date();
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(today.getMonth() - 3);

  const formatDate = (date) => {
    const year = date.getFullYear().toString().slice(2);
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  const formattedToday = formatDate(today);
  const formattedThreeMonthsAgo = formatDate(threeMonthsAgo);

  return (
    <DisplayPageContainer>
      <NameBox>
        <LeaderboardIcon fontSize="large" />
        <StockName>{stockName}</StockName>
      </NameBox>
      <TimeBox>{`${formattedThreeMonthsAgo} - ${formattedToday}`}</TimeBox>
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
