import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="top-footer">
                    <div className="container">
                        <ul className="list-logo">
                            <li className="fl">
                                <a title="Tuổi Trẻ" href="#" rel="nofollow" target="_blank">
                                    <img src='pc/img/Tuoi-tre-online.png' alt="logo tuổi trẻ "/>
                                </a>
                            </li>
                            <li className="fl">
                                <a title="" href="#" rel="nofollow" target="_blank">
                                    <img src='pc/img/LogoTTCT.png'alt=""/>
                                </a>
                            </li>
                            <li className="fl">
                                <a title="Tuổi trẻ TV" href="#" rel="nofollow" target="_blank">
                                    <img src='pc/img/Tuoi-tre-tv.png' alt="logo tuổi trẻ TV"/>
                                </a>
                            </li>
                        </ul>
                        <ul className="list-social list-social-bottom">
                            <li><a href="#" title=""><i className="fa fa-youtube-play" aria-hidden="true"/></a></li>
                            <li><a href="#" title=""><i className="fa fa-facebook" aria-hidden="true"/></a></li>
                            <li><a href="#" title=""><i className="fa fa-instagram" aria-hidden="true"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="container">
                        <a className="logo-footer" href="#" title="">
                            <img src='pc/img/logo-ttc-footer.svg'/>
                        </a>
                        <p className="fl">
                            <strong>Tuổi Trẻ Cười Online</strong> <br/>
                            © Copyright 2019 TuoiTreCuoi Online, All rights reserved <br/>
                            ® Tuổi Trẻ Cười Online giữ bản quyền nội dung trên website này
                        </p>
                        <p className="fr">
                            <a href="#" title="">Thông tin Tòa soạn</a> -
                            <a href="#" title="">Thông tin Thành Đoàn</a>
                            <br/>
                            Liên hệ Quảng cáo: <a href="tel:02839974848" title="">0283.997.4848</a> - Hotline: <a
                            href="tel:0918033133" title=""> 0918.033.133</a>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
