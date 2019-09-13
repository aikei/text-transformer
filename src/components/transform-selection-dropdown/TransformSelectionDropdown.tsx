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

interface TransformSelectionDropdownProps {
    onChange: (value: string) => void;
}

const TransformSelectionDropdownComponent: React.FC<TransformSelectionDropdownProps> = (props: TransformSelectionDropdownProps) => {

    const classes = useStyles();

    return (
        <FormControl className={`${classes.formControl}`}>
            {/* <InputLabel htmlFor="trs-transform-dropdown-select">Transform</InputLabel> */}
            <NativeSelect 
                onChange={(event) => props.onChange(event.target.value) }
                className={`trs-transform-selection-dropdown ${classes.transformSelectionDropdown}`} 
                input={<BootstrapDropdown name="transform-selection" id="trs-transform-dropdown-select" />}>
                <option value={'none'}>None</option>
                <option value={'aes-encrypt'}>AES Encrypt</option>
                <option value={'aes-decrypt'}>AES Decrypt</option>
            </NativeSelect>
        </FormControl>
    )
}

export { TransformSelectionDropdownComponent }
