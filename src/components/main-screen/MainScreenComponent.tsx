import React from "react";

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import "./MainScreenComponent.css"
import { InputPanelComponent } from "../input-panel/InputPanelComponent";

const MainScreenComponent: React.FC = () => {
    return (
        <div>
            <InputPanelComponent></InputPanelComponent>
            <Paper className="trs-transforms-panel trs-panel">

            </Paper>
            <Paper className="trs-output-panel trs-panel">

            </Paper>
        </div>
    );
}

export { MainScreenComponent };