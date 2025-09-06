// App.jsx
import React from "react";

// Icon Components (inline SVG)
const ClockIcon = () => (
    <svg
        className="w-12 h-12 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
    </svg>
);
const UsersIcon = () => (
    <svg
        className="w-12 h-12 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a4 4 0 110-5.292M12 4.354a4 4 0 010 5.292"
        ></path>
    </svg>
);
const DocumentIcon = () => (
    <svg
        className="w-12 h-12 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
    </svg>
);

function App() {
    return (
        <div className="bg-white font-sans">
            {/* Hero Section */}
            <header className="bg-gray-900 text-white text-center py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
                        Never Miss a Detail with AI-Powered Meeting Summaries
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        CollabSuite now instantly transcribes, analyzes, and summarizes your
                        meetings, so you can focus on the conversation, not the note-taking.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <button className="text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg bg-blue-600 hover:bg-blue-700">
                            Try It Now
                        </button>
                        <button className="text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg bg-gray-700 hover:bg-gray-600">
                            Upgrade to Access
                        </button>
                    </div>
                    <div className="mt-12 mx-auto w-full max-w-3xl h-auto aspect-video rounded-lg shadow-2xl bg-gray-800 border border-gray-700 flex items-center justify-center animate-fade-in-up">
                        <p className="text-gray-500">[Animation showing summary generation]</p>
                    </div>
                </div>
            </header>

            <main>
                {/* Feature Section */}
                <section className="py-20 px-6 bg-gray-50">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Focus on What Matters Most
                        </h2>
                        <p className="text-lg text-gray-600 mb-12">
                            Automate your workflow and unlock new levels of productivity.
                        </p>
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
                                <ClockIcon />
                                <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                                    Save Time, Instantly
                                </h3>
                                <p className="text-gray-600">
                                    Get concise, actionable summaries and key takeaways delivered
                                    seconds after your meeting ends.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
                                <UsersIcon />
                                <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                                    Improve Collaboration
                                </h3>
                                <p className="text-gray-600">
                                    Keep everyone aligned with a single source of truth. Share
                                    summaries and action items effortlessly.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
                                <DocumentIcon />
                                <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                                    Create Accurate Records
                                </h3>
                                <p className="text-gray-600">
                                    Generate flawless records for compliance, project tracking, and
                                    future reference without lifting a finger.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Demo Section */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                See It In Action
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Watch our two-minute demo to see how Real-Time AI Summaries can
                                transform your meetings from start to finish.
                            </p>
                            <div className="w-full aspect-video rounded-lg shadow-lg bg-gray-200 border flex items-center justify-center">
                                <p className="text-gray-500">[Short demo video]</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg border">
                            <h4 className="font-bold text-lg mb-2 text-gray-800">
                                Sample AI Summary: Q3 Project Kickoff
                            </h4>
                            <div className="space-y-4">
                                <div>
                                    <h5 className="font-semibold text-blue-600">Key Takeaways:</h5>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
                                        <li>Finalize marketing budget by Friday, Sep 12.</li>
                                        <li>Design team to present mockups next Wednesday.</li>
                                        <li>Launch is targeted for the first week of November.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-blue-600">Action Items:</h5>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
                                        <li>**@Rohit:** Confirm budget with finance department.</li>
                                        <li>**@Priya:** Schedule follow-up with the design team.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="bg-blue-600 text-white py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-12">
                            Trusted by High-Performing Teams
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg">
                                <p className="text-lg italic">
                                    "This feature is a game-changer. Our team saves at least 3-4
                                    hours a week on meeting admin. It's flawless."
                                </p>
                                <p className="mt-4 font-semibold">
                                    - Anya Singh, Project Manager
                                </p>
                            </div>
                            <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg">
                                <p className="text-lg italic">
                                    "Perfect for remote teams. I can catch up on a 60-minute call
                                    in just 5 minutes with the AI summary. Incredible ROI."
                                </p>
                                <p className="mt-4 font-semibold">
                                    - Vikram Rao, Head of Sales
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-20 px-6">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Ready to Reclaim Your Time?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Stop taking notes and start making decisions. Activate AI-powered
                        summaries today.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg bg-blue-600 hover:bg-blue-700">
                            Start Free Trial
                        </button>
                        <button className="text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg bg-gray-800 hover:bg-gray-700">
                            Enable Feature Now
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-10 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p>&copy; 2025 CollabSuite. All rights reserved.</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="#" className="hover:text-white">About</a>
                        <a href="#" className="hover:text-white">Contact</a>
                        <a href="#" className="hover:text-white">FAQ</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
