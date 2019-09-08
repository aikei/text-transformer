import React from "react";

import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

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
            <NativeSelect className={`${classes.encodingDropdown}`} input={<BootstrapInput name="encoding" id="trs-input-dropdown-select" />}>
                <option value={'utf8'}>Text</option>
                <option value={'base64'}>Base64</option>
                <option value={'hex'}>Hex</option>
            </NativeSelect>
        </FormControl>
    );
}

export { EncodingDropdownComponent }

