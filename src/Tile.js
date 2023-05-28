import React, { useState } from 'react';
import {IconButton, Paper, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
function Tile({ cocktail, onClick }) {
    const [expanded, setExpanded] = useState(false); // Stan do śledzenia rozwinięcia/zwinięcia sekcji z przepisem

    const name = cocktail?.name || '';
    const method = cocktail?.preparationMethod || '';
    const ingredients = cocktail?.nonAlcoholicIngredients || [];
    const alcohols = cocktail?.alcoholIngredients || [];
    const tastes = cocktail?.flavourProfiles || [];
    const id = cocktail?.id || [];

    const handleClick = () => {
        setExpanded(!expanded); // Zmień stan rozwinięcia/zwinięcia po kliknięciu
    };

    return (
        <Paper elevation={3} sx={{ padding: '20px', margin: '20px', cursor: 'pointer', backgroundColor: '#1c1d21' }} onClick={handleClick}>
            <div>
                <Typography variant="h6" style={{ color: '#b3b4c4' }}>{name}</Typography>
                <Typography variant="body1" style={{ color: '#b3b4c4' }}>Method: {method}</Typography>
                <Typography variant="body1" style={{ color: '#b3b4c4' }}>Ingredients: {ingredients.map(item => item.nonAlcoholicIngredient.name).join(', ')}</Typography>
                <Typography variant="body1" style={{ color: '#b3b4c4' }}>Alcohols: {alcohols.map(item => item.alcohol.name).join(', ')}</Typography>
                <Typography variant="body1" style={{ color: '#b3b4c4' }}>Tastes: {tastes.join(', ')}</Typography>
                {expanded && (
                    <Typography variant="body1" style={{ color: '#b3b4c4' }}>Full Recipe: {cocktail?.recipe}</Typography>
                )}
            </div>
            <div onClick={handleClick}>
                {expanded ? (
                    <ExpandLessIcon style={{ color: '#44caf2' }} />
                ) : (
                    <ExpandMoreIcon style={{ color: '#44caf2' }} />
                )}
            </div>
        </Paper>
    );
}

export default Tile;
