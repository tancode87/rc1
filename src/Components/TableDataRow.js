import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.permissionuser === 1){ return "Admin"; }
        else if (this.props.permissionuser === 2){ return "Moderator"}
        else {return "Normal user" ; }
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.editChange();
    }
    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
        
    }
    render() {
        return (
            <tr>
                <td >{this.props.stt}</td>
                <td>{this.props.username}</td>
                <td>{this.props.tel}</td>
                <td>{
                        this.permissionShow() 
                    }                    
                </td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={ () => this.editClick()  } ><i className="fa fa-edit">Sửa</i></div>
                    <div className="btn btn-danger sua"  onClick={ (idUser) =>  this.deleteButtonClick(this.props.id) } ><i className="fa fa-delete">Xóa</i></div> 
                </div>
                </td>
            </tr>
);
    }
}

export default TableDataRow;