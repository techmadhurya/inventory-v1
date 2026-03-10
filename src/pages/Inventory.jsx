import SideBar from "../components/sideBar"
import { Box, Divider } from "@mui/material"

function Inventory() {
    return <>
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Box sx={{ width: "20%", p: 2, backgroundColor: "#fff" }}>
                <SideBar />
            </Box>
            <Box sx={{ width: "80%", p: 2, backgroundColor: "#f5f5f5" }}>
                <h1> Inventory Page</h1>
            </Box>
        </Box>

    </>
}

export default Inventory