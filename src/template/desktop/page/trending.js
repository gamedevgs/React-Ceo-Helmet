import React, {Component} from 'react';
import Most_View_Home from "../block/ttc_custom_list/Most_view_home";

class Trending extends Component {
    constructor(props) {
        super(props);

    }
    BtnXemThem =()=>{

    }
    render() {
        return (
            <div className="main">
                <div className="container">
                    <h3 className="title-style">Sự kiện</h3>
                    <div className="banner-event" style={{background: 'url(img/photo/4-min.jpg) center no-repeat', backgroundSize: 'cover'}}>
                    </div>
                    <h4 className="title-event">Chấn hưng văn hóa đi chùa</h4>
                    <span className="line-border" />
                    <div className="outer outer-mid scrollToOne">
                        <section className="content">
                            <div className="list-news">
                                <article className="art-lastest">
                                    <div className="date-art">
                                    <span> <strong>Thứ 2</strong>
                                        25/2</span>
                                    </div>
                                    <a href="#" title><img src="img/photo/3-min.jpg" style={{}} /><i className="icon icon-video" /></a>
                                    <div className="des">
                                        <h4><a href="#" title>Hai Phượng giải nhiệt cơn khát phim hành động Việt nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                        <a className="cat" href="#">Thời sự</a>
                                        <p>TTO - Văn phòng Tổng thống Hàn Quốc lập luận: tất cả các bên liên quan trong cuộc chiến Triều Tiên đều đã thừa nhận cuộc chiến kết thúc bằng việc thiết lập trật tự mới</p>
                                    </div>
                                </article>

                                <div className="tool-bar">
                                    <button onClick={()=>this.BtnXemThem()} type="button" className="btn-date btn-more">Xem thêm <i aria-hidden="true" className="fa fa-angle-down" /></button>
                                </div>
                            </div>
                        </section>
                        <aside className="sidebar">
                            {/* Begin block most view of home */}
                            <Most_View_Home />
                            {/* End block most view home */}
                        </aside>
                    </div>
                    <span className="line-border" />
                    <div className="block-event">
                        <h3 className="title-style">Sự kiện khác</h3>
                        <div className="row">
                            <div className="col-md-4">
                                <article className="art-enter-s art-event"><a href="#" title><img src="img/photo/2-min.jpg" /></a>
                                    <h3><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trending;