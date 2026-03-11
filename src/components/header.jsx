import { useNavigate } from "react-router-dom";

import MadhuryaLogo from "../assets/madhuryaLogo2.png";

function Header() {
    const navigate = useNavigate();
    return (
        <div
            style={{
                backgroundColor: "#F5F5F5",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px"
            }}
        >
            {/* Logo + Text */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                    src={MadhuryaLogo}
                    alt="Madhurya Logo"
                    style={{ height: "75px", width: "75px" }}
                />

                <h2 style={{ margin: 0, color: "#C68A2E", fontWeight: "1000", fontSize: "20px", fontFamily: "cursive" }}>
                    MADHURYA DECOR
                </h2>
            </div>

            <button
                // onClick={() => navigate("/login")}
                style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    border: "none",
                    backgroundColor: "#8B3A3A",
                    color: "white",
                    cursor: "pointer"
                }}
            >
                Login
            </button>
        </div>
    );
}

export default Header;