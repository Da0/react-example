import defaults from '../defaults';

const initialState = {
    isLoaded: false,
    isChanging: false,
    error: null,
    jsonData: [],
    showItems: [],
    allHidden: false
};

function sortData(arrData, sortBy, reverse) {
    if (!!sortBy) {
        arrData.sort((a, b) => {
            if (sortBy === 'name') {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();

                if (nameA < nameB)
                    return !reverse ? -1 : 1;
                if (nameA > nameB)
                    return !reverse ? 1 : -1;
                return 0 // Никакой сортировки
            }
            else {
                return !reverse ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
            }
        });
    }
    return arrData;
}

export default function list (state = initialState, action) {
    let sortBy;
    let reverse;

    switch (action.type) {
        case 'LOAD_LIST_END':
            let jsonData = action.payload.jsonData;
            sortBy = action.payload.sortBy;
            reverse = action.payload.sortReverse;

            if (sortBy !== defaults.sort) {
                sortData(jsonData, sortBy, reverse)
            }
            else if (reverse) {
                sortData(jsonData, null, reverse)
            }

            return {
                ...state,
                isLoaded: true,
                error: action.payload.error,
                jsonData: jsonData
            };

        case 'TOGGLE_FAV':
            return {
                ...state,
                jsonData: state.jsonData.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            favourite: !item.favourite,
                        }
                    }
                    return item;
                })
            };

        case 'ALL_HIDE':
            return {
                ...state,
                allHide: true
            };

        case 'SET_SORT':
            sortBy = action.payload.sortBy;

            return {
                ...state,
                jsonData: sortData(state.jsonData, sortBy, action.payload.reverse)
            };

        case 'TOGGLE_REVERSE':
            return {
                ...state,
                jsonData: state.jsonData.reverse()
            };

        case 'START_CHANGE':
            return {
                ...state,
                isChanging: true
            };

        case 'END_CHANGE':
            return {
                ...state,
                isChanging: false
            };

        default:
            return state;
    }
}