import React, {Component} from 'react';
const axios = require('axios');

let cssSpan={
    color:"red"
}
const  warnings ={
    requereEmail:"Email Không được để trống",
    requerePass:"Pass được để trống",
    minEmail: "Email ít nhất 6 ký tự",
    minPass: "Password ít nhất 6 ký tự",
    eror:"Nội dung không hợp lệ",
    number:"Chỉ được nhập số"}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            isOK:false,
            email:'',
            pass:'',
            errorEmail: '',
            errorPass:'',
        }
    }
    isChange = (e)=>{
        const ten =e.target.name;
        const giatri = e.target.value;
        this.CheckErr(ten,giatri);
        this.setState({
            [ten]:giatri
        })
    }

    FunCapi =(email,pass)=>
    {
        axios.post('http://pctest.tuoitrecuoi.vn/login.html',{email,pass},)
            .then(function (response) {
                // handle việc lấy dữ liệu thành công
                console.log(response);
            })
            .catch(function (error) {
                // handle lỗi
                console.log(error);
            })
            .then(function () {
                // sau khi handle xong dữ liệu hoặc lỗi thì sẽ chạy tiếp code ở trong này.
            });
    }
    Funcs =(data)=>{

    }
    CheckErr =(ten,value)=>{
        if(ten=='email'){
            if(value.length<=3){
                this.setState({errorEmail:warnings.minEmail});
            }else{
                this.setState({errorEmail:''});
            }
        }else{
            if(value.length<=3){
                this.setState({errorPass:warnings.minPass});
            }else{
                this.setState({errorPass:''});
            }
        }
    }
     createGist(opts) {
        console.log('Posting request to GitHub API...');
        fetch('https://sbetacuoi.tuoitre.vn/login.html', {
            method: 'post',
            body: JSON.stringify(opts)
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log('Created Gist:', data);
        });
    }
    submitForm = (event)=> {
        event.preventDefault();
        let email =this.state.email;
        let password= this.state.pass;
           if(email.replace(/\s/g, "") == ""){
               this.setState({errorEmail:warnings.requereEmail})
            }else if(email.length<=3){
                this.setState({errorEmail:warnings.minEmail});
            }else if(password.replace(/\s/g, "") == ""){
               this.setState({errorPass:warnings.requerePass})
            }else if(password.length<=3){
                this.setState({errorPass:warnings.minPass});
            }else{
                this.setState({errorEmail:'',errorPass:'',isOK:true})
        }
    }

    render() {
        if (this.state.isOK) {
            let {email,pass}=this.state;
            this.FunCapi(email,pass);
        }
        return (
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
                                    <input onChange={(e)=>this.isChange(e)} className="form-control" type="email" name="email" />
                                    <span  style={cssSpan} className="error" >{this.state.errorEmail}</span>
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu</label>
                                    <input onChange={(e)=>this.isChange(e)} className="form-control" type="password" name="pass" />
                                    <span style={cssSpan} className="error">{this.state.errorPass}</span>
                                </div>
                                <div className="form-group">
                                    <button style={{background:"red"}} onClick={(event)=>this.submitForm(event)} className="btn-login">Đăng nhập</button>
                                </div>
                                <div className="inner-frm">
                                    <a className="link-forgot" title="true" data-toggle="modal" data-target="#resetPassModal" data-dismiss="modal">Quên mật khẩu?</a>
                                </div>
                            </form>
                            <p className="text-center">Hoặc đăng nhập bằng</p>
                            <div className="outer-btn-social">
                                <div className="col">
                                    <a className="btn-facebook" href="#" title="true"> <i className="fa fa-facebook" aria-hidden="true" /> Facebook</a>
                                </div>
                                <div className="col">
                                    <a className="btn-google" href="#" title="true"><i className="fa fa-google" aria-hidden="true" /> Google</a>
                                </div>
                            </div>
                            <div className="text-left">
                                <a className="link-register" data-toggle="modal" data-target="#registerModal" data-dismiss="modal"><i>Chưa có tài khoản? <strong> Đăng ký ngay</strong></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;