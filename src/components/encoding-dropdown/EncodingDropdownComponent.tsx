import React from "react";

import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { BootstrapDropdown } from "../boostrap-dropdown/BootStrapDropdown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    encodingDropdown: {
        "max-width": "100px"
    }
  }),
);


const EncodingDropdownComponent: React.FC = () => {

    const classes = useStyles();

    return (
        <FormControl className={`trs-encoding-dropdown ${classes.margin}`}>
            <InputLabel htmlFor="trs-input-dropdown-select">Encoding</InputLabel>
            <NativeSelect className={`${classes.encodingDropdown}`} input={<BootstrapDropdown name="encoding" id="trs-input-dropdown-select" />}>
                <option value={'utf8'}>Text</option>
                <option value={'base64'}>Base64</option>
                <option value={'hex'}>Hex</option>
            </NativeSelect>
        </FormControl>
    );
}

export { EncodingDropdownComponent }

