import React from "react";

export default function App() {
    return (
        <div className="font-sans leading-relaxed text-gray-800">
            {/* Hero Section */}
            <section className="text-center py-16 px-5 max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">
                    Never Miss a Detail with{" "}
                    <span className="text-blue-600">
                        AI-Powered Meeting Summaries
                    </span>
                </h1>
                <p className="max-w-2xl mx-auto text-gray-600 mb-6">
                    Save time, improve collaboration, and keep accurate records of every
                    meeting with CollabSuite’s new real-time AI Meeting Summaries feature.
                </p>
                <button className="px-6 py-3 rounded-lg text-white bg-blue-600 hover:opacity-90 transition">
                    Try It Now
                </button>
                <div className="mt-6">
                    <img
                        src="https://via.placeholder.com/900x400"
                        alt="Feature screenshot"
                        className="w-full rounded-xl"
                    />
                </div>
            </section>

            {/* Feature Explanation */}
            <section className="py-12 px-5 max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Why This Feature Matters
                </h2>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold mb-2">⏳ Saves Time</h3>
                        <p>No more manual note-taking—AI creates summaries instantly.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold mb-2">🤝 Better Collaboration</h3>
                        <p>
                            Share concise summaries with teammates and keep everyone aligned.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold mb-2">✅ Accurate Records</h3>
                        <p>
                            Always have a reliable record of what was discussed and decided.
                        </p>
                    </div>
                </div>
            </section>

            {/* Demo Section */}
            <section className="py-12 px-5 text-center max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">See It In Action</h2>
                <div className="bg-white p-6 rounded-xl shadow inline-block">
                    <img
                        src="https://via.placeholder.com/700x350"
                        alt="Demo video placeholder"
                        className="w-full rounded-lg mb-4"
                    />
                    <p>
                        Example summary:{" "}
                        <em>
                            “Project roadmap finalized, next sprint tasks assigned, budget
                            approved.”
                        </em>
                    </p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-12 px-5 max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    What Early Users Say
                </h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    <blockquote className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600 italic">
                        “The AI summaries save me at least 5 hours a week. Game changer for
                        remote teams!” – <strong>Sarah, Project Manager</strong>
                    </blockquote>
                    <blockquote className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600 italic">
                        “Accurate and fast. Clients love receiving detailed follow-ups right
                        after meetings.” – <strong>David, Consultant</strong>
                    </blockquote>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 px-5 text-center">
                <h2 className="text-2xl font-semibold mb-6">
                    Ready to Experience Smarter Meetings?
                </h2>
                <button className="px-6 py-3 rounded-lg text-white bg-green-600 hover:opacity-90 transition">
                    Upgrade to Access
                </button>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 text-center py-6">
                <nav className="mb-3 space-x-4">
                    <a href="#" className="hover:text-white">
                        About
                    </a>
                    <a href="#" className="hover:text-white">
                        Contact
                    </a>
                    <a href="#" className="hover:text-white">
                        FAQ
                    </a>
                    <a href="#" className="hover:text-white">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white">
                        Terms
                    </a>
                </nav>
                <p>© 2025 CollabSuite. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
