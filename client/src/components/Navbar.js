import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {isAuth,signout} from '../actions/auth'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
                  <Typography variant="h6" className={classes.title}>
          <Link to="/products">

            Rewaa Technology
            </Link>
          </Typography>
          {!isAuth() ? (
                                <>
                                    <Button color='inherit' key={'signinbutton'}>
                                        <Link to='/signin' >
                                            <Typography>SignIn</Typography>
                                        </Link>
                                    </Button>
                                    <Button color='inherit' key={'signupbutton'}>
                                        <Link to='/signup'>
                                            <Typography>SignUp</Typography>
                                        </Link>
                                    </Button>
                                    
                                </>
                            ) : (
                                <>
                                  <Button color='inherit' key={'logoutbutton'}>
                                        <Link to='/createproduct'>
                                            <Typography>Create Products</Typography>
                                        </Link>
                                    </Button> 
                                  <Button color='inherit' key='logoutbutton' onClick={() =>signout()}>
                                        <Link to='/signin'>
                                            <Typography>Logout</Typography>
                                        </Link>
                                    </Button> 
                                   
                                </>
                            )}
          
        </Toolbar>
      </AppBar>
      <div>
        <h1>Hello from Rewaa Teach</h1>
      </div>
    </div>
  );
}
