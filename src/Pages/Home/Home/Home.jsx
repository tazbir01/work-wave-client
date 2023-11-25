import Banner from "../Banner/Banner";
import OurServices from "../OurServices/OurServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto space-y-10 my-10">
            <OurServices></OurServices>
            </div>
        </div>
    );
};

export default Home;