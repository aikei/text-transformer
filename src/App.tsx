import React from "react";
import { MainScreenComponent } from "./components/main-screen/MainScreenComponent";
import { Provider } from "react-redux"
import { createStore } from "redux"

import { reduce } from "./reducers";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  app: {
    backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "spaceBetween",
    height: "100vh"
  }
});

const store = createStore(reduce);

const App: React.FC = () => {

  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={`App ${classes.app}`} >
        <MainScreenComponent></MainScreenComponent>
      </div>
    </Provider>
  );
}

export default App;
