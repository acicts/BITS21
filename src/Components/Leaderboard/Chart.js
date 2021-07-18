import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import data from '../../Data/LeaderBoard.json'
import theme from '../../theme';
import { Typography } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#06192eb0',
    backdropFilter: 'blur(10px)',
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
      backgroundColor: '#183d5de8',
    
    },
    '&:nth-of-type(odd)': {
      backgroundColor: '#183d5dc0',
      
      },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    width: '80%',
    marginLeft: '10%',
    
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      width: '95%',
      margin: 'auto',
      marginTop: '50px',
  },
  },
  update: {
    width: '80%',
    marginLeft: '10%',
    marginTop: '50px',
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      width: '95%',
      margin: 'auto',
      marginTop: '50px',
  },
  },
  body: {
    color: '#fff',
    borderBottom: '1px solid rgb(12 76 126)',
    zIndex: '1'
  },
  papper: {
    marginTop: '100px'
  },
  tBody: {
    borderSpacing: '0px',
    borderCollapse: 'separate',
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.papper}>
      <Typography className={classes.update} variant='caption'>Leaderboard will be updated on 28.07.2021 12AM</Typography>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{color: '#3ed1b8'}}>Rank</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Class</StyledTableCell>
            <StyledTableCell align="center">No. Of Tasks Accepted</StyledTableCell>
            <StyledTableCell align="center">Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tBody}>
          {data.map((list, index) => (
            <StyledTableRow key={index} >
              <StyledTableCell component="th" scope="row" style={{color: '#3ed1b8', fontWeight: 'bold'}} className={classes.body}>
                {list.index + 1}
              </StyledTableCell>
              <StyledTableCell  className={classes.body} align="center">{list.name}</StyledTableCell>
              <StyledTableCell  className={classes.body} align="center">{list.class}</StyledTableCell>
              <StyledTableCell  className={classes.body} align="center">{list.tasks}</StyledTableCell>
              <StyledTableCell  className={classes.body} align="center">{list.points}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}