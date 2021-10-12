import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Grid, createTheme, ThemeProvider as MuiThemeProvider, CssBaseline} from '@mui/material';
import CallsInfoCards from './CallsInfoCards';
import Cards from './Cards';
import CompanyInfo from './CompanyInfo';
import Greeting from './Greeting';
import Notifications from './Notifications';
import TabPanel from './TabPanel';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'inherit',
                    fontWeight: 'bold'
                }
            }
        }
    },
    palette: {
        primary: {
            main: '#0eafcc',
            contrastText: '#fff'
        }
    },

    typography: {
        allVariants: {
            fontFamily: 'inherit',
            fontWeight: 'bold'
        }
    }
});

const useStyles = makeStyles(() => ({
    root: {
        fontFamily: 'inherit',
        height: '100%'
    },
    panel1: {
        padding: '7px'
    },
    panel2: {
        padding: '7px'
    }
}));

const CustomCRM = () => {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Grid container className={classes.root} >
                        <Grid container xs={8} className={classes.panel1} spacing={0.5}>
                            <CallsInfoCards />
                            <Greeting />
                            <TabPanel />
                            <Cards />
                            <Notifications />
                        </Grid>
                        <Grid className={classes.panel2} item xs={4}>
                            <CompanyInfo />
                        </Grid>
                    </Grid>
                </CssBaseline>
            </ThemeProvider>
        </MuiThemeProvider>
    );
}

export default CustomCRM;