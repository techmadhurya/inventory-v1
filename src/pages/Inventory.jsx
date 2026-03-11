
import React from "react";
import SideBar from "../components/sideBar"
import { Card, CardMedia, CardContent, Typography, Grid, Box, Divider } from "@mui/material"

import { items } from "../data/sampleData"

function Inventory() {
    return <>
        <Box sx={{ display: 'flex', height: '100vh' }}>
            {/* <Box sx={{ width: "20%", p: 2, backgroundColor: "#fff" }}>
                <SideBar />
            </Box> */}
            <Box sx={{ width: "80%", p: 2, backgroundColor: "#f5f5f5" }}>
                <h3> Inventory Page</h3>
                <Grid container spacing={3} padding={3}>
                    {items.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={item.image}
                                    alt={item.itemName}
                                />
                                <CardContent>
                                    <Typography variant="h6">
                                        {item.itemName}
                                    </Typography>
                                    <Typography variant="body2">
                                        Location: {item.location}
                                    </Typography>
                                    <Typography variant="body2">
                                        Quantity: {item.quantity}
                                    </Typography>
                                    <Typography variant="body2">
                                        Price: {item.price}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>

    </>
}

export default Inventory