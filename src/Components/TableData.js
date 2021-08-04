import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteButtonClick = (idUser) => {
//        console.log(idUser);
        this.props.deleteUser(idUser);
    } 
    mappingDataUser = () =>  this.props.dataUserProps.map((value,key) => (
        <TableDataRow deleteButtonClick = { (idUser) => this.deleteButtonClick(idUser)  } editChange ={ () => this.props.editChange()  } editUserStatus={ this.props.editUserStatus } editFunClick ={ (user) => this.props.editFun(value)   } username={value.name} key={key} stt={key} tel={value.tel} permissionuser={value.Permission} id={value.id} />
    ));
    // da load duoc this.props.editFun
    render() {
        /* console.log(this.props.dataUserProps);
         */
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
                
        );
    }
}

export default TableData;