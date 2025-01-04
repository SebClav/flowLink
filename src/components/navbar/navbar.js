import { Button, Drawer, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import {Menu , Logout} from "@mui/icons-material"
import NavListDrawer from "./navlistdrawer";
import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return(
        <>
            <AppBar position="fixed" >
              <Toolbar>
                <IconButton color="inherit" size="large" aria-label="Open Menu" onClick={() => setOpen(true)}>
                  <Menu/>
                </IconButton>
                <Typography 
                    variant="h5" 
                    sx={{ flexGrow: 1 }}>
                    Linkflow
                </Typography>
                <IconButton color="inherit">
                    <Logout />
                </IconButton>
              </Toolbar>
            </AppBar>
            
            <Drawer open={open} anchor="left" onClose={ () => setOpen(false)}>
              
              
            <NavListDrawer/>
            </Drawer>
        </>
    );

}