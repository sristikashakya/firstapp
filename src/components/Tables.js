import React,{ Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Tables extends Component{
	render(){
		return(
				<Table>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn>ID</TableHeaderColumn>
							<TableHeaderColumn>Name</TableHeaderColumn>
							<TableHeaderColumn>Status</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody>
				      <TableRow>
				        <TableRowColumn>1</TableRowColumn>
				        <TableRowColumn>Dileshwori Joshi</TableRowColumn>
				        <TableRowColumn>Employed</TableRowColumn>
				      </TableRow>
				      <TableRow>
				        <TableRowColumn>2</TableRowColumn>
				        <TableRowColumn>Randal White</TableRowColumn>
				        <TableRowColumn>Unemployed</TableRowColumn>
				      </TableRow>
				      <TableRow>
				        <TableRowColumn>3</TableRowColumn>
				        <TableRowColumn>Susmita Shrestha</TableRowColumn>
				        <TableRowColumn>Employed</TableRowColumn>
				      </TableRow>
				      <TableRow>
				        <TableRowColumn>4</TableRowColumn>
				        <TableRowColumn>Sristika Shakya</TableRowColumn>
				        <TableRowColumn>Employed</TableRowColumn>
				      </TableRow>
				      <TableRow>
				        <TableRowColumn>5</TableRowColumn>
				        <TableRowColumn>Ram Shrestha</TableRowColumn>
				        <TableRowColumn>Unemployed</TableRowColumn>
				      </TableRow>
    				</TableBody>
				</Table>
			);
	}
}
export default Tables;