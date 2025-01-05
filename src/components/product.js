import { Box, Button, Paper, styled, Typography } from "@mui/material";

export default function Product() {

    const Img = styled("img")({
        width: 200,
        height: "100%",
        objectFit: "cover",
        objectPosition: "center"
    })


    return (
        <Paper
        sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            overflow: "hidden",
            nt: 5
        }}
        >
            <Img src="https://via.placeholder.com/200" alt="mi hermosa imagen con styled"  />
            <Box sx={{ flexGrow: 1}}>
                <Typography variant="h4">Product Name</Typography>
                <Typography variant="body1">Product Description</Typography>
              
                <Button color="success" variant="contained">ADD CART</Button>
            </Box>
            <Box sx={{
                mr: 2
            }}
            component="p"
            >
                19.99$
            </Box>
        </Paper>
    )
}