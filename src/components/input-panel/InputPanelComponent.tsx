import React from "react";
import Paper from '@material-ui/core/Paper';

import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



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
  }),
);

const InputPanelComponent: React.FC = () => {

    const classes = useStyles();

    return (
        <Paper className="trs-input-panel trs-panel">
            <FormControl className={`trs-encoding-dropdown ${classes.margin}`}>
                <InputLabel htmlFor="age-customized-native-simple">Encoding</InputLabel>
                <NativeSelect className="trs-dropdown" input={<BootstrapInput name="age" id="age-customized-native-simple" />}>
                    <option value={'utf8'}>Text</option>
                    <option value={'base64'}>Base64</option>
                    <option value={'hex'}>Hex</option>
                </NativeSelect>
            </FormControl>
            <textarea className="trs-text-area">

            </textarea>
            {/* <TextareaAutosize
                className="trs-text-area"
                rowsMax={4}
                
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua."
            /> */}
        </Paper>
    );
}

export { InputPanelComponent }