import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Grid, createTheme, ThemeProvider as MuiThemeProvider, CssBaseline, Typography } from '@mui/material';
import * as firebase from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import 'firebase/auth';
import CallsInfoCards from './CallsInfoCards';
import Cards from './Cards';
import CompanyInfo from './CompanyInfo';
import Greeting from './Greeting';
import Notifications from './Notifications';
import TabPanel from './TabPanel';
import { makeStyles } from '@mui/styles';

const firebaseConfig = {
    apiKey: "AIzaSyDXb5JNrnZo-zFMYNmNntR6ljOI4-O3C0A",
    authDomain: "synergy-ui-86ff8.firebaseapp.com",
    databaseURL: "https://synergy-ui-86ff8-default-rtdb.firebaseio.com",
    projectId: "synergy-ui-86ff8",
    storageBucket: "synergy-ui-86ff8.appspot.com",
    messagingSenderId: "882213361873",
    appId: "1:882213361873:web:7ef5e21d39aacc34d0cdf0",
    measurementId: "G-QE2R2DBJG8"
};

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
        padding: '5px'
    },
    panel2: {
        padding: '7px'
    }
}));

const CustomCRM = () => {
    const classes = useStyles();
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const app = firebase.initializeApp(firebaseConfig);
            const db = getDatabase(app);
            const dbRef = ref(db, 'test1');
            onValue(dbRef, (snapshot) => {
                const response = snapshot.val();
                setData(response);
                console.log("############fetchedInfo", response);
            });
        }
        fetchData();
    }, []);

    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline>

                    {data ?
                        <Grid container className={classes.root} >
                            <Grid item xs={8} className={classes.panel1}>
                                <CallsInfoCards callsInfo={data && data.callsInfo} />
                                <Greeting greeting={data && data.greeting} />
                                <TabPanel />
                                <Cards tags={data && data.tags} callNote={data && data.callNote} />
                                <Notifications notifications={data && data.notifications} />
                            </Grid>
                            <Grid className={classes.panel2} item xs={4}>
                                <CompanyInfo companyInfo={data && data.companyInfo} />
                            </Grid>
                        </Grid>
                        :
                        <Grid container>
                            <Typography variant="h6" className={classes.root}>
                                Loading...
                        </Typography>
                        </Grid>}

                </CssBaseline>
            </ThemeProvider>
        </MuiThemeProvider>
    );
}

export default CustomCRM;