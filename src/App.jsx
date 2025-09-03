import React from "react";
import "./App.css";

export default function App() {
    return (
        <div className="feature-container">
            {/* Header */}
            <header className="header">
                <h1 className="logo">⚡ ProApp</h1>
                <nav>
                    <a href="#feature">Feature</a>
                    <a href="#benefits">Benefits</a>
                    <a href="#get">Get Started</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <h2>Introducing SmartSync 🔄</h2>
                    <p>
                        Our latest feature keeps your data seamlessly updated across all
                        devices — fast, secure, and automatic.
                    </p>
                    <a href="#get" className="cta-btn">
                        Try SmartSync
                    </a>
                </div>
                <div className="hero-img">
                    <img
                        src="https://via.placeholder.com/350x250"
                        alt="SmartSync Demo"
                    />
                </div>
            </section>

            {/* Feature Details */}
            <section id="feature" className="feature-details">
                <h3>How SmartSync Works</h3>
                <p>
                    SmartSync automatically detects changes and syncs them across your
                    devices in real-time. No more manual uploads or version conflicts.
                </p>
                <ul>
                    <li>✅ Instant synchronization</li>
                    <li>✅ End-to-end encryption</li>
                    <li>✅ Works offline & updates when online</li>
                </ul>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="benefits">
                <h3>Why You'll Love It</h3>
                <div className="benefit-list">
                    <div className="benefit-card">
                        <h4>🚀 Faster Workflow</h4>
                        <p>No delays, your files are always up-to-date everywhere.</p>
                    </div>
                    <div className="benefit-card">
                        <h4>🔒 Secure</h4>
                        <p>Bank-level encryption to keep your data safe and private.</p>
                    </div>
                    <div className="benefit-card">
                        <h4>📱 Multi-Device Support</h4>
                        <p>Sync across mobile, tablet, and desktop without effort.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="get" className="cta-section">
                <h3>Ready to Experience SmartSync?</h3>
                <button className="cta-btn-big">Get Started</button>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 ProApp. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
