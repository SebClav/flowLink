import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Person,  Category, Storefront, Route, LocalShipping, ShoppingCart } from "@mui/icons-material";

export default function NavListDrawer() {
    return(
        <Box
            sx={{
                width: 250
                
            }}
        >
            <nav>
                <List>
                    <ListItem>
                        <ListItemIcon >
                            <Person/>
                        </ListItemIcon>
                        <ListItemText >
                            Usuario
                        </ListItemText>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem disablePadding>
                       
                        <ListItemButton component="a" href="#trash">
                            <ListItemIcon >
                                <Category/>
                            </ListItemIcon>
                            <ListItemText primary="Productos"></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        
                        <ListItemButton component="a" href="#spam">
                            <ListItemIcon >
                                <Storefront/>
                            </ListItemIcon>
                            <ListItemText primary="Clientes"></ListItemText>
                        </ListItemButton>                 
                    </ListItem>
                    <ListItem disablePadding>
                       
                        <ListItemButton component="a" href="#spam">
                            <ListItemIcon >
                                <Route/>
                            </ListItemIcon>
                            <ListItemText primary="Rutas"></ListItemText>
                        </ListItemButton>                 
                    </ListItem>
                    <ListItem disablePadding>
                        
                        <ListItemButton component="a" href="#spam">    
                            <ListItemIcon >
                                <LocalShipping/>
                            </ListItemIcon>
                            <ListItemText primary="Camiones"></ListItemText>
                        </ListItemButton>                 
                    </ListItem>
                    <ListItem disablePadding>                    
                        <ListItemButton component="a" href="#spam">
                            <ListItemIcon >
                                <ShoppingCart/>
                            </ListItemIcon>
                            <ListItemText primary="Pedidos"></ListItemText>
                        </ListItemButton>                 
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
}