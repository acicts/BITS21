import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function Quotes() {
    const useStyles = makeStyles({
        quoteContainer: {
            padding: '80px',
            
        }
    });

    const classes = useStyles();
    return (
        <div>
            <div className={classes.quoteContainer}>
                <Typography align='left' variant='h4'> <span style={{color: '#3ed1b8', fontSize: '50px'}}>“</span> If it wasn't for BITS, I could've missed so many wonderful opportunities <span style={{color: '#3ed1b8', fontSize: '50px'}}>”</span> </Typography>
                <Typography align='left' variant='h6' style={{marginLeft: '30px'}}>~ Chamindu Jayanath</Typography>
                <Typography align='left' variant='h6' style={{marginLeft: '45px', color: '#ffffffb3'}}>BITS '19 Winner</Typography>
            </div>

            <div className={classes.quoteContainer}>
                <Typography align='right' variant='h4'> <span style={{color: '#3ed1b8', fontSize: '50px'}}>“</span> I think BITS will have a great impact on the students who like the technical side of our lives <span style={{color: '#3ed1b8', fontSize: '50px'}}>”</span> </Typography>
                <Typography align='right' variant='h6' style={{marginRight: '30px'}}>~ Chamuthu Edirisuriya</Typography>
                <Typography align='right' variant='h6' style={{marginRight: '45px', color: '#ffffffb3'}}>President of ACICTS</Typography>
            </div>

            <div className={classes.quoteContainer}>
                <Typography align='left' variant='h4'> <span style={{color: '#3ed1b8', fontSize: '50px'}}>“</span>Enthusiasm and commitment made me a winner. That victory was my turning point. I also invite you to be a winner too. <span style={{color: '#3ed1b8', fontSize: '50px'}}>”</span> </Typography>
                <Typography align='left' variant='h6' style={{marginRight: '30px'}}>~ Gothira Mendis
</Typography>
                <Typography align='left' variant='h6' style={{marginRight: '45px', color: '#ffffffb3'}}>BITS '18 Winner</Typography>
            </div>

        </div>
    )
}

export default Quotes
