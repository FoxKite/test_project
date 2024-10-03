import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/Router/AppRouter';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './store'
import { ModalContextProvider } from './hooks/useModal';
import Theme from './components/Style/Theme'
import { ThemeProvider } from '@mui/material';


export const queryClient = new QueryClient()


function App() {
    return (
        <>
        Test
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <ModalContextProvider>
                        <ThemeProvider theme={Theme}>
                            <BrowserRouter basename='/test_project'>
                                <AppRouter />
                            </BrowserRouter>
                        </ThemeProvider>
                    </ModalContextProvider>
                </QueryClientProvider>
            </Provider>
        </>
    )
}

export default App;
