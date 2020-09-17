import React from "react";
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {connect} from "react-redux";
import {maxLengthCreator, requiredPost} from "../validators/viladation";
import {getOportunityPhotosThunkCreator} from "../../../redux/oportunityReducer";

const maxLength4 = maxLengthCreator(4);

const OportunityForm = (props) => {
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
                    {props.props.oportunityCameraVarious.map(el => {return (<option value={el}>{el}</option>)})}
                </Field>
            </div>
            <div>
                <button placeholder={"data"}>Show Photos</button>
            </div>
        </form>
    )
}
const OportunityReduxForm = reduxForm({form: "curiosity"})(OportunityForm)

const Oportunity = (props) => {
    const onSubmit = (values) => {
        props.getOportunityPhotosThunkCreator(values.sol, values.camera, values.page)
    }
    return <OportunityReduxForm onSubmit={onSubmit} props={props}/>
}
const mapStateToProps = (state) => {
    return {
        oportunityCameraVarious: state.oportunityPage.cameraVarious
    }
}
export const OportunityDataContainer = connect(mapStateToProps, {getOportunityPhotosThunkCreator})(Oportunity);
