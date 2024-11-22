import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Offerings = () => {
    const offerings = [
        {
            id: 1,
            title: "Meditation Session",
            description: "A guided meditation session for relaxation.",
            price: 50,
            image: "/images/meditation.jpg",
        },
        {
            id: 2,
            title: "Reiki Healing",
            description: "A reiki session to balance your energy.",
            price: 70,
            image: "/images/reiki.jpg",
        },
        {
            id: 3,
            title: "Kundalini Activation",
            description: "An intensive Kundalini activation session.",
            price: 100,
            image: "/images/acroyoga.jpg",
        },
    ];

    return (
        <div>
            <Navbar />
            <main style={styles.main}>
                <h1 style={styles.heading}>Our Offerings</h1>
                <div style={styles.offeringsContainer}>
                    {offerings.map((offering) => (
                        <div key={offering.id} style={styles.offeringCard}>
                            <img
                                src={offering.image}
                                alt={offering.title}
                                style={styles.image}
                            />
                            <h2 style={styles.offeringTitle}>{offering.title}</h2>
                            <p style={styles.offeringDescription}>
                                {offering.description}
                            </p>
                            <p style={styles.offeringPrice}>Price: €{offering.price}</p>
                            <Link to={`/event/${offering.id}`} style={styles.detailsButton}>
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

const styles = {
    main: {
        padding: "20px 30px",
        backgroundColor: "#f9f9f9",
    },
    heading: {
        textAlign: "center",
        fontSize: "2rem",
        color: "#333",
        marginBottom: "20px",
    },
    offeringsContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
    },
    offeringCard: {
        background: "white",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    },
    image: {
        width: "100%", // Ensures the image fits the width of its container
        height: "200px", // Set a fixed height for alignment
        objectFit: "cover", // Ensures the image is cropped proportionally
        borderRadius: "5px", // Rounded corners for aesthetics
        marginBottom: "10px",
    },

    offeringTitle: {
        fontSize: "1.5rem",
        color: "#0070f3",
    },
    offeringDescription: {
        fontSize: "1rem",
        color: "#555",
        margin: "10px 0",
    },
    offeringPrice: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        margin: "10px 0",
    },
    detailsButton: {
        display: "inline-block",
        padding: "10px 20px",
        background: "linear-gradient(90deg, #0070f3, #1dd1a1)",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        marginTop: "10px",
        cursor: "pointer",
    },
};

export default Offerings;
