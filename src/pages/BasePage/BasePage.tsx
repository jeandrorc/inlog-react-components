import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

export interface BasePageProps {
    title: string;
    actions?: React.ReactNode;
    children?: React.ReactNode;
}

const BasePage: React.FC<BasePageProps> = ({ title, actions, children }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    {actions}
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                {children}
            </Container>
        </Box>
    );
};

export default BasePage;
