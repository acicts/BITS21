import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

function Categories() {
    const useStyles = makeStyles({
        catContainer: {
          maxWidth: '1400px',
          margin: 'auto',
          backgroundColor: theme.palette.primary.main
        }
    });
      const classes = useStyles();
    return (
        <div className={classes.catContainer}>
            <Grid xl={12} md={12} lg={12} container direction="row" justify="space-around" alignItems="center" className={classes.categoryCard}>
    
    <Card className={classes.root} elevation='6'>
      <CardHeader
        title="CODE"
      />
      <CardContent>
        <Typography variant="body2"  component="p">
        Code the shit out of your computer and build google, android, iOS and an electric car!!!
        </Typography>
      </CardContent>
    </Card>
    </Grid>
        </div>
    )
}

export default Categories
