import { Outlet } from "react-router"
import { useUsersQuery } from "../../reactQuery/useUser"
import Logo from "../../images/logo.png"
import { Box, Container, Stack, CircularProgress } from "@mui/material"


const AppLayout = () => {

    const { isLoading, error } = useUsersQuery()

    if (isLoading) return (
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <CircularProgress color="inherit" />
        </Box>
    )

    if (error) return <>Error</>

    return (
        <>
            <Stack sx={{ backgroundColor: 'white', width: '100%', height: { md: '56px', xs: '50px' }, mb: { md: '40px', xs: '32px' }, }}>
                <Box sx={{
                    mt: { md: '16px', xs: '13px' },
                    mb: { md: '16px', xs: '13px' },
                }}>
                    <Container sx={{ width: { md: '1160px', xs: '375px' } }}>
                        <img alt="At-Work" src={Logo} />
                    </Container>
                </Box>
            </Stack>

            <Container sx={{ width: { md: '1160px', xs: '375px' } }}>
                <Outlet />
            </Container>
        </>
    )
}

export default AppLayout