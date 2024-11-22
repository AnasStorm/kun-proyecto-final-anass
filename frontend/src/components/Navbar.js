import React from "react";

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.logoContainer}>
                <h1 style={styles.logo}>🌟 Kundalini Activation</h1>
            </div>
            <ul style={styles.navLinks}>
                <li style={styles.navItem}>
                    <a href="/" style={styles.navLink} className="nav-link">
                        Home
                    </a>
                    <a href="/event/1" style={styles.navLink} className="nav-link">
                        Meditation
                    </a>
                    <a href="/event/2" style={styles.navLink} className="nav-link">
                        Reiki
                    </a>
                    <a href="/event/3" style={styles.navLink} className="nav-link">
                        Kundalini
                    </a>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "linear-gradient(90deg, #0070f3, #1dd1a1)", // Original gradient
        color: "white",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
    },
    logo: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        fontFamily: "'Poppins', sans-serif",
        cursor: "pointer",
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "20px",
        margin: 0,
    },
    navItem: {
        fontSize: "1rem",
    },
    navLink: {
        textDecoration: "none",
        color: "white",
        fontSize: "1.1rem",
        fontWeight: "500",
        padding: "8px 15px",
        borderRadius: "5px",
        transition: "all 0.3s ease",
    },
    navLinkHover: {
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Light hover effect
    },
};

export default Navbar;
