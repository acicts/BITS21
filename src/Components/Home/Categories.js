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
          height: '1000px',
          margin: 'auto',
        },

        root: {
          maxWidth: 325,
          height: '400px',
          marginBottom: '50px',
          marginLeft: '50px',
          marginRight: '50px',
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='325' height='400' preserveAspectRatio='none' viewBox='0 0 325 400'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1049%26quot%3b)' fill='none'%3e%3crect width='325' height='400' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M 0%2c86 C 11%2c133.8 33%2c316.2 55%2c325 C 77%2c333.8 88%2c121.4 110%2c130 C 132%2c138.6 143%2c383.8 165%2c368 C 187%2c352.2 198%2c79.8 220%2c51 C 242%2c22.2 254%2c208.6 275%2c224 C 296%2c239.4 315%2c147.2 325%2c128L325 400L0 400z' fill='rgba(24%2c 61%2c 93%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1049'%3e%3crect width='325' height='400' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
backgroundAttachment: 'inherit',
backgroundSize: 'cover',
          color: theme.palette.primary.contrastText,
          borderRadius: '15px',
          transformOrigin: 'center center 0px',
  transition: "all .5s ease-out",
  animationName: 'animate',
  animationDuration: '3s',
  animationIterationCount: 'infinite',
  transform: 'perspective(1000px) rotateX(35deg) rotateY(4deg) rotateZ(-30deg)',
  zIndex: '1',
  '&:hover': {
    animation: 'unset',
    marginTop: '18vh',
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
  },
    
          [theme.breakpoints.down('xs')]: {
            marginLeft: '10px',
            marginRight: '10px',
        },
      },

      subContent: {
        height: '230px',
        position: 'relative',
        width: '320px',
        margin: 'auto'
      },
      subText: {
        position: 'absolute',
      bottom: '0',
      width: '250px',
      },

      categoryCard: {
        height: '900px'
      },
    });

      const classes = useStyles();
    return (
        <div className={classes.catContainer}>
          
            <Grid xl={12} md={12} lg={12} container direction="row" justify="space-around" alignItems="center" className={classes.categoryCard}>

              <Grid Item xl={12}>
              <Typography variant='h1'  align='center' style={{marginTop: '10%'}}>Do what <span style={{color: '#3ed1b8'}}> YOU LOVE</span></Typography>
              </Grid>
     
    <Card className={classes.root}  elevation='3'>
      <CardHeader
        title="CODE"
        subheader="/kəʊd/"
        titleTypographyProps={{variant:'h3', color: 'secondary'}}
      />
      <CardContent className={classes.subContent}>
        <Typography variant="h6" className={classes.subText}>
        Code the shit out of your computer and build google, android, iOS and an electric car!!!
        </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root}  elevation='3'>
      <CardHeader
        title="Design"
        subheader="/dɪˈzʌɪn/"
        titleTypographyProps={{variant:'h3', color: 'secondary'}}
      />
      <CardContent className={classes.subContent}>
        <Typography variant="h6" className={classes.subText}>
        Code the shit out of your computer and build google, android, iOS and an electric car!!!
        </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root}  elevation='3'>
      <CardHeader
        title="Explore"
        subheader="/ɪkˈsplɔː,ɛkˈsplɔ:/"
        titleTypographyProps={{variant:'h3', color: 'secondary'}}
      />
      <CardContent className={classes.subContent}>
        <Typography variant="h6" className={classes.subText}>
        Code the shit out of your computer and build google, android, iOS and an electric car!!!
        </Typography>
      </CardContent>
    </Card>
    </Grid>
        </div>
    )
}

export default Categories
