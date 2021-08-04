import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import React, { Component } from 'react';
import DataUser from './Data.json';
import EditUser from './EditUser';


const { v1: uuidv1 } = require('uuid');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm : true,
      data : [],
      searchText :'',
      editUserStatus:false,
      userEditObject:{}
    }
  }
  
  componentWillMount() {
//console.log(JSON.stringify(DataUser));
console.log(localStorage.getItem('userDataLoai1'));

localStorage.setItem('userDataLoai1',JSON.stringify(DataUser));
    //localStorage.setItem('userData',JSON.stringify(DataUser));
    if(localStorage.getItem('userDataLoai1') === null )
    {
      localStorage.setItem('userDataLoai1',JSON.stringify(DataUser));
    }else
    {
      var temp = JSON.parse(localStorage.getItem('userDataLoai1'))
      this.setState({
        data:temp
      });
    }
    // kiem tra xem co local storage hay chua
//    console.log(localStorage.getItem('userData'));
/*     if(localStorage.getItem('userData')===null){
      localStorage.setItem('userData',JSON.stringify(localStorage.getItem('userData')) );
    }
 */    /* else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data : temp
      });
    } */
    
  }
  
 /*  thongBao = () => {
    alert("ket noi thanh cong");
  } */
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  getNewUserData = (name,tel,Permission) => {
    //console.log('ket noi roi');
    // package to item 
    var item = {};
    item.id = uuidv1();    
    item.name = name;    
    item.tel = tel;    
    item.Permission = Permission;    
    var items = this.state.data;
    items.push(item);
    //console.log(item);
    //console.log(items);
    this.setState({
      data:items
    });
//    console.log(this.state.data);
    localStorage.setItem('userDataLoai1',JSON.stringify(items));

    
  }
  getUserEditInfoApp = (info) => {
//    console.log('quyen trong trang app la : '+ info.Permission);
    this.state.data.forEach( (value,key) => {
//        console.log(value.name);
        if(value.id === info.id)
        {
          value.name = info.name
          value.tel = info.tel;
          value.Permission = info.Permission;
          //console.log('du lieu ben app :' + value.Permission);         
        }
        
    })
    localStorage.setItem('userDataLoai1',JSON.stringify(this.state.data));
    
  } 
  // sua noi dung
  editUser = (user) => {
  //  console.log('da ket noi tu table data row den app');
    this.setState({
      userEditObject:user
    });
    
    
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus:!this.state.editUserStatus
    });
  } 
  // props userEditObject
  getUserEditInfo = (info) => {
    this.setState({
      userObject:info
    });  
  } 
  getTextSearch = (dl) => {
    this.setState({
      searchText : dl
    });

   // console.log(' du lieu nhan duoc la : ' + this.state.searchText);

  }
  // xoa phan tu 
  deleteUser = (idUser) => {
    var tempData = this.state.data.filter(item => item.id != idUser);
    this.setState({
      data : tempData
    });
    localStorage.setItem('userDataLoai1',JSON.stringify(tempData));
  } 
  render() {
    localStorage.setItem("userData",DataUser) ;
    var ketqua = [];
    this.state.data.forEach((item) => {
        if(item.name.indexOf(this.state.searchText) !== -1){
          ketqua.push(item);
        }
    })
   // console.log(ketqua);
    return (

        <div >
           <Header/>    
           <div className="searchForm">
              <div className="container">
                 <div className="col-12">
                  <div className="row">
                    
                    <Search getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info) } userEditObject={this.state.userEditObject} editChange ={ () => this.changeEditUserStatus()  } editUserStatus={ this.state.editUserStatus } ketNoi={() =>this.doiTrangThai()} hienThiForm = {this.state.hienThiForm} checkConnectProps = {(dl)=>this.getTextSearch(dl)}  />
                      <div className="col-12">
                        <hr/>
                      </div>
                      <TableData deleteUser={ (idUser) => this.deleteUser(idUser)  } editChange ={ () => this.changeEditUserStatus()  } editUserStatus={ this.state.editUserStatus }  editFun ={ (user) => this.editUser(user)   } dataUserProps={ketqua} />
                      <AddUser add={(name,tel,Permission) => this.getNewUserData(name,tel,Permission) } hienThiForm={this.state.hienThiForm} />
                  </div>
                 </div>
              </div>
            </div>
    
        </div>          
    );
  }
}

export default App;
