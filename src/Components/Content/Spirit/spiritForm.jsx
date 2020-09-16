import React from "react";
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {connect} from "react-redux";
import {maxLengthCreator, requiredPost} from "../validators/viladation";
import {getSpiritPhotosThunkCreator} from "../../../redux/spiritReducer";

const maxLength4 = maxLengthCreator(4);

const SpiritForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"sol(max only 4 numbers)"} name={"sol"} component={"input"}
                       validate={[requiredPost, maxLength4]}/>
            </div>
            <div>
                <Field placeholder={"page(sol(max only 4 numbers)"} name={"page"} component={"input"}
                       validate={[requiredPost, maxLength4]}/>
            </div>
            <div>
                Choose camera:
                <Field name="camera" component="select">
                    <option value="FHAZ">FHAZ</option>
                    <option value="RHAZ">RHAZ</option>
                    <option value="NAVCAM">NAVCAM</option>
                    <option value="PANCAM">PANCAM</option>
                    <option value="MINITES">MINITES</option>
                </Field>
            </div>
            <div>
                <button placeholder={"data"}>Show Photos</button>
            </div>
        </form>
    )
}
const SpiritReduxForm = reduxForm({form: "spirit"})(SpiritForm)

const Spirit = (props) => {
    const onSubmit = (values) => {
        debugger;
        props.getSpiritPhotosThunkCreator(values.sol, values.camera, values.page)
    }
    return <SpiritReduxForm onSubmit={onSubmit}/>
}
let mapStateToProps = (state) => ({
});
export const SpiritDataContainer = connect(mapStateToProps, {getSpiritPhotosThunkCreator})(Spirit);
