import React from "react";

import Paper from '@material-ui/core/Paper';
import { EncodingDropdownComponent } from "../encoding-dropdown/EncodingDropdownComponent";

const OutputPanelComponent: React.FC = () => {
    return (
        <Paper className="trs-transforms-panel trs-panel trs-output-panel">
            <EncodingDropdownComponent></EncodingDropdownComponent>
            <textarea className="trs-text-area"></textarea>
        </Paper>
    )
}

export { OutputPanelComponent }
