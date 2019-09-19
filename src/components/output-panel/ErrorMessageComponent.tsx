import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme } from "@material-ui/core";
import { State } from "../../reducers/State";

interface ErrorMessageComponentProps {
    state: State
}

const useStyle = makeStyles((theme: Theme) => ({
    errorMessageContainer: {
        width: "90%",
        height: "90%",
        border: "1px solid black",
        margin: "auto",
        display: "flex"
    },
    errorMessage: {
        color: "red",
        margin: "auto"
    }
}))

const ErrorMessageComponentBase: React.FC<ErrorMessageComponentProps> = (props: ErrorMessageComponentProps) => {
    
    const classes = useStyle();

    const errorMesage = props.state.outputError;

    return (
        <div className={`trs-error-message-container ${classes.errorMessageContainer}`}>
            <div className={`trs-error-message ${classes.errorMessage}`}>{errorMesage}</div>
        </div>
    )
}

function mapStateToProps(state: State) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
    }
}

const ErrorMessageComponent = connect(mapStateToProps, mapDispatchToProps)(ErrorMessageComponentBase);
export { ErrorMessageComponent }