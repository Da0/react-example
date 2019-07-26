export default function changeFilterAction(query) {
    return {
        type: 'CHANGE_FILTER',
        payload: query
    }
}