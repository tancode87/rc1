import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue : '',
            userObj: {}
        }
    }
    // goi ham thay doi trang thai 

    hienThiNut = () => {
        if(this.props.hienThiForm === true) {
           return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}  >Đóng lại</div>
        }else
        {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()} >Thêm mới</div>

        }
    }
    // viet ham kiem tra su thay doi trong text
    isChange = (event) => {
       // console.log(event.target.value);
        this.setState({
            tempValue : event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }
    // kiem tra ham edit 
    getUserEditInfo = (info) => {
        this.setState({
            userObj:info
        });
        this.props.getUserEditInfoApp(info);
        
    } 
    isShowEditForm = () => {
       
        
        if(this.props.editUserStatus === true) {
          //  console.log('ra gia tri true');
            
            return <EditUser getUserEditInfo={(info) => this.getUserEditInfo(info) } userEditObject={this.props.userEditObject} changeEditUserStatus={() => this.props.editChange() }  />
        }else{
           // console.log('ko co gi');
            
        }
    } 
    render() {
        return (
                
            <div className="col-12">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                <div className="row" >
                    <div className="col">
                        <div className="form-group">
                            <div className="btn-group">
                            <input type="text" onChange={(event) => this.isChange(event)} style={{width: '201px'}} className="form-control" placeholder="Nhập tên cần tìm" aria-describedby="helpId" />
                            <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                            </div>
                            <div className="btn-group1">
                                {this.hienThiNut()}
                            </div>
                            {/*               <button type="submit" class="btn btn-primary">Submit</button>
                        */}      
                        </div> 
                    </div> 
                </div>
              
            </div>


        );
    }
}

export default Search;