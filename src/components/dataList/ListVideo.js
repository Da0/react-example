import React from 'react';
import { connect } from 'react-redux';
import { addPlayedIdAction, removePlayedIdAction, toggleManualAction } from "../../actions/actionVideo";

class ListVideo extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
        this.videoObserver = null;
        // this.videoHeight = 0;
        this._handleVideoEnter = this._handleVideoEnter.bind(this);
        this._handleVideoLeave = this._handleVideoLeave.bind(this);
    }

    _handleVideoEnter() {
        const id = this.props.id;

        if (this.props.playedId !== id && this.videoRef.current.paused) {
            this.videoRef.current.play();

            if (this.props.playedId) {
                console.log(true);
                document.getElementById(`video-${this.props.playedId}`).pause();
            }
            this.props.addPlayedId(id)
        }
    }

    _handleVideoLeave() {
        if (!this.videoRef.current.paused && !this.videoRef.current.ended) {
            this.videoRef.current.pause();
        }

        if (this.props.playedId === this.props.id) {
            this.props.removePlayedId();
        }
    }

    componentDidMount() {
        if (!this.props.manual && window.matchMedia("(min-width: 768px)").matches) {
            this.videoObserver = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        // console.log([
                        //     entry.time,               // a DOMHightResTimeStamp indicating when the intersection occurred.
                        //     entry.rootBounds,         // a DOMRectReadOnly for the intersection observer's root.
                        //     entry.boundingClientRect, // a DOMRectReadOnly for the intersection observer's target.
                        //     entry.intersectionRect,   // a DOMRectReadOnly for the visible portion of the intersection observer's target.
                        //     entry.intersectionRatio,  // the number for the ratio of the intersectionRect to the boundingClientRect.
                        //     entry.target,             // the Element whose intersection with the intersection root changed.
                        //     entry.isIntersecting     // intersecting: true or false
                        // ]);

                        if (entry.isIntersecting) {
                            this._handleVideoEnter();
                        }
                        else {
                            this._handleVideoLeave();
                        }
                    });
                },
                {
                    rootMargin: "-40% 0%",
                    threshold: 0.5
                }
            );
            this.videoObserver.observe(this.videoRef.current);
        }
    }

    componentWillUnmount() {
        this.videoObserver = this.videoObserver.disconnect();
    }

    componentDidUpdate(prevProps) {
        if (this.videoObserver && prevProps.manual !== this.props.manual) {
            this.videoObserver = this.videoObserver.disconnect();
        }
    }

    render() {
        return (
            <video
                id={`video-${this.props.id}`}
                ref={this.videoRef}
                preload="none"
                loop={true}
                className="dataList__video"
                onClick={!this.props.manual ? this.props.toggleManual : null}
                controls="controls">
                    <source
                        src={this.props.src} type="video/mp4"
                    />
            </video>
        )
    }
}

function mapStateToProps(state) {
    return {
        playedId: state.video.playedId,
        manual: state.video.manual
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addPlayedId: (id) => {
            dispatch(addPlayedIdAction(id));
        },
        removePlayedId: () => {
            dispatch(removePlayedIdAction());
        },
        toggleManual: () => {
            dispatch(toggleManualAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListVideo)