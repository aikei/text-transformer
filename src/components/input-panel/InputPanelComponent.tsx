import React from "react";
import Paper from '@material-ui/core/Paper';
import { EncodingDropdownComponent } from "../encoding-dropdown/EncodingDropdownComponent";

const InputPanelComponent: React.FC = () => {

    return (
        <Paper className="trs-input-panel trs-panel">
            <EncodingDropdownComponent></EncodingDropdownComponent>
            <textarea className="trs-text-area"></textarea>
        </Paper>
    );
}

export { InputPanelComponent }