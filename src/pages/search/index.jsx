import { DUMMY_STOCK_TO_ID } from "../../mock/dummy_data";
import emotionStyled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { Loading } from "../etc";
import axios from "axios";

const theme = createTheme({
  palette: {
    myPurple: {
      main: "purple",
      contrastText: "#fff",
    },
    myRed: {
      main: "red",
      contrastText: "#fff",
    },
  },
});

export const SearchPage = () => {
  const [input, setInput] = useState("");
  const [stockInfo, setStockInfo] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const buttonState = input === "" ? true : false;

  const navigate = useNavigate();

  useEffect(() => {
    const falseLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStockInfo(DUMMY_STOCK_TO_ID);
      setLoading(false);
    };

    const fetchData = async () => {
      console.log("test");
      try {
        const response = await axios.get("http://3.36.243.210:8080/tickers");
        console.log(response.data);
      } catch (e) {
        console.log(`Error : ${e}`);
      }
    };

    falseLoading();
    // fetchData();
  }, []);

  const handleChange = (e) => {
    if (errorMsg) setErrorMsg("");
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!stockInfo.hasOwnProperty(input)) {
      setErrorMsg("존재하지 않는 종목명입니다. 😥");
      return;
    }

    navigate(`main/display/${stockInfo[input]}`);
  };

  if (!loading) {
    return (
      <ThemeProvider theme={theme}>
        <PageWrapper onSubmit={handleSubmit}>
          <div>
            <Words>ST</Words>
            <SearchInput value={input} onChange={handleChange} />
            <Words className="right">CKER</Words>
          </div>
          <Button
            disabled={buttonState}
            disableElevation
            variant="contained"
            color="myPurple"
            endIcon={<SearchIcon />}
            onClick={handleSubmit}
          >
            Search
          </Button>
          <ErrorBox>{errorMsg}</ErrorBox>
        </PageWrapper>
      </ThemeProvider>
    );
  } else {
    return <Loading />;
  }
};

const PageWrapper = emotionStyled.form`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 50px;
`;

const SearchInput = emotionStyled.input`
  width: 300px;
  height: 50px;
  border: 10px solid #000;
  border-radius: 20px;

  text-indent: 10px;
`;

const Words = emotionStyled.div`
  font-size: 50px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  margin-bottom: -15px;
  &.right {
    text-align: right;
    margin-bottom: 0;
    margin-top: -15px;
  }
`;

const ErrorBox = emotionStyled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  color: crimson;
  font-weight: 900;
  margin-top: -30px;
`;
