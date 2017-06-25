import React from "react";
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export class RowContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rowNum :props.rowNumber
        };
        var allowRender = true;
        if (this.state.rowNum ==0){
            allowRender = false;
            console.log(this.props);
        }
        console.log(this.props);
    }
    render(){
        if (this.state.rowNum>0){
            return(
                <TableRow>
                    <TableRowColumn style={{fontWeight: 'bold',textAlign:'left',width:'15%',color:'#00ccff'}}>{this.props.rowContent.code}.AX</TableRowColumn>
                    <TableRowColumn style={{textAlign:'left',width:'40%',whiteSpace:'pre-wrap',color:'rgb(158, 158, 158)'}}>{this.props.rowContent.name}</TableRowColumn>
                    <TableRowColumn style={{fontWeight: 'bold',textAlign:'right',width:'10%'}}>{this.props.rowContent.price}</TableRowColumn>
                    <TableRowColumn style={{fontWeight: 'bold',textAlign:'right',width:'15%'}}>{Math.round(this.props.rowContent.price * this.props.rowContent.volume).toLocaleString('vi-VN',{minimumFractionDigits:0})}</TableRowColumn>
                    <TableRowColumn style={{textAlign:'right',width:'10%'}}>{this.props.rowContent.change}</TableRowColumn>
                    <TableRowColumn style={{textAlign:'right',width:'10%'}}>{this.props.rowContent.percentChange}</TableRowColumn>
                </TableRow>
            );
        }else return false;

    }
}