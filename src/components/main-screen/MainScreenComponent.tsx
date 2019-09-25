import React from "react";

import { InputPanelComponent } from "../input-panel/InputPanelComponent";
import { ThemeProvider, CSSProperties, makeStyles } from '@material-ui/styles';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { TransformsPanelComponent } from "../transforms-panel/TransformsPanelComponent";
import { OutputPanelComponent } from "../output-panel/OutputPanel";
import { AppBar } from "@material-ui/core";


declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
      panelHeader: CSSProperties,
      commonPanel: CSSProperties,
      commonTextArea: CSSProperties
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
      panelHeader?: CSSProperties,
      commonPanel?: CSSProperties,
      commonTextArea?: CSSProperties
    }
  }

const theme = createMuiTheme({
    panelHeader: {
      width: "100%",
      textAlign: "center"
    },
    commonTextArea: {
      height: "80%",
      resize: "none"
    },
    commonPanel: {
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      padding: "10px",
      paddingTop: "0px"
    }
});

const useStyle = makeStyles((theme: Theme) => {
  return {
    topPanelsContainer: {
      width: "100%",
      height: "30vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    page: {
      height: "100vh",
      width: "80%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly"
    }
  }
})

const MainScreenComponent: React.FC = () => {

    const classes = useStyle();
    
    return (
        <ThemeProvider theme={theme}>
            <AppBar />
            <div className={`${classes.page}`}>
              <div className={`${classes.topPanelsContainer}`}>
                <InputPanelComponent></InputPanelComponent>
                <OutputPanelComponent></OutputPanelComponent>
              </div>
              <TransformsPanelComponent></TransformsPanelComponent>
            </div>
        </ThemeProvider>
    );
}

export { MainScreenComponent };