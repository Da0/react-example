const initialState = {
    playedId: null,
    manual: false
};

export default function video (state = initialState, action) {
    switch (action.type) {
        case 'ADD_PLAYED_ID':
            return {
                ...state,
                playedId: action.payload
            };

        case 'REMOVE_PLAYED_ID':
            return {
                ...state,
                playedId: null
            };

        case 'TOGGLE_MANUAL':
            return {
                ...state,
                manual: true
            };

        default:
            return state;
    }
}
