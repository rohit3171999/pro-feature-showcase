import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import DemoSection from "./components/DemoSection.jsx";
import Testimonial from "./components/Testimonial.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";
import NewTestimonials from "./components/NewTestimonials.jsx";
import {testimonials} from "./GunsReview.js";

function App() {
    return (
        <>
            <HeroSection/>
            <FeatureSection/>
            <DemoSection/>
            <Testimonial/>
            <CTASection/>
            <Footer/>
            <div className="grid grid-cols-4 gap-3 mt-10">
                {testimonials.map(testimonial => (
                    <NewTestimonials
                        key={testimonial.userName}
                        userName={testimonial.userName}
                        userReview={testimonial.userReview}
                        imageURL={testimonial.imageURL}
                    />
                ))}
            </div>

        </>
    );
}

export default App;
