import { Grid, Typography, Button, ButtonGroup, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({

    companyInfoHeader: {
        marginTop: '35px !important'
    },
    companyInfoAttribute: {
        fontSize: '14px !important',
        margin: '15px auto 5px auto !important'
    },

    companyInfoValue: {
        width: '100%',
        border: '1px solid lightgray',
        borderRadius: '10px',
        padding: '12px 10px',
        fontSize: '14px !important',
        color: 'gray'
    },
    map: {
        padding: '16px 2px',
        height: '40% !important'
    },
    btns: {
        width: '100%',
        display: 'flex !important',
        justifyContent: 'flex-end !important'
    }
}))

const CompanyInfo = () => {
    const classes = useStyles();

    return (
        <Grid container >
            <Grid xs={8} item>
                <Typography className={classes.companyInfoHeader} variant="h6">Company Info</Typography>
                <Typography className={classes.companyInfoAttribute} variant="h6">
                    Company name
                </Typography>
                <Box className={classes.companyInfoValue} >
                    OfficeHQ
                </Box>
                <Typography className={classes.companyInfoAttribute} variant="h6">
                    Called number
                </Typography>
                <Box className={classes.companyInfoValue} >
                    02 8231 6600
                </Box>
                <Typography className={classes.companyInfoAttribute} variant="h6">
                    Called contact
                </Typography>
                <Box className={classes.companyInfoValue}>
                    Steve Lombardo
                </Box>
            </Grid>
            <Grid item xs={12} className={classes.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6980301649664!2d72.49826931539376!3d23.034857121648198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8352e403437b%3A0xdc9d4dae36889fb9!2sTatvaSoft!5e0!3m2!1sen!2sin!4v1633504317261!5m2!1sen!2sin"
                    width="100%"
                    height="200px"
                    loading="lazy"></iframe>
            </Grid>
            <Grid item className={classes.btns}>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button variant="contained" >Map</Button>
                    <Button>Info</Button>
                    <Button>Faqs</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    );

};

export default CompanyInfo;