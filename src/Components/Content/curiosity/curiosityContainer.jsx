import React from "react";
import {connect} from "react-redux";
import Curiosity from "./Curiosity";
import {getPhotosThunkCreator, setCuriosityPaginationData} from "../../../redux/curiosityReducer";

class CuriosityAPIComponent extends React.Component {

    getNewPhotos = (sol, camera, page) => {
        this.props.getPhotosThunkCreator(sol, camera, page);
    }
    onPageChanged = (page) => {
        this.props.setCuriosityPaginationData(page);
    }

    render() {

        return (
            <>
                <Curiosity getNewPhotos={this.getNewPhotos}
                           curiosity={this.props.curiosity}
                           onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        curiosity: state.curiosityPage,
    }
}

const CuriosityContainer = connect(mapStateToProps, {getPhotosThunkCreator, setCuriosityPaginationData})(CuriosityAPIComponent);

export default CuriosityContainer;