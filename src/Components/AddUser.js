import React, { Component } from 'react';
class AddUser extends Component {
/*     constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhSua : false
        }
    }
    thayDoiTrangThai = () => {
        this.setState({
            trangThaiChinhSua : !this.state.trangThaiChinhSua
        });        
    }
 *//*     hienThiNut = () => {
        if(this.state.trangThaiChinhSua === true){
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()} >Đóng lại</div>;
        }else{
            return <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()} >Thêm mới</div>;
        }
    }
 *//*     hienThiForm = () => {
        if(this.state.trangThaiChinhSua === true){
            return (
                <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Thêm mới user vào hệ thống</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <input type="text" className="form-control"   aria-describedby="helpId" placeholder="Tên" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"   aria-describedby="helpId" placeholder="Điện thoại" />
                    </div>
                    <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>Chọn quyền mặc định</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-block btn-primary">
                        Thêm mới
                        </div>  
                    </div>
                    </div>
                </div>
            )

        }
    } */
    // tao state luu du lieu dien tu form 
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name: "",
            tel : "",
            Permission : ""
        }
    }
    // ham kiem tra trang thai form add user khi co thay doi trong form 
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;        
        this.setState({
            [name]:value
        });    
        
    }
    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true)
        {
            return (
                <div className="col">
                <form >    
                <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Thêm mới user vào hệ thống</div>
                    <div className="card-body text-primary">
                    <div className="form-group"> 
                        <input type="text" name="name" className="form-control"   aria-describedby="helpId" placeholder="Tên" onChange={(event) =>this.isChange(event) } />
                    </div>
                    <div className="form-group">
                        <input type="text" name="tel" className="form-control"   aria-describedby="helpId" placeholder="Điện thoại" onChange={(event) => this.isChange(event)} />
                    </div>
                    <div className="form-group">
                        <select name="Permission" onChange={(event)=>this.isChange(event)}  className="form-control" id="exampleFormControlSelect1">
                        <option>Chọn quyền mặc định</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel, Permission) => this.props.add(this.state.name,this.state.tel, this.state.Permission) } value="Thêm mới" />                                                 
                    </div>
                    </div>
                </div>    
                </form>
                </div>            
            )
        }
    }
    render() {
       // console.log(this.state);
        
/*         console.log(this.props.hienThiForm);
 */        
        return (
            
            <div>    
{/*                     {this.hienThiNut()}
 */}                    
                {this.kiemTraTrangThai()}
                
            </div>
        );
    }
}

export default AddUser;