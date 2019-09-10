import React from "react";
import { connect } from "react-redux";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { State } from "../../reducers/State";
import { Actions } from "../../reducers/Actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);


interface AddTransformElementButtonComponentProps {
    state: State,
    addEmptyTransform: () => void;
}

const AddTransformElementButtonComponentBase: React.FC<AddTransformElementButtonComponentProps> = (props: AddTransformElementButtonComponentProps) => {
    
    const classes = useStyles();
    
    return (
        <Fab color="primary" aria-label="add" className={`trs-add-transform-button ${classes.fab}`} onClick={() => props.addEmptyTransform() } >
            <AddIcon />
        </Fab>
    )
}

function mapStateToProps(state: State) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        addEmptyTransform: () => {
            dispatch({
                type: Actions.TRANSFORM_ADDED,
                data: {
                    type: "none"
                }
            });
        }
    }
}

const AddTransformElementButtonComponent = connect(mapStateToProps, mapDispatchToProps)(AddTransformElementButtonComponentBase);
export { AddTransformElementButtonComponent }