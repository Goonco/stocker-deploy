import { useRouteError } from "react-router-dom";

export const NotFoundPage = () => {
  const error = useRouteError();

  const errorMsg = `${error?.status} ${error?.statusText}`;
  return (
    <div>
      <div>Oops. Sorry, an unexpected error occurred.</div>
      <div>{errorMsg}</div>
    </div>
  );
};
