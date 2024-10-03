import { Box, IconButton,  Paper, Stack, Typography } from "@mui/material"
import { ReactComponent as SolidIcon } from '../../images/SolidIcon.svg'
import AvatarDesktop from '../../images/avatar_active.png'
import AvatarMob from '../../images/avatar_mob.png'
import PropTypes from 'prop-types';


const Item = ({ username, city, company, isArchive, handleClick }) => {

    return (
        <Paper elevation={0} sx={{
            backgroundColor: '#fff',
            padding: {md:3, xs:2},
            maxWidth: {md: 312,xs:130},
            minWidth: {md: 240,xs:130},
            borderRadius: 2
        }}>
            <Stack
                direction={{ md: 'row', xs: 'column' }}
                spacing={2.5}>
                <Box
                    sx={{
                        filter: isArchive ? 'grayscale(100%)' : 'none',
                        width: { md: '112px', xs: '130px' },
                        minWidth: { md: '112px', xs: '130px' },
                        height: '120px',
                        backgroundImage: { md: `url(${AvatarDesktop})`, xs: `url(${AvatarMob})` }
                    }}
                />

                <Stack justifyContent='space-between' sx={{ width: '100%' }}>
                    <Stack spacing={0.5}>
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <Typography variant='headline' sx={{ 
                                color: '#22A0BC',
                                overflowWrap: 'anywhere'
                                }}>
                                {username}
                            </Typography>

                            <IconButton onClick={handleClick}
                                sx={{
                                    '&:hover': {
                                        borderRadius: 1
                                    }
                                }}>
                                <SolidIcon />
                            </IconButton>
                        </Stack>

                        <Typography alignSelf='start' variant="text2" sx={{ fontWeight: 500, color: '#595959' }}>
                            {company}
                        </Typography>
                    </Stack>

                    <Typography alignSelf='start' variant='caption' sx={{ color: '#9C9C9C' }}>
                        {city}
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}


export default Item

Item.propTypes = {
    username: PropTypes.string.isRequired, 
    city: PropTypes.string.isRequired, 
    company:PropTypes.string.isRequired, 
    isArchive: PropTypes.bool.isRequired, 
    handleClick: PropTypes.func.isRequired,
}