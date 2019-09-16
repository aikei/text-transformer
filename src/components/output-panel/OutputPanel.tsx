import React from "react";
import Paper from '@material-ui/core/Paper';
import { EncodingDropdownComponent } from "../encoding-dropdown/EncodingDropdownComponent";
import { makeStyles, Theme } from "@material-ui/core";
import { connect } from "react-redux";
import { State } from "../../reducers/State";
import { Actions } from "../../reducers/Actions";

const useStyles = makeStyles((theme: Theme) => {
    return {
        panelHeader: theme.panelHeader
    }
});

interface OutputPanelComponentProps {
    state: State,
    onEncodingChange: (newEncoding: string) => void;
}

const OutputPanelComponentBase: React.FC<OutputPanelComponentProps> = (props: OutputPanelComponentProps) => {

    const classes = useStyles();

    return (
        <Paper className="trs-transforms-panel trs-panel trs-output-panel">
            <div className={`${classes.panelHeader}`}>
                <b>Output</b>
            </div>
            <EncodingDropdownComponent value={props.state.outputEncoding} onChange={(value: string) => props.onEncodingChange(value)} ></EncodingDropdownComponent>
            <textarea value={props.state.output} className="trs-text-area"></textarea>
        </Paper>
    )
}

function mapStateToProps(state: State) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        onEncodingChange: (newEncoding: string) => {
            dispatch({
                type: Actions.OUTPUT_ENCODING_CHANGED,
                data: {
                    newEncoding
                }
            });
        }
    }
}

const OutputPanelComponent = connect(mapStateToProps, mapDispatchToProps)(OutputPanelComponentBase);

export { OutputPanelComponent }
