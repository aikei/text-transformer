import React from "react";
import Card from '@material-ui/core/Card';
import { TransformSelectionDropdownComponent } from "../transform-selection-dropdown/TransformSelectionDropdown";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { State } from "../../reducers/State";
import { TransformData } from "../../reducers/Transforms";
import CloseIcon from "@material-ui/icons/Close";
import { Actions } from "../../reducers/Actions";
// import { IconButton } from "@material-ui/core";
import { AesEncryptionOptionsComponent } from "./AesEncryptionOptions";



const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        trsElement: {
            width: "200px",
            height: "100%",
            margin: theme.spacing(1),
            // padding: theme.spacing(1),
            // paddingTop: theme.spacing(2),
            textAlign: "center"
        },
        closeButtonContainer: {
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%"
        },
        closeButton: {
            float: "right",
            margin: "4px",
            cursor: "pointer"
        },
        mainElementArea: {
            height: "85%"
        },
    })
);

interface TransformElementComponentProps {
    state: State,
    transformData: TransformData,
    removeTransform: (transformId: number) => void
    changeTransformType: (transformId: number, newType: string) => void;
}


const TransformElementComponentBase: React.FC<TransformElementComponentProps> = (props: TransformElementComponentProps) => {

    const classes = useStyles();

    let options = null;

    switch(props.transformData.type) {
        case "aes-encrypt":
        case "aes-decrypt":
            options = (<AesEncryptionOptionsComponent transformData={props.transformData} />);
            break;
    }
    
    return (
        <Card className={`trs-transforms-element ${classes.trsElement}`}>
            <div className={classes.mainElementArea}>
                <CloseIcon className={`${classes.closeButton} trs-remove-element-transform-button`} fontSize="small" onClick={() => props.removeTransform(props.transformData.id)}/>
                {/* <IconButton onClick={() => props.removeTransform(props.transformData.id)} className={`trs-remove-element-transform-button`}>
                    <CloseIcon fontSize="small"/>
                </IconButton> */}
                <TransformSelectionDropdownComponent onChange={(value: string) => props.changeTransformType(props.transformData.id, value) }></TransformSelectionDropdownComponent>
                {options}
            </div>
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
        },
        changeTransformType(transformId: number, newType: string) {
            dispatch({
                type: Actions.CHANGE_TRANSFORM_TYPE,
                data: {
                    transformId,
                    newType
                }
            })
        }
    }
}

const TransformElementComponent = 
    connect(mapStateToProps, mapDispatchToProps)(TransformElementComponentBase);

export { TransformElementComponent }
