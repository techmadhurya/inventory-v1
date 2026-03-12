
import React from "react";
import SideBar from "../components/sideBar"
import { Card, CardMedia, CardContent, Typography, Grid, Box, Divider } from "@mui/material"

import { items } from "../data/sampleData"

function Inventory() {
    return <>

        <h3> Inventory Page</h3>
        <Grid container spacing={3} padding={3}
            style={{ backgroundColor: "#0A6C70" }}
        >
            {items.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={item.id}>
                    <Card
                        style={{
                            // minWidth: "180px", backgroundColor: "#0A6C72", color: "#FFFFFF"
                            minWidth: "180px"
                        }}>
                        <CardMedia
                            component="img"
                            height="200"
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

    </>
}

export default Inventory