import React, { Component } from 'react';

class profile extends Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    <h2 className="title">
                        <i className="icon icon-caricature" />
                        <div className="inner-title">
                            <h2><a href="#" >Biếm họa</a>
                                <span className="inner">
                                  <a href="#" >Bình luận</a>
                                  <a href="#" >Miễn bình luận</a>
                                  <a href="#" >Góc nhìn</a>
                                </span>
                            </h2>
                            <ul className="list-cat">
                                <li><a href="javascript:void(0)" rel="nofollow" title="Breaking news" className="icon-direction"> </a></li>
                                <li><a href="#" >Cười xối xả</a></li>
                                <li><a href="#" >TV show</a></li>
                                <li><a href="#" >Show cười</a></li>
                            </ul>
                        </div>
                    </h2>
                    <div className="outer outer-top scrollToOne">
                        <div className="rightbar">
                            <article className="art-nv">
                                <img className="img-nv" src="http://localhost:3000/img/user.jpg"  />
                                <h4>Thỏ bảy màu</h4>
                                <h5>Giới thiệu</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    <a className="link-sg" href="#">Sách: abc</a>
                                    <a className="link-sg" href="#">Sách: mnb</a>
                                    <a className="link-social" href="#">https://www.facebook.com/thobaymau</a>
                                </p>
                                <div className="box-rate">
                                    <div className="left-rate">
                                        <span>Bài viết</span>
                                        <strong>276</strong>
                                    </div>
                                    <div className="right-rate">
                                        <span>Được theo dõi</span>
                                        <strong>15,123</strong>
                                    </div>
                                </div>
                            </article>
                            <div className="block-right ui sticky one">
                                <h3>Nhân vật liên quan</h3>
                                <ul className="list-lq">
                                    <li>
                                        <a href="#" >
                                            <img src="http://localhost:3000/img/user.jpg"  />
                                            <span>
                                                <strong>TCC team</strong>
                                                14,000 theo dõi
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" >
                                            <img src="http://localhost:3000/img/user.jpg"  />
                                            <span>
                                                <strong>TCC team</strong>
                                                14,000 theo dõi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" >
                                            <img src="http://localhost:3000/img/user.jpg"  />
                                            <span>
                                                <strong>TCC team</strong>
                                                14,000 theo dõi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" >
                                            <img src="http://localhost:3000/img/user.jpg"  />
                                            <span>
                                                <strong>TCC team</strong>
                                                14,000 theo dõi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" >
                                            <img src="http://localhost:3000/img/user.jpg"  />
                                            <span>
                                                <strong>TCC team</strong>
                                                14,000 theo dõi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" >
                                            <img src="http://localhost:3000/img/user.jpg"  />
                                            <span>
                                                <strong>TCC team</strong>
                                                14,000 theo dõi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="left-bar">
                            <div className="border-left">
                                <span className="banner-nv" style={{background: 'url(http://localhost:3000/img/photo/4-min.jpg) center no-repeat', backgroundSize: 'cover'}} />
                                <div className="tool-follow">
                                    <a className="btn-follow" href="#">Theo dõi</a>
                                    <ul className="list-share">
                                        <li>Chia sẻ</li>
                                        <li className="facebook"><a href="#" ><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                        <li className="tw"><a href="#" ><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="inner-bar scrollToTwo">
                                <div className="block-news">
                                    <div className="list-tin">
                                        <h4>Bài viết nổi bật</h4>
                                        <article className="art-news">
                                            <header>
                                                <a href="#" >
                                                    <img src="http://localhost:3000/img/user.jpg"  />
                                                    <span><strong>Ông Lap</strong>35 phút</span>
                                                </a>
                                            </header>
                                            <section>
                                                <p>Không khóe lại nâng đỡ cho abc trước cất cánh af fas fsa fsafaf.</p>
                                                <div className="outer-img">
                                                    <img src="http://localhost:3000/img/photo/4-min.jpg"  />
                                                </div>
                                                <ul className="list-social-1 list-cm">
                                                    <li><i className="fa fa-heart-o" aria-hidden="true" /> 230</li>
                                                    <li><i className="icon icon-share" aria-hidden="true" /> 100</li>
                                                    <li className="text-cm">
                                                        <textarea className="box-reply-cm" placeholder="Viết bình luận" defaultValue={""} />
                                                        <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                    </li>
                                                </ul>
                                                <div className="wrapper-cm">
                                                    <div className="wrapper-comment">
                                                        <div className="comment media"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" />
                                                            <div className="media-body">
                                                                <div className="inner-cm">
                                                                    <h5 className="mt-0">Bạn A</h5>
                                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                                    <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                                        <div className="box-reply-cm">
                                                                            <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                            <div className="text-right">
                                                                                <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Media heading</h5>
                                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                                <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                                    <div className="box-reply-cm">
                                                                        <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                        <div className="text-right">
                                                                            <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Media heading</h5>
                                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                                <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                                    <div className="box-reply-cm">
                                                                        <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                        <div className="text-right">
                                                                            <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Media heading</h5>
                                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                                <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                                    <div className="box-reply-cm">
                                                                        <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                        <div className="text-right">
                                                                            <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> <a href="#" className="viewmore">Xem thêm bình luận</a>
                                                    </div>
                                                </div>
                                            </section>
                                        </article>
                                    </div>
                                    <div className="list-tin">
                                        <h4>Bài mới nhất</h4>
                                        <article className="art-news">
                                            <header>
                                                <a href="#" >
                                                    <img src="http://localhost:3000/img/user.jpg"  />
                                                    <span><strong>Ông Lap</strong>35 phút</span>
                                                </a>
                                            </header>
                                            <section>
                                                <p>Không khóe lại nâng đỡ cho abc trước cất cánh af fas fsa fsafaf.</p>
                                                <div className="outer-img">
                                                    <img src="http://localhost:3000/img/photo/4-min.jpg"  />
                                                </div>
                                                <ul className="list-social-1 list-cm">
                                                    <li><i className="fa fa-heart-o" aria-hidden="true" /> 230</li>
                                                    <li><i className="icon icon-share" aria-hidden="true" /> 100</li>
                                                    <li className="text-cm">
                                                        <textarea className="box-reply-cm" placeholder="Viết bình luận" defaultValue={""} />
                                                        <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                    </li>
                                                </ul>
                                                <div className="wrapper-cm">
                                                    <div className="wrapper-comment">
                                                        <div className="comment media"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" />
                                                            <div className="media-body">
                                                                <div className="inner-cm">
                                                                    <h5 className="mt-0">Bạn A</h5>
                                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                                    <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                                        <div className="box-reply-cm">
                                                                            <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                            <div className="text-right">
                                                                                <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Media heading</h5>
                                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                                <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                                    <div className="box-reply-cm">
                                                                        <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                        <div className="text-right">
                                                                            <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Media heading</h5>
                                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                                <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                                    <div className="box-reply-cm">
                                                                        <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                        <div className="text-right">
                                                                            <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Media heading</h5>
                                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                                <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                                    <div className="box-reply-cm">
                                                                        <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                        <div className="text-right">
                                                                            <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> <a href="#" className="viewmore">Xem thêm bình luận</a>
                                                    </div>
                                                </div>
                                            </section>
                                        </article>
                                        <article className="art-news">
                                            <header>
                                                <a href="#" >
                                                    <img src="http://localhost:3000/img/user.jpg"  />
                                                    <span><strong>Ông Lap</strong>35 phút</span>
                                                </a>
                                            </header>
                                            <section>
                                                <p>Không khóe lại nâng đỡ cho abc trước cất cánh af fas fsa fsafaf.</p>
                                                <div className="outer-img">
                                                    <img src="http://localhost:3000/img/photo/4-min.jpg"  />
                                                </div>
                                                <ul className="list-social-1 list-cm">
                                                    <li><i className="fa fa-heart-o" aria-hidden="true" /> 230</li>
                                                    <li><i className="icon icon-share" aria-hidden="true" /> 100</li>
                                                    <li className="text-cm">
                                                        <textarea className="box-reply-cm" placeholder="Viết bình luận" defaultValue={""} />
                                                        <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                    </li>
                                                </ul>
                                                <div className="wrapper-cm">
                                                    <div className="wrapper-comment">
                                                        <div className="comment media"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" />
                                                            <div className="media-body">
                                                                <div className="inner-cm">
                                                                    <h5 className="mt-0">Bạn A</h5>
                                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                                    <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                                        <div className="box-reply-cm">
                                                                            <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                            <div className="text-right">
                                                                                <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Media heading</h5>
                                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                                <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                                    <div className="box-reply-cm">
                                                                        <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                        <div className="text-right">
                                                                            <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Media heading</h5>
                                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                                <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                                    <div className="box-reply-cm">
                                                                        <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                        <div className="text-right">
                                                                            <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Media heading</h5>
                                                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                                <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                                    <div className="box-reply-cm">
                                                                        <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                        <div className="text-right">
                                                                            <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> <a href="#" className="viewmore">Xem thêm bình luận</a>
                                                    </div>
                                                </div>
                                            </section>
                                        </article>
                                        <a href="#" className="viewmore-1"><i className="fa fa-angle-double-down" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <aside className="sidebar">
                                    <div className="block-bar block-qc">
                                        <a href="#"><img src="http://localhost:3000/img/banner-300x250.jpg"  /></a>
                                    </div>
                                    <div className="block-bar ui sticky two">
                                        <div className="bg-gray">
                                            <h3 className="title-normal"><a href="#" >Top biếm họa</a></h3>
                                            <article className="art-bar-s art-hori no-border">
                                                <a href="#"><img src="http://localhost:3000/img/photo/8-min.jpg"  /></a>
                                                <div className="des">
                                                    <h4><a href="#" >Nhiệm vụ của cô nàng trong phần</a></h4>
                                                    <a className="author" href="#">TCC team</a>
                                                </div>
                                            </article>
                                            <article className="art-bar-s art-hori">
                                                <a href="#"><img src="http://localhost:3000/img/photo/7-min.jpg"  /></a>
                                                <div className="des">
                                                    <h4><a href="#" >Nhiệm vụ của cô nàng trong phần</a></h4>
                                                    <a className="author" href="#">TCC team</a>
                                                </div>
                                            </article>
                                            <article className="art-bar-s art-hori">
                                                <a href="#"><img src="http://localhost:3000/img/photo/6-min.jpg"  /></a>
                                                <div className="des">
                                                    <h4><a href="#" >Nhiệm vụ của cô nàng trong phần</a></h4>
                                                    <a className="author" href="#">Thỏ bảy màu</a>
                                                </div>
                                            </article>
                                            <article className="art-bar-s art-hori">
                                                <a href="#"><img src="http://localhost:3000/img/photo/5-min.jpg"  /></a>
                                                <div className="des">
                                                    <h4><a href="#" >Nhiệm vụ của cô nàng trong phần</a></h4>
                                                    <a className="author" href="#">LAP</a>
                                                </div>
                                            </article>
                                            <article className="art-bar-s art-hori">
                                                <a href="#"><img src="http://localhost:3000/img/photo/4-min.jpg"  /></a>
                                                <div className="des">
                                                    <h4><a href="#" >Nhiệm vụ của cô nàng trong phần</a></h4>
                                                    <a className="author" href="#">hài hước</a>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default profile;