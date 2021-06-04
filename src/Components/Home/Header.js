import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'; 
import theme from '../../theme'  

export default function Header() {
    const useStyles = makeStyles({
        headerContainer: {
            width: '80%',
            margin: 'auto',
            marginTop: '200px'
        },

        hero: {
            backgroundColor: '#000'
        },
        svg: {

        }
    });
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.headerContainer}>
                <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className={classes.hero}>
                    <h1>Hello</h1>
                </Grid>
                <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className={classes.svg}>
                    <h1>World</h1>
                </Grid>
            </Grid>
        </div>
    )
}
