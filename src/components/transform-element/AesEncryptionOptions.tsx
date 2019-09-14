import React from "react";
import { connect } from "react-redux";
import { State } from "../../reducers/State";
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme, InputLabel, FormControl, NativeSelect } from "@material-ui/core";
import { TransformElementDropdown } from "./TransformElementDropdown";
import { BootstrapDropdown } from "../boostrap-dropdown/BootStrapDropdown";

interface AesEncryptionOptionsComponentProps {
}

const useStyle = makeStyles({
    input: {
        paddingTop: "4.5px",
        paddingBottom: "4.5px"
    },
    formControl: {
        width: "100%"
    },
    select: {
        width: "100%"
    },
    element: {
        marginTop: "3px",
        marginBottom: "3px",
    }
});

const useLabelStyle = makeStyles((theme: Theme) => createStyles({
    root: {
        position: "absolute",
        top: "-12px"
    }
}))

const AesEncryptionOptionsComponentBase: React.FC<AesEncryptionOptionsComponentProps> = (props: AesEncryptionOptionsComponentProps) => {
    
    const classes = useStyle();
    const labelClasses = useLabelStyle();

    return (
        <div>
            <TextField
                id="trs-aes-options-key"
                className={`trs-aes-encrypt-key-input ${classes.element}`}
                label="Key"
                inputProps={{className: classes.input}}
                InputLabelProps={{ classes: labelClasses }}
                // className={classes.textField}
                // value={values.name}
                // onChange={handleChange('name')}
                margin="none"
                variant="outlined"
            />
            <TextField
                id="trs-aes-options-iv"
                className={`trs-aes-encrypt-iv-input ${classes.element}`}
                label="IV"
                inputProps={{className: classes.input}}
                InputLabelProps={{ classes: labelClasses }}
                // className={classes.textField}
                // value={values.name}
                // onChange={handleChange('name')}
                margin="none"
                variant="outlined"
            />
            <FormControl margin="none" className={`${classes.formControl} ${classes.element} trs-aes-encrypt-bits-input`}>
                <InputLabel htmlFor="trs-aes-options-bits">Bits</InputLabel>
                <NativeSelect className={`${classes.select}`} input={<BootstrapDropdown name="bots-select" id="trs-aes-options-bits" />}>
                    <option value={'128'}>128</option>
                    <option value={'192'}>192</option>
                    <option value={'256'}>256</option>
                </NativeSelect>
            </FormControl>

            <FormControl margin="none" className={`${classes.formControl} ${classes.element} trs-aes-encrypt-variation-input`}>
                <InputLabel htmlFor="trs-aes-options-variation">Variation</InputLabel>
                <NativeSelect className={`${classes.select}`} input={<BootstrapDropdown name="bots-select" id="trs-aes-options-variation" />}>
                    <option value={'cbc'}>cbc</option>
                    <option value={'ecb'}>ecb</option>
                </NativeSelect>
            </FormControl>

            {/* <TextField
                id="trs-aes-options-bits"
                className="trs-aes-encrypt-bits-input"
                label="Bits"
                inputProps={{className: classes.input}}
                InputLabelProps={{ classes: labelClasses }}
                // className={classes.textField}
                // value={values.name}
                // onChange={handleChange('name')}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="trs-aes-options-variation"
                className="trs-aes-encrypt-variation-input"
                label="Variation"
                inputProps={{className: classes.input}}
                InputLabelProps={{ classes: labelClasses }}
                // className={classes.textField}
                // value={values.name}
                // onChange={handleChange('name')}
                margin="dense"
                variant="outlined"
            /> */}
        </div>
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

const AesEncryptionOptionsComponent = connect(mapStateToProps, mapDispatchToProps)(AesEncryptionOptionsComponentBase);
export { AesEncryptionOptionsComponent }