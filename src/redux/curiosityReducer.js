import {usersAPI} from "../API/API";

const NEWCURIOSITYPHOTOS = 'NEWCURIOSITYPHOTOS';
const CURIOSITYDATA = 'CURIOSITYDATA';

let initialState = {
    sol: 1001,
    camera: "rhaz",
    page: 1,
    photosData: [],
};

const curiosityReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEWCURIOSITYPHOTOS: {
            let photos = [];
            for(let el of action.curiosityPhotos){
                photos.push(el.img_src);
            }
            return {...state, photosData: photos}
        }
        case CURIOSITYDATA:
            return {...state, camera: action.camera, page: action.page, sol: action.sol}
        default:
            return state;

    }
}
const setNewCuriosityPhotos = (curiosityPhotos) => ({type: NEWCURIOSITYPHOTOS, curiosityPhotos})
export const setCuriosityData = (sol, camera, page) => ({type: CURIOSITYDATA, sol, camera, page})

export const getPhotosThunkCreator = (sol, camera, page) => {
    return (dispatch) => {
        usersAPI.getPhotos("curiosity", sol, camera, page)
            .then(data => {
                debugger;
                dispatch(setNewCuriosityPhotos(data.photos));
                dispatch(setCuriosityData(sol, camera, page));
            })
    }
}

export default curiosityReducer;