import ReactDOM from "react-dom/client";
import App from "./App";
import emotionStyled from "@emotion/styled";

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
