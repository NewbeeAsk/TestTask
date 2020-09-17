import {usersAPI} from "../API/API";

const NEWSPIRITPHOTOS = 'NEWSPIRITPHOTOS';
const SPIRITDATA = 'SPIRITDATA';
const SPIPAGINATION = 'SPIPAGINATION';

let initialState = {
    sol: 1001,
    camera: "rhaz",
    paginationPage: 1,
    page: 1,
    photosData: [],
    cameraVarious: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"]
};

const spiritReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEWSPIRITPHOTOS: {
            let photos = [];
            for(let el of action.spiritPhotos){
                photos.push(el.img_src);
            }
            return {...state, photosData: photos}
        }
        case SPIRITDATA:
            return {...state, camera: action.camera, page: action.page, sol: action.sol}
        case SPIPAGINATION:
            return {...state, paginationPage: action.paginationPage}
        default:
            return state;

    }
}
const setNewSpiritPhotos = (spiritPhotos) => ({type: NEWSPIRITPHOTOS, spiritPhotos})
export const setSpiritData = (sol, camera, page) => ({type: SPIRITDATA, sol, camera, page})
export const setSpiritPaginationData = (paginationPage) => ({type: SPIPAGINATION, paginationPage})

export const getSpiritPhotosThunkCreator = (sol, camera, page) => {
    return (dispatch) => {
        usersAPI.getPhotos("spirit", sol, camera, page)
            .then(data => {
                debugger;
                dispatch(setNewSpiritPhotos(data.photos));
                dispatch(setSpiritData(sol, camera, page));
            })
    }
}

export default spiritReducer;