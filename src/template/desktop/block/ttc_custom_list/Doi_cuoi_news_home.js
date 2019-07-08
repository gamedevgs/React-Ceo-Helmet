import React, { Component } from 'react';
import {connect} from "react-redux";
import SuggerBarCategory from "../ttc_ultils/Sugger_bar_category";

const TtcHelper = require(`./../../../../../common/TtcHelper`);

class Doi_cuoi_news_home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    listPrior() {
        if (this.props.doi_cuoi) {
            let data = this.props.doi_cuoi.ttc_custom_list[0].horizontal_2.data.list_prior[0];
            let related_object = data['related_objects'][0] ? data['related_objects'][0] : '';
            return (
                <article className="art-lastest art-b">
                    <a href="#" title=""><img src={TtcHelper.ThumbImg(data.object_thumbnail, "s300")}/>
                        {/*<i className={object.cate_name[0] === 'media' ? 'icon icon-video' : ''}/>*/}
                    </a>
                    <div className="des">
                        <h4 className="hasComment"><a href="#" title="">{data.object_title}</a> <span className="outer-icon"><span
                            className="number">43</span><i className="icon icon-comment"/></span>
                        </h4>
                        <a className="cat" href="#">{TtcHelper.getTermById(data.term_primary)['name']}</a>
                        <article className="art-s">
                            <h4><a href="#" title="">{related_object['object_title']}</a></h4>
                        </article>
                    </div>
                </article>
            )
        }
    }

    listNewest() {
        if (this.props.doi_cuoi) {
            let list_newest =this.props.doi_cuoi.ttc_custom_list[0].horizontal_2.data.list_newest;
            // eslint-disable-next-line array-callback-return
            return list_newest.map((object, index) => {
                return (
                    <article className="art-lastest" key={index}>
                        <a href="#" title=""><img src={TtcHelper.ThumbImg(object.object_thumbnail, "s226")} />
                            {/*<i className={object.cate_name[0] === 'media' ? 'icon icon-video' : ''}/>*/}
                        </a>
                        <div className="des">
                            <h4 className="hasComment"><a href="#" title={object.object_title}>{object.object_title}</a> <span className="outer-icon"><span
                                className="number">43</span><i className="icon icon-comment"/></span>
                            </h4>
                            <a className="cat" href="#">{TtcHelper.getTermById(object.term_primary)['name']}</a>
                            <p>{object.object_excerpt}</p>
                        </div>
                    </article>
                )
            })
        }
    }

    tag() {
        if(this.props.doi_cuoi) {
            return this.props.doi_cuoi.ttc_custom_list[0].horizontal_2.data.list_tag;
        }

    }

    render() {
        return (
            <div className="block-laugh">
            <SuggerBarCategory icons="icon icon-laugh" name="Đời cười" tag={this.tag()}/>
                <div className="outer scrollToTwo">
                    <section className="content">
                        <div className="list-news">
                            {this.listPrior()}
                            {this.listNewest()}
                        </div>
                    </section>
                    <aside className="sidebar">
                        <div className="block-bar block-qc ui sticky two">
                            <a href="#"><img src={TtcHelper.imgUrl('banner-300x600.jpg')} alt=""/></a>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        doi_cuoi : state.home[0].origin_4
    }
};

export default connect(mapStateToProps, null)(Doi_cuoi_news_home);