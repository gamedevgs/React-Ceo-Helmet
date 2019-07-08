import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionHome";
import axios from 'axios';
import SuggerBarCategory from "../ttc_ultils/Sugger_bar_category";

const TtcHelper = require(`./../../../../../common/TtcHelper`);

class Giai_tri_news_home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    listPrior() {
        if (this.props.giai_tri) {
            let data = this.props.giai_tri.ttc_custom_list[1].vertical_3.data.list_prior[0];
            let related_object = data['related_objects'][0] ? data['related_objects'][0] : '';
            return (
                <article className="art-enter art-b">
                    <a className="thumbs" href="#" title=""><img src={TtcHelper.ThumbImg(data.object_thumbnail, "s626")} />
                        {/*<i className={object.cate_name[0] === 'media' ? 'icon icon-video' : ''}/>*/}
                    </a>
                    <div className="des">
                        <h3 className="hasComment"><a href="#" title="">{data.object_title}</a> <span className="outer-icon"><span
                            className="number">43</span><i className="icon icon-comment"/></span></h3>
                        <a className="link-cat" href="">{TtcHelper.getTermById(data.term_primary)['name']}</a>
                        <p>{data.object_excerpt}</p>
                        <article className="art-s">
                            <h4><a href="#" title="">{related_object['object_title']}</a>
                            </h4>
                        </article>
                    </div>
                </article>
            )
        }
    }

    listNewest() {
        if (this.props.giai_tri) {
            let data = this.props.giai_tri.ttc_custom_list[1].vertical_3.data.list_newest;

            // eslint-disable-next-line array-callback-return
            return data.map((object, index) => {
                return (
                    <div className="col" key={index}>
                        <article className="art-enter-s"><a href="" title=""><img
                            src={TtcHelper.ThumbImg(object.object_thumbnail, "s226")}/></a>
                            <h3><a href="#">{object.object_title} </a></h3>
                        </article>
                    </div>
                )
            })
        }

    }

    tag() {
        if(this.props.giai_tri) {
            return this.props.giai_tri.ttc_custom_list[1].vertical_3.data.list_tag;
        }
    }

    render() {
        return (
            <div className="block-enter">
                <SuggerBarCategory icons="icon icon-enter" name='Giải trí' tag={this.tag()}/>
                <div className="outer">
                    {this.listPrior()}
                    <div className="block-bar block-qc">
                        <a href="#"><img src={TtcHelper.imgUrl('banner-300x250.jpg')} alt=""/></a>
                    </div>
                </div>
                <div className="list-enter">
                    <div className="row">
                        {this.listNewest()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        giai_tri : state.home[0].origin_4
    }
};

export default connect(mapStateToProps, null)(Giai_tri_news_home);