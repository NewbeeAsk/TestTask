import React from "react";
import {connect} from "react-redux";
import Oportunity from "./Opportunity";
import {getOportunityPhotosThunkCreator, setOportunityPaginationData} from "../../../redux/oportunityReducer";

class OportunityAPIComponent extends React.Component {

    getNewPhotos = (sol, camera, page) => {
        this.props.getOportunityPhotosThunkCreator(sol, camera, page);
    }
    onPageChanged = (page) => {
        this.props.setOportunityPaginationData(page);
    }

    render() {
        return (
            <>
                <Oportunity getNewPhotos={this.getNewPhotos}
                            oportunity={this.props.oportunity}
                            onPageChanged={this.onPageChanged}
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
        getOportunityPhotosThunkCreator, setOportunityPaginationData
    })(OportunityAPIComponent);

export default OportunityContainer;