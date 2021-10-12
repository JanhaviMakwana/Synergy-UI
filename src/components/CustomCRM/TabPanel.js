import { useState } from 'react';
import { Grid, Tabs, Tab, Box, IconButton, Button, Input } from '@mui/material';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import { makeStyles, createStyles } from '@mui/styles';


const styles = makeStyles(() => createStyles({
    container: {
        margin: '0 auto !important',
        padding: '0 5px !important'
    },
    tabs: {
        width: '100% !important',
        height: '36px !important',
        '& .MuiTab-root': {
            outline: 'none !important',
            textTransform: 'inherit !important',
            fontWeight: 'bold !important',
            fontSize: '12px !important',
            padding: '0 !important'
        }
    },
    tabPanel: {
        borderBottom: '1px solid red !important'
    },
    input: {
        borderBottom: '1px solid lightgray !important',
        fontSize: '14px !important',
        padding: '10px !important',
        outline: '0 !important',
        width: '100%'
    },
    tabOpen: {
        color: 'black !important',
        height: '100% !important',
        textTransform: 'initial !important',
        border: '1px solid lightgray !important',
        borderBottom: '0 !important',
        borderTopLeftRadius: '10px !important',
        borderTopRightRadius: '10px !important'
    },
    icon: {
        fontSize: '18px !important'
    },
    tabContent: {
        border: '1px solid lightgray !important'
    }
}))
    ;
const TabPanel = () => {

    const [value, setValue] = useState(0);
    const classes = styles();

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return <div {...other} >{value === index &&
            <Box className={classes.tabContent} >
                {children}
            </Box>}
        </div>;
    }

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    return (
        <Grid xs={12} item className={classes.container}>
            <Tabs
                value={value}
                className={classes.tabs}
                onChange={handleChange}
                variant="standard"
                indicatorColor="white">
                <Tab classes={{ selected: classes.tabOpen}} label="Message" />
                <Tab classes={{ selected: classes.tabOpen}} label="Contacts" />
            </Tabs>
            <TabPanel value={value} index={0}>

                <Input
                    multiline
                    rows="2"
                    placeholder="Please call..."
                    className={classes.input}
                    disableUnderline
                />
                <Grid container>
                    <Grid item>
                        <IconButton>
                            <FormatUnderlinedIcon className={classes.icon} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <FormatBoldIcon className={classes.icon} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <FormatItalicIcon className={classes.icon} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <StrikethroughSIcon className={classes.icon} />
                        </IconButton>
                    </Grid>
                    <Grid item >
                        <IconButton>
                            <FormatAlignLeftIcon className={classes.icon} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <FormatAlignCenterIcon className={classes.icon} />
                        </IconButton>
                    </Grid>
                    <Grid item sx={{ flex: 1 }}>
                        <IconButton >
                            <FormatAlignRightIcon className={classes.icon} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" >Send Message</Button>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className={classes.contacts}>
                    Contacts
                    </div>
            </TabPanel>
        </Grid>
    );

};

export default TabPanel;