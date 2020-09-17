import React from "react";
import {connect} from "react-redux";
import Spirit from "./Spirit";
import {getSpiritPhotosThunkCreator, setSpiritPaginationData} from "../../../redux/spiritReducer";

class SpiritAPIComponent extends React.Component {

    getNewPhotos = (sol, camera, page) => {
        this.props.getSpiritPhotosThunkCreator(sol, camera, page);
    }
    onPageChanged = (page) => {
        this.props.setSpiritPaginationData(page);
    }

    render() {
        return (
            <>
                <Spirit getNewPhotos={this.getNewPhotos}
                        spirit={this.props.spirit}
                        onPageChanged={this.onPageChanged}
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
        getSpiritPhotosThunkCreator, setSpiritPaginationData
    })(SpiritAPIComponent);

export default SpiritContainer;