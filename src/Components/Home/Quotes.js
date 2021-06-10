import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function Quotes() {
    const useStyles = makeStyles({
    });

    const classes = useStyles();
    return (
        <div>
            <div className={classes.quoteContainer}>
                <Typography align='left' variant='h4'>BITS is the best thing that ever happened to me!</Typography>
                <Typography align='left' variant='h6' >~ Chamindu Jayanath</Typography>
                <Typography align='left' variant='caption' >BITS 2019 Winner</Typography>
            </div>
        </div>
    )
}

export default Quotes
