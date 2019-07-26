import React, {Component} from 'react';
import { connect } from 'react-redux';

import './filter-styles.css';
import texts from './translations.json';
import changeFilterAction from "../../actions/actionFilter";

class FilterSearch extends Component {
    constructor(props) {
        super(props);
        this.onchangeFilter = this.onchangeFilter.bind(this);
    }

    onchangeFilter(e) {
        const query = typeof e === 'object' ? e.target.value : e;
        this.props.changeFilter(query);
    }

    render() {
        return (
            <div className="filter">
                <input
                    type="search"
                    name="search"
                    className="filter__input"
                    placeholder={texts.title[this.props.lang]}
                    value={this.props.filterVal}
                    onChange={this.onchangeFilter}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        lang: state.settings.lang,
        filterVal: state.settings.filterVal
    }
}
function mapDispatchToProps(dispatch) {
    return {
        changeFilter: query => {
            dispatch(changeFilterAction(query))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSearch);