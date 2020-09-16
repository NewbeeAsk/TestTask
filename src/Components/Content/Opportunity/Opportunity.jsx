import React from 'react';
import {OportunityDataContainer} from "./oportunityForm";
import Photo from "../curiosity/curiosityPhotos";

const Oportunity = (props) => {
    return (
        <div>
            <OportunityDataContainer/>
            <div>
                {props.oportunity.photosData.map(post => (<Photo image={post}/>))}
            </div>
        </div>

    );
}

export default Oportunity;