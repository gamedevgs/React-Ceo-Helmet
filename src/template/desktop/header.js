import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-top">
                    <div className="container clearfix">
                        <ul className="list-logo-top">
                            <li className="fl">
                                <a title="Tuổi Trẻ" href="#" rel="nofollow" target="_blank">
                                    <img src='/pc/img/Tuoi-tre-online.png' alt="logo tuổi trẻ " />
                                </a>
                            </li>
                            <li className="fl">
                                <a title="Tuổi trẻ cuối tuần" href="#" rel="nofollow" target="_blank">
                                    <img src='pc/img/LogoTTCT.png' alt="logo tuổi trẻ TV"/>
                                </a>
                            </li>
                            <li className="fl">
                                <a title="Tuổi trẻ TV" href="#" rel="nofollow" target="_blank">
                                    <img src='pc/img/Tuoi-tre-tv.png' alt="logo tuổi trẻ TV"/>
                                </a>
                            </li>
                            <li className="link-login pull-right">
                                <i className="icon-user" /> <span>
                                    <a href="#login" data-toggle="modal" data-target="#registerModal" title="">Đăng ký</a> | <a href="#register" data-toggle="modal" data-target="#loginModal" title="">Đăng nhập</a></span></li>
                            <li className="pull-right">
                                <a title="Hot Line" href="tel:0918033133"><i aria-hidden="true" className="icon icon-call" />Hotline:
                                    0918.033.133
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-middle">
                    <div className="container clearfix">
                        <h1>
                            <a href="/" title="Tuổi Trẻ News" className="sprite-tvo logoheader">
                                <img src='pc/img/logo-ttc-pc.svg'alt=""/>
                            </a>
                        </h1>
                        <div id="search-frm" className="frm-search fr">
                            <input id="txtSearch" type="text" placeholder="Nhập nội dung cần tìm ..." className="txt-search"/>
                            <button className="btn-search"><i className="icon icon-search"/></button>
                        </div>
                        <ul className="list-social-top">
                            <li><a href="#" title=""><i className="fa fa-facebook" aria-hidden="true"/></a></li>
                            <li><a href="#" title=""><i className="fa fa-instagram" aria-hidden="true"/></a></li>
                            <li><a href="#" title=""><i className="fa fa-youtube-play" aria-hidden="true"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="header-menu ui sticky">
                    <div className="container">
                        <ul className="clearfix">
                            <li><Link to="/tin-tuc" title="ĐỜI CƯỜI">Tin tức</Link></li>
                            <li><Link to="/biem-hoa" title="GIẢI TRÍ">Biếm họa</Link></li>
                            <li><Link to="/video" title="VIDEO">Video</Link></li>
                            <li className="send"><Link className="btn-send" to="/user.html" title="">+ Gửi bài</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="banner-top">
                    <div className="container">
                        <img src='pc/img/banner-980x90.jpg' alt=""/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
