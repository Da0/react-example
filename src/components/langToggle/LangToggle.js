import React from 'react';
import { connect } from 'react-redux';

import text from './translations.json';
import setLangAction from '../../actions/actionLang';

class LangToggle extends React.Component {
    render() {
        return (
            <div className="App__widget widget widget_lang">
                <div className="widget__title">{text.title[this.props.lang]}</div>
                <div className="widget__row">
                    <input
                        type="button"
                        onClick={this.props.setLang.bind(this, 'ru')}
                        className="widget__btn"
                        value="Русский"
                        style={this.props.lang === 'ru' ? this.props.activeStyle : null}
                    />
                    <input
                        type="button"
                        onClick={this.props.setLang.bind(this, 'en')}
                        className="widget__btn"
                        value="English"
                        style={this.props.lang === 'en' ? this.props.activeStyle : null}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        lang: state.settings.lang,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setLang: lang => {
            dispatch(setLangAction(lang))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LangToggle);