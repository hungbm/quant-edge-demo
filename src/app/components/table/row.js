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
    }
    renderChangeColor(){
        if (this.props.rowContent.change< 0){
            return <TableRowColumn style={{textAlign:'right',width:'10%',color: '#ff0000'}}>{this.props.rowContent.change.toLocaleString('de-DE',{maximumFractionDigits:2})}</TableRowColumn>

        } else { return <TableRowColumn style={{textAlign:'right',width:'10%',color: '#66ff66'}}>{this.props.rowContent.change.toLocaleString('de-DE',{maximumFractionDigits:2})}</TableRowColumn> }
    };
    renderPercentChangeColor(){
        if (this.props.rowContent.change< 0){
            return <TableRowColumn style={{textAlign:'right',width:'10%',color: '#ff0000'}}>{this.props.rowContent.percentChange.toLocaleString('de-DE',{maximumFractionDigits:2})}%</TableRowColumn>

        } else { return <TableRowColumn style={{textAlign:'right',width:'10%',color: '#66ff66'}}>{this.props.rowContent.percentChange.toLocaleString('de-DE',{maximumFractionDigits:2})}%</TableRowColumn> }
    };
    render(){
        if (this.state.rowNum>0){
            return(
                <TableRow>
                    <TableRowColumn style={{fontWeight: 'bold',textAlign:'left',width:'15%',color:'#00ccff'}}>{this.props.rowContent.code}.AX</TableRowColumn>
                    <TableRowColumn style={{textAlign:'left',width:'40%',whiteSpace:'pre-wrap',color:'rgb(158, 158, 158)'}}>{this.props.rowContent.name}</TableRowColumn>
                    <TableRowColumn style={{fontWeight: 'bold',textAlign:'right',width:'10%'}}>{this.props.rowContent.price.toLocaleString('de-DE',{maximumFractionDigits:2})}</TableRowColumn>
                    <TableRowColumn style={{fontWeight: 'bold',textAlign:'right',width:'15%'}}>{Math.round(this.props.rowContent.price * this.props.rowContent.volume).toLocaleString('de-DE',{minimumFractionDigits:0})}</TableRowColumn>
                    {this.renderChangeColor()}
                    {this.renderPercentChangeColor()}
                </TableRow>
            );
        }else return false;
    }
}