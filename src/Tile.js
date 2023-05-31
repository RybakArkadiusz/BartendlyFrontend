import React, { useState } from 'react';
import {IconButton, ListItemIcon, Paper, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NoDrinksIcon from '@mui/icons-material/NoDrinks';
import LiquorIcon from '@mui/icons-material/Liquor';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import BuildIcon from '@mui/icons-material/Build';

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
            <div style={{ textAlign: 'left' }}>
                <Typography variant="h4" style={{ color: '#d3d8e0', textAlign: 'center' }}>{name}</Typography>


                <Typography variant="body1" style={{ color: '#b3b4c4' }}>
                    <ListItemIcon>
                        <BuildIcon style={{ color: '#086e55' }}/>
                    </ListItemIcon>
                    {method.charAt(0).toUpperCase() + method.slice(1).toLowerCase()}
                </Typography>

                <Typography variant="body1" style={{ color: '#b3b4c4' }}>
                    {alcohols.map((item, index) => (
                        <React.Fragment key={item.alcohol.id}>
                            {index !== 0 && ', '}
                            {index === 0 && (
                                <ListItemIcon>
                                    <LiquorIcon style={{ color: '#086e55' }}/>
                                </ListItemIcon>
                            )}
                            <span style={{ color: '#b3b4c4' }}>{item.alcohol.name}</span>
                            <span style={{ color: '#878896', fontSize: '0.8em' }}>{` ${item.quantity}${item.measurementUnit.toLowerCase()}`}</span>
                        </React.Fragment>
                    ))}
                </Typography>

                <Typography variant="body1" style={{ color: '#b3b4c4' }}>
                    {ingredients.map((item, index) => (
                        <React.Fragment key={item.nonAlcoholicIngredient.id}>
                            {index !== 0 && ', '}
                            {index === 0 && (
                                <ListItemIcon>
                                    <NoDrinksIcon style={{ color: '#086e55' }}/>
                                </ListItemIcon>
                            )}
                            <span style={{ color: '#b3b4c4' }}>{item.nonAlcoholicIngredient.name}</span>
                            <span style={{ color: '#878896', fontSize: '0.8em' }}>{` ${item.quantity}${item.measurementUnit.toLowerCase()}`}</span>
                        </React.Fragment>
                    ))}
                </Typography>





                <Typography variant="body1" style={{ color: '#b3b4c4' }}>
                    <ListItemIcon>
                        <RestaurantMenuIcon style={{ color: '#086e55' }}/>
                    </ListItemIcon>

                    {tastes.join(', ')}
            </Typography>
                {expanded && (
                    <Typography variant="body1" style={{ color: '#b3b4c4' }}>{cocktail?.recipe}</Typography>
                )}
            </div>
            <div onClick={handleClick}>
                {expanded ? (
                    <ExpandLessIcon style={{ color: '#a9c6f5' }} />
                ) : (
                    <ExpandMoreIcon style={{ color: '#a9c6f5' }} />
                )}
            </div>
        </Paper>
    );
}

export default Tile;
