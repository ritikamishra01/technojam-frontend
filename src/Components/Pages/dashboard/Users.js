import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import React, { useState } from 'react';
//material ui component

const Users = () => {
	return (
		<>
	<div>Users Component</div>
	
		<div>
		<TableHead>
			<TableRow>
				<TableCell>Name</TableCell>
				<TableCell>Batch</TableCell>
				<TableCell>Email</TableCell>
				<TableCell>Github</TableCell>
				<TableCell>LinkedIn</TableCell>
				<TableCell>About</TableCell>
				<TableCell>Generate</TableCell>
				<TableCell>Download</TableCell>
			</TableRow>
		</TableHead>
		</div>
		</>
	);
};

export default Users;
