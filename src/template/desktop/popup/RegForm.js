import React, {Component} from 'react';
let cssSpan={
    color:"red"
}
const warnings ={
    isrequere:"Không được để trống",
    islength: "ít nhất 6 ký tự",
    iserror:"Nội dung không hợp lệ",
    isincorrect:"không chính xác",
    isnumber:"Chỉ được nhập số"}

class RegForm extends Component {
    constructor(props) {
        super(props);
        this.state={

            email:'',
            name:'',
            pass:'',
            repass:'',
            xcode:'',
            errorEmail: '',
            errorName:'',
            errorPass:'',
            errorRepass:'',
            errorXcode:''
        }
    }
    isChange=(e)=>{
        const ten =e.target.name;
        const giatri = e.target.value;
        console.log(ten)
        this.CheckErr(ten,giatri);
        this.setState({
            [ten]:giatri
        })
    }
    CheckErr =(ten,value)=>{
        if(ten=='email'){
            if(value.length<=3){
                this.setState({errorEmail:"Email "+warnings.islength});
            }else{
                this.setState({errorEmail:''});
            }
        }else if(ten=='name'){
            if(value.length<=3){
                this.setState({errorName:"Tên "+warnings.islength});
            }else{
                this.setState({errorName:''});
            }
        }else if(ten=='pass'){
            if(value.length<=3){
                this.setState({errorPass:"Mật khẩu "+warnings.islength});
            }else{
                this.setState({errorPass:''});
            }
        }else if(ten=='repass'){
            if(value.length<=3){
                this.setState({errorRepass:"Mật khẩu xác nhận "+warnings.islength});
            }else{
                this.setState({errorRepass:''});
            }
        }else{
            if(value.length<=3){
                this.setState({errorXcode:"Mã xác nhận "+warnings.isincorrect});
            }else{
                this.setState({errorXcode:''});
            }
        }
    }
    // handleSubmit(e) {
    //     e.preventDefault();
    //     const { email,name } = this.state;
    //     const re = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
    //     const isOk = re.test(email);
    //
    //     console.log(isOk);
    //
    //     if(!isOk) {
    //         return alert(warnings.islength);
    //     }
    //
    //     alert('A password was submitted that was ' + email.length + ' characters long.');
    // }

    render() {
        return (
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
                                    <input onChange={(e)=>this.isChange(e)} className="form-control" type="email" name="email" />
                                    <span  style={cssSpan} className="error" >{this.state.errorEmail}</span>
                                </div>
                                <div className="form-group">
                                    <label>Họ và tên</label>
                                    <input onChange={(e)=>this.isChange(e)} className="form-control" type="text" name="name" />
                                    <span  style={cssSpan} className="error" >{this.state.errorName}</span>
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu</label>
                                    <input  onChange={(e)=>this.isChange(e)} className="form-control" type="password" name="pass" />
                                    <span  style={cssSpan} className="error" >{this.state.errorPass}</span>
                                </div>
                                <div className="form-group">
                                    <label>Xác nhận mật khẩu</label>
                                    <input onChange={(e)=>this.isChange(e)} className="form-control" type="password" name="repass" />
                                    <span  style={cssSpan} className="error" >{this.state.errorRepass}</span>
                                </div>
                                <div className="form-group">
                                    <label>Mã xác nhận</label>
                                    <div className="inner-code">
                                        <input onChange={(e)=>this.isChange(e)} className="form-control" type="text" name="xcode" />
                                        <div className="img-code">
                                            <img src="img/code.jpg" alt="img" />
                                        </div>
                                        <a className="btn-refesh" href="#">Lấy mã mới</a>
                                        <span  style={cssSpan} className="error" >{this.state.errorXcode}</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label><input type="checkbox" />Khi bấm "Đăng ký" đồng thời bạn đã đồng ý với <a href="#"><strong>điều khoản</strong></a> của tòa soạn</label>
                                </div>
                                <input className="btn-login" type="submit" value="Đăng ký" />
                            </form>
                            <br />
                            <p className="text-center">Hoặc đăng ký bằng</p>
                            <div className="outer-btn-social">
                                <div className="col">
                                    <a className="btn-facebook" href="#" title="true"> <i className="fa fa-facebook" aria-hidden="true" /> Facebook</a>
                                </div>
                                <div className="col">
                                    <a className="btn-google" href="#" title="true"><i className="fa fa-google" aria-hidden="true" /> Google</a>
                                </div>
                            </div>
                            <div className="text-left">
                                <a className="link-register" data-toggle="modal" data-target="#loginModal" data-dismiss="modal"><i>Đã có tài khoản? <strong> Đăng nhập</strong></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegForm;