import React from "react";
import Paper from '@material-ui/core/Paper';
import { TransformElementComponent } from "../transform-element/TransformElementComponent";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
    return {
        panelHeader: theme.panelHeader
    }
});


const TransformsPanelComponent: React.FC = () => {

    const classes = useStyles();

    return (
        <Paper className="trs-transforms-panel trs-panel">
            <div className={`${classes.panelHeader}`}>
                <b>Transforms</b>
            </div>
            <TransformElementComponent></TransformElementComponent>
        </Paper>
    )
}

export { TransformsPanelComponent }