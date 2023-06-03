import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import { localToken, endPoint, ImageEndPoint } from 'config/config';
import TextField from '@mui/material/TextField';

const columns = [
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'desc', label: 'Description', minWidth: 170 },
  // { id: 'category', label: 'category', minWidth: 170 },
  { id: 'option', label: 'Options', minWidth: 170 },
];

export default function ViewAnnouncement(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [copyList, setCopyList] = useState(props.data);
  const requestSearch = (searched) => {
    setCopyList(props.data.filter((item) => item.name.includes(searched)));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteService = (row) => {
    console.log('row=>', row);
    const r = window.confirm('Do You Really Want to Delete It ?');
    if (r == true) {
      props.deleteService.mutate({ Id: row._id });
      // console.log(row);
    }
  };
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TextField
        variant='outlined'
        placeholder='search...'
        type='search'
        onInput={(e) => requestSearch(e.target.value)}
      />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(copyList.length > 0 ? copyList : props.data)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    if (column.id === 'option') {
                      return (
                        <div className='m-4'>
                          &nbsp;
                          <IconButton
                            aria-label='delete'
                            onClick={() => deleteService(row)}
                          >
                            <i class='fas fa-trash text-sm' />
                          </IconButton>
                        </div>
                      );
                    } else {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    }
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={props.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
