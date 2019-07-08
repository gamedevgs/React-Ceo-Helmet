import React, {Component} from 'react';
import BoxWriteCm from "./Box_write_cm";
import * as action from "../../../../../actions/ActionDetail";
import {connect} from "react-redux";
import * as Ttchel from "../../../../../common/TtcHelper";
import axios from 'axios';
let size=2;
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};
const SendComment =(textcm)=>
    axios.post('/SendComment',{textcm},axiosConfig)
        .then((res)=> res.data)

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state={
          isShow:true,
          name:'',
          strInput:''
        }
    }
    componentWillMount() {
        this.props.onloadComment(size);
    }
    // button xem thêm bình luận
    BtnLoadMoreCm=()=>{
        size+=3;
        this.props.onloadComment(size);
    }
    // button trả lời comment
    BtnRepcm=(keys)=>{
       this.setState({name:keys,isShow:!this.state.isShow})
    }
    // button gửi comment con
    BtnSendCm=()=>{
        let {strInput} =this.state;
        if(strInput===''){
            alert("Nội dung bình luận Không được để trống");
        }else if(strInput.length<=10){
            alert("Nội dung bình luận phải lớn hơn 10 ký tự");
        }else {
            SendComment(strInput);
            alert("ok baby");
        }
    }
    isChange=(e)=>{
        console.log(e.target.value);
        let value =e.target.value;
        this.setState({strInput:value})

    }
    RenderCm=()=> {
        if (this.props.list_cm) {
            return  JSON.parse(this.props.list_cm).map((v,k)=>{
                if(v.sender_fullname===this.state.name && this.state.isShow!==true) {
                    return (<div key={k} className="comment media">
                            <img src={v.sender_avatar} className="mr-3"/>
                            <div className="media-body">
                                <div className="inner-cm">
                                    <h5 className="mt-0">{v.sender_fullname}</h5>
                                    <p dangerouslySetInnerHTML={Ttchel._html(v.content)}></p>
                                    <div className="tool-like active">
                                        <span className="like">
                                        <i className="fa fa-heart-o" aria-hidden="true"/> {v.likes}</span>
                                        <span onClick={() => this.BtnRepcm(v.sender_fullname)} className="reply"> Trả lời</span>
                                        <span className="count">{v.child_count} trả lời</span>
                                        <div className="box-reply-cm">
                                        <form>
                                       <textarea onChange={(e)=>this.isChange(e)} name="textcm" className="box-reply-cm"
                                                 placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự"
                                                 defaultValue={""}/>
                                            <div className="text-right">
                                                <button type="reset"onClick={()=>this.BtnSendCm()} className="btn-comment">
                                                    <i className="fa fa-paper-plane-o"
                                                       aria-hidden="true"/>
                                                </button>
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }else {
                    return (<div key={k} className="comment media">
                        <img src={v.sender_avatar} className="mr-3"/>
                        <div className="media-body">
                            <div className="inner-cm">
                                <h5 className="mt-0">{v.sender_fullname}</h5>
                                <p dangerouslySetInnerHTML={Ttchel._html(v.content)}></p>
                                <div className={"tool-like " + this.state.isactive}>
                                        <span className="like">
                                        <i className="fa fa-heart-o" aria-hidden="true"/> {v.likes}</span>
                                    <span onClick={() => this.BtnRepcm(v.sender_fullname)} className="reply"> Trả lời</span>
                                    <span className="count">{v.child_count} trả lời</span>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            })
        }
    }
    RenderChidlCm = () => {
        if (this.props.list_cm) {
            return JSON.parse(this.props.list_cm).map((v, k) => {
                if(v.child_comments){
                    return v.child_comments.map((value,key)=>{
                        return (
                            <div key={key} className="media mt-3">
                                <a href="#">
                                    <img src={value.sender_avatar} className="mr-3"/>
                                </a>
                                <div className="media-body">
                                    <h5 className="mt-0">{value.sender_fullname}</h5>
                                    <p dangerouslySetInnerHTML={Ttchel._html(value.content)}></p>
                                    <div className="tool-like"><span className="like"><i className="fa fa-heart-o"
                                                                                         aria-hidden="true"/> {value.likes}</span>
                                        <span className="reply"> Trả lời</span> <span className="count">{value.child_count} trả lời</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            })
        }
    }
    render() {
        return (
            <div className="block-comment">
                <div className="wrapper-cm">
                    <div className="plugin-comment">
                        <div className="tool-comment">
                            <h4>Bình luận (285)</h4>
                            <span className="fr">
                             <a className="active" href="#">Nổi bật</a>
                             <a href="#">Mới nhất</a>
                             </span>
                        </div>
                        <div className="wrapper-comment">
                        {this.RenderCm()}
                        {this.RenderChidlCm()}
                        <a onClick={()=>this.BtnLoadMoreCm()} className="viewmore">Xem thêm bình luận</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        list_cm : state.detail[0].list_cm
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onloadComment : (size) => {
            dispatch(action.comment_post(size));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
