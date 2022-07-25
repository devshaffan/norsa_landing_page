import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import address from '../services/address';
import checkUser from '../services/auth';

const useStyles = makeStyles(theme => ({
    layout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(8),
            padding: `${theme.spacing(6)}px ${theme.spacing(4)}px`
        }
    },
    submit: {
        margin: theme.spacing(3, 0, 3)
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
    }
}))

const LoginForm = (props) => {
    const navigate = useNavigate();  // const [email, setEmail] = useState('');
    // const [password,setPassword]=useState('');
    useEffect(async () => {
        if (checkUser()) {
            navigate('/report');
        }
    }, []);
    async function activate(event) {
        event.preventDefault();
        await axios.post(address + '/api/auth/login', formData).then((response) => {
            const accessToken = response.data.data['accessToken'];
            const refreshToken = response.data.data['refreshToken'];
            const role = response.data.data.isAdmin;
            const expiryDate = response.data.data['expiryDate']
            const id = response.data.data['id']
            if (accessToken) {
                const storage = window.localStorage;
                storage.setItem('token', accessToken);
                storage.setItem("refreshToken", refreshToken)
                storage.setItem("role", role);
                storage.setItem('expiryDate', expiryDate)
                storage.setItem('id', id)
                navigate('/report');
            }
        }).catch((err) => {
        })
    }
    const classes = useStyles({});
    const [formData, setFormData] = React.useState({ email: '', password: '' });
    const [submitting, setSubmitting] = React.useState(false);
    return (
        <main className={classes.layout + " loginform"}>
            <Paper className={classes.paper} elevation={2}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <Typography component="h1" variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <Typography component="p" gutterBottom>
                        Log in to your account dashboard
                    </Typography>
                </Box>
                <form method="post" className={classes.form} noValidate>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        defaultValue={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        defaultValue={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                    />
                    <Box mt={3} mb={-3}>
                        <Button
                            onClick={activate}
                            disabled={submitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            {submitting && (
                                <CircularProgress size={24} className={classes.buttonProgress} />
                            )}
                            {submitting ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </Box>
                </form>
            </Paper>
        </main>
    )
}

export default LoginForm
