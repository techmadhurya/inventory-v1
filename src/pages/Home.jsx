import { useNavigate } from "react-router-dom";

import bgImage from "../assets/images/bg1.png"
import bgImage2 from "../assets/images/bg2.jpg"
import bgVortexPng from "../assets/rainbow_vortex.png"
import bgVortexSvg from "../assets/rainbow_vortex.svg"

function Home() {
    const navigate = useNavigate();
    return <>
        <div style={{
            // backgroundImage: `url(${bgVortexPng})`,
            background: "#D2A4A070",
            height: "500px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "50px",
            border: "1px solid #000"
        }}>

            <h2 style={{ margin: 0, color: "#FFF", fontWeight: "500" }}>
                Decorating a Lifetime of Memories
            </h2>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "200px" }}>
                <button
                    onClick={() => navigate("/inventory")}
                    style={{
                        padding: "8px 16px",
                        borderRadius: "6px",
                        border: "none",
                        backgroundColor: "#8B3A3A",
                        color: "white",
                        cursor: "pointer"
                    }}
                >
                    Inventory
                </button>
            </div>
        </div >
    </>
}

export default Home