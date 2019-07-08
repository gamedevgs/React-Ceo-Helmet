import React, { Component } from 'react';
import Content_Detail from '../block/ttc_content_detail/Content_detail';
import Title_Detail from '../block/ttc_content_detail/Title_detail';
import Block_Quan_Tam from '../block/ttc_content_detail/Block_quan_tam';
import Comment from "../block/ttc_comment/Comment";
import BoxWriteCm from "../block/ttc_comment/Box_write_cm";
import SuggerBarHottag from "../block/ttc_ultils/Sugger_bar_hottag";
import SuggerBarCategory from "../block/ttc_ultils/Sugger_bar_category";

class detail extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {

    }
    render() {
        let params = this.props.match.params;
        // console.log(params.id);
        return (
            <div className="main">
                <div className="container">

                   <SuggerBarHottag/>
                   <SuggerBarCategory icons="icon icon-news" name="Tin tức"/>

                    <div className="row-1">
                        <div className="box-665">
                            <Title_Detail />
                            <span className="line-border-solid" />
                        </div>
                    </div>
                    <div className="row-1 scrollToOne">
                        <div className="box-665">
                            <Content_Detail id={params.id} />
                            {/*COMMENT*/}
                            <Comment/>
                            <BoxWriteCm/>
                        </div>
                        <div className="box-300">
                            <div className="block-banner"><a href="#" ><img src="http://localhost:3000/img/banner-300x250.jpg"  /></a></div> <span className="line-border-s mar-20" />
                            <div className="block-subscibe mar-20">
                                <form className="frm-subscibe">
                                    <input type="text" className="txt-subscibe" placeholder="Email của bạn" />
                                    <button className="btn-subscibe">Nhận tin</button>
                                </form>
                                <h4><i className="icon icon-mail" /> Đọc những tin tức nóng nhất trên TTC</h4>
                                <p>Bạn sẽ nhận được các tin nổi bật trên TTC, nếu không muốn bạn có thể tắt bất cứ lúc nào.</p>
                            </div> <span className="line-border mar-20" />
                            <div className="block-bar">
                                <h3 className="title-note"><a href="#" >Đáng chú ý</a></h3>
                                <article className="art-bar-b">
                                    <a href="#"><img src="http://localhost:3000/img/photo/9-min.jpg"  /></a>
                                    <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                </article>
                                <article className="art-bar-s art-hori">
                                    <a href="#"><img src="http://localhost:3000/img/photo/8-min.jpg"  /></a>
                                    <div className="des">
                                        <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                    </div>
                                </article>
                                <article className="art-bar-s art-hori">
                                    <a href="#"><img src="http://localhost:3000/img/photo/7-min.jpg"  /></a>
                                    <div className="des">
                                        <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                    </div>
                                </article>
                                <article className="art-bar-s art-hori">
                                    <a href="#"><img src="http://localhost:3000/img/photo/6-min.jpg"  /></a>
                                    <div className="des">
                                        <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                    </div>
                                </article>
                            </div>
                            <div className="block-bar block-banner ui sticky one"><a href="#" ><img src="http://localhost:3000/img/banner-300x250.jpg"  /></a></div>
                        </div>
                    </div>
                    <Block_Quan_Tam />
                    <span className="line-border" />
                    <div className="block-enter">
                        <div className="outer">
                            <article className="art-enter art-b">
                                <a className="thumbs" href="#" ><img src="http://localhost:3000/img/photo/8-min.jpg" style={{}} /><i className="icon icon-video" /></a>
                                <div className="des">
                                    <h3 className="hasComment"><a href="#" >Hai Phượng giải nhiệt cơn khát phim hành động Việt</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h3>
                                    <a className="link-cat" >Nghe đồn là</a>
                                    <p>Được nhào nặn dưới bàn tay của vị đạo diễn tài năng trong dòng phim kinh dị Christopher B. Landon, nhà sản xuất đã khẳng định rằng Happy Death Day 2U.</p>
                                </div>
                            </article>
                            <div className="block-bar block-qc">
                                <a href="#"><img src="http://localhost:3000/img/banner-300x250.jpg"  /></a>
                            </div>
                        </div>
                        <div className="list-enter">
                            <div className="row">
                                <div className="col">
                                    <article className="art-enter-s"><a href="#" ><img src="http://localhost:3000/img/photo/2-min.jpg" /></a>
                                        <h3><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                                    </article>
                                </div>
                                <div className="col">
                                    <article className="art-enter-s"><a href="#" ><img src="http://localhost:3000/img/photo/1-min.jpg" /></a>
                                        <h3><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                                    </article>
                                </div>
                                <div className="col">
                                    <article className="art-enter-s"><a href="#" ><img src="http://localhost:3000/img/photo/3-min.jpg" /></a>
                                        <h3><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                                    </article>
                                </div>
                                <div className="col">
                                    <article className="art-enter-s"><a href="#" ><img src="http://localhost:3000/img/photo/4-min.jpg" /></a>
                                        <h3><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                                    </article>
                                </div>
                                <div className="col">
                                    <article className="art-enter-s"><a href="#" ><img src="http://localhost:3000/img/photo/5-min.jpg" /></a>
                                        <h3><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default detail