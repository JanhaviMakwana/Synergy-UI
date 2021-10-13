import {useState, useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Paper, Typography, Button } from '@mui/material';

const useStyles = makeStyles(() => ({
    container: {
        height: 'fit-content',
        position: 'relative',
        padding: '5px 0 !important'
    },
    card: {
        margin: '2px 10px !important',
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
        bottom: 10
    },
}));

const Cards = (props) => {
    const classes = useStyles();
    console.log("###################CardsProps", props);
    const [tags, setTags] = useState();
    const [callNote, setCallNote] = useState();

    useEffect(() => {
        if(props.tags) {
            setTags(props.tags);
            setCallNote(props.callNote && props.callNote);
        }
        return () => {
            setTags();
            setCallNote();
        }
    },[props.tags]);
    
    return (
        <Grid container className={classes.container}>
           {tags && <Grid item xs={5} >
                <Paper elevation={1} className={classes.card}>
                    <Typography variant="h5">
                        Tags
                    </Typography>
                    <div className={classes.tagBox}>
                        {tags.tags1.map((tag, index) => {
                            return <Typography
                                key={index}
                                sx={{ backgroundColor: '#fcd0ca' }}
                                variant="h6"
                            >
                                {tag}
                            </Typography>
                        })}
                    </div>
                    <div className={classes.tagBox} >
                        {tags.tags2.map((tag, index) => {
                            return <Typography
                                key={index}
                                sx={{ backgroundColor: '#c4ebf2' }}
                                variant="h6"
                            >
                                {tag}
                            </Typography>
                        })}
                    </div>
                    <div className={classes.tagBox} >
                        {tags.tags3.map((tag, index) => {
                            return <Typography
                                key={index}
                                sx={{ backgroundColor: '#feeac3' }}
                                variant="h6"
                            >
                                {tag}
                            </Typography>
                        })}
                    </div>
                    <div className={classes.tagBox}>
                        {tags.tags4.map((country, index) => {
                            return <Typography key={index} variant="h6" className={classes.country}>{country}</Typography>
                        })}
                    </div>
                </Paper>
            </Grid>}
           {callNote && <Grid item xs={7} >
                <Paper elevation={1} className={classes.card} sx={{ backgroundColor: '#fbfbef' }}>
                    <Typography variant="h5">Call Notes</Typography>
                    <Typography variant="h6" className={classes.callNote}>
                        {callNote}
                    </Typography>

                    <Button variant="contained" color="primary" className={classes.clearBtn}>
                        Clear
                        </Button>

                </Paper>
            </Grid>}

        </Grid>

    );

};

export default Cards;