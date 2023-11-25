import Banner from "../Banner/Banner";
import OurServices from "../OurServices/OurServices";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto space-y-10 my-10">
                <OurServices></OurServices>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;