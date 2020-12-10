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
  Paper
} from '@material-ui/core';
import { supplyData } from "./data";


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
  table: {
    minWidth: 500,
  },
});



export const Supply = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="left">App Bundle</StyledTableCell>
          <StyledTableCell align="left">Name</StyledTableCell>
          <StyledTableCell>Category</StyledTableCell>
          <StyledTableCell align="center">Interstitial</StyledTableCell>
          <StyledTableCell align="center">Premium</StyledTableCell>
        </TableRow>
      </TableHead>
        <TableBody>
          {supplyData.map((data,key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row" width="350">
                {data.app_bundle}
              </StyledTableCell>
              <StyledTableCell align="left" width="300">{data.name}</StyledTableCell>
              <StyledTableCell align="left" width="150">{data.category}</StyledTableCell>
              <StyledTableCell align="center">{data.interstitial}</StyledTableCell>
              <StyledTableCell align="center">{data.premium}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
};
