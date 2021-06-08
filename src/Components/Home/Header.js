import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core'; 
import theme from '../../theme'  
import {ReactComponent as Logo} from '../../Img/hero.svg';

export default function Header() {
    const useStyles = makeStyles({
        headerContainer: {
            width: '95%',
            margin: 'auto',
            marginTop: '10%',
            [theme.breakpoints.down('md')]: {
                marginTop: '5%'
            },
            [theme.breakpoints.down('xs')]: {
                marginTop: '0'
            },
            
        },

        hero: {
            padding: '40px',
            paddingTop: '170px'
        },
        svg: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            [theme.breakpoints.down('lg')]: {
                alignItems: 'center',
            },
        },
        logo: {
            [theme.breakpoints.down('lg')]: {
                width: '100%',
            height: 'auto'
            },
            
        }
    });
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.headerContainer}>
                <Grid item  xl={6} lg={6} md={12} sm={12} xs={12} className={classes.hero}>
                    <Typography variant='h2' gutterBottom="true" align='left' style={{marginBottom: '50px', fontWeight: 'bold'}}>BITS 2021</Typography>

                    <Typography variant='h5'  align='left' style={{marginBottom: '50px'}}><span style={{color: '#3ed1b8'}}>The First-Ever Task-Based Intra-School ICT competition,</span>  organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT</Typography>

                    <Button variant='outlined' color='secondary'>Register Now</Button>
                    <Button variant='contained' href='#catt' color='secondary' style={{color: '#000', marginLeft: '20px'}}>More Info</Button>
                </Grid>
                <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className={classes.svg}>
                    <div className={classes.svgContainer}><Logo className={classes.logo}/></div>
                    
                </Grid>
            </Grid>
        </div>
    )
}
