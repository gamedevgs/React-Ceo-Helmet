import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../actions/ActionHome";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {TtcHelper} from "../../../../common/TtcHelper";


const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2200,
    slidesToShow: 3,
    slidesToScroll: 3
};

class FeaturedNewsHome extends Component {

    componentDidMount() {
        this.props.onLoadFeaturedNew();
    };
    RenderArtTop1() {
        if (this.props.featured_news!==null) {
            return this.props.featured_news.ttc_featured_news[0].list_order_1.map((v, k) => {
                return (
                    <a key={k} className="art-top-1" key={k}>
                        <Link className="thumb"
                              to={`/${v.object_slug}/${v.id}.html`}
                              title="">
                            <img src={TtcHelper.ThumbImg(v.object_thumbnail,"s475")} alt={v.object_title}/>
                        </Link>
                        <h1 className="hasComment">
                            <Link to={`/${v.object_slug}/${v.id}.html`} title={v.object_title}>
                                {v.object_title}
                            </Link>
                            <span className="outer-icon"><span
                            className="number">{v.object_comment_count}</span><i className="icon icon-comment"/></span></h1>
                        <p>{v.object_excerpt}</p>
                    </a>
                )
            })
        }

    };
    RenderArtTop2() {
        if (this.props.featured_news!==null) {
            return this.props.featured_news.ttc_featured_news[0].list_order_2.map((v, k) => {
                return (
                    <article className="art-top-2" key={k}>
                        <Link className="thumb"   to={`/${v.object_slug}/${v.id}.html`} title={v.object_title}>
                            <img src={TtcHelper.ThumbImg(v.object_thumbnail,"s1852")} alt={v.object_title}/>
                        </Link>
                        <h2 className="hasComment">
                            <Link to={`/${v.object_slug}/${v.id}.html`} title={v.object_title}>
                                {v.object_title}
                            </Link>
                            <span className="outer-icon"><span className="number">{v.object_comment_count}</span><i
                            className="icon icon-comment"/></span></h2>
                    </article>
                );
            })
        }
    };
    RenderSlider() {
        if (this.props.featured_news!==null) {
            return this.props.featured_news.ttc_featured_news[0].list_order_3.map((v, k) => {
                return (
                        <div className="slide_item" key={k} >
                            <article className="art-slider">
                                <Link className="thumb"   to={`/${v.object_slug}/${v.id}.html`} title={v.object_title}>
                                    <img src={TtcHelper.ThumbImg(v.object_thumbnail,"s226")} alt={v.object_title}/>
                                </Link>
                                <h3 className="hasComment">
                                    <Link to={`/${v.object_slug}/${v.id}.html`} title={v.object_title}>
                                        {v.object_title}
                                    </Link>
                                    <span className="outer-icon"><span
                                    className="number">{v.object_comment_count}</span><i className="icon icon-comment"/></span>
                                </h3>
                            </article>
                     </div>
                );
            })
        }
    };
    RenderHottag() {
        if (this.props.featured_news!==null) {
            return this.props.featured_news.ttc_utils[0].list.map((v, k) => {
                return (<li key={k}>
                            <Link to={TtcHelper.to_slug(v.tag_link)} title={v.tag_name}>
                                {v.tag_name}
                            </Link>
                        </li>
                );
            })
        }
    };
    render() {
        return (
            <div>
                <div className="suggest-bar">
                    <ul className="subMenu-bottom">
                        <li><a href="javascript:void(0)" rel="nofollow" title="Breaking news"
                               className="icon-direction"> </a></li>
                        {/*{this.RenderHottag()}*/}
                    </ul>
                </div>
                <div className="outer outer-top">
                    {/* Begin block featured of home */}
                    <section className="content">
                        <div className="block-top">
                            {/*{this.RenderArtTop1()}*/}
                            {/*{this.RenderArtTop2()}*/}
                        </div>
                        <div className="outer-slider">
                            <Slider className="slider single-top" {...settings} >
                                {/*{this.RenderSlider()}*/}
                            </Slider>
                        </div>
                    </section>
                    {/* End block featured of home */}
                    <aside className="sidebar">
                        <div className="block-bar block-qc">
                            <a href="#"><img src={TtcHelper.imgUrl('banner-300x600.jpg')} alt=""/></a>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        featured_news : state.home[0].origin_1
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadFeaturedNew : () => {
            dispatch(action.list_origin_1());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedNewsHome);
