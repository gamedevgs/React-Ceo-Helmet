import React, {Component} from 'react';
import axios from "axios";
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};
const SendComment =(textcm)=>
    axios.post('/SendComment',{textcm},axiosConfig)
        .then((res)=> res.data)

class BoxWriteCm extends Component {
    constructor(props) {
        super(props);
        this.state={
            strInput:''
        }
    }
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
    render() {
        return (
            <div className="comment-write">
                <form>
                <h4>Viết bình luận</h4>
                <textarea  onChange={(e)=>this.isChange(e)} name="textcm" className="box-reply-cm" data-toggle="modal" data-target="#modalCom_1" placeholder="Bình luận của bạn sẽ được duyệt trước khi hiện trên trang chủ." defaultValue={""} />
                <div className="text-right">
                    <button type="reset" onClick={()=>this.BtnSendCm()} style={{color:"white"}} className="btn-comment"><i className="fa fa-paper-plane-o" aria-hidden="true"/>Gửi bình
                        luận
                    </button>
                </div>
                </form>
            </div>
        );
    }
}

export default BoxWriteCm;