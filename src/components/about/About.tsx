import React from "react";
import "./About.css";

const AboutUs: React.FC = () => {
    return (
        <div className="about-container">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="hero-content">
                    <h1>Welcome to the Uttarakhand Culture Preservation Project</h1>
                    <p>
                        Explore and preserve the cultural richness of Uttarakhand with us.
                        We provide a digital platform to share the traditions, history, and
                        natural beauty of the region, making it accessible for everyone.
                    </p>
                </div>
            </div>

            {/* Problem Section */}
            <div className="section problem-section">
                <img
                    src="/about1.png"
                    alt="Cultural heritage issue"
                    className="section-image-left"
                />
                <div className="section-content">
                    <h2>The Problem</h2>
                    <p>
                        Uttarakhand{"'"}s cultural heritage is at risk of being forgotten
                        as younger generations move away from their roots. If not preserved,
                        these traditions might disappear, leaving future generations without
                        a connection to their past.
                    </p>
                </div>
            </div>

            {/* Solution Section */}
            <div className="section solution-section">
                <div className="section-content">
                    <h2>Our Solution</h2>
                    <p>
                        We digitize Uttarakhand’s cultural knowledge to ensure it’s
                        preserved and passed down. By leveraging technology, we make it easy
                        for the younger generation to access, learn, and engage with their
                        rich heritage.
                    </p>
                </div>
                <img
                    src="/about2.png"
                    alt="Digital platform"
                    className="section-image-right"
                />
            </div>

            {/* Discover Section */}
            <div className="section discover-section">
                <h2>Discover Uttarakhand’s Cultural Wealth</h2>
                <ul className="discover-list">
                    <li>
                        <strong>Language:</strong> Kumaoni, Garhwali, Jaunsari
                    </li>
                    <li>
                        <strong>Cultural Stories:</strong> Historical kings, famous
                        personalities
                    </li>
                    <li>
                        <strong>History:</strong> Uttarakhand’s past, movements, and leaders
                    </li>
                    <li>
                        <strong>Spiritual Heritage:</strong> Temples, deities, architectural
                        wonders
                    </li>
                    <li>
                        <strong>Cuisine:</strong> Authentic recipes and traditional methods
                    </li>
                    <li>
                        <strong>Festivals & Events:</strong> Upcoming cultural festivals and
                        fairs
                    </li>
                    <li>
                        <strong>Art & Craft:</strong> Traditional art, handicrafts, and
                        artisans
                    </li>
                    <li>
                        <strong>Music & Dance:</strong> Regional music, instruments, and
                        dances
                    </li>
                    <li>
                        <strong>Nature:</strong> Flora, fauna, rivers, mountains
                    </li>
                </ul>
            </div>

            {/* User-Suggested Features Section */}
            <div className="section user-section">
                <div className="section-content">
                    <h2>Your Voice Matters</h2>
                    <p>
                        Have a suggestion for our platform? Send us an email or submit a
                        feature idea, and we’ll consider incorporating it to enhance our
                        platform.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
