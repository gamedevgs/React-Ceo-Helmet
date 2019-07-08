import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionDetail";
import axios from 'axios';

const TtcHelper = require(`./../../../../../common/TtcHelper`);

class Content_detail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        let id = this.props.id ? this.props.id : this.state.id;

        this.props.onLoadContentDetail(id);
    };

    componentDidUpdate(nextProps) {
        if(nextProps.id !== this.props.id) {
            this.props.onLoadContentDetail(this.props.id);
        }
    }

    content() {
        if (this.props.detail) {
            return TtcHelper._html(this.props.detail.object_content)
        }
    }

    related() {
        if (this.props.detail) {
            if (this.props.detail.related_article) {
                return this.props.detail.related_article.map((object, index) => {
                    return (
                        <li>
                            <a href="#"><img src="http://localhost:3000/img/photo/7-min.jpg"  /></a>
                            <div className="des">
                                <h3><a href="#" >Hien’s purpose is simple: to seek</a></h3>
                                <p>TTC-Ông chủ Nhà Trắng đã được thết đãi những món ăn rất đặc trưng của Việt Nam và Hà Nội</p>
                            </div>
                        </li>
                    )
                })
            }
        }
    }

    render() {
        window.scrollTo(0, 0);
        let detail = this.props.detail ? this.props.detail : '';
        return (
            <div className="content-detail">
                <figure data-fancybox="gallery" href={detail.thumb_link}
                        data-caption={detail.thumb_caption}
                        className="img-cover fancybox"><img src={detail.thumb_link}/>
                </figure>
                <div className="outer-body outer-body-2">
                    <article className="art-body fck scrollToTwo">
                        <div className="content-body" dangerouslySetInnerHTML={this.content()}></div>
                        <div className="block-related">
                            <ul>
                                {this.related()}
                            </ul>
                        </div>
                        <ul className="tool ui sticky two">
                            <li><span><i className="fa fa-facebook" aria-hidden="true"/></span></li>
                            <li><span><i className="fa fa-twitter" aria-hidden="true"/></span></li>
                            <li><span><i className="fa fa-envelope" aria-hidden="true"/></span></li>
                            <li><span><i className="fa fa-print" aria-hidden="true"/></span></li>
                            <li className="border-t"><span><i className="fa fa-heart" aria-hidden="true"/> </span>100
                            </li>
                        </ul>
                    </article>
                </div>
                <p className="author">{detail.author}</p>
                <div className="tag-bar">
                    <div className="tag"><a href="#">cố thủ tướng</a> <a href="#">Phan Văn Khải</a> <a href="#">Quốc
                        tang</a> <a href="#">Cố thủ tướng</a></div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        detail : state.detail[0].detail
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadContentDetail : (id) => {
            dispatch(action.content_detail(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content_detail);