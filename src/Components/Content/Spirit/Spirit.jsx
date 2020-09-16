import React from 'react';
import {SpiritDataContainer} from "./spiritForm";
import Photo from "../curiosity/curiosityPhotos";

const Spirit = (props) => {

    return (
        <div>
            <SpiritDataContainer/>
            <div>
                {props.spirit.photosData.map(post => (<Photo image={post}/>))}
            </div>
        </div>
    );
}

export default Spirit;