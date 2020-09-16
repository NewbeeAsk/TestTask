import React from "react";
import {getPhotosThunkCreator} from "../../../redux/curiosityReducer";
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {connect} from "react-redux";
import {maxLengthCreator, requiredPost} from "../validators/viladation";

const maxLength4 = maxLengthCreator(4);

const CuriosityForm = (props) => {
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
                <Field name="camera" component="select">
                    <option />
                    <option value="FHAZ">FHAZ</option>
                    <option value="RHAZ">RHAZ</option>
                    <option value="NAVCAM">NAVCAM</option>
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
    return <CuriosityReduxForm onSubmit={onSubmit}/>
}
let mapStateToProps = (state) => ({
});
export const CuriosityDataContainer = connect(mapStateToProps, {getPhotosThunkCreator})(Curiosity);
