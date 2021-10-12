import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Grid, createTheme, ThemeProvider as MuiThemeProvider, CssBaseline, Typography } from '@mui/material';
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
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    height: '35px !important'
                },
                root: {
                    height: '35px !important'
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    height: '35px !important'
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

const styles = makeStyles(theme => ({
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
    const classes = styles();
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