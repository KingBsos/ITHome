import React, { createRef, } from 'react';
import Navbar from '../Navbar';
import cn from './index.module.css';

let x = 0;

class NavbarMoveEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            translateX: 0,
            ulRef: createRef()
        }
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onWheel = this.onWheel.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.compareOffset = this.compareOffset.bind(this);
    }
    onMouseDown() {
        document.body.addEventListener('mousemove', this.onMouseMove);
        document.body.addEventListener('mouseup', this.onMouseUp)
    }
    onMouseUp() {
        document.body.removeEventListener('mousemove', this.onMouseMove);
        document.body.removeEventListener('mouseup', this.onMouseUp);
        let { ulRef, translateX } = this.state;
        let temp = ulRef.current.offsetWidth - ulRef.current.scrollWidth;
        if (translateX > 0) {
            let timer = setInterval(() => {
                this.setState((state) => {
                    let data = state.translateX;
                    data = Math.floor(data * 0.15);
                    if (data === 0) {
                        clearInterval(timer);
                    }
                    return {
                        translateX: state.translateX - data
                    };
                });
            }, 16);
        } else if (translateX < temp) {
            let timer = setInterval(() => {
                this.setState((state) => {
                    let data = temp - state.translateX;
                    data = Math.floor(data * 0.1);
                    if (data === 0) {
                        clearInterval(timer);
                    }
                    return {
                        translateX: state.translateX + data
                    };
                });
            }, 16);
        }
    }
    onMouseMove(event) {
        let x = event.movementX;
        this.setState((state) => {
            return {
                translateX: state.translateX + x
            }
        });
    }
    compareOffset(offset) {
        let {state: { ulRef }} = this;
        let temp = ulRef.current.offsetWidth - ulRef.current.scrollWidth;
        if(offset > 0) offset = 0;
        else if(offset < temp) offset = temp;
        this.setState({
            translateX: offset
        });
    }
    onWheel(event) {
        let { state: { translateX }, compareOffset } = this;
        let num = translateX - event.deltaY * 0.5;
        compareOffset(num);
    }
    onTouchStart(event) {
        x = event.touches[0].clientX;
    }
    onTouchMove(event) {
        let ex = event.touches[0].clientX - x;
        x = event.touches[0].clientX;
        this.setState(({ translateX }) => {
            return {
                translateX: translateX + ex
            }
        });
    }
    onTouchEnd() {
        let { ulRef, translateX } = this.state;
        let temp = ulRef.current.offsetWidth - ulRef.current.scrollWidth;
        if (translateX > 0) {
            let timer = setInterval(() => {
                this.setState((state) => {
                    let data = state.translateX;
                    data = Math.floor(data * 0.15);
                    if (data === 0) {
                        clearInterval(timer);
                    }
                    return {
                        translateX: state.translateX - data
                    };
                });
            }, 16);
        } else if (translateX < temp) {
            let timer = setInterval(() => {
                this.setState((state) => {
                    let data = temp - state.translateX;
                    data = Math.floor(data * 0.1);
                    if (data === 0) {
                        clearInterval(timer);
                    }
                    return {
                        translateX: state.translateX + data
                    };
                });
            }, 16);
        }
    }
    render() {
        let { props: { className, ...rest }, state: { translateX, ulRef },
            onMouseDown, onWheel, onTouchStart, onTouchMove, onTouchEnd } = this;
        let containerClass = `${className} ${cn['container']}`;
        return (
            <div className={containerClass}>
                <Navbar ref={ulRef} {...rest} style={{ transform: `translate(${translateX}px)` }}
                    {...{ onMouseDown, onWheel, onTouchStart, onTouchMove, onTouchEnd }} />
            </div>
        );
    }
}

export default NavbarMoveEvent;