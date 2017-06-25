import React from "react";
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {RowContent} from "./row";

export class TableContent extends React.Component{
    stateTable = {
        fixedHeader: true,
        fixedFooter: false,
        stripedRows: false,
        showRowHover: false,
        selectable: false,
        multiSelectable: false,
        enableSelectAll: false,
        showCheckboxes: false
    };

    render(){
        return (
            <Table
                fixedHeader={this.stateTable.fixedHeader}
                selectable={this.stateTable.selectable}
                multiSelectable={this.stateTable.multiSelectable}>
                <TableHeader
                    displaySelectAll={this.stateTable.showCheckboxes}
                    adjustForCheckbox={this.stateTable.showCheckboxes}
                    enableSelectAll={this.stateTable.enableSelectAll}>
                    <TableRow colSpan="6">
                        <TableHeaderColumn style={{textAlign:'left',width:'15%'}}>
                            Code
                        </TableHeaderColumn>
                        <TableHeaderColumn style={{textAlign:'left',width:'40%'}}>
                            Company
                        </TableHeaderColumn>
                        <TableHeaderColumn style={{textAlign:'right',width:'10%'}}>
                            Price
                        </TableHeaderColumn>
                        <TableHeaderColumn style={{textAlign:'right',width:'15%'}}>
                            Value
                        </TableHeaderColumn>
                        <TableHeaderColumn style={{textAlign:'right',width:'10%'}}>
                            Change
                        </TableHeaderColumn>
                        <TableHeaderColumn style={{textAlign:'right',width:'10%'}}>
                            %Change
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <RowContent/>
                    {this.props.content.map((row,index) =>

                       <RowContent key={index} rowContent = {row}/>


                    )}
                </TableBody>
            </Table>
        );
    }
}