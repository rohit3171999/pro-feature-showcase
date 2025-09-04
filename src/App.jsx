import React from "react";

export default function App() {
    return (
        <div className="app">
            {/* Hero Section */}
            <section className="hero">
                <h1>
                    Never Miss a Detail with{" "}
                    <span className="highlight">AI-Powered Meeting Summaries</span>
                </h1>
                <p>
                    Save time, improve collaboration, and keep accurate records of every
                    meeting with CollabSuite’s new real-time AI Meeting Summaries feature.
                </p>
                <button className="btn primary">Try It Now</button>
                <div className="hero-img">
                    <img
                        src="https://via.placeholder.com/900x400"
                        alt="Feature screenshot"
                    />
                </div>
            </section>

            {/* Feature Explanation */}
            <section className="features">
                <h2>Why This Feature Matters</h2>
                <div className="grid">
                    <div className="card">
                        <h3>⏳ Saves Time</h3>
                        <p>No more manual note-taking—AI creates summaries instantly.</p>
                    </div>
                    <div className="card">
                        <h3>🤝 Better Collaboration</h3>
                        <p>
                            Share concise summaries with teammates and keep everyone aligned.
                        </p>
                    </div>
                    <div className="card">
                        <h3>✅ Accurate Records</h3>
                        <p>
                            Always have a reliable record of what was discussed and decided.
                        </p>
                    </div>
                </div>
            </section>

            {/* Demo Section */}
            <section className="demo">
                <h2>See It In Action</h2>
                <div className="demo-box">
                    <img
                        src="https://via.placeholder.com/700x350"
                        alt="Demo video placeholder"
                    />
                    <p>
                        Example summary: <em>
                        “Project roadmap finalized, next sprint tasks assigned, budget
                        approved.”
                    </em>
                    </p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h2>What Early Users Say</h2>
                <div className="grid">
                    <blockquote>
                        “The AI summaries save me at least 5 hours a week. Game changer for
                        remote teams!” – <strong>Sarah, Project Manager</strong>
                    </blockquote>
                    <blockquote>
                        “Accurate and fast. Clients love receiving detailed follow-ups right
                        after meetings.” – <strong>David, Consultant</strong>
                    </blockquote>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <h2>Ready to Experience Smarter Meetings?</h2>
                <button className="btn success">Upgrade to Access</button>
            </section>

            {/* Footer */}
            <footer className="footer">
                <nav>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">FAQ</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                </nav>
                <p>© 2025 CollabSuite. All Rights Reserved.</p>
            </footer>

            {/* Inline CSS */}
            <style>{`
        .app { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        h1, h2 { margin-bottom: 16px; }
        section { padding: 40px 20px; max-width: 1000px; margin: auto; }
        .hero { text-align: center; }
        .hero h1 { font-size: 2.5rem; }
        .hero p { max-width: 700px; margin: 10px auto 20px; color: #555; }
        .highlight { color: #0077ff; }
        .hero-img img { width: 100%; border-radius: 12px; margin-top: 20px; }
        .btn { padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; }
        .btn.primary { background: #0077ff; color: white; }
        .btn.success { background: #28a745; color: white; }
        .btn:hover { opacity: 0.9; }
        .features .grid, .testimonials .grid { display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
        .card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
        .demo { text-align: center; }
        .demo-box { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); display: inline-block; }
        .demo-box img { width: 100%; border-radius: 8px; }
        .testimonials blockquote { background: white; padding: 20px; border-left: 4px solid #0077ff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
        .cta { text-align: center; }
        .footer { background: #222; color: #ccc; text-align: center; padding: 20px; }
        .footer nav { margin-bottom: 10px; }
        .footer nav a { color: #ccc; margin: 0 10px; text-decoration: none; }
        .footer nav a:hover { color: white; }
      `}</style>
        </div>
    );
}
