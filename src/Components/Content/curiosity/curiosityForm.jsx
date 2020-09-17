import React from "react";
import {getPhotosThunkCreator} from "../../../redux/curiosityReducer";
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {connect} from "react-redux";
import {maxLengthCreator, requiredPost} from "../validators/viladation";

const maxLength4 = maxLengthCreator(4);

const CuriosityForm = (props) => {
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
                    {props.props.curiosityCameraVarious.map(el => {return (<option value={el}>{el}</option>)})}
                </Field>
            </div>
            <div>
                <button placeholder={"data"}>Show Photos</button>
            </div>
        </form>
    )
}
const CuriosityReduxForm = reduxForm({form: "curiosity"})(CuriosityForm)

const Curiosity = (props) => {
    const onSubmit = (values) => {
        debugger;
        props.getPhotosThunkCreator(values.sol, values.camera, values.page)
    }
    return <CuriosityReduxForm onSubmit={onSubmit} props={props}/>
}
const mapStateToProps = (state) => {
    return {
        curiosityCameraVarious: state.curiosityPage.cameraVarious
    }
}
export const CuriosityDataContainer = connect(mapStateToProps, {getPhotosThunkCreator})(Curiosity);
