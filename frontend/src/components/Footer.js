import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>© 2024 Kundalini Activation. All rights reserved.</p>
            <p>Designed with ❤️ by Your Brand</p>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: "center",
        padding: "20px",
        background: "linear-gradient(90deg, #1dd1a1, #0070f3)",
        color: "white",
        fontSize: "1rem",
        position: "relative",
        width: "100%",
        bottom: 0,
        marginTop: "20px",
    },
};

export default Footer;
