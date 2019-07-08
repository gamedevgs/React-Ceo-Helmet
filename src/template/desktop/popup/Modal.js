import React, {Component} from 'react';
import LoginForm from "./LoginForm";
import {
    BrowserRouter,
    Route,
    Link, NavLink
} from 'react-router-dom'
import RegForm from "./RegForm";
class Modal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade modal-login" id="resetPassModal" tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="modal-body">
                                <h4 className="title-modal">Quên mật khẩu</h4>
                                <form className="frm-general frm-update">
                                    <div className="form-group">
                                        <label>Nhập Email đăng ký</label>
                                        <input className="form-control" type="email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn-login" data-toggle="modal" data-target="#newPassModal" data-dismiss="modal">Gửi lại mật khẩu</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade modal-login" id="newPassModal" tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="modal-body">
                                <h4 className="title-modal">Thay đổi mật khẩu</h4>
                                <form className="frm-general">
                                    <div className="form-group">
                                        <label>Mật khẩu cũ</label>
                                        <input className="form-control" type="password" name="pass" />
                                    </div>
                                    <div className="form-group">
                                        <label>Mật khẩu mới</label>
                                        <input className="form-control" type="password" name="pass" />
                                    </div>
                                    <div className="form-group">
                                        <label>Nhập lại mật khẩu mới</label>
                                        <input className="form-control" type="password" name="pass" />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn-login">Đồng ý</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <LoginForm/>
                <RegForm/>
                <div className="modal fade" id="modalUpload" tabIndex={-1} role="dialog">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="modal-body">
                                <h3 className="title-modal">Tải lên một bài</h3>
                                <p className="text-center"><i>Chất lượng hình ảnh dưới 5MB</i></p>
                                <div className="block-upload row">
                                    <div className="col-sm-12">
                                        <a className="btn-upload-lib" title="true" data-toggle="modal" data-dismiss="modal" data-target="#modalInfo">
                <span><i className="fa fa-cloud-upload" aria-hidden="true" />
                  Chọn ảnh từ thư viện</span>
                                        </a>
                                    </div>
                                    <div className="col-sm-4">
                                        <a className="btn-url btn-img" data-toggle="modal" data-target="#modalUrl" data-dismiss="modal">
                <span><i className="fa fa-picture-o" aria-hidden="true" />
                  Dán đường dẫn <br />URL ảnh</span>
                                        </a>
                                    </div>
                                    <div className="col-sm-4">
                                        <a className="btn-url btn-video" href="#" data-toggle="modal" data-target="#modalUrl" data-dismiss="modal">
                <span><i className="fa fa-play-circle-o" aria-hidden="true" />
                  Dán đường dẫn <br />URL Video</span>
                                        </a>
                                    </div>
                                    <div className="col-sm-4">
                                        <a className="btn-url btn-video" href="#" data-toggle="modal" data-target="#modalUrl" data-dismiss="modal">
                <span><i className="fa fa-file-text-o" aria-hidden="true" />
                  Tải lên bài viết</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalUrl" tabIndex={-1} role="dialog">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="modal-body">
                                <h3 className="title-modal">Tải lên đường dẫn</h3>
                                <form className="frm-general">
                                    <div className="form-group">
                                        <label>Đường dẫn</label>
                                        <input className="form-control" type="text" placeholder="http:/" />
                                    </div>
                                    <p className="rule">Khi bấm "Đăng ký" đồng thời bạn đã đồng ý với <a href="#"><strong>điều khoản</strong></a> của tòa soạn</p>
                                    <div className="form-group text-center">
                                        <img src="img/capcha.jpg" alt="img" />
                                    </div>
                                    <div className="outer-btn-social">
                                        <div className="col">
                                            <a className="btn-cancel-1" href="#" title="true">Quay lại</a>
                                        </div>
                                        <div className="col">
                                            <a className="btn-send-1" href="#" title="true">Gửi</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalInfo" tabIndex={-1} role="dialog">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="modal-body">
                                <h3 className="title-modal">Thông tin bài của bạn</h3>
                                <form className="frm-general">
                                    <div className="form-group">
                                        <label>Tựa đề bài</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>Dán nhãn</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <input type="checkbox" /> Bài viết có tính nhạy cảm
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" /> Bạn là chủ nhân của bài gốc
                                        </label>
                                    </div>
                                    <p className="rule">Khi bấm "Đăng ký" đồng thời bạn đã đồng ý với <a href="#"><strong>điều khoản</strong></a> của tòa soạn</p>
                                    <div className="form-group text-center">
                                        <img src="img/capcha.jpg" alt="img" />
                                    </div>
                                    <div className="outer-btn-social">
                                        <div className="col">
                                            <a className="btn-cancel-1" href="#" title="true">Quay lại</a>
                                        </div>
                                        <div className="col">
                                            <a className="btn-send-1" href="#" title="true">Gửi</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Modal;