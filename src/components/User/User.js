import { Box, Button, Divider, InputLabel, MenuItem, MenuList, Paper, Stack, TextField, Typography } from "@mui/material"
import AvatarDesktop from '../../images/avatar_full.png'
import AvatarMob from '../../images/avatar_full_mobile.png'
import { Controller, useForm } from "react-hook-form"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { userByIdSelector } from "../../store/selectors"
import { update } from "../../store/userSlice"
import { useModal } from "../../hooks/useModal"
import SuccessIcon from "../../images/SuccessIcon.png"
// import { useMask } from '@react-input/mask';
import { isValidEmail } from "../../service/function"

const MyInputLabel = ({ children }) => (
    <InputLabel><Typography variant="text1" sx={{ color: '#161616' }}>{children}</Typography></InputLabel>
)

const MyController = (props) => (<Stack spacing='10px'><Controller {...props} /></Stack>)


const User = () => {

    const userId = Number(useParams().userId)
    const dispatch = useDispatch()
    const { openAlert } = useModal()
    const user = useSelector(state => userByIdSelector(state, userId))
    // const inputRef = useMask({ mask: '_-___-___-____ x_____', replacement: '_', showMask: true });

    const { control, handleSubmit } = useForm({
        defaultValues: {
            'id': user.id,
            'name': user.name,
            'username': user.username,
            'company': user.company,
            'city': user.city,
            'email': user.email,
            'phone': user.phone,
        },
        mode: 'onSubmit'
    })

    const onSubmit = async (data) => {
        dispatch(update(data))

        openAlert({
            children: <Stack spacing={2.5} alignItems='center'>
                <Box sx={{ padding: 1.5 }}><img src={SuccessIcon} alt='Изменения сохранены' /></Box>
                <Typography sx={{ fontSize: '20px', fontWeight: 600, lineHeight: '27.32px', color: 'rgba(89, 89, 89, 1)' }}>Изменения сохранены</Typography>
            </Stack>,
        })
    }

    return (
        <Stack direction={{ md: 'row', xs: 'column' }} spacing={{ md: 5, xs: 3 }} sx={{ width: '100%' }}>
            <Stack component={Paper} sx={{ borderRadius: 2 }}>
                <Stack spacing={{ md: 5, xs: 3 }} sx={{ margin: { md: 5, xs: 3.5 } }}>
                    <Box
                        sx={{
                            width: { md: '280px', xs: '287px' },
                            height: { md: '485px', xs: '187px' },
                            backgroundImage: { md: `url(${AvatarDesktop})`, xs: `url(${AvatarMob})` },
                        }}
                    />

                    <Box>
                        <Box sx={{ mb: '10px' }}>
                            <Typography variant='text2' sx={{ color: '#161616' }}>Данные профиля</Typography>
                        </Box>
                        <Divider />
                        <MenuList>
                            <MenuItem variant='text2' sx={{ color: '#9C9C9C', pl: 0 }}>Рабочее пространство</MenuItem>
                            <Divider />
                            <MenuItem variant='text2' sx={{ color: '#9C9C9C', pl: 0 }}>Приватность</MenuItem>
                            <Divider />
                            <MenuItem variant='text2' sx={{ color: '#9C9C9C', pl: 0 }}>Безопасность</MenuItem>
                            <Divider />
                        </MenuList>
                    </Box>
                </Stack>
            </Stack>

            <Stack component={Paper} sx={{ padding: 5, borderRadius: 2, width: { md: '100%', xs: 'auto' } }}>
                <Typography variant='title' sx={{ mb: 2, color: '#161616' }}>Данные профиля</Typography>
                <Divider sx={{ mb: { md: 3, xs: 2.5 } }} />

                <Stack spacing={3} component="form" method='POST' onSubmit={handleSubmit(onSubmit)}>

                    <MyController
                        name='name'
                        control={control}
                        rules={{ required: "Поле обязательно для заполнения" }}
                        render={({ field, fieldState: { error } }) => <>
                            <MyInputLabel>Имя</MyInputLabel>
                            <TextField {...field}
                                variant="outlined"
                                error={Boolean(error)}
                                helperText={error && error.message}
                            />
                        </>
                        }
                    />


                    <MyController
                        name='username'
                        control={control}
                        rules={{ required: "Поле обязательно для заполнения" }}
                        render={({ field, fieldState: { error } }) => <>
                            <MyInputLabel>Никнейм</MyInputLabel>
                            <TextField {...field}
                                variant="outlined"
                                error={Boolean(error)}
                                helperText={error && error.message}
                            />
                        </>
                        }
                    />

                    <MyController
                        name='email'
                        control={control}
                        type='email'
                        rules={{
                            required: 'Поле обязательно для заполнения',
                            validate: isValidEmail,
                        }}
                        render={({ field, fieldState: { error } }) => <>
                            <MyInputLabel>Почта</MyInputLabel>
                            <TextField {...field}
                                variant="outlined"
                                error={Boolean(error)}
                                helperText={error && error.message}
                            />
                        </>
                        }
                    />

                    <MyController
                        name='city'
                        control={control}
                        rules={{ required: "Поле обязательно для заполнения" }}
                        render={({ field, fieldState: { error } }) => <>
                            <MyInputLabel>Город</MyInputLabel>
                            <TextField {...field}
                                variant="outlined"
                                error={Boolean(error)}
                                helperText={error && error.message}
                            />
                        </>
                        }
                    />

                    <MyController
                        name='phone'
                        control={control}
                        rules={{ required: "Поле обязательно для заполнения" }}
                        render={({ field, fieldState: { error } }) => <>
                            <MyInputLabel>Телефон</MyInputLabel>
                            <TextField {...field}
                                variant="outlined"
                                error={Boolean(error)}
                                helperText={error && error.message}
                            // inputRef={inputRef} // for mask
                            />
                        </>
                        }
                    />

                    <MyController
                        name='company'
                        control={control}
                        rules={{ required: "Поле обязательно для заполнения" }}
                        render={({ field, fieldState: { error } }) => <>
                            <MyInputLabel>Название компании</MyInputLabel>
                            <TextField {...field}
                                variant="outlined"
                                error={Boolean(error)}
                                helperText={error && error.message}
                            />
                        </>
                        }
                    />

                    <Box sx={{ width: { md: 'auto', xs: '100%' } }}>
                        <Button variant="outlined" type='submit' sx={{ width: { md: 'auto', xs: '100%' } }}                        >
                            <Typography variant="text2" sx={{ color: '#FDFDFD' }}>Сохранить</Typography>
                        </Button>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default User