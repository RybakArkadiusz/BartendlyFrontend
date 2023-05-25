import React from "react";
import { Button, Box, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from '@mui/system';
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#b3b4c4',
    },
    '& .MuiInputLabel-root': {
        color: '#b3b4c4',
        transform: 'translate(14px, -6px) scale(0.75)',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#b3b4c4',
    },
    '& .MuiInputLabel-root.MuiInputLabel-animated': {
        transform: 'translate(14px, 12px) scale(1)',
    },
});

const alcohols = [
    { group: "Whisky", names: ["Scotch", "Bourbon", "Rye"] },
    { group: "Rum", names: ["Dark rum", "White rum", "Spiced rum"] },
];

const nonAlcoholicIngredients = [
    { group: "Juices", names: ["Apple", "Orange", "Pineapple"] },
    { group: "Sodas", names: ["Coca-Cola", "Sprite", "Dr Pepper"] },
];

const tastes = ["Sweet", "Sour", "Bitter", "Spicy"];

function CocktailForm() {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '1000px',
                mx: 'auto',
                mt: '20px',
                '& .MuiTextField-root': { m: 2, width: '97%' },
                '& .MuiButton-root': { m: 2 },
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom style={{color: "#b3b4c4"}}>
                Bartendly
            </Typography>

            <Autocomplete
                multiple
                options={alcohols.flatMap((a) => a.names)}
                renderInput={(params) => <StyledTextField {...params} label="Alcohol" sx={{ textAlign: 'center', color: 'white' }} />}
                sx={{ width: '55%' }}
            />

            <Autocomplete
                multiple
                options={nonAlcoholicIngredients.flatMap((a) => a.names)}
                renderInput={(params) => <StyledTextField {...params} label="Non-Alcoholic Ingredients" sx={{ textAlign: 'center', color: 'white' }} />}
                sx={{ width: '55%' }}
            />

            <Autocomplete
                multiple
                options={tastes}
                renderInput={(params) => <StyledTextField {...params} label="Tastes" sx={{ textAlign: 'center', color: 'white' }} />}
                sx={{ width: '55%' }}
            />

            <Button variant="contained">Submit</Button>
        </Box>
    );
}

export default CocktailForm;
