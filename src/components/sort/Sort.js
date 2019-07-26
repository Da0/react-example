import React from 'react';
import { connect } from 'react-redux';

import texts from "./translations.json";
import { setSortAction, toggleSortReverseAction } from "../../actions/actionSort";

class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.sortHandler = this.sortHandler.bind(this);
    }

    sortHandler(sortBy) {
        this.props.setSortBy(sortBy, this.props.sortReverse);
    }

    render() {
        return (
            <div className="App__widget widget widget_sort">
                <div className="widget__title">{texts.title[this.props.lang]}</div>
                <div className="widget__row">
                    <input
                        type="button"
                        onClick={this.sortHandler.bind(this, 'id')}
                        className="widget__btn"
                        value="ID"
                        style={this.props.sortBy === 'id' ? this.props.activeStyle : null}
                    />
                    <input
                        type="button"
                        onClick={this.sortHandler.bind(this, 'name')}
                        className="widget__btn"
                        value={texts.name[this.props.lang]}
                        style={this.props.sortBy === 'name' ? this.props.activeStyle : null}
                    />
                    <input
                        type="button"
                        onClick={this.sortHandler.bind(this, 'age')}
                        className="widget__btn"
                        value={texts.age[this.props.lang]}
                        style={this.props.sortBy === 'age' ? this.props.activeStyle : null}
                    />
                </div>
                <div className="widget__row">
                    <input
                        type="button"
                        onClick={this.props.toggleSortReverse.bind(this, false)}
                        className="widget__btn"
                        value={texts.asc[this.props.lang]}
                        style={!this.props.sortReverse ? this.props.activeStyle : null}
                    />
                    <input
                        type="button"
                        onClick={this.props.toggleSortReverse.bind(this, true)}
                        className="widget__btn"
                        value={texts.desc[this.props.lang]}
                        style={this.props.sortReverse ? this.props.activeStyle : null}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        lang: state.settings.lang,
        sortBy: state.settings.sortBy,
        sortReverse: state.settings.sortReverse,
        showItems: state.list.showItems
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setSortBy: (sortBy, sortReverse) => {
            dispatch(setSortAction(sortBy, sortReverse))
        },
        toggleSortReverse: reverse => {
            dispatch(toggleSortReverseAction(reverse))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);