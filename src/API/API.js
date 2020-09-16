import * as axios from "axios";

const instanse = axios.create({
        baseURL: "https://api.nasa.gov/mars-photos/api/v1/rovers/"
    }
)
export const usersAPI = {
    getPhotos(rover, sol, camera, page) {
        return instanse.get(`${rover}/photos?sol=${sol}&camera=${camera}&page=${page}&api_key=wwN9mbMUgLwpMIl2SU4YPSrLVX5Es0FcHdohuMMi`)
            .then(response => response.data);
    }

}