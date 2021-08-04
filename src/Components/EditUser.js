import React, { Component } from 'react';

class EditUser extends Component {
    //props.userEditObject
    
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            Permission:this.props.userEditObject.Permission
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
        
    } 
    saveButton = (info) => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus(); // an form
    }  
    
    render() {
        return (
            <div className="col 12">
            <div className="row" >    
                    <form >    
                    <div className="card border-primary text-white bg-warning mb-3 mt-2" style={{maxWidth: '18rem'}}>
                        <div className="card-header text-center">Sửa thông tin user hệ thống</div>
                        <div className="card-body text-primary">
                        <div className="form-group"> 
                            <input onChange={(event) => this.isChange(event) } defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control"   aria-describedby="helpId" placeholder="Tên" onChange={(event) =>this.isChange(event) } />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.isChange(event) } defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control"   aria-describedby="helpId" placeholder="Điện thoại" onChange={(event) => this.isChange(event)} />
                        </div>
                        <div className="form-group">
                            <select onChange={(event) => this.isChange(event) } name="Permission" defaultValue={this.props.userEditObject.Permission} className="form-control" id="exampleFormControlSelect1">
                            <option value>Chọn quyền mặc định</option>
                            <option value={1} >Admin</option>
                            <option value={2} >Moderator</option>
                            <option value={3} >Normal User</option>
                            <option value={4} >Normal User</option>
                            <option value={5} >Normal User</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="button" className="btn btn-block btn-danger" value="Lưu thông tin"  onClick={(info) => this.saveButton(info) }/>                                                 
                        </div>
                        </div>
                    </div>    
                    </form>
                </div>
            </div>     

                    );
    }
}

export default EditUser;