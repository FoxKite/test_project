import { useQuery } from "react-query"
import { loadUsers } from "./axiosFunc"
import { useDispatch } from "react-redux"
import { setInitial } from "../store/userSlice"


export const useUsersQuery = () => {
    const dispatch = useDispatch()
    return (
        useQuery({
            queryKey: ['users'],
            queryFn: () => loadUsers(),
            refetchOnMount: false,
            // staleTime: TIME_UPDATE,
            onSuccess:(data) => {
                dispatch(setInitial(data.map(u=> ({
                    id: u.id,
                    name: u.name, 
                    username: u.username,
                    city:u.address.city,
                    company: u.company.name,
                    email: u.email,
                    phone: u.phone,
                    avatar: ''
                }))))
            },
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        })
    )
}
