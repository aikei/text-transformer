import React from "react";
import Card from '@material-ui/core/Card';
import { TransformSelectionDropdownComponent } from "../transform-selection-dropdown/TransformSelectionDropdown";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { State } from "../../reducers/State";
import { TransformData } from "../../reducers/Transforms";
import CloseIcon from "@material-ui/icons/Close";
import Fab from '@material-ui/core/Fab';
import { Actions } from "../../reducers/Actions";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        trsElement: {
            width: "200px",
            height: "100%",
            margin: theme.spacing(1),
            padding: theme.spacing(1),
            paddingTop: theme.spacing(2),
            textAlign: "center"
        },
        closeButtonContainer: {
            display: "flex",
            width: "100%"
        },
        closeButton: {
            justifySelf: "flex-end"
        },
        mainElementArea: {
            height: "75%"
        }
    })
);

interface TransformElementComponentProps {
    state: State,
    transformData: TransformData,
    removeTransform: (transformId: number) => void
}


const TransformElementComponentBase: React.FC<TransformElementComponentProps> = (props: TransformElementComponentProps) => {

    const classes = useStyles();

    return (
        <Card className={`trs-transforms-element ${classes.trsElement}`}>
            <div className={classes.mainElementArea}>
                <TransformSelectionDropdownComponent></TransformSelectionDropdownComponent>
            </div>
            <Fab color="secondary" aria-label="remove-element"
                onClick={() => props.removeTransform(props.transformData.id)}
                className={`trs-remove-element-transform-button ${classes.closeButton}`} >
                <CloseIcon />
            </Fab>
        </Card>
    )
}

function mapStateToProps(state: State) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        removeTransform(transformId: number) {
            dispatch({
                type: Actions.REMOVE_TRANSFORM,
                data: {
                    transformId 
                }
            })
        }
    }
}

const TransformElementComponent = 
    connect(mapStateToProps, mapDispatchToProps)(TransformElementComponentBase);

export { TransformElementComponent }
