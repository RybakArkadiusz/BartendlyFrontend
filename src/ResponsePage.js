import React from 'react';
import Tile from './Tile';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ResponsePage(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const responseJson = props.responseJson || [];

    const handleClickTile = (cocktail) => {
        navigate.push({
            pathname: `/cocktail/${cocktail.id}`,
            state: { cocktail: cocktail }
        });
    };

    return (
        <div>
            <h1>Results:</h1>
            {responseJson.map((item, index) => (
                <Tile
                    key={index}
                    cocktail={item}
                    onClick={handleClickTile}
                />
            ))}
        </div>
    );
}

export default ResponsePage;