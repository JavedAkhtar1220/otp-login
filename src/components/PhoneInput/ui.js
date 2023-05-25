import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CountryListWrapper = styled(Box)(({ error }) => ({
    height: '100%',
    width: '100%',
    '& .form-control': {
        background: 'transparent',
        padding: '14.5px 14px 12.5px 58px',
        width: '100%',
        borderRadius: '8px',
        borderColor: error && 'red',

        '&:hover': {
            borderColor: error && 'red' ,
        },
        '&:focus': {
            borderColor: error && 'red',
            boxShadow: 'none',
        },
    },
    '& .special-label': {
        display: 'block',
        left: '10px',
        color: error && 'red',
        fontFamily: "'Montserrat', 'sans-serif', 'Nunito Sans'",
        fontSize: '0.7rem',
    },
}));