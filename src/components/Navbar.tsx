import {FC} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/constants";
import {styles} from "../utils/styles";


type NavbarProps = {
    userName: string
};

export const Navbar: FC<NavbarProps> = ({userName}) => {

    const {navbarHeight, secondaryColor} = styles;

    const buttonStyle = {
        color: secondaryColor,
        border: `2px solid ${secondaryColor}`,
        margin: '4px'
    }

    let navigate = useNavigate()

    const onLogin = () => navigate(LOGIN_ROUTE)
    const onLogOut = () => navigate(LOGIN_ROUTE)

    const height = `${navbarHeight}px`;

    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{height}} >
                    <Grid container justifyContent={'flex-end'}>
                        {
                            userName
                            ? <Button onClick={onLogin} variant={'outlined'} style={buttonStyle}>Login</Button>
                            : <Button onClick={onLogOut} variant={'outlined'} style={buttonStyle}>Logout</Button>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};