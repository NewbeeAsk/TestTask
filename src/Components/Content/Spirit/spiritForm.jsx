import React from "react";
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {connect} from "react-redux";
import {maxLengthCreator, requiredPost} from "../validators/viladation";
import {getSpiritPhotosThunkCreator} from "../../../redux/spiritReducer";

const maxLength4 = maxLengthCreator(4);

const SpiritForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"sol(max only 4 numbers)"} name={"sol"} component={"input"}
                       validate={[requiredPost, maxLength4]}/>
            </div>
            <div>
                <Field placeholder={"page(max only 4 numbers)"} name={"page"} component={"input"}
                       validate={[requiredPost, maxLength4]}/>
            </div>
            <div>
                Choose camera:
                <Field name="camera" component="select">
                    {props.props.spiritCameraVarious.map(el => {return (<option value={el}>{el}</option>)})}
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
        props.getSpiritPhotosThunkCreator(values.sol, values.camera, values.page)
    }
    return <SpiritReduxForm onSubmit={onSubmit} props={props}/>
}
const mapStateToProps = (state) => {
    return {
        spiritCameraVarious: state.spiritPage.cameraVarious
    }
}
export const SpiritDataContainer = connect(mapStateToProps, {getSpiritPhotosThunkCreator})(Spirit);
