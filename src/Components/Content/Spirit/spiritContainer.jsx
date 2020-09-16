import React from "react";
import {connect} from "react-redux";
import Spirit from "./Spirit";
import {getSpiritPhotosThunkCreator} from "../../../redux/spiritReducer";

class SpiritAPIComponent extends React.Component {

    getNewPhotos = (sol, camera, page) => {
        this.props.getSpiritPhotosThunkCreator(sol, camera, page);
    }

    render() {
        return (
            <>
                <Spirit getNewPhotos={this.getNewPhotos}
                        spirit={this.props.spirit}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        spirit: state.spiritPage,
    }
}

const SpiritContainer = connect(mapStateToProps,
    {
        getSpiritPhotosThunkCreator
    })(SpiritAPIComponent);

export default SpiritContainer;