import { fetchZoneBegin, fetchZoneSuccess, fetchZoneError} from './ducks/zone.ducks';
const axios = require('axios').default;

const Axios = axios.create({
    baseURL: "http://localhost:3001"
});

export const fetchZonesThunk = () => {
    return async (dispatch, getState) => {

        dispatch(fetchZoneBegin());
        try {
            const response = await Axios.get('/zones');
            console.log(response);
            dispatch(fetchZoneSuccess(response.data));
        } catch (err) {
            console.log(err);
            dispatch(fetchZoneError(err));
        }

    }
}