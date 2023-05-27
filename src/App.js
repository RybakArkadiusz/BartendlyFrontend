import React, {useState} from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CocktailForm from './CocktailForm';
import ResponsePage from './ResponsePage';
import Tile from "./Tile";


const theme = createTheme({
    palette: {
        background: {
            default: '#2c2d33',
        },
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#b3b4c4',
                },
            },
        },
    },
});

function App() {
    const [responseJson, setResponseJson] = useState([]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<CocktailForm setResponseJson={setResponseJson} />}
                    />
                    <Route
                        path="/response"
                        element={<ResponsePage responseJson={responseJson} />}
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}



export default App;
