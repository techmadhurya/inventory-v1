import { useNavigate } from "react-router-dom";

import bgImage from "../assets/images/bg1.png"
import bgImage2 from "../assets/images/bg2.jpg"

function Home() {
    const navigate = useNavigate();
    return <>
        <div style={{
            backgroundImage: `url(${bgImage2})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center"
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