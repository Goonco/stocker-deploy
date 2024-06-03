import emotionStyled from "@emotion/styled";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchPage, NotFoundPage } from "./pages";
import { Header } from "./pages/etc";

const TempPage = ({ num }) => {
  return <div>{num}</div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,

    errorElement: <NotFoundPage />,
  },
  {
    path: "/main",
    element: <Header />,
    children: [
      {
        path: "display/:stockId",
        // element: <DisplayPage />,
        element: <TempPage num={2} />,
      },
      {
        path: "detail/:keywordId",
        // element: <DetailPage />,
        element: <TempPage num={3} />,
      },
    ],
  },
]);

function App() {
  return (
    <AppContainer>
      <RouterProvider router={router} />
    </AppContainer>
  );
}

const AppContainer = emotionStyled.div`
  margin: 0 auto;
  width: 500px;
  height: 100vh;
  background-color: #fff;
  overflow: scroll;
`;

export default App;
