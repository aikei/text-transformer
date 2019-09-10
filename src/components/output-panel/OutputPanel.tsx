import React from "react";

import Paper from '@material-ui/core/Paper';
import { EncodingDropdownComponent } from "../encoding-dropdown/EncodingDropdownComponent";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
    return {
        panelHeader: theme.panelHeader
    }
});


const OutputPanelComponent: React.FC = () => {

    const classes = useStyles();

    return (
        <Paper className="trs-transforms-panel trs-panel trs-output-panel">
            <div className={`${classes.panelHeader}`}>
                <b>Output</b>
            </div>
            <EncodingDropdownComponent></EncodingDropdownComponent>
            <textarea className="trs-text-area"></textarea>
        </Paper>
    )
}

export { OutputPanelComponent }
