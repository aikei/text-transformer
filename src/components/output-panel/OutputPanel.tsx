import React from "react";
import Paper from '@material-ui/core/Paper';
import { EncodingDropdownComponent } from "../encoding-dropdown/EncodingDropdownComponent";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { State } from "../../reducers/State";
import { Actions } from "../../reducers/Actions";
import { ErrorMessageComponent } from "./ErrorMessageComponent";

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        panelHeader: theme.panelHeader,
        panel: {
            height: "100%",
            width: "45%"
        },
        mainContents: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            paddingTop: "0px"
        },
        commonPanel: theme.commonPanel,
        commonTextArea: theme.commonTextArea
    })
});

interface OutputPanelComponentProps {
    state: State,
    onEncodingChange: (newEncoding: string) => void;
}

const OutputPanelComponentBase: React.FC<OutputPanelComponentProps> = (props: OutputPanelComponentProps) => {

    const classes = useStyles();

    let contents = (
        <div className={`${classes.mainContents}`}>
            <div className={`${classes.panelHeader}`}>
                <b>Output</b>
            </div>
            <EncodingDropdownComponent value={props.state.outputEncoding} onChange={(value: string) => props.onEncodingChange(value)} ></EncodingDropdownComponent>
            <textarea readOnly={true} value={props.state.output} className={`${classes.commonTextArea} trs-text-area`}></textarea>
        </div>)

    if (props.state.outputError) {
        contents = (<ErrorMessageComponent></ErrorMessageComponent>);
    }

    return (
        <Paper className={`${classes.commonPanel} ${classes.panel} trs-transforms-panel trs-panel trs-output-panel`}>
            {contents}
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
