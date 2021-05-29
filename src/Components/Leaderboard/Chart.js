import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import data from '../../Data/tasks.json'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#0f7bc7',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  papper: {
    width: '20%',

  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#ffffff',
    },
    '&:nth-of-type(odd)': {
        backgroundColor: '#fefefe',
      },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Anupama Dissanayake', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
  createData('1', 'Thusal Ranawaka', '09-11', 29, 839),
];

const useStyles = makeStyles({
  table: {
    width: '80%',
    marginLeft: '10%',
    marginTop: '5%',
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.papper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Class</StyledTableCell>
            <StyledTableCell align="center">No. Of Tasks Accepted</StyledTableCell>
            <StyledTableCell align="center">Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((list, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {list.name}
              </StyledTableCell>
              <StyledTableCell align="center">{list.name}</StyledTableCell>
              <StyledTableCell align="center">{list.fat}</StyledTableCell>
              <StyledTableCell align="center">{list.carbs}</StyledTableCell>
              <StyledTableCell align="center">{list.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}