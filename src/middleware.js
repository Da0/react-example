import {endChangeAction, startChangeAction} from "./actions/actionList";
// import {connect} from "react-redux";

function Thunk(store, next, action) {
    let result = next(action);
    // console.log('next state', store.getState().list.showItems.length);

    // console.log(store.getState().list.isChanging);

    switch (action.type) {
        case 'SET_SORT':
        case 'TOGGLE_REVERSE':
        case 'CHANGE_FILTER':
        case 'TOGGLE_VIEW':
            if (!store.getState().list.isChanging) {
                store.dispatch(startChangeAction());
            }
            break;

        case 'ALL_HIDE':
            store.dispatch(endChangeAction());
            break;

        default:
            return result
    }
}

export default Thunk;
