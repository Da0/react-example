import React from 'react';
import { connect } from 'react-redux';

import '../components/dataList/dataList.css';
import DataListItem from '../components/dataList/DataListItem';
import { loadListEndAction, allHideAction } from "../actions/actionList";
import texts from './translations.json';

class listContainer extends React.Component {
    componentDidMount() {
        fetch('data.json')
            .then(res => res.json())
            .then(
                (response) => {
                    this.props.loadListEnd(null, response, this.props.sortBy, this.props.sortReverse);
                },
                (error) => {
                    this.props.loadListEnd(error);
                }
            );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isChanging) {
            this.props.allHide();
        }
    }

    render() {
        const { error, isLoaded, jsonData } = this.props;

        if (error) {
            return <div className="msg msg_error">Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="msg">Загрузка...</div>;
        } else if (jsonData.length) {
            // const dataItems =
            // ) : null;
            return (
                <ul className={`dataList ${this.props.previews ? 'dataList_previews' : 'dataList_table'}`}>
                    {!this.props.isChanging &&
                    jsonData.map((item) => {
                        return (
                            <DataListItem
                                key={item.id}
                                item={item}
                            />
                        )
                    })}
                </ul>
            )
        } else {
            return <div className="msg">{texts.notFind[this.props.lang]}</div>
        }
    }
}

function mapStateToProps(state) {
    const filterVal = state.settings.filterVal;

    return {
        lang: state.settings.lang,
        sortBy: state.settings.sortBy,
        sortReverse: state.settings.sortReverse,
        filterVal: filterVal,
        previews: state.settings.previews,
        isLoaded: state.list.isLoaded,
        error: state.list.error,
        isChanging: state.list.isChanging,
        jsonData: state.list.jsonData.filter((item) => {
            return (item.name.toLowerCase().indexOf(filterVal.toLowerCase()) !== -1)
        })
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadListEnd: (error, response, sort, reverse) => {
            dispatch(loadListEndAction(error, response, sort, reverse))
        },
        allHide: () => {
            dispatch(allHideAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(listContainer);