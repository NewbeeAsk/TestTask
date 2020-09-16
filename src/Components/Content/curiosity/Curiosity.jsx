import React from 'react';
import Photo from "./curiosityPhotos";
import {CuriosityDataContainer} from "./curiosityForm";

const Curiosity = (props) => {
    return (
        <div>
            <CuriosityDataContainer/>
            <div>
                {props.curiosity.photosData.map(post => (<Photo image={post}/>))}
            </div>
        </div>

    );
}

export default Curiosity;

