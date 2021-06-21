import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core'; 


export default function Footer() {
    const useStyles = makeStyles({
        footerContainer: {
            backgroundColor: '#06192e',
            padding: '100px',
            position: 'absolute',
            bottom: '0', 
            left: '0',
            right: '0',
            
        },
        description: {
            width: '600px'
        }
    });
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <Grid container>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12} alignItems='flex-end'>
                    
                        
                   
                    
                </Grid>
            </Grid>
        </div>
    )
}
