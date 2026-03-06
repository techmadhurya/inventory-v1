import MadhuryaLogo from "../assets/madhurya.png";

function Header() {
    return (
        <div
            style={{
                backgroundColor: "#FFFFFF",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 25px"
            }}
        >
            {/* Logo + Text */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                    src={MadhuryaLogo}
                    alt="Madhurya Logo"
                    style={{ height: "80px" }}
                />

                {/* <h1 style={{ margin: 0, color: "#C68A2E", fontWeight: "500" }}>
                    MADHURYA
                </h1> */}
            </div>

            {/* Login Button */}
            <button
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