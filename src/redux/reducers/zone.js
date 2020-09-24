import { FETCH_ZONE_BEGIN, FETCH_ZONE_ERROR, FETCH_ZONE_SUCCESS } from "../actionTypes";

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ZONE_BEGIN: {
            return initialState;
        }
        case FETCH_ZONE_ERROR: {
            return { ...state, loading: false }
        }
        case FETCH_ZONE_SUCCESS: {
            let allIDs = []
            const byIDs = action.payload.map(element => {
                let item = {};
                item[element._id] = element;
                allIDs.push(element._id);
                return item;
            })
            return { 
                loading: false,
                allIDs: allIDs,
                byIDs: byIDs,
            }


        }
        default:
            return state;
    }

}

const initialState = {
    loading: true,
    allIDs: [],
    byIDs: {},
};