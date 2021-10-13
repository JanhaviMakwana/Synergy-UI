import { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    container: {

        display: 'inline-flex',
        flexFlow: 'row wrap',
        width: '100%',
        padding: '5px 0 !important',

    },
    callsInfoCard: {
        padding: '7px 5px',
        width: '180px',
        height: '60px',
        margin: '5px 7px !important',
        borderRadius: '10px !important',
        color: 'gray',
        '& h6': {
            color: 'gray',
            fontSize: '14px'
        }
    },
    infoValue: {
        color: 'green',
        width: 'fit-content !important',
        margin: '0 auto !important'
    }
})
);

const CallsInfoCards = (props) => {

    const [callsInfo, setCallsInfo] = useState();
    console.log("#############CallsInfoCardsProps", props);

    useEffect(() => {
        if (props.callsInfo) {
            setCallsInfo(props.callsInfo);
        }
        return () => {
            setCallsInfo();
        }
    }, [props.callsInfo])

    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.container}>
            {callsInfo && callsInfo.map((c) => {
                return <Paper key={c.key} className={classes.callsInfoCard} style={{ backgroundColor: c.key !== 'Calls in Queue' ? 'rgba(233, 248, 235, 0.3)' : 'rgba(255, 237, 235, 0.4)' }} >
                    <Typography variant="h6" >{c.key}</Typography >
                    <Typography variant="h6" className={classes.infoValue} style={{ color: c.key === 'Calls in Queue' ? 'red' : 'green' }}>{c.value}</Typography >
                </Paper>
            })}
        </Grid>
    );
}


export default CallsInfoCards;