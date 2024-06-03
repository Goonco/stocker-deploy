import emotionStyled from "@emotion/styled";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export const Loading = () => {
  return (
    <LoadingContainer>
      <Spin>
        <AutorenewIcon fontSize="large" />
      </Spin>
      <LoadingText>Loading</LoadingText>
    </LoadingContainer>
  );
};

const LoadingContainer = emotionStyled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Spin = emotionStyled.div`
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = emotionStyled.h1`
  font-size: 23px;
`;
