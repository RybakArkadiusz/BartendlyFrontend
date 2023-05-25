import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CocktailForm from './CocktailForm';

const theme = createTheme({
    palette: {
        background: {
            default: '#2c2d33'
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <CocktailForm />
        </ThemeProvider>
    );
}

export default App;
