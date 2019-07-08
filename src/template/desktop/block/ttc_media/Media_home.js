import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "../../../../../actions/ActionHome";
import SuggerBarCategory from "../ttc_ultils/Sugger_bar_category";

const TtcHelper = require(`./../../../../../common/TtcHelper`);

class Media_home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentWillMount() {
        const script = document.createElement("script"),
            s0 = document.getElementsByTagName("script"),
            snode = s0[s0.length - 1];
        script.src = '//player.tuoitre.vn/player/static/playerInit.js';
        script.async = true;
        script.charset = 'UTF-8';
        snode.parentNode.insertBefore(script, snode);

        this.props.onLoadMedia()
    };

    listtag(list) {
        if(list !== null) {
            return list.map((object, index) => {
                let link_tag = '/chu-de/'+ object.tag_slug +'/'+object.id+'.html';
                return (
                    <a href={link_tag} title={object.tag_name} key={index}>{object.tag_name}</a>
                )
            });

        }

    }

    mediaPrimary() {
        if (this.props.media) {
            let data = this.props.media.ttc_media[0].list_primary.data;
            let tag = data.tags;
            let linkObject = '/'+data.object_slug+'/'+data.id+'.html';
            return (
                <article className="art-media">
                    <div className="inner-media">
                        <div className="video-wrap">
                            <div className="video">
                                <div style={{backgroundColor: '#f6f6f6'}} className="media-content">
                                    <div className="tt-vplayer-content">
                                        <video id="ttplayer_8"
                                               className="tt-vplayer video-js tt-vplayer-visibility"
                                               style={{ width: '100%' }}
                                               poster="https://video-thumbs.mediacdn.vn/vulm/demo-ttc.jpg"
                                            // data-vid="https://static.tuoitrenews.vn/ttnew/r/2018/08/09/sand-boarding-1533785186.mp4" />
                                               data-m3u8="https://hls.mediacdn.vn/vulm/demo-ttc.mp4/master.m3u8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="des">
                        <h1><a href={linkObject}>{data.object_title}</a></h1>
                        <ul className="list-tool">
                            <li><a href="#" title="">{TtcHelper.getTermById(data.term_primary)['name']}</a></li>
                            <li><a href="#" title="">{data.object_author_name}</a></li>
                        </ul>
                        <p>{data.object_excerpt}</p>
                        <div className="tag">
                            {this.listtag(tag)}
                        </div>
                        <ul className="list-social-1 list-cm">
                            <li><iframe src="iframe/like_new-18.html" style={{width: '62px', height: '31px'}} /></li>
                            <li className="outer-share">
                                <i className="icon icon-share" aria-hidden="true" /> 100
                                <div className="block-share">
                                    <h5>Chia sẻ trên</h5>
                                    <a className="facebook" href="#" ><i className="fa fa-facebook-official" aria-hidden="true" /> Facebook</a>
                                    <a className="facebookmes" href="#" ><i className="icon-messenger" /> Facebook messenger</a>
                                </div>
                            </li>
                            <li className="text-cm">
                                <textarea placeholder="Viết bình luận" />
                            </li>
                        </ul>
                        <div className="s-comment">
                            <div className="inner">
                                <a className="thumbs" href="#"><img src={TtcHelper.imgUrl('user.jpg')} alt=""/></a>
                                <div className="des">
                                    <div className="cmt-content"><span><strong>Văn Quân</strong></span> The
                                        typhoon is forecast to weaken into a tropical depression depression ...
                                        <div className="tool-like">
                                                    <span className="like"><i className="fa fa-heart-o"
                                                                              aria-hidden="true"/> 245</span> <span
                                            className="reply"> Trả lời</span> <span className="count">Xem tất cả bình luận</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            )
        }
    }

    listMedia() {
        if (this.props.media) {
            let data = this.props.media.ttc_media[0].list_newest;
            return data.map((object, index) => {
                return (
                    <div className="col-sm-3" key={index}>
                        <article className="art-video-top"><a className="thumb" href="/ttc/video/20190521/the-greatest-showman-never-enough-bai-hat-cham-toi-trai-tim-nguoi-nghe/512.html" title=""><img
                            src={TtcHelper.ThumbImg(object.object_thumbnail,"s226")}/><span className="tit time">10:45</span></a>
                            <h3><a href="#">{object.object_title}</a></h3>
                        </article>
                    </div>
                )
            })
        }
    }

    tag() {
        if(this.props.media) {
            return this.props.media.ttc_media[0].list_primary.tags_term;
        }

    }

    render() {
        return (
            <div className="block-video">
                <SuggerBarCategory icons="icon icon-title-video" name="Videos" tag={this.tag()}/>
                {this.mediaPrimary()}
                <div className="row">
                    {this.listMedia()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        media : state.home[0].origin_4
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadMedia : () => {
            dispatch(action.list_origin_4());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Media_home);