import ReactDOM from "react-dom/client";
import App from "./App";
import emotionStyled from "@emotion/styled";

export const BASE_URL = "http://3.36.243.210:8080";

const Wrapper = emotionStyled.div`
  width: 100vw;
  height: 100vh;
  background-color: #343434;
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Wrapper>
    <App />
  </Wrapper>
  // </React.StrictMode>
);
