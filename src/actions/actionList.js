export function loadListEndAction(error, response, sortBy, sortReverse) {
    return {
        type: 'LOAD_LIST_END',
        payload: {
            error: error,
            jsonData: response,
            sortBy: sortBy,
            sortReverse: sortReverse
        }
    }
}
export function toggleFavAction(id) {
    return {
        type: 'TOGGLE_FAV',
        payload: id
    }
}
export function allHideAction() {
    return {
        type: 'ALL_HIDE'
    }
}
export function startChangeAction() {
    return {
        type: 'START_CHANGE'
    }
}
export function endChangeAction() {
    return {
        type: 'END_CHANGE'
    }
}