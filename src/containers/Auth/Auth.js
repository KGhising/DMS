import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, resetPassword } from '../../store/actions/auth';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Drone from '../../assets/quad.jpg';
import Copyright from '../../components/UI/Copyright/Copyright';
import IntlMessages from '../../util/IntlMessages';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import { NotificationContainer, NotificationManager } from "react-notifications";
const SignIn = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100vh',
        },
        image: {
            backgroundImage: `url(${Drone})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const [email, setEmail] = useState('demo@example.com');
    const [password, setPassword] = useState('demo#123');
    const dispatch = useDispatch();
    const token = useSelector(({ auth }) => auth.token);
    const errorMessage = useSelector(({ auth }) => auth.error);
    const classes = useStyles();

    useEffect(() => {
        if (token !== null) {
            props.history.push('/');
        }
    }, [token]);

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                        </Typography>
                    <Typography component="h5">
                        {errorMessage}
                    </Typography>
                    <form className={classes.form} noValidate={false}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={<IntlMessages id="appModule.email" />}
                            name="email"
                            defaultValue={email}
                            onChange={(event) => setEmail(event.target.value)}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={<IntlMessages id="appModule.password" />}
                            type="password"
                            id="password"
                            defaultValue={password}
                            autoComplete="current-password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            onClick={() => {
                                dispatch(signIn({ email, password }))
                            }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                            </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                    </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}





// const mapStateToProps = state => {
//     return {
//         loading: state.auth.loading,
//         error: state.auth.error,
//         isAuthenticated: state.auth.token !== null,
//         token: state.auth.token,
//         authRedirectPath: state.auth.authRedirectPath
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onAuth: (email, password) => dispatch(actions.auth(email, password)),
//         onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
//         resetPassword: () => dispatch(actions.resetPassword())
//     };
// };

export default SignIn;