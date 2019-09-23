import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme } from "@material-ui/core";
import { State } from "../../reducers/State";
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import { amber, green } from '@material-ui/core/colors';
import clsx from 'clsx';

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
    },
    errorSnackbar: {
        margin: "auto"
    }
}));
  

const useStyles1 = makeStyles((theme: Theme) => ({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.main,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  }));

export interface SnackbarProps {
    className?: string;
    message?: string;
    onClose?: () => void;
}
  

function SnackbarContentWrapper(props: SnackbarProps) {
    const classes = useStyles1();
    const { className, message, onClose, ...other } = props;
    const Icon = ErrorIcon;
  
    return (
      <SnackbarContent
        className={clsx(classes.error, className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        {...other}
      />
    );
  }

const ErrorMessageComponentBase: React.FC<ErrorMessageComponentProps> = (props: ErrorMessageComponentProps) => {
    
    const classes = useStyle();

    const errorMesage = props.state.outputError;

    return (

        <SnackbarContentWrapper
            // className={classes.margin}
            className={`trs-error-message ${classes.errorSnackbar}`}
            message={errorMesage}
        />
        // <div className={`trs-error-message-container ${classes.errorMessageContainer}`}>
        //     <div className={`trs-error-message ${classes.errorMessage}`}>{errorMesage}</div>
        // </div>
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