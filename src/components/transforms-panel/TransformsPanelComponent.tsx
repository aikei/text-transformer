import React from "react";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { TransformElementComponent } from "../transform-element/TransformElementComponent";

const TransformsPanelComponent: React.FC = () => {
    return (
        <Paper className="trs-transforms-panel trs-panel">
            <TransformElementComponent></TransformElementComponent>
        </Paper>
    )
}

export { TransformsPanelComponent }