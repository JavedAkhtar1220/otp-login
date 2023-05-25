import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)({
    padding: '0.8em',
    transition: 'scale 0.3s',
    "&:hover": {
        opacity: 0.9,
        scale: '1.03'
    }
})