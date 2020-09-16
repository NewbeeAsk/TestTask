import React from "react";
import {connect} from "react-redux";
import Curiosity from "./Curiosity";
import {getPhotosThunkCreator} from "../../../redux/curiosityReducer";

class CuriosityAPIComponent extends React.Component {

    getNewPhotos = (sol, camera, page) => {
        this.props.getPhotosThunkCreator(sol, camera, page);
    }

    render() {

        return (
            <>
                <Curiosity getNewPhotos={this.getNewPhotos}
                           curiosity={this.props.curiosity}
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

const CuriosityContainer = connect(mapStateToProps,
    {
        getPhotosThunkCreator
    })(CuriosityAPIComponent);

export default CuriosityContainer;