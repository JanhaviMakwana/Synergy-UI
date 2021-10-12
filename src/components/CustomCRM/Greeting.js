import { Grid, Typography} from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const styles = makeStyles(() => createStyles({
    container: {
        height: 'fit-content',
        margin: '0 auto !important',
        padding: '0 5px !important',
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
        boxSizing: 'border-box',
        padding: '5px 5px',
        border: '3px solid green',
    }
}));

const Greeting = () => {
    const classes = styles();

    return (
        <Grid xs={12} className={classes.container}>
            <Typography variant="h6" className={classes.header}>
                Greeting
			</Typography>
            <Typography variant="h6" className={classes.greeting}>
                <p>{`Good <morning/afternoon> XYZ ans Associates. How may I help you ?`}</p>
                <p>{`.`}</p>
                <p>{`****and more notes.`}</p>
            </Typography>
        </Grid>
    );

};

export default Greeting;