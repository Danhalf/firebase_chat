import React, {FC} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {styles} from "../utils/styles";

type LoginProps = {
    userName: string
}

export const Login: FC<LoginProps> = ({userName}) => {

    const { navbarHeight, secondaryColor } = styles
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - navbarHeight}}
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <Box style={{border: `2px solid ${secondaryColor}`, borderRadius: '6px'}} p={5}>
                    <Button variant={'outlined'}>Enter with a google account</Button>
                </Box>
            </Grid>
        </Container>
    );
};
