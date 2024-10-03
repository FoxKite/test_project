import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {
        setInitial(state, action) {
            action.payload.forEach(u => {
                state[u.id] = {
                    isActive: true,
                    isArchive: false,
                    // ...u
                    id: u.id,
                    name: u.name,
                    username: u.username,
                    city: u.city,
                    company: u.company,
                    email: u.email,
                    phone: u.phone,
                    avatar: u.avatar,
                }
            })
        },
        toggleActive(state, action) {
            state[action.payload] = {
                ...state[action.payload],
                isActive: !state[action.payload].isActive
            }
        },
        toggleArchive(state, action) {
            state[action.payload] = {
                ...state[action.payload],
                isArchive: !state[action.payload].isArchive
            }
        },
        update(state, action) {
            state[action.payload.id] = {
                ...state[action.payload.id],
                // ...action.payload
                name: action.payload.name,
                username: action.payload.username,
                city: action.payload.city,
                company: action.payload.company,
                email: action.payload.email,
                phone: action.payload.phone,
            }
        }
    }
})

export const { setInitial, toggleActive, toggleArchive, update } = userSlice.actions
export default userSlice.reducer