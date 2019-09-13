import React from "react";
import { connect } from "react-redux";
import { State } from "../../reducers/State";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/styles";

interface AesEncryptionOptionsComponentProps {
}

const useStyle = makeStyles({
    textField: {
        marginTop: "2px",
        marginBottom: "2px"
    }
})

const AesEncryptionOptionsComponentBase: React.FC<AesEncryptionOptionsComponentProps> = (props: AesEncryptionOptionsComponentProps) => {
    
    const classes = useStyle();

    return (
        <div>
            <TextField
                id="trs-aes-options-key"
                className={`trs-aes-encrypt-key-input ${classes.textField}`}
                label="Key"

                // className={classes.textField}
                // value={values.name}
                // onChange={handleChange('name')}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="trs-aes-options-iv"
                className="trs-aes-encrypt-iv-input"
                label="IV"
                // className={classes.textField}
                // value={values.name}
                // onChange={handleChange('name')}
                margin="dense"
                variant="outlined"
            />
            <TextField
                id="trs-aes-options-bits"
                className="trs-aes-encrypt-bits-input"
                label="Bits"
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
                // className={classes.textField}
                // value={values.name}
                // onChange={handleChange('name')}
                margin="dense"
                variant="outlined"
            />
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