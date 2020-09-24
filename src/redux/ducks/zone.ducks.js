// ACTIONS

export const FETCH_ZONE_BEGIN = "FETCH_ZONE_BEGIN";
export const FETCH_ZONE_SUCCESS = "FETCH_ZONE_SUCCESS";
export const FETCH_ZONE_ERROR = "FETCH_ZONE_ERROR";

// REDUCERS
export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ZONE_BEGIN: {
            return initialState;
        }
        case FETCH_ZONE_ERROR: {
            return { ...state, loading: false }
        }
        case FETCH_ZONE_SUCCESS: {
            let allIDs = []
            const byIDs = {};

            action.payload.forEach(zone => {
                byIDs[zone._id] = zone;
                allIDs.push(zone._id);
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


// ACTION CREATORS

export const fetchZoneBegin = () => ({
    type: FETCH_ZONE_BEGIN
})

export const fetchZoneSuccess = (payload) => ({
    type: FETCH_ZONE_SUCCESS,
    payload
})

export const fetchZoneError = (payload) => ({
    type: FETCH_ZONE_ERROR,
    payload
})

