import React from 'react';
import { connect } from 'react-redux';

import texts from './translations.json';
import toggleViewAction from "../../actions/actionView";

class View extends React.Component {
    render() {
        return (
            <div className="App__widget widget widget_view">
                <div className="widget__title">{texts.title[this.props.lang]}</div>
                <div className="widget__row">
                    <input
                        type="button"
                        onClick={this.props.toggleView.bind(this, false)}
                        className="widget__btn"
                        value={texts.table[this.props.lang]}
                        style={!this.props.previews ? this.props.activeStyle : null}
                    />
                    <input
                        type="button"
                        onClick={this.props.toggleView.bind(this, true)}
                        className="widget__btn"
                        value={texts.previews[this.props.lang]}
                        style={this.props.previews ? this.props.activeStyle : null}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        lang: state.settings.lang,
        previews: state.settings.previews
    }
}
function mapDispatchToProps(dispatch) {
    return {
        toggleView: isPreview => {
            dispatch(toggleViewAction(isPreview))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);