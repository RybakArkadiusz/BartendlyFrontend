import React, {useEffect, useState} from "react";
import { Button, Box, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


const StyledAutocomplete = styled(Autocomplete)`
  & .MuiAutocomplete-root {
    width: 100%;
  }
  & .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input {
    color: white;
  }
`;

const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#b3b4c4',
    },
    '& .MuiInputLabel-root': {
        color: '#b3b4c4',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'white',
    },
    '& .MuiChip-root': {
        color: 'white',
        backgroundColor: '#b3b4c4',
        '& .MuiChip-deleteIcon': {
            color: 'white',
        },
    },
});

const alcohols = [
    { group: "Whisky", names: ["Bourbon", "Scotch", "Rye whisky"] },
    { group: "Rum", names: ["Dark rum", "White rum"] },
    // Add more alcohol groups and names as needed
];

const nonAlcoholicIngredients = [
    { group: "Juices", names: ["Apple Juice", " Juice", "Grapefruit Juice"] },
    { group: "Fruits", names: ["Lime Wedge", "Mint", "Sugar", "Club Soda"] },
    // Add more non-alcoholic groups and names as needed
];

const tastes = ["Sweet", "Sour", "Bitter", "Spicy"]; // Add more tastes as needed

// Define mappings from names to IDs
const alcoholIdMapping = { "Bourbon": 1, "Scotch": 2, "Rye whisky":3, "Dark rum":6, "White rum":4 /* Add other mappings */ };
const nonAlcoholicIngredientIdMapping = { "Orange Juice": 2, "Grapefruit Juice": 8, "Apple Juice":9, "Lime Wedge":10, "Mint":12, "Sugar":11, "Club Soda":13 /* Add other mappings */ };
const tasteMapping = { "Sweet": "SWEET", "Sour": "SOUR", "Bitter": "BITTER", "Spicy": "SPICY" /* Add other mappings */ };

function CocktailForm({setResponseJson}) {
    // Define state for form fields
    const [selectedAlcohols, setSelectedAlcohols] = useState([]);
    const [selectedNonAlcoholicIngredients, setSelectedNonAlcoholicIngredients] = useState([]);
    const [selectedTastes, setSelectedTastes] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [responseJson] = useState(null);

    // Handle form submission
    const handleSubmit =async (e) => {
        e.preventDefault();

        // Convert selected names to IDs
        const alcoholsIds = selectedAlcohols.map(a => alcoholIdMapping[a]).join(",");
        const nonAlcoholicIngredientsIds = selectedNonAlcoholicIngredients.map(i => nonAlcoholicIngredientIdMapping[i]).join(",");
        const tastesIds = selectedTastes.map(t => tasteMapping[t]).join(",");

        // Send request to the server
        const response = await fetch(`http://localhost:9090/cocktails/search?alcohols=${alcoholsIds}&flavours=${tastesIds}&nonAlcoholicIngredients=${nonAlcoholicIngredientsIds}`)
        if (response.ok) {
            const data = await response.json();
            setResponseJson(data);
            setSubmitted(true);
        } else {
            console.error('Request failed with status:', response.status);
        }
    };

    const navigate = useNavigate();
    useEffect(() => {
        if (submitted) {
            navigate("/response", { state: { response: responseJson } });
        }
    }, [submitted, responseJson, navigate]);


    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '1000px',
                mx: 'auto',
                mt: '20px',
                '& .MuiTextField-root': { m: 1, width: '97%' },
                '& .MuiButton-root': { m: 2 },
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom style={{color: "#b3b4c4"}}>
                Bartendly
            </Typography>

            <style>
                {`
        .MuiAutocomplete-paper {
          background-color: #cccfdb;
        }
      `}
            </style>

            <StyledAutocomplete
                style={{ width: '40%' }}
                multiple
                options={alcohols.flatMap((a) => a.names)}
                value={selectedAlcohols}
                onChange={(event, newValue) => {
                    setSelectedAlcohols(newValue);
                }}
                renderInput={(params) => <StyledTextField {...params} label="Alcohol" />}
            />

            <StyledAutocomplete
                style={{ width: '40%' }}
                multiple
                options={nonAlcoholicIngredients.flatMap((a) => a.names)}
                value={selectedNonAlcoholicIngredients}
                onChange={(event, newValue) => {
                    setSelectedNonAlcoholicIngredients(newValue);
                }}
                renderInput={(params) => <StyledTextField {...params} label="Non-Alcoholic Ingredients" />}
            />

            <StyledAutocomplete
                style={{ width: '40%' }}
                multiple
                options={tastes}
                value={selectedTastes}
                onChange={(event, newValue) => {
                    setSelectedTastes(newValue);
                }}
                renderInput={(params) => <StyledTextField {...params} label="Tastes" />}
            />

            <Button
                type="submit"
                variant="contained"
                sx={{
                    backgroundColor: "#38a8c9",
                    "&:hover": {
                        backgroundColor: "#297a91",
                    },
                }}
            >
                Submit
            </Button>
        </Box>
    );
}

export default CocktailForm;
