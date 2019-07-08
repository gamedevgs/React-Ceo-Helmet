import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionHome";
import axios from 'axios';

const TtcHelper = require(`./../../../../../common/TtcHelper`);


class Most_view_home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentWillMount() {
        this.props.onLoadMostView()
    };

    listMostView() {
        if (this.props.most_view) {
            let data = this.props.most_view.ttc_custom_list[0];
            // eslint-disable-next-line array-callback-return
            return data.map((object, index) => {
                if (index === 0) {
                    return (
                        <article key={index} className="art-bar-b">
                            <a href="#"><img src={TtcHelper.ThumbImg(object.object_thumbnail,"s300")} alt={object.title}/></a>
                            <h4><a href="#" title={object.object_title}>{object.object_title}</a></h4>
                        </article>
                    )
                }
                if (index > 0) {
                    return (
                        <article key={index} className="art-bar-s art-hori">
                            <a href="#"><img src={TtcHelper.ThumbImg(object.object_thumbnail,"s226")} alt={object.title}/></a>
                            <div className="des">
                                <h4><a href="#" title={object.object_title}>{object.object_title}</a></h4>
                            </div>
                        </article>
                    )
                }

            })
        }
    }

    render() {
        return (
            <div className="block-bar ui sticky one">
                <h3 className="title-note"><a href="#" title="">Đáng chú ý</a></h3>
                <div className="inner-gray">
                    {this.listMostView()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        most_view : state.home[0].origin_3
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadMostView : () => {
            dispatch(action.list_origin_3());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Most_view_home);