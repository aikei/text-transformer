import React from "react";


import "./MainScreenComponent.css"
import { InputPanelComponent } from "../input-panel/InputPanelComponent";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { TransformsPanelComponent } from "../transforms-panel/TransformsPanelComponent";
import { OutputPanelComponent } from "../output-panel/OutputPanel";


declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }

const theme = createMuiTheme({
    status: {
        danger: 'orange',
    }
});

const MainScreenComponent: React.FC = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <InputPanelComponent></InputPanelComponent>
                <TransformsPanelComponent></TransformsPanelComponent>
                <OutputPanelComponent></OutputPanelComponent>
            </ThemeProvider>
        </div>
    );
}

export { MainScreenComponent };