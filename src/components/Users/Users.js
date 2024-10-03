import { Box, Grid, IconButton, Menu, MenuItem, Paper, Stack, Typography } from "@mui/material"
import { ReactComponent as SolidIcon } from '../../images/SolidIcon.svg'
import AvatarDesktop from '../../images/avatar_active.png'
import AvatarMob from '../../images/avatar_mob.png'
// import AvatarPng from '../../images/avatar_full.png'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userByIdSelector, usersSelector } from "../../store/selectors"
import { toggleActive, toggleArchive } from "../../store/userSlice"
import { useNavigate } from "react-router"
import { RoutePaths } from "../Router/routes"


const DropMenu = ({ dropData: { id, anchorEl }, handleClose }) => {

    const userState = useSelector(state => userByIdSelector(state, id))

    const open = Boolean(anchorEl)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleEdit = (id) => {
        navigate(RoutePaths.USER.replace(":userId", id))
        handleClose()
    }

    const handleActive = (id) => {
        dispatch(toggleActive(id))
        handleClose()
    }

    const handleArchive = (id) => {
        dispatch(toggleArchive(id))
        handleClose()
    }

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <MenuItem onClick={() => handleEdit(id)}>Редактировать</MenuItem>
            <MenuItem onClick={() => handleArchive(id)}>{userState?.isArchive ? 'Активировать' : 'Архивировать'}</MenuItem>
            <MenuItem onClick={() => handleActive(id)}>Скрыть</MenuItem>
        </Menu>
    )
}

const Item = ({ username, city, company, isArchive, handleClick }) => {

    return (
        <Paper elevation={0} sx={{
            backgroundColor: '#fff',
            padding: 3,
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


const Users = ({ isActive = true, isArchive = false }) => {

    const usersNormalized = useSelector(usersSelector)
    let users = Object.values(usersNormalized).filter(u => u.isActive)
    users = users.filter(u => u.isArchive === isArchive)

    const [dropData, setDropData] = useState({})

    const handleClick = (event, id) => {
        setDropData({ id, anchorEl: event.currentTarget })
    }
    const handleClose = () => {
        setDropData({});
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container
                    rowSpacing={{ md: 5, xs: 2.5 }}
                    columnSpacing={{ md: 4, xs: 2.5 }}
                    columns={{ xs: 2, md: 3 }}>
                    {users.map(user => (
                        <Grid item xs={1} sm={1} key={user.id}>
                            <Item username={user.username} city={user.city} company={user.company} isArchive={user.isArchive} handleClick={(e) => handleClick(e, user.id)} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <DropMenu {...{ dropData, handleClose }} />
        </>
    )
}

export default Users