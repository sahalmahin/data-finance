import Analytics from "../Shared/Analytics";
import Banner from "../Shared/Banner";
import Cards from "../Shared/Cards";
import Footer from "../Shared/Footer";
import NewsLetter from "../Shared/NewsLetter";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Analytics/>
            <NewsLetter/>
            <Cards/>
            <Footer/>
        </div>
    );
};

export default Home;