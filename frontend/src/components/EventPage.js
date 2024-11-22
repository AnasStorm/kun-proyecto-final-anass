import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const EventPage = () => {
    const { id } = useParams();

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

    const event = offerings.find((offering) => offering.id === parseInt(id));
    const [showForm, setShowForm] = useState(false);

    const handleCheckoutClick = () => {
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking confirmed for: ${event.title}\nPrice: €${event.price}`);
        setShowForm(false);
    };
    

    if (!event) {
        return (
            <div>
                <Navbar />
                <main style={styles.main}>
                    <h1 style={styles.title}>Event Not Found</h1>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <main style={styles.main}>
                <div style={styles.container}>
                    <div style={styles.details}>
                        <img src={event.image} alt={event.title} style={styles.image} />
                        <h1 style={styles.title}>{event.title}</h1>
                        <p style={styles.description}>{event.description}</p>
                        <p style={styles.price}>Price: €{event.price}</p>
                        {!showForm && (
                            <button
                                style={styles.checkoutButton}
                                onClick={handleCheckoutClick}
                            >
                                Proceed to Checkout
                            </button>
                        )}
                    </div>
                    <div style={styles.formContainer}>
                        {showForm && (
                            <form style={styles.form} onSubmit={handleSubmit}>
                                <h2 style={styles.formTitle}>Checkout</h2>
                                <label style={styles.label}>
                                    Name:
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        required
                                        style={styles.input}
                                    />
                                </label>
                                <label style={styles.label}>
                                    Email:
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        required
                                        style={styles.input}
                                    />
                                </label>
                                <label style={styles.label}>
                                    Phone Number:
                                    <input
                                        type="tel"
                                        placeholder="Your Phone Number"
                                        required
                                        style={styles.input}
                                    />
                                </label>
                                <label style={styles.label}>
                                    Bank Name:
                                    <input
                                        type="text"
                                        placeholder="Your Bank Name"
                                        required
                                        style={styles.input}
                                    />
                                </label>
                                <label style={styles.label}>
                                    Account Number:
                                    <input
                                        type="text"
                                        placeholder="Your Account Number"
                                        required
                                        style={styles.input}
                                    />
                                </label>
                                <label style={styles.label}>
                                    IBAN:
                                    <input
                                        type="text"
                                        placeholder="Your IBAN"
                                        required
                                        style={styles.input}
                                    />
                                </label>
                                <button type="submit" style={styles.submitButton}>
                                    Confirm Booking
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

const styles = {
    main: {
        padding: "20px 30px",
    },
    container: {
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        flexWrap: "wrap",
    },
    details: {
        flex: "1",
    },
    formContainer: {
        flex: "1",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    image: {
        width: "100%",
        maxHeight: "300px",
        objectFit: "cover",
        borderRadius: "10px",
        marginBottom: "20px",
    },
    title: {
        fontSize: "2rem",
        marginBottom: "10px",
    },
    description: {
        fontSize: "1.2rem",
        marginBottom: "20px",
    },
    price: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    checkoutButton: {
        background: "linear-gradient(90deg, #0070f3, #1dd1a1)",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    formTitle: {
        fontSize: "1.8rem",
        marginBottom: "10px",
        textAlign: "center",
    },
    label: {
        fontSize: "1rem",
        marginBottom: "5px",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "5px 0 15px 0",
        border: "1px solid #ddd",
        borderRadius: "5px",
        fontSize: "1rem",
    },
    submitButton: {
        background: "linear-gradient(90deg, #0070f3, #1dd1a1)",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
        textAlign: "center",
    },
};

export default EventPage;
