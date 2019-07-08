import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionHome";
import Slider from "react-slick";
const TtcHelper = require(`./../../../../../common/TtcHelper`);
const siteConfig = require(`./../../../../../siteConfig`);

const settings = {
    infinite: true,
    autoplay: true,
    speed: 3200,
    slidesToShow: 1,
    slidesToScroll: 1
};

class Biem_hoa_news_home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        this.props.onLoadBiemHoaNew()
    };

    slider() {
        if (this.props.biem_hoa_news) {
            let data = this.props.biem_hoa_news.ttc_custom_list[0].horizontal_2_6.data.list_prior,
            resource = data[0].resources[0][0].resource_content;
            // eslint-disable-next-line array-callback-return
            return resource.map((object, index) => {
                if(object.resource_type === 'image') {
                    return (
                        <div key={index}>
                            <a className="thumb" href="#"><img src={TtcHelper.ThumbImg(object.resource_path,"")} alt={object.title}/></a>
                        </div>
                    )
                }
            })
        }
    }

    relatedObject(object) {
        if (object) {
            return (
                <article className="art-s">
                    <h4><a href="#" title="">{object['object_title']}</a></h4>
                </article>
            )
        }
    }

    list() {
        if (this.props.biem_hoa_news) {
            let data = this.props.biem_hoa_news.ttc_custom_list[0].horizontal_2_6.data.list_newest;
            // eslint-disable-next-line array-callback-return
            return data.map((object,index) => {
                if (index === 0) {
                    // let icon = object.video_link ? "icon con-video" : "";
                    let related_object = object['related_objects'][0] ? object['related_objects'][0] : '';
                    let termName = object['term_primary'] ? TtcHelper.getTermById(object['term_primary'])['name'] : '';
                    return (
                        <article key={index} className="art-lastest art-b">
                            <a href="#" title={object.object_title}><img src={TtcHelper.ThumbImg(object.object_thumbnail,"s300")} /><i
                                className="{icon}"/></a>
                            <div className="des">
                                <h4 className="hasComment"><a href="#" title="">{object.object_title}</a> <span className="outer-icon"><span
                                    className="number">{object.comment_count}</span><i className="icon icon-comment"/></span>
                                </h4>
                                <a className="cat" href="#">{termName}</a>

                                {this.relatedObject(related_object)}

                            </div>
                        </article>
                    )
                }
                if (index > 0) {
                    // let icon = object.video_link ? "icon con-video" : "";
                    let termName = object['term_primary'] ? TtcHelper.getTermById(object['term_primary'])['name'] : '';
                    return (
                        <article key={index} className="art-lastest">
                            <a href="#" title={object.object_title}><img src={TtcHelper.ThumbImg(object.object_thumbnail,"s226")} /><i
                                className="{icon}"/></a>
                            <div className="des">
                                <h4><a href="#" title={object.object_title}>{object.object_title}</a></h4>
                                <a className="cat" href="#">{termName}</a>
                            </div>
                        </article>
                    )
                }
            })
        }
    }

    getTitle() {
        if (this.props.biem_hoa_news) {
            // eslint-disable-next-line array-callback-return
            return this.props.biem_hoa_news.map((object,index) => {
                if (index === 0) {
                    return (
                        <h3 key={index}><a href="#" title="">{object.title}</a></h3>
                    )
                }
            })
        }
    }

    render() {
        return (
            <div className="list-news">
                <article className="art-style">
                    <Slider className="slick-thumb" {...settings}>
                        {this.slider()}
                    </Slider>
                    <div className="des">
                        {/*{this.getTitle()}*/}
                        <a className="btn-viewmore" href="#" title="">Xem thêm <i
                            className="icon icon-viewmore"/></a>
                    </div>
                </article>
                {this.list()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        biem_hoa_news : state.home[0].origin_2
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadBiemHoaNew : () => {
            dispatch(action.list_origin_2());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Biem_hoa_news_home);