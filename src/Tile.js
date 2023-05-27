import React from 'react';
import { Paper, Typography } from '@mui/material';

function Tile({ cocktail }) {
    const name = cocktail?.name || '';
    const method = cocktail?.preparationMethod || '';
    const ingredients = cocktail?.nonAlcoholicIngredients || [];
    const alcohols = cocktail?.alcoholIngredients || [];
    const tastes = cocktail?.flavourProfiles || [];

    const handleClick = () => {
        onClick(cocktail);
    };
    return (
        <Paper elevation={3} sx={{ padding: '20px', margin: '20px', cursor: 'pointer' }}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body1">Method: {method}</Typography>
            <Typography variant="body1">Ingredients: {ingredients.map(item => item.nonAlcoholicIngredient.name).join(', ')}</Typography>
            <Typography variant="body1">Alcohols: {alcohols.map(item => item.alcohol.name).join(', ')}</Typography>
            <Typography variant="body1">Tastes: {tastes.join(', ')}</Typography>

        </Paper>
    );
}

export default Tile;