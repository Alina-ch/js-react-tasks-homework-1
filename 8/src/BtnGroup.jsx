import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {leftBtn: false, rightBtn: false};
    }
   
    handleClickRightBtn = () => {
        this.setState((state) => ({rightBtn: true, leftBtn: false}));
    }
    handleClickLeftBtn = () => {
        this.setState((state) => ({leftBtn: true, rightBtn: false}));
    }
    render() {
        const leftBtnClass = cn (
            "btn", "btn-secondary", "left",
            this.state.leftBtn ? "active" : ""
        );
        const rightBtnClass = cn (
            "btn", "btn-secondary", "right",
            this.state.rightBtn ? "active" : ""
        );
        return (
        <div className="btn-group" role="group">
            <button type="button" onClick={this.handleClickLeftBtn} className={leftBtnClass}>Left</button>
            <button type="button" onClick={this.handleClickRightBtn} className={rightBtnClass}>Right</button>
        </div>
        );
    }
}
// END
