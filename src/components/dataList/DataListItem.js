import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// import { useInView } from 'react-intersection-observer'

import texts from './translations.json';
import { toggleFavAction } from "../../actions/actionList";

import ListVideo from '../../components/dataList/ListVideo';

class JsonItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            in: false
        };
        this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
        this.element = React.createRef();
    }

    handleWaypointEnter() {
        this.setState({
            in: true
        })
    }

    componentDidMount() {
        this.observer = new IntersectionObserver (
            entries => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !this.state.in/* && this.props.showItems.indexOf(this.props.item.id) === -1*/) {
                        this.handleWaypointEnter(this.props.item.id);
                    }
                });
            },
            {
                rootMargin: "0px"
            }
        );
        this.observer.observe(this.element.current);
    }

    componentWillUnmount(){
        this.observer = this.observer.disconnect();
    }

    render() {
        const item = this.props.item;
        const isPreview = this.props.previews;
        const videoItem = isPreview && !!item.video;

        return (
            <CSSTransition
                key={this.props.key}
                in={this.state.in}
                classNames="alert"
                timeout={1000}>
                <li
                    key={this.props.key}
                    ref={this.element}
                        className={'dataList__item' + (videoItem ? ' dataList__item_video' : '')}>
                    <span className="dataList__id" title="id">{item.id}</span>
                    <div className="dataList__inner">
                        <picture className="dataList__pic">
                            <img className="dataList__image" src={'./images/' + item.image + '.svg'} alt={item.image}/>
                        </picture>
                        <span className="dataList__name">{item.name}</span>
                        <span className="dataList__age">{item.age} {texts.years[this.props.lang]}</span>
                        <span className="dataList__phone">{item.phone}</span>
                        <button
                            type="button"
                            className={'dataList__fav' + (item.favourite ? ' dataList__fav_active' : '')}
                            onClick={this.props.toggleFav.bind(this, item.id)}
                        >★</button>
                        {isPreview &&
                            <p className="dataList__phrase">{item.phrase}</p>
                        }
                    </div>

                    {videoItem &&
                        <ListVideo
                            src={'./videos/' + item.video + '.mp4'}
                            id={item.id}
                        />
                    }
                </li>
            </CSSTransition>
        )
    }
}

function mapStateToProps(state) {
    return {
        previews: state.settings.previews,
        lang: state.settings.lang
    }
}
function mapDispatchToProps(dispatch) {
    return {
        toggleFav: id => {
            dispatch(toggleFavAction(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonItem)