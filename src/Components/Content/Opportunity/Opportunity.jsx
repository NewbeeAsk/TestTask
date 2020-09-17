import React from 'react';
import {OportunityDataContainer} from "./oportunityForm";
import Photo from "../common/curiosityPhotos";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";

const Oportunity = (props) => {

    let pages = [];
    for (let i = 1; i <= props.oportunity.photosData.length; i++) {
        pages.push(i);
    }

    return (
        <div>
            <OportunityDataContainer />
            <div>
                {pages.map(p => {return (<Button key={p.id} onClick={() => props.onPageChanged(p)}>{p}</Button>)})}
            </div>
            <div>
                <Container>
                <Photo image={props.oportunity.photosData[props.oportunity.paginationPage-1]}/>
                </Container>
            </div>
        </div>

    );
}

export default Oportunity;