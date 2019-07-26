import { createBrowserHistory } from 'history';
import defaults from '../defaults';

const history = createBrowserHistory();

let params = new URLSearchParams(window.location.search);

const initialState = {
    lang: params.has('lang') ? params.get('lang') : defaults.lang,
    sortBy: params.has('sortBy') ? params.get('sortBy') : defaults.sort,
    sortReverse: params.has('sortReverse'),
    filterVal: params.has('filterVal') ? params.get('filterVal') : '',
    previews: params.has('previews')
};

export default function settings (state = initialState, action) {
    switch (action.type) {
        case 'SET_LANG':
            const langVal = action.payload;
            if (langVal !== defaults.lang) {
                params.set('lang', langVal);
            }
            else {
                params.delete('lang');
            }
            history.replace({pathname: '/', search: params.toString()});
            return {...state, lang: langVal};

        case 'SET_SORT':
            const sortByVal = action.payload.sortBy;
            if (sortByVal !== defaults.sort) {
                params.set('sortBy', sortByVal);
            }
            else {
                params.delete('sortBy');
            }
            history.replace({pathname: '/', search: params.toString()});
            return {...state, sortBy: sortByVal};

        case 'TOGGLE_REVERSE':
            const reverse = action.payload;
            if (reverse) {
                params.set('sortReverse', reverse);
            }
            else if (params.has('sortReverse')) {
                params.delete('sortReverse');
            }
            history.replace({pathname: '/', search: params.toString()});
            return {...state, sortReverse: reverse};

        case 'CHANGE_FILTER':
            const query = action.payload;
            if (query.length) {
                params.set('filterVal', query);
            }
            else if (params.has('filterVal')) {
                params.delete('filterVal');
            }
            history.replace({pathname: '/', search: params.toString()});
            return {...state, filterVal: query};

        case 'TOGGLE_VIEW':
            const isPreviews = action.payload;
            if (isPreviews) {
                params.set('previews', isPreviews);
            }
            else if (params.has('previews')) {
                params.delete('previews');
            }
            history.replace({pathname: '/', search: params.toString()});

            return {...state, previews: isPreviews};

        default:
            return state;
    }
}