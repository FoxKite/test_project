import { createTheme } from "@mui/material"

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            // md: 900,
            md: 1160,
            lg: 1200,
            xl: 1536,
            xxl: 1921,
        },
    },
    // palette,
    typography: {
        color: '#000000',
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 400,
    },
})

theme = createTheme(theme, {
    typography: {
        title: {
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '32.78px',
        },
        headline: {
            fontWeight: 600,
            [theme.breakpoints.up('md')]: {
                fontSize: '20px',
                lineHeight: '27.32px'
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '18px',
                lineHeight: '24.59px'
            }
        },
        text1: {
            fontWeight: 400,
            [theme.breakpoints.up('md')]: {
                fontSize: '18px',
                lineHeight: '24.59px'
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '16px',
                lineHeight: '21.86px'
            }
        },
        text2: {
            fontWeight: 400,
            [theme.breakpoints.up('md')]: {
                fontSize: '16px',
                lineHeight: '21.86px'
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '14px',
                lineHeight: '19.12px'
            }
        },
        caption: {
            [theme.breakpoints.up('md')]: {
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '19.12px'
            },
            [theme.breakpoints.down('md')]: {
                fontWeight: 600,
                fontSize: '10px',
                lineHeight: '13.66px'
            }
        }
    },
    components: {
        MuiDivider:{
            styleOverrides: {
                root: {
                    borderBottomColor: '#DADADA'
                }
            }
        },
        MuiButton: {
            // styleOverrides: {
            //     root: {
            //         // borderBottomColor: '#DADADA'
            //     }
            // },
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        borderRadius: '50px',
                        backgroundColor: '#161616',
                        color: 'white',
                        textTransform: 'none',
                    }
                },
            ],
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginTop: '10px',
                    [`& fieldset`]: {
                        borderRadius: '50px',
                      },
                }
            }
        }
    }
})

export default theme