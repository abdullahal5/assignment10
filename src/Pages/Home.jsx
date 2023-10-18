import Banner from "../Components/Banner";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import OtherSection from "../Components/OtherSection";

const Home = () => {
    return (
        <div className="font-tilt">
            <Banner></Banner>
            <Brand></Brand>
            <OtherSection></OtherSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;