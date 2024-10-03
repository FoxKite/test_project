import { useNavigate } from "react-router"
import { RoutePaths } from "../components/Router/routes"
import User from "../components/User/User"
import { Box, Button, Stack, SvgIcon, Typography } from "@mui/material"
import { ReactComponent as BackArrowIcon } from '../images/BackarrowIcon.svg'


const UserPage = () => {

    const navigate = useNavigate()
    const handleClickBack = () => {
        navigate(RoutePaths.USERS)
    }
    return (
        <>

            <Stack alignItems='start' justifyContent='center' sx={{
                height: { md: '56px', xs: '50px' },
                mb: { md: 3, xs: 2.5 }
            }}>
                <Button onClick={handleClickBack} component={Stack} spacing={1} direction='row' alignItems='center'>
                    <Box><SvgIcon><BackArrowIcon /></SvgIcon></Box>
                    <Box>
                        <Typography variant="headline" sx={{
                            textTransform: 'none',
                            color: '#595959',
                        }}>Назад</Typography>
                    </Box>
                </Button>
            </Stack>

            <User />
        </>
    )
}

export default UserPage