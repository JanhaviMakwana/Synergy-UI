import { useState, useEffect } from 'react';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(() => ({
    container: {
        padding: '10px 0 !important',
        '& h6': {
            margin: 'auto 5px !important',
            flex: '1 !important',
            fontSize: '14px !important',
            fontWeight: '600 !important'
        },
        '& .MuiBox-root': {
            border: '1px solid gray',
            borderRadius: '5px',
            width: '380px',
            display: 'inline-flex',
            margin: '0 7px !important'
        }
    },
    alert: {
        border: '1px solid #ffcbc4 !important',
        backgroundColor: '#ffedeb !important '
    },
    success: {
        border: '1px solid #90ee90 !important',
        backgroundColor: '#e9f8eb !important'
    },
    icon: {
        fontSize: '18px !important',
        margin: 'auto 5px !important'
    },
    closeIcon: {
        fontSize: '18px !important'
    }
}));

const Notifications = (props) => {

    const [notifications, setNotifications] = useState();
    console.log("###########notificationsProps", props);
    useEffect(() => {
        if (props.notifications) {
            setNotifications(props.notifications)
        }
        return () => {
            setNotifications();
        }
    }, [props.notifications]);
    const classes = useStyles();

    return (
        <Grid item className={classes.container} >
            {notifications && notifications.warnings.map(notification => {
                return <Box item className={classes.alert} key={notification}>
                    <WarningIcon className={classes.icon} sx={{ color: 'red' }} />
                    <Typography variant="h6">{notification}</Typography>
                    <IconButton ><CloseIcon className={classes.closeIcon} /></IconButton>
                </Box>
            })}
            {notifications && notifications.others.map(notification => {
                return <Box item className={classes.success} key={notification}>
                    <CheckCircleIcon className={classes.icon} sx={{ color: '#39a837' }} />
                    <Typography variant="h6">{notification}</Typography>
                    <IconButton ><CloseIcon className={classes.closeIcon} /></IconButton>
                </Box>
            })}
        </Grid>
    );

};

export default Notifications;