import { Box, Grid } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"
import {  usersSelector } from "../../store/selectors"
import Item from './Item'
import DropMenu from "./DropMenu"
import PropTypes from 'prop-types';



const Users = ({ isArchive = false }) => {

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

Users.propTypes = {
    isArchive: PropTypes.bool
}