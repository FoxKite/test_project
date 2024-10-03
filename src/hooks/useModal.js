import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { Box, IconButton, Modal, Stack } from '@mui/material';
import { ReactComponent as CloseIcon } from '../images/CloseIcon.svg'


const ModalContext = createContext({})

const useDefaultModalLogic = () => {
    const [visible, setVisible] = useState(false);
    const [props, setProps] = useState()

    const openModal = useCallback((props) => {
        setProps(props)
        setVisible(true)
    }, [])

    const closeModal = useCallback(() => {
        setProps(undefined)
        setVisible(false)
    }, [])

    return {
        visible,
        props,
        openModal,
        closeModal,
    }
}

export const useModal = () => useContext(ModalContext)

export const ModalContextProvider = ({ children }) => {

    const {
        visible: alertVisible,
        props: alertProps,
        openModal: openAlert,
        closeModal: closeAlert,
    } = useDefaultModalLogic()


    const modalContextValue = {
        openAlert,      // alert
        // здесь можно добавить openWindow, openConfirm - когда потребуется при расширении приложения
    }

    return (
        <ModalContext.Provider value={modalContextValue}>
            {alertProps && (
                <ModalAlert {...alertProps} visible={alertVisible}
                    onClose={() => {
                        alertProps?.onClose?.()
                        closeAlert()
                    }}
                />
            )}
            {children}
        </ModalContext.Provider>
    )
}

const ModalAlert = ({ visible = false, onClose, children, }) => {

    useEffect(()=> {
        if(visible) {
            setTimeout(()=>onClose(), 4000)
        }
    }, [visible, onClose])

    return (
        <Modal
            open={visible}
            onClose={onClose}
            slotProps={{
                backdrop: {
                    style: {
                        backgroundColor: `rgba(22, 22, 22, 0.24)`,
                    }
                }
            }}
        >
            <Stack
                sx={{
                    width: '310px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    outlineColor: 'white',
                    boxSizing: 'border-box',
                    border: 0,
                    borderRadius: '16px',
                    height:'211px',
                    padding:5,
                }}
            >
                <Box><IconButton sx={{
                    borderRadius: '4px',
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    right: '12px',
                    top: '12px',
                }} onClick={onClose}><CloseIcon /></IconButton></Box>

                <Box>
                    {children}
                </Box>
            </Stack>
        </Modal>
    )
}