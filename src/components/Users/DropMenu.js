import { Menu, MenuItem } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { userByIdSelector } from "../../store/selectors"
import { toggleActive, toggleArchive } from "../../store/userSlice"
import { useNavigate } from "react-router"
import { RoutePaths } from "../Router/routes"
import PropTypes from 'prop-types';


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

export default DropMenu

DropMenu.propTypes = {
    dropData : PropTypes.shape({
        id: PropTypes.number,
        anchorEl: PropTypes.object
    }),
    handleClose: PropTypes.func.isRequired,
}