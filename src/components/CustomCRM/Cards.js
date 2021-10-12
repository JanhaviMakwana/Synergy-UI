import { makeStyles, createStyles } from '@mui/styles';
import { Grid, Paper, Typography, Button } from '@mui/material';

const styles = makeStyles(() => createStyles({
    container: {
        width: '100%',
        height: '30%',
        position: 'relative'
    },
    card: {
        width: '100%',
        padding: '5px !important',
        height: '100%',
        '& h5': {
            fontSize: '17px !important',
            marginLeft: '5px !important'
        },
        '& h6': {
            fontSize: '14px !important'
        }
    },
    tagBox: {
        display: 'flex',
        flexFlow: 'row wrap',
        padding: '5px auto',
        '& h6': {
            width: 'fit-content',
            borderRadius: '19px',
            padding: '6px 10px !important',
            margin: '2px 4px'
        }
    },
    callNote: {
        color: 'gray',
        marginBottom: 'auto !important',
        fontSize: '14px !important',
        fontWeight: '600 !important',
        margin: 'auto 5px !important'
    },
    country: {
        width: 'fit-content',
        backgroundColor: '#e9e3f8',
        borderRadius: '19px',
        padding: '6px',
        margin: 'auto 15px !important',
        fontSize: '14px !important'
    },
    clearBtn: {
        marginLeft: '5px !important',
        position: 'absolute !important',
        bottom: 5
    },
}));

const Cards = () => {
    const classes = styles();
    const tags1 = ['Vodafone', 'Scripting'];
    const tags2 = ['MyReceptionist', 'Diary'];
    const tags3 = ['VirtualHQ']
    const tagsCountry = ['US', 'US', 'UK'];
    return (
        <Grid container className={classes.container} spacing={1}>
            <Grid item xs={5} >
                <Paper elevation={1} className={classes.card}>
                    <Typography variant="h5">
                        Tags
                    </Typography>
                    <div className={classes.tagBox}>
                        {tags1.map(tag => {
                            return <Typography
                                sx={{ backgroundColor: '#fcd0ca' }}
                                variant="h6"
                            >
                                {tag}
                            </Typography>
                        })}
                    </div>
                    <div className={classes.tagBox} >
                        {tags2.map(tag => {
                            return <Typography
                                sx={{ backgroundColor: '#c4ebf2' }}
                                variant="h6"
                            >
                                {tag}
                            </Typography>
                        })}
                    </div>
                    <div className={classes.tagBox} >
                        {tags3.map(tag => {
                            return <Typography
                                sx={{ backgroundColor: '#feeac3' }}
                                variant="h6"
                            >
                                {tag}
                            </Typography>
                        })}
                    </div>
                    <div className={classes.tagBox}>
                        {tagsCountry.map(country => {
                            return <Typography variant="h6" className={classes.country}>{country}</Typography>
                        })}
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={7} >
                <Paper elevation={1} className={classes.card} sx={{ backgroundColor: '#fbfbef' }}>
                    <Typography variant="h5">Call Notes</Typography>
                    <Typography variant="h6" className={classes.callNote}>
                        Laboris in qui ut commodo incididunt in deserunt velit amet ipsum in pariatur.
                        Dolor eu ad est consequat laboris incididunt laborum ad Lorem ex.
                    </Typography>

                    <Button variant="contained" color="primary" className={classes.clearBtn}>
                        Clear
                        </Button>

                </Paper>
            </Grid>

        </Grid>

    );

};

export default Cards;