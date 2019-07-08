import React, { Component } from 'react';
import Comment from "../block/ttc_comment/Comment";
import BoxWriteCm from "../block/ttc_comment/Box_write_cm";
import axios from "axios";
var config = {
    headers: {
        'Authorization' : 'Bearer jx76-VNClfMIEZL9sewMJgz0boOHyOJvakUER8ne',
        'Req-From' : 'frontend'
    }
};
class detailVideo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        axios.get('https://apittc.tuoitre.vn/ttc/site?type=feature&slug=ttc-home&region=1', config)
            .then(function (response) {
            });
    }

    render() {
        return (
            <div className="main">
                <div className="container">
                    <h2 className="title">
                        <i className="icon icon-title-video" />
                        <div className="inner-title">
                            <h2><a href="#" >Videos</a></h2>
                            <ul className="list-cat">
                                <li><a href="#" >Cười xối xả</a></li>
                                <li><a href="#" >TV show</a></li>
                                <li><a href="#" >Show cười</a></li>
                            </ul>
                        </div>
                    </h2>
                </div>
                <div className="hightlight-media hightlight-dark">
                    <div className="container-1">
                        <div className="outer-media">
                            <section className="content">
                                <div className="inner-media">
                                    <div className="video-wrap">
                                        <div className="video">
                                            <div style={{backgroundColor: '#f6f6f6'}} className="media-content">
                                                <video id="video_72673" poster="https://static.tuoitrenews.vn/ttnew/r/2018/08/09/thumb-12-1533785196.png" style={{width: '100%'}} className="video-js vjs-default-skin vjs-big-play-centered">
                                                    <source src="https://static.tuoitrenews.vn/ttnew/r/2018/08/09/sand-boarding-1533785186.mp4" type="video/mp4" />
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="des">
                                    <h2>Thủ tướng: 'Giao đất 99 năm không phải mấu chốt của luật đặc khu'</h2>
                                    <div className="scrollToTwo">
                                        <div className="tool-date">
                                            <a className="author" href="#">Nguyễn Vinh</a>
                                            <span><i className="fa fa-clock-o" aria-hidden="true" /> 2 giờ trước</span>
                                        </div>
                                        <p>Bà Marlène Schiappa, quốc vụ khanh phụ trách vấn đề bình đẳng giới của Pháp, vừa đáp trả đề xuất "thiến hóa học" đối với những kẻ hiếp dâm rằng đó là biện pháp không hiệu quả.</p>
                                        <div className="tag-bar">
                                            <div className="tag"><a href="#" >cố thủ tướng</a> <a href="#" >Phan Văn Khải</a> <a href="#" >Quốc tang</a> <a href="#" >Cố thủ tướng</a></div>
                                        </div>
                                        <BoxWriteCm/>
                                        <Comment/>
                                        <ul className="tool ui sticky two">
                                            <li><span><i className="fa fa-facebook" aria-hidden="true" /></span></li>
                                            <li><span><i className="fa fa-twitter" aria-hidden="true" /></span></li>
                                            <li><span><i className="fa fa-envelope" aria-hidden="true" /></span></li>
                                            <li><span><i className="fa fa-print" aria-hidden="true" /></span></li>
                                            <li className="border-t"><span><i className="fa fa-heart" aria-hidden="true" /> </span>100</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <aside className="sidebar">
                                <h3 className="title-style">VIDEO TIẾP THEO</h3>
                                <div className="scroll-media mCustomScrollbar">
                                    <article className="art-bar-s art-hori playing">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">Đang chạy</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori watched">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">Đã xem</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" title>Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                    <article className="art-bar-s art-hori">
                                        <a href="#"><img src="img/photo/8-min.jpg"  /> <span className="tit time">10:20</span></a>
                                        <div className="des">
                                            <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        </div>
                                    </article>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default detailVideo;