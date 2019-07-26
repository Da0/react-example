export function setSortAction(sort, reverse) {
    return {
        type: 'SET_SORT',
        payload: {
            sortBy: sort,
            reverse: reverse
        }
    }
}

export function toggleSortReverseAction(reverse) {
    return {
        type: 'TOGGLE_REVERSE',
        payload: reverse
    }
}