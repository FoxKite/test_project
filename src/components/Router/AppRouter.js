import UsersPage from "../../pages/UsersPage"
import UserPage from "../../pages/UserPage"
import AppLayout from "../Layout/AppLayout"
import { RoutePaths } from "./routes"
import { Route, Routes } from "react-router"


const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route path={RoutePaths.USERS} element={<UsersPage />} />
                <Route path={RoutePaths.USER} element={<UserPage />} />
            </Route>
        </Routes>
    )
}

export default AppRouter