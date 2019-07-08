import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionDetail";
import { Link } from "react-router-dom";
import axios from 'axios';
import Slider from "react-slick";

const TtcHelper = require(`./../../../../../common/TtcHelper`);

class Block_quan_tam extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
            this.props.onLoadBlockQuanTam()
    };

    listQuanTam() {
        if (this.props.quan_tam) {
            return this.props.quan_tam.map((object, index) => {
                return (
                    <div className="col">
                        <article className="art-enter-s"><Link to={`/ttc/tin-tuc/song-tre/20190523/an-dat/${object.object_id}.html`} ><img src={object.thumb_link} /></Link>
                            <h3><a href="#">{object.title}</a></h3>
                        </article>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className="list-enter">
                <h3 className="title-style">Có thể bạn quan tâm</h3>
                <div className="row">
                    {this.listQuanTam()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quan_tam : state.detail[0].quan_tam
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadBlockQuanTam : () => {
            dispatch(action.block_quan_tam());
        },

        onLoadContentDetail : (id) => {
            dispatch(action.content_detail(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Block_quan_tam);