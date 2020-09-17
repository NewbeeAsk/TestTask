import React from 'react';
import Photo from "../common/curiosityPhotos";
import {CuriosityDataContainer} from "./curiosityForm";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";

const Curiosity = (props) => {
    let pages = [];
    for (let i = 1; i <= props.curiosity.photosData.length; i++) {
        pages.push(i);
    }

    return (
        <div>
            <CuriosityDataContainer/>
            <div>
                {pages.map(p => {return (<Button key={p.id} onClick={() => props.onPageChanged(p)}>{p}</Button>)})}
            </div>
            <div>
                <Container>
                <Photo image={props.curiosity.photosData[props.curiosity.paginationPage-1]}/>
                </Container>
            </div>
        </div>

    );
}

export default Curiosity;

