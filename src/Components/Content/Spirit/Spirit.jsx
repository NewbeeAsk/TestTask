import React from 'react';
import {SpiritDataContainer} from "./spiritForm";
import Photo from "../common/curiosityPhotos";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

const Spirit = (props) => {
    let pages = [];
    for (let i = 1; i <= props.spirit.photosData.length; i++) {
        pages.push(i);
    }
    return (
        <div>
            <SpiritDataContainer/>
            <div>
                {pages.map(p => {return (<Button key={p.id} onClick={() => props.onPageChanged(p)}>{p}</Button>)})}
            </div>
            <div>
                <Container>
                <Photo image={props.spirit.photosData[props.spirit.paginationPage-1]}/>
                </Container>
            </div>
        </div>
    );
}

export default Spirit;