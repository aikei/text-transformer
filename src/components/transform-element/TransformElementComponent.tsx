import React from "react";
import Card from '@material-ui/core/Card';
import { TransformSelectionDropdownComponent } from "../transform-selection-dropdown/TransformSelectionDropdown";

import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        trsElement: {
            width: "200px",
            height: "100%",
            margin: theme.spacing(1),
            padding: theme.spacing(1),
            paddingTop: theme.spacing(2),
            textAlign: "center"
        }
    })
);

const TransformElementComponent: React.FC = () => {

    const classes = useStyles();

    return (
        <Card className={`trs-transforms-element ${classes.trsElement}`}>
            <TransformSelectionDropdownComponent></TransformSelectionDropdownComponent>
        </Card>
    )
}

export { TransformElementComponent }
