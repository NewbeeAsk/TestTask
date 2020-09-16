import React from "react";
import {connect} from "react-redux";
import Oportunity from "./Opportunity";
import {getOportunityPhotosThunkCreator} from "../../../redux/oportunityReducer";

class OportunityAPIComponent extends React.Component {

    getNewPhotos = (sol, camera, page) => {
        this.props.getOportunityPhotosThunkCreator(sol, camera, page);
    }

    render() {
        return (
            <>
                <Oportunity getNewPhotos={this.getNewPhotos}
                            oportunity={this.props.oportunity}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        oportunity: state.oportunityPage,
    }
}

const OportunityContainer = connect(mapStateToProps,
    {
        getOportunityPhotosThunkCreator
    })(OportunityAPIComponent);

export default OportunityContainer;