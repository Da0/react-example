export function addPlayedIdAction(id) {
    return {
        type: 'ADD_PLAYED_ID',
        payload: id
    }
}
export function removePlayedIdAction() {
    return {
        type: 'REMOVE_PLAYED_ID'
    }
}
export function toggleManualAction() {
    return {
        type: 'TOGGLE_MANUAL'
    }
}