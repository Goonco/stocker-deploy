import emotionStyled from "@emotion/styled";
import { Outlet } from "react-router-dom";

import { IconButton } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    myBlack: {
      main: "#222",
      contrastText: "#fff",
    },
  },
});

export const Header = () => {
  const navigate = useNavigate();

  const handlieFindClick = () => {
    navigate("/");
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderBox>
        <IconButton onClick={handleBackClick} color="myBlack">
          <ReplyIcon fontSize="large" />
        </IconButton>
        <Disposition>
          <Stocker>STOCKER</Stocker>
          <Line />
        </Disposition>
        <IconButton onClick={handlieFindClick} color="myBlack">
          <FindInPageIcon fontSize="large" />
        </IconButton>
      </HeaderBox>
      <OutletMargin>
        <Outlet />
      </OutletMargin>
    </ThemeProvider>
  );
};

const HeaderBox = emotionStyled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px 0;
`;

const Disposition = emotionStyled.div`
  display: flex;
  flex-direction: column;
`;

const Stocker = emotionStyled.span`
  font-size: 35px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

const Line = emotionStyled.span`
  width: 100%;
  border-radius: 100px;
  border-top: 10px solid black;
  border-bottom: 10px solid black;
`;

const OutletMargin = emotionStyled.div`
  margin: 50px;
`;
