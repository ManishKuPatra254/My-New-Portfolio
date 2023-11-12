/* eslint-disable react-refresh/only-export-components */
import { Fragment, useRef, useEffect } from 'react'
import style from './Contact.module.css'
import gsap from 'gsap'
import transition from '../Transition'
import { Button, TextField, ThemeProvider, createTheme, useTheme } from '@mui/material'
import { Grid } from '@mui/material';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': 'white',
                        '--TextField-brandBorderHoverColor': 'white',
                        '--TextField-brandBorderFocusedColor': 'white',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },

            MuiInput: {
                styleOverrides: {
                    root: {
                        color: 'white',
                        '&:before': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });

function Contact() {
    const outerTheme = useTheme();
    const form = useRef();

    function sendEmail(e) {
        const name = form.current.user_name.value.trim();
        const email = form.current.user_email.value.trim();
        const message = form.current.message.value.trim();

        if (!name || !email || !message) {
            toast.error('Please fill the fields')
            return;
        }
        emailjs.sendForm('service_5iqmjnu', 'template_tbifx9k', form.current, '5NE2Fm8c_P7gvpl2c')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                e.preventDefault();
                toast.success('Successfully sent')
            })
            .catch((error) => {
                console.log(error.text);
                toast.error('Please fill the fields')
            })


    }

    const labelStyles = {
        color: 'white',
    }


    const h1Ref = useRef(null);

    useEffect(() => {
        const text = h1Ref.current.textContent;
        const letters = text.split('');

        h1Ref.current.textContent = '';

        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.display = 'inline';
            h1Ref.current.appendChild(span);

            gsap.from(span, {
                duration: 2.9,
                opacity: 0,
                y: 20,
                delay: index * 0.1,
            });
        });
    }, []);


    return (
        <Fragment>
            <div className={style.contact_form}>
                <h2 ref={h1Ref}>Connect With Me</h2>
                <Grid>
                    <div className={style.form_group} >
                        <form ref={form} onSubmit={sendEmail}>
                            <Grid container spacing={2.2}>
                                <Grid xs={12} item>
                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <TextField
                                            sx={{
                                                width: '100%',
                                                '@media screen and (max-width: 900px)': {
                                                    width: '100%',
                                                },
                                            }}
                                            placeholder="Enter name" label=" Name"
                                            variant="standard"
                                            name='user_name'
                                            fullWidth required InputLabelProps={{
                                                style: labelStyles,
                                            }} />
                                    </ThemeProvider>
                                </Grid>

                                <Grid item xs={12}>
                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <TextField type="email" placeholder="Enter email" label="Email"
                                            name='user_email'
                                            variant="standard" fullWidth required InputLabelProps={{
                                                style: labelStyles,
                                            }} />
                                    </ThemeProvider>
                                </Grid>

                                <Grid item xs={12}>
                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <TextField label="Message" multiline rows={4} placeholder="Type your message here"
                                            name='message'
                                            variant="standard" fullWidth required InputLabelProps={{
                                                style: labelStyles,
                                            }} />
                                    </ThemeProvider>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button sx={{ width: '50%' }} type="submit"
                                        value='Send' onClick={sendEmail}
                                        variant="contained">Submit</Button>
                                    <Toaster />
                                </Grid>

                            </Grid>
                        </form>
                    </div>
                </Grid>
            </div>
        </Fragment>
    )
}

export default transition(Contact)
