import { Divider, Stack, Typography } from "@mui/material"
import Users from "../components/Users/Users"


const UsersPage = () => {

    return (
        <>
            <Stack spacing={{md:5, xs:4}}>
                <>
                    <Typography variant='title'>Активные</Typography>
                    <Divider sx={{ mt: '16px', mb: { md: '28px', xs: '16px' } }} />
                    <Users />
                </>

                <>
                    <Typography variant='title'>Архив</Typography>
                    <Divider sx={{ mt: '16px', mb: { md: '28px', xs: '16px' } }} />
                    <Users isArchive={true} />
                </>
            </Stack>
        </>
    )
}

export default UsersPage