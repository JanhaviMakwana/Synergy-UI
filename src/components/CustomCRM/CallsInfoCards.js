import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles} from '@mui/styles';

const useStyles = makeStyles(() =>({
        container: {
            margin: '0 auto !important',
            height: 'fit-content',
            display: 'inline-flex',
            flexFlow: 'row wrap',

        },
        callsInfoCard: {
            padding: '7px 5px',
            width: '180px',
            height: '60px',
            margin: '2px 5px !important',
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

const CallsInfoCards = () => {

    const classes = useStyles();
    const callsInfo = [
        {
            attribute: 'Average Handling Time',
            value: '1:25',
            color: 'primary'
        }, {
            attribute: 'Pickup Time',
            value: '0:04',
            color: 'primary'
        }, {
            attribute: 'Hold Time',
            value: '0:27',
            color: 'primary'
        }, {
            attribute: 'Calls in Queue',
            value: '15',
            color: 'secondary'
        }
    ]

    return (
        <Grid item xs={12} className={classes.container}>
            {callsInfo.map(c => {
                return <Paper item className={classes.callsInfoCard} style={{ backgroundColor: c.color === 'primary' ? 'rgba(233, 248, 235, 0.3)' : 'rgba(255, 237, 235, 0.4)'}} >
                    <Typography variant="h6" >{c.attribute}</Typography >
                    <Typography variant="h6" className={classes.infoValue} style={{color: c.color !== 'primary' ? 'red' :'green'}}>{c.value}</Typography >
                </Paper>
            })}
        </Grid>
    );
}


export default CallsInfoCards;