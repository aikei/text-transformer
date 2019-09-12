import React from "react";
import Paper from '@material-ui/core/Paper';
import { TransformElementComponent } from "../transform-element/TransformElementComponent";
import { makeStyles, Theme } from "@material-ui/core";
import { connect } from "react-redux";
import { State } from "../../reducers/State";
import { Actions } from "../../reducers/Actions";
import { TransformData } from "../../reducers/Transforms";
import { Grid } from "@material-ui/core";
import { AddTransformElementButtonComponent } from "../add-transform-element-button/AddTransformElementButton";

const useStyles = makeStyles((theme: Theme) => {
    return {
        panelHeader: theme.panelHeader,
        grid: {
            height: "75%"
        }
    }
});

interface TransformsPanelComponentProps {
    state: State
}


const TransformsPanelComponentBase: React.FC<TransformsPanelComponentProps> = (props: TransformsPanelComponentProps) => {

    const classes = useStyles();

    return (
        <Paper className="trs-transforms-panel trs-panel">
            <div className={`${classes.panelHeader}`}>
                <b>Transforms</b>
            </div>
            <Grid wrap="nowrap" alignItems="center" container direction="row" className={`${classes.grid}`}>
                {props.state.transforms.map((transformData: TransformData) =>
                    <TransformElementComponent transformData={transformData}></TransformElementComponent>
                )}
                <AddTransformElementButtonComponent></AddTransformElementButtonComponent>
            </Grid>
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

const TransformsPanelComponent = 
    connect(mapStateToProps, mapDispatchToProps)(TransformsPanelComponentBase);

export { TransformsPanelComponent }