import Banner from "../Banner/Banner";
import OurSense from "../OurSense/OurSense";
import OurServices from "../OurServices/OurServices";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto space-y-10 my-10">
                <OurServices></OurServices>
                <OurSense></OurSense>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;