import React, {useState} from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CocktailForm from './CocktailForm';
import ResponsePage1 from './ResponsePage';


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
    const [responseJson, setResponseJson] = useState(null);

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
                        element={<ResponsePage1 responseJson={responseJson} />}
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}


// Dodany komponent ResponsePage
function ResponsePage(props) {
    const responseJson = props.location.state.response;

    return (
        <div>
            <h1>JSON:</h1>
            <pre>{JSON.stringify(responseJson, null, 2)}</pre>
        </div>
    );
}

export default App;
