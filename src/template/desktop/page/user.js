import React, { Component } from 'react';

class user extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <div className="container">
                        <div className="outer outer-top scrollToOne">
                            <div className="rightbar">
                                <div className="user-top">
                                    <div className="icon">
                                        <div className="avatar-upload">
                                            <div className="avatar-edit">
                                                <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                                                <label htmlFor="imageUpload" title="thay avatar" />
                                            </div>
                                            <div className="avatar-preview">
                                                <div id="imagePreview" style={{backgroundImage: 'url(img/user.jpg)'}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-user">
                                        <h4><a href="#" >Ngọc Thanh</a></h4>
                                        <span>Tham gia: 26.02.2019</span>
                                        <span>Trạng thái: đã duyệt</span>
                                        <span>Giới tính: không xác định</span>
                                    </div>
                                    <a className="btn-setup" href="#" />
                                </div>
                            </div>
                            <div className="left-bar">
                                <div className="inner-bar scrollToTwo">
                                    <div className>
                                        <nav className="user-tab">
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link active" id="nav-send-tab" data-toggle="tab" href="#nav-send" role="tab" aria-controls="nav-send" aria-selected="false">Gửi bài</a>
                                                <a className="nav-item nav-link" id="nav-sent-tab" data-toggle="tab" href="#nav-sent" role="tab" aria-controls="nav-sent" aria-selected="false">Bài đã duyệt</a>
                                                <a className="nav-item nav-link" id="nav-cm-tab" data-toggle="tab" href="#nav-cm" role="tab" aria-controls="nav-cm" aria-selected="true">Bình luận của bạn</a>
                                                <a className="nav-item nav-link" id="nav-setup-tab" data-toggle="tab" href="#nav-setup" role="tab" aria-controls="nav-setup" aria-selected="false">Cài đặt tài khoản</a>
                                            </div>
                                        </nav>
                                        <div className="tab-content tab-user" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-send" role="tabpanel" aria-labelledby="nav-send-tab">
                                                <div className="inner-tab">
                                                    <form className="frm-general frm-update">
                                                        <div className="form-group display-error">
                                                            <label>Tiêu đề *</label>
                                                            <input type="text" name className="form-control" />
                                                            <span className="has-error">Vui lòng nhập tựa bài</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Nội dung *</label>
                                                            <textarea className="form-control" placeholder="Viết nội dung của bạn ở đây, không quá 300 ký tự" defaultValue={""} />
                                                            <span className="has-error">Vui lòng nhập dán nhãn</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>File đính kèm</label>
                                                            <input className="file-upload" type="file" name="upload" accept />
                                                            <span className="has-error">Vui đính kèm file</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>
                                                                <input type="checkbox" name /> Bài viết có tính nhạy cảm
                                                            </label>
                                                            <br />
                                                            <label>
                                                                <input type="checkbox" name /> Bạn là chủ nhân của bài gốc
                                                            </label>
                                                            <br />
                                                            <label className="rule display-error">
                                                                <input type="checkbox" name /> Khi bấm "Đăng ký" đồng thời bạn đã đồng ý với <a href="#"><strong>điều khoản</strong></a> của tòa soạn
                                                                <span className="has-error">Vui lòng đồng ý với đều khoản của tòa soạn</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <button className="btn-cancel" type="button">Hủy bỏ</button>
                                                            <button className="btn-send" type="button">Gửi</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-sent" role="tabpanel" aria-labelledby="nav-sent-tab">
                                                <div className="inner-tab">
                                                    <div className="block-post">
                                                        <article className="art-post">
                                                            <h4>Kinh hoàng gặp tử thần</h4>
                                                            <span className="time">Gửi ngày: 25.05.2019</span>
                                                            <div className="row">
                                                                <figure className="col">
                                                                    <img src="img/photo/11-min.jpg" alt />
                                                                </figure>
                                                                <figure className="col">
                                                                    <img src="img/photo/11-min.jpg" alt />
                                                                </figure>
                                                                <figure className="col">
                                                                    <img src="img/photo/11-min.jpg" alt />
                                                                </figure>
                                                            </div>
                                                        </article>
                                                        <article className="art-post">
                                                            <h4>Mê tín và chánh tín</h4>
                                                            <span className="time">Gửi ngày: 25.05.2019</span>
                                                            <div className="post">
                                                                <div className="post-file">
                                                                    <i className="icon icon-file-w" />
                                                                    <span>abc.doc</span>
                                                                </div>
                                                                <div className="post-file">
                                                                    <i className="icon icon-file-pdf" />
                                                                    <span>abc.pdf</span>
                                                                </div>
                                                            </div>
                                                        </article>
                                                        <article className="art-post">
                                                            <h4>Mê tín và chánh tín</h4>
                                                            <span className="time">Gửi ngày: 25.05.2019</span>
                                                            <div className="post">
                                                                <div className="post-url">
                                                                    <input type="text" name defaultValue="https://tuoitre.vn/" readOnly />
                                                                </div>
                                                            </div>
                                                        </article>
                                                        <div className="tool-bar">
                                                            <button type="button" className="btn-date btn-more">Xem thêm <i aria-hidden="true" className="fa fa-angle-down" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-cm" role="tabpanel" aria-labelledby="nav-cm-tab">
                                                <div className="inner-tab">
                                                    <ul className="list-sort">
                                                        <li>
                                                            <span>Ngày</span>
                                                            <a className="btn-sort active" href="#"><i className="fa fa-angle-down" aria-hidden="true" /></a>
                                                            <a className="btn-sort" href="#"><i className="fa fa-angle-up" aria-hidden="true" /></a>
                                                        </li>
                                                        <li>
                                                            <span>Thích</span>
                                                            <a className="btn-sort" href="#"><i className="fa fa-angle-down" aria-hidden="true" /></a>
                                                            <a className="btn-sort" href="#"><i className="fa fa-angle-up" aria-hidden="true" /></a>
                                                        </li>
                                                    </ul>
                                                    <div className="list-cm-1">
                                                        <article className="art-cm">
                                                            <i className="icon icon-comment" />
                                                            <div className="tool-like">
                                                                <span className="date">10:00 | 23.5.2018</span>
                                                                <span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span>
                                                                <span className="count">trả lời 0</span>
                                                            </div>
                                                            <p> Ngôi nhà của ông Nguyễn Hữu Linh - cựu phó viện trưởng Viện KSND TP Đà Nẵng - nằm trên đường Lê Lợi (Q.Hải Châu, TP Đà Nẵng) đã bị ném chất bẩn, xịt sơn lên tường rào vào tối qua (4-4). Sáng nay, người nhà ông Linh đã cho sơn lại cửa</p>
                                                            <h4><a href="#" >Ngôi nhà của ông Nguyễn Hữu Linh - cựu phó viện trưởng Viện KSND TP Đà Nẵng</a></h4>
                                                        </article>
                                                        <article className="art-cm">
                                                            <i className="icon icon-comment" />
                                                            <div className="tool-like">
                                                                <span className="date">10:00 | 23.5.2018</span>
                                                                <span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span>
                                                                <span className="count">trả lời 0</span>
                                                            </div>
                                                            <p> Ngôi nhà của ông Nguyễn Hữu Linh - cựu phó viện trưởng Viện KSND TP Đà Nẵng - nằm trên đường Lê Lợi (Q.Hải Châu, TP Đà Nẵng) đã bị ném chất bẩn, xịt sơn lên tường rào vào tối qua (4-4). Sáng nay, người nhà ông Linh đã cho sơn lại cửa</p>
                                                            <h4><a href="#" >Ngôi nhà của ông Nguyễn Hữu Linh - cựu phó viện trưởng Viện KSND TP Đà Nẵng</a></h4>
                                                        </article>
                                                        <article className="art-cm">
                                                            <i className="icon icon-comment" />
                                                            <div className="tool-like">
                                                                <span className="date">10:00 | 23.5.2018</span>
                                                                <span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span>
                                                                <span className="count">trả lời 0</span>
                                                            </div>
                                                            <p> Ngôi nhà của ông Nguyễn Hữu Linh - cựu phó viện trưởng Viện KSND TP Đà Nẵng - nằm trên đường Lê Lợi (Q.Hải Châu, TP Đà Nẵng) đã bị ném chất bẩn, xịt sơn lên tường rào vào tối qua (4-4). Sáng nay, người nhà ông Linh đã cho sơn lại cửa</p>
                                                            <h4><a href="#" >Ngôi nhà của ông Nguyễn Hữu Linh - cựu phó viện trưởng Viện KSND TP Đà Nẵng</a></h4>
                                                        </article>
                                                        <article className="art-cm">
                                                            <i className="icon icon-comment" />
                                                            <div className="tool-like">
                                                                <span className="date">10:00 | 23.5.2018</span>
                                                                <span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span>
                                                                <span className="count">trả lời 0</span>
                                                            </div>
                                                            <p> Ngôi nhà của ông Nguyễn Hữu Linh - cựu phó viện trưởng Viện KSND TP Đà Nẵng - nằm trên đường Lê Lợi (Q.Hải Châu, TP Đà Nẵng) đã bị ném chất bẩn, xịt sơn lên tường rào vào tối qua (4-4). Sáng nay, người nhà ông Linh đã cho sơn lại cửa</p>
                                                            <h4><a href="#" >Ngôi nhà của ông Nguyễn Hữu Linh - cựu phó viện trưởng Viện KSND TP Đà Nẵng</a></h4>
                                                        </article>
                                                        <article className="art-cm">
                                                            <i className="icon icon-comment" />
                                                            <div className="tool-like">
                                                                <span className="date">10:00 | 23.5.2018</span>
                                                                <span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span>
                                                                <span className="count">trả lời 0</span>
                                                            </div>
                                                            <p> Ngôi nhà của ông Nguyễn Hữu Linh - cựu phó viện trưởng Viện KSND TP Đà Nẵng - nằm trên đường Lê Lợi (Q.Hải Châu, TP Đà Nẵng) đã bị ném chất bẩn, xịt sơn lên tường rào vào tối qua (4-4). Sáng nay, người nhà ông Linh đã cho sơn lại cửa</p>
                                                            <h4><a href="#" >Ngôi nhà của ông Nguyễn Hữu Linh - cựu phó viện trưởng Viện KSND TP Đà Nẵng</a></h4>
                                                        </article>
                                                        <nav aria-label="navigation" className="pagging_1">
                                                            <ul className="pagination">
                                                                <li className="page-item">
                                                                    <a className="page-link" href="#" aria-label="Previous">
                                                                        <span aria-hidden="true">«</span>
                                                                    </a>
                                                                </li>
                                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                <li className="page-item">
                                                                    <a className="page-link" href="#" aria-label="Next">
                                                                        <span aria-hidden="true">»</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-setup" role="tabpanel" aria-labelledby="nav-setup-tab">
                                                <div className="inner-tab">
                                                    <h4 className="title-style">THÔNG TIN CÁ NHÂN</h4>
                                                    <form className="frm-update">
                                                        <div className="form-group">
                                                            <label>Họ và tên</label>
                                                            <div className="inner-form">
                                                                <input className="form-control" type="text" name defaultValue="Ngọc Thanh" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Số điện thoại</label>
                                                            <div className="inner-form">
                                                                <input className="form-control deactive" type="text" name defaultValue="Chưa có" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Giới tính</label>
                                                            <div className="inner-form">
                                                                <select className="form-control deactive">
                                                                    <option>Chưa xác định</option>
                                                                    <option>Nam</option>
                                                                    <option>Nữ</option>
                                                                    <option>Khác</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <span className="line-border-1" />
                                                        <h4 className="title-style">Bảo mật</h4>
                                                        <div className="form-group">
                                                            <label>Email đăng nhập</label>
                                                            <div className="inner-form">
                                                                <input className="form-control" type="text" name defaultValue="ngocthanh1999@gmail.com" readOnly />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Mật khẩu</label>
                                                            <div className="inner-form">
                                                                <input className="form-control" type="password" name defaultValue={123456} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group text-right outer-btn-right">
                                                            <button className="btn-cancel" type="button">Hủy bỏ</button>
                                                            <button className="btn-send" type="button">Lưu thay đổi</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                    <div className="modal fade modal-login" id="loginModal" tabIndex={-1} role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <div className="modal-body">
                                    <h4 className="title-modal">Đăng nhập </h4>
                                    <form className="frm-general">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" type="email" name="email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Mật khẩu</label>
                                            <input className="form-control" type="password" name="pass" />
                                        </div>
                                        <div className="form-group">
                                            <button className="btn-login">Đăng nhập</button>
                                        </div>
                                        <div className="inner-frm">
                                            <a className="link-forgot"  data-toggle="modal" data-target="#resetPassModal" data-dismiss="modal">Quên mật khẩu?</a>
                                        </div>
                                    </form>
                                    <p className="text-center">Hoặc đăng nhập bằng</p>
                                    <div className="outer-btn-social">
                                        <div className="col">
                                            <a className="btn-facebook" href="#" > <i className="fa fa-facebook" aria-hidden="true" /> Facebook</a>
                                        </div>
                                        <div className="col">
                                            <a className="btn-google" href="#" ><i className="fa fa-google" aria-hidden="true" /> Google</a>
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <a className="link-register" data-toggle="modal" data-target="#registerModal" data-dismiss="modal"><i>Chưa có tài khoản? <strong> Đăng ký ngay</strong></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade modal-login" id="registerModal" tabIndex={-1} role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <div className="modal-body">
                                    <h4 className="title-modal">Đăng ký </h4>
                                    <form className="frm-general">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" type="email" name="email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Họ và tên</label>
                                            <input className="form-control" type="text" name="name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Mật khẩu</label>
                                            <input className="form-control" type="password" name="pass" />
                                        </div>
                                        <div className="form-group">
                                            <label>Xác nhận mật khẩu</label>
                                            <input className="form-control" type="password" name="pass" />
                                        </div>
                                        <div className="form-group">
                                            <label>Mã xác nhận</label>
                                            <div className="inner-code">
                                                <input className="form-control" type="text" name="name" />
                                                <div className="img-code">
                                                    <img src="img/code.jpg" alt />
                                                </div>
                                                <a className="btn-refesh" href="#">Lấy mã mới</a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label><input type="checkbox" name />Khi bấm "Đăng ký" đồng thời bạn đã đồng ý với <a href="#"><strong>điều khoản</strong></a> của tòa soạn</label>
                                        </div>
                                        <button className="btn-login">Đăng ký</button>
                                    </form>
                                    <br />
                                    <p className="text-center">Hoặc đăng ký bằng</p>
                                    <div className="outer-btn-social">
                                        <div className="col">
                                            <a className="btn-facebook" href="#" > <i className="fa fa-facebook" aria-hidden="true" /> Facebook</a>
                                        </div>
                                        <div className="col">
                                            <a className="btn-google" href="#" ><i className="fa fa-google" aria-hidden="true" /> Google</a>
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <a className="link-register" data-toggle="modal" data-target="#loginModal" data-dismiss="modal"><i>Đã có tài khoản? <strong> Đăng nhập</strong></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                            <a className="btn-upload-lib"  data-toggle="modal" data-dismiss="modal" data-target="#modalInfo">
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
                                            <img src="img/capcha.jpg" alt />
                                        </div>
                                        <div className="outer-btn-social">
                                            <div className="col">
                                                <a className="btn-cancel-1" href="#" >Quay lại</a>
                                            </div>
                                            <div className="col">
                                                <a className="btn-send-1" href="#" >Gửi</a>
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
                                            <input className="form-control" type="text" placeholder />
                                        </div>
                                        <div className="form-group">
                                            <label>Dán nhãn</label>
                                            <input className="form-control" type="text" placeholder />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                <input type="checkbox" name /> Bài viết có tính nhạy cảm
                                            </label>
                                            <br />
                                            <label>
                                                <input type="checkbox" name /> Bạn là chủ nhân của bài gốc
                                            </label>
                                        </div>
                                        <p className="rule">Khi bấm "Đăng ký" đồng thời bạn đã đồng ý với <a href="#"><strong>điều khoản</strong></a> của tòa soạn</p>
                                        <div className="form-group text-center">
                                            <img src="img/capcha.jpg" alt />
                                        </div>
                                        <div className="outer-btn-social">
                                            <div className="col">
                                                <a className="btn-cancel-1" href="#" >Quay lại</a>
                                            </div>
                                            <div className="col">
                                                <a className="btn-send-1" href="#" >Gửi</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default user;