import Banner from "../Components/Banner";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import OtherSection from "../Components/OtherSection";

const Home = () => {
    return (
      <div className="font-tilt dark:bg-black dark:text-white">
        <Banner></Banner>
        <Brand></Brand>
        <OtherSection></OtherSection>
        <Footer></Footer>
      </div>
    );
};

export default Home;