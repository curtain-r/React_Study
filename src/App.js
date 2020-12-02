import { Fragment } from "react";
import getRouter from './router/router'
function App() {
  return (
    <Fragment>
      {getRouter()}
    </Fragment>
  );
}

export default App;
