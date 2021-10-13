import { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    container: {
        padding: '3px 5px !important',
        '& h6': {
            fontSize: '13px'
        }
    },
    header: {
        color: '#B2BEB5',
        margin: '0 auto 3px auto !important'
    },
    greeting: {
        borderRadius: '7px !important',
        whiteSpace: 'pre-line',
        boxSizing: 'border-box',
        padding: '5px 5px',
        border: '3px solid green',
    }
}));

const Greeting = (props) => {
    const classes = useStyles();
    console.log("##########GreetingProps", props);
    const [greeting, setGreeting] = useState();

    useEffect(() => {
        if (props.greeting) {
            setGreeting(props.greeting);
        }
        return () => {
            setGreeting();
        }
    }, [props.greeting])

    return (
        <Grid item xs={12} className={classes.container}>
           {greeting && <Typography variant="h6" className={classes.header}>
                Greeting
			</Typography>}
            {greeting && <Typography variant="h6" className={classes.greeting}>
                {greeting}
            </Typography>}
        </Grid>
    );

};

export default Greeting;