import React from "react";
import { connect } from "react-redux";
import { State } from "../../reducers/State";
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme, InputLabel, FormControl, NativeSelect } from "@material-ui/core";
import { BootstrapDropdown } from "../boostrap-dropdown/BootStrapDropdown";
import { Actions } from "../../reducers/Actions";
import { TransformData } from "../../reducers/Transforms";

interface AesEncryptionOptionsComponentProps {
    transformData: TransformData;
    changeOptionsProperty: (transformId: number, prop: string, newValue: any) => void;
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
        margin: "3%",
        width: "94%",
        marginTop: "3px",
        marginBottom: "3px",
    }
});

const useLabelStyle = makeStyles((theme: Theme) => createStyles({
    // root: {
    //     position: "absolute",
    //     top: "-12px"
    // }
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
                value={props.transformData.options.key}
                inputProps={{className: classes.input}}
                InputLabelProps={{ classes: labelClasses }}
                onChange={(ev) => props.changeOptionsProperty(props.transformData.id, "key", ev.target.value)}
                margin="none"
                variant="outlined"
            />
            <TextField
                id="trs-aes-options-iv"
                className={`trs-aes-encrypt-iv-input ${classes.element}`}
                label="IV"
                disabled={props.transformData.options.variation === "ecb"}
                value={props.transformData.options.iv}
                inputProps={{className: classes.input}}
                InputLabelProps={{ classes: labelClasses }}
                onChange={(ev) => props.changeOptionsProperty(props.transformData.id, "iv", ev.target.value)}
                // className={classes.textField}
                // value={values.name}
                // onChange={handleChange('name')}
                margin="none"
                variant="outlined"
            />
            <FormControl margin="none" className={`${classes.formControl} ${classes.element} trs-aes-encrypt-bits-input`}>
                <InputLabel htmlFor="trs-aes-options-bits">Key Length</InputLabel>
                <NativeSelect className={`${classes.select}`}
                    value={props.transformData.options.bits}
                    onChange={(ev) => props.changeOptionsProperty(props.transformData.id, "bits", ev.target.value)}
                    input={<BootstrapDropdown name="bots-select" id="trs-aes-options-bits" />}>
                    <option value={'128'}>128</option>
                    <option value={'192'}>192</option>
                    <option value={'256'}>256</option>
                </NativeSelect>
            </FormControl>

            <FormControl margin="none" className={`${classes.formControl} ${classes.element} trs-aes-encrypt-variation-input`}>
                <InputLabel htmlFor="trs-aes-options-variation">Mode</InputLabel>
                <NativeSelect 
                    onChange={(ev) => props.changeOptionsProperty(props.transformData.id, "variation", ev.target.value)}
                    value={props.transformData.options.variation}
                    className={`${classes.select}`} input={<BootstrapDropdown name="bots-select" id="trs-aes-options-variation" />}>
                    
                    <option value={'cbc'}>cbc</option>
                    <option value={'ecb'}>ecb</option>
                </NativeSelect>
            </FormControl>
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
        changeOptionsProperty(transformId: number, prop: string, newValue: any) {
            dispatch({
                type: Actions.TRANSFORM_OPTIONS_CHANGED,
                data: {
                    transformId,
                    prop,
                    newValue
                }
            })
        }
    }
}

const AesEncryptionOptionsComponent = connect(mapStateToProps, mapDispatchToProps)(AesEncryptionOptionsComponentBase);
export { AesEncryptionOptionsComponent }