import React, { Component } from 'react';
import {connect} from "react-redux";

class Title_detail extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    };

    render() {
        let detail = this.props.detail ? this.props.detail : '';
        console.log(detail.cate_name);
        return (
            <article className="art-header">
                <h1>{detail.title}</h1>
                <div className="tool-date">
                    <a className="link-cate" href="#">{detail.cate_name}</a>
                    <span><i className="fa fa-clock-o" aria-hidden="true" /> 2 giờ trước</span>
                </div>
            </article>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        detail : state.home[0].detail
    }
};

export default connect(mapStateToProps, null)(Title_detail);