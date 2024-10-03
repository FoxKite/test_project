import axios from "axios"
import { ApiPaths } from "../config"


export const loadUsers = async () => {
    const result = await axios.get(ApiPaths.user.users)
    return result.data
}