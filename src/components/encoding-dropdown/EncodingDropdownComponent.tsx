import React from "react";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
    },
    label: {
      // top: "-5px"
    }
  }),
);

// const useDropdownStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       'label + &': {
//         marginTop: theme.spacing(3),
//       },
//     },
//   })
// );

interface EncodingDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const EncodingDropdownComponent: React.FC<EncodingDropdownProps> = (props: EncodingDropdownProps) => {

    const classes = useStyles();
    // const dropdownClasses = useDropdownStyles();

    return (
        <FormControl className={`trs-encoding-dropdown ${classes.margin}`}>
            <InputLabel className={classes.label} htmlFor="trs-input-dropdown-select">Encoding</InputLabel>
            <NativeSelect 
              onChange={(ev) => props.onChange(ev.target.value)}
              className={`${classes.encodingDropdown}`} 
              input={<BootstrapDropdown value={props.value} name="encoding" id="trs-input-dropdown-select" />}>
                <option value={'utf8'}>Text</option>
                <option value={'base64'}>Base64</option>
                <option value={'hex'}>Hex</option>
            </NativeSelect>
        </FormControl>
    );
}

export { EncodingDropdownComponent }

