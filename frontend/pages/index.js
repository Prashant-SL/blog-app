import HeroSection from "../components/HeroSection";
import TopCategoryPosts from "../components/TopCategoryPosts";
import Latestposts from "./latestposts";

const Home = () => {
  return (
    <div className="relative">
      {/* <div className=" w-full h-full z-0">
        <HeroSection />
      </div>*/}
      <div className="px-10 md:px-20 mb-10">
        <Latestposts />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-24">
          <TopCategoryPosts />
          <TopCategoryPosts />
        </div>
      </div>
    </div>
  );
};

export default Home;
