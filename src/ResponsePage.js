import React from 'react';
import Tile from './Tile';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Typography} from "@mui/material";

function ResponsePage(props) {
    const navigate = useNavigate();
    const responseJson = props.responseJson || [];
    const columnCount = 1;


    const handleClickTile = (cocktail) => {
        navigate(`/cocktail/${cocktail.id}`);
    };
    const createColumns = () => {
        const columns = [];
        for (let i = 0; i < columnCount; i++) {
            columns.push([]);
        }

        responseJson.forEach((item, index) => {
            const columnIndex = index % columnCount;
            columns[columnIndex].push(item);
        });

        return columns;
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Typography variant="h2" component="h1" style={{ color: '#b3b4c4', marginBottom: '20px', textAlign: 'center' }}>
                Bartendly
            </Typography>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {createColumns().map((column, columnIndex) => (
                    <div key={columnIndex} style={{ flex: '0 0 50%', padding: '10px' }}>
                        {column.map((item, index) => (
                            <Tile key={index} cocktail={item} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResponsePage;