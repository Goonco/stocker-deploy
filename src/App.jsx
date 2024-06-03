import emotionStyled from "@emotion/styled";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchPage, NotFoundPage, DisplayPage, DetailPage } from "./pages";
import { Header } from "./pages/etc";

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
        element: <DisplayPage />,
      },
      {
        path: "detail/:keywordId",
        element: <DetailPage />,
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
