import React from 'react';
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

function ViewAssociate(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let columns;

  props.showoption
    ? (columns = [
        { id: 'fname', label: 'Name', minWidth: 170 },
        { id: 'email', label: 'Email', minWidth: 170 },
        { id: 'address', label: 'Address', minWidth: 170 },
        { id: 'phoneNumber', label: 'Phone Number', minWidth: 170 },
        { id: 'options', label: 'options', minWidth: 170 },
      ])
    : (columns = [
        { id: 'fname', label: 'Name', minWidth: 170 },
        { id: 'email', label: 'Email', minWidth: 170 },
        { id: 'address', label: 'Address', minWidth: 170 },
        { id: 'phoneNumber', label: 'Phone Number', minWidth: 170 },
      ]);

  const deleteService = (index) => {
    const r = window.confirm('Click ok to delete');
    if (r == true) {
      props.deleteService.mutate(props.data[index]);
    }
  };
  const editService = (index) => {
    props.setisEdit(true);
    props.formik.setFieldValue('fname', props.data[index].fname);
    props.formik.setFieldValue('email', props.data[index].email);
    props.formik.setFieldValue('address', props.data[index].address);
    props.formik.setFieldValue('phoneNumber', props.data[index].phoneNumber);

    props.formik.setFieldValue('_id', props.data[index]._id);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
            {props.data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      if (column.id === 'options') {
                        return (
                          <div className='m-4'>
                            <IconButton
                              aria-label='edit'
                              onClick={() => editService(index)}
                            >
                              <i class='fas fa-edit text-color-primary' />
                            </IconButton>
                            &nbsp;
                            <IconButton
                              aria-label='delete'
                              onClick={() => deleteService(index)}
                            >
                              <i class='fas fa-trash text-color-primary' />
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
                );
              })}
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

export default ViewAssociate;
