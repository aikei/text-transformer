import React from "react";
import Paper from '@material-ui/core/Paper';
import { EncodingDropdownComponent } from "../encoding-dropdown/EncodingDropdownComponent";
import { makeStyles, Theme } from "@material-ui/core";
import { connect } from "react-redux";
import { State } from "../../reducers/State";
import { Actions } from "../../reducers/Actions";

const useStyles = makeStyles((theme: Theme) => {
    return {
        panelHeader: theme.panelHeader,
        panel: {
            height: "25vh"
        }
    }
});

interface InputPanelComponentProps {
    state: State,
    onInputReceived: (newInput: string) => void;
    onEncodingChange: (newEncoding: string) => void;
}

const InputPanelComponentBase: React.FC<InputPanelComponentProps> = (props: InputPanelComponentProps) => {

    const classes = useStyles();

    return (
        <Paper className={`${classes.panel} trs-input-panel trs-panel`}>
            <div className={`${classes.panelHeader}`}>
                <b>Input</b>
            </div>
            <EncodingDropdownComponent value={props.state.inputEncoding} onChange={(value: string) => props.onEncodingChange(value) }></EncodingDropdownComponent>
            <textarea className="trs-text-area" 
                value={props.state.input}
                onChange={(ev) => props.onInputReceived(ev.currentTarget.value)}>

            </textarea>
        </Paper>
    );
}

function mapStateToProps(state: State) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        onInputReceived: (newInput: string) => {
            dispatch({
                type: Actions.INPUT_RECEIVED,
                data: {
                    newInput
                }
            });
        },
        onEncodingChange: (newEncoding: string) => {
            dispatch({
                type: Actions.INPUT_ENCODING_CHANGED,
                data: {
                    newEncoding
                }
            });
        }
    }
}

const InputPanelComponent = connect(mapStateToProps, mapDispatchToProps)(InputPanelComponentBase);

export { InputPanelComponent }