import React from "react";
import Card from '@material-ui/core/Card';
import { TransformSelectionDropdownComponent } from "../transform-selection-dropdown/TransformSelectionDropdown";

import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { State } from "../../reducers/State";
import { Actions } from "../../reducers/Actions";
import { TransformData } from "../../reducers/Transforms";
import { AddTransformElementButtonComponent } from "../add-transform-element-button/AddTransformElementButton";
import { Box, GridList, Grid } from "@material-ui/core";

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
        grid: {
            height: "75%"
        }
    })
);

interface TransformElementComponentProps {
    state: State
}


const TransformElementComponentBase: React.FC<TransformElementComponentProps> = (props: TransformElementComponentProps) => {

    const classes = useStyles();
    
    return (
        <Grid wrap="nowrap" alignItems="center" container direction="row" className={`${classes.grid}`}>
            {props.state.transforms.map((transformData: TransformData) =>
                <Card className={`trs-transforms-element ${classes.trsElement}`}>
                    <TransformSelectionDropdownComponent></TransformSelectionDropdownComponent>
                </Card>
            )}
            <AddTransformElementButtonComponent></AddTransformElementButtonComponent>
        </Grid>
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

const TransformElementComponent = 
    connect(mapStateToProps, mapDispatchToProps)(TransformElementComponentBase);

export { TransformElementComponent }
