import React from "react";
import "./App.css";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Toolbar,
  Typography,
  Checkbox,
  Tooltip,
  FormControlLabel,
  Switch,
  DeleteIcon,
  FilterListIcon,
  Paper
} from '@material-ui/core';
import { supplyData } from "./data";


const columns = [
  {
    id: 'app_bundle',
    label: 'App Bundle',
    maxWidth: 300,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'category',
    label: 'Category',
    maxWidth: 300,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'interstitial',
    label: 'Interstitial',
    maxWidth: 300,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'premium',
    label: 'Premium',
    maxWidth: 300,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});



export const Supply = () => {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
  <Paper className={classes.root}>
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
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
            {supplyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={supplyData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
  </Paper>
  );
};
