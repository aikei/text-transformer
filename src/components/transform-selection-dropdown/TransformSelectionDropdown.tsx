import React from "react";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { BootstrapDropdown } from "../boostrap-dropdown/BootStrapDropdown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
        "width": "100%"
    },
    transformSelectionDropdown: {
        "width": "100%"
    }
  }),
);

const TransformSelectionDropdownComponent: React.FC = () => {

    const classes = useStyles();

    return (
        <FormControl className={`${classes.formControl}`}>
            {/* <InputLabel htmlFor="trs-transform-dropdown-select">Transform</InputLabel> */}
            <NativeSelect className={`trs-transform-selection-dropdown ${classes.transformSelectionDropdown}`} input={<BootstrapDropdown name="transform-selection" id="trs-transform-dropdown-select" />}>
                <option value={'none'}>None</option>
                <option value={'AES'}>AES</option>
            </NativeSelect>
        </FormControl>
    )
}

export { TransformSelectionDropdownComponent }
