import {usersAPI} from "../API/API";

const NEWOPORTUNITYPHOTOS = 'NEWOPORTUNITYPHOTOS';
const OPORTUNITYDATA = 'CURIOSITYDATA';
const OPOPAGINATION = 'OPOPAGINATION';

let initialState = {
    sol: 1001,
    camera: "rhaz",
    paginationPage: 1,
    page: 1,
    photosData: [],
    cameraVarious: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"]
};

const oportunityReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEWOPORTUNITYPHOTOS: {
            let photos = [];
            for(let el of action.oportunityPhotos){
                photos.push(el.img_src);
            }
            return {...state, photosData: photos}
        }
        case OPORTUNITYDATA:
            return {...state, camera: action.camera, page: action.page, sol: action.sol}
        case OPOPAGINATION:
            return {...state, paginationPage: action.paginationPage}
        default:
            return state;

    }
}
const setNewOportunityPhotos = (oportunityPhotos) => ({type: NEWOPORTUNITYPHOTOS, oportunityPhotos})
export const setOportunityData = (sol, camera, page) => ({type: OPORTUNITYDATA, sol, camera, page})
export const setOportunityPaginationData = (paginationPage) => ({type: OPOPAGINATION, paginationPage})

export const getOportunityPhotosThunkCreator = (sol, camera, page) => {
    return (dispatch) => {
        usersAPI.getPhotos("opportunity", sol, camera, page)
            .then(data => {
                debugger;
                dispatch(setNewOportunityPhotos(data.photos));
                dispatch(setOportunityData(sol, camera, page));
            })
    }
}

export default oportunityReducer;