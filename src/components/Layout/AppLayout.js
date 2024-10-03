import { Outlet } from "react-router"
import { useUsersQuery } from "../../reactQuery/useUser"
import Logo from "../../images/logo.png"
import { Box, Container, Stack } from "@mui/material"

const AppLayout = () => {

    const { isLoading, error } = useUsersQuery()

    if (isLoading) return <>isLoading</>
    if (error) return <>Error</>

    return (
        <>
            <Stack sx={{ backgroundColor: 'white', width: '100%', height: { md: '56px', xs: '50px' }, mb: { md: '40px', xs: '32px' }, }}>
                <Box sx={{
                    mt: { md: '16px', xs: '13px' },
                    mb: { md: '16px', xs: '13px' },
                    ml: { md: '150px', xs: '16px' }
                }}>
                    <img alt="At-Work" src={Logo} />
                </Box>
            </Stack>

            <Container sx={{ width: { md: '1160px', xs: '375px' }, }}>

                <Outlet />
            </Container>
        </>
    )
}

export default AppLayout