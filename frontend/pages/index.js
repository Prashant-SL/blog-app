import HeroSection from "../components/HeroSection";
import TopCategoryPosts from "../components/TopCategoryPosts";
import LatestPosts from "../components/LatestPosts";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPosts } from "./features/blogPostSlice";

const Home = ({ posts }) => {
  const [cateogriesPosts, setCateogriesPosts] = useState({});

  const dispatch = useDispatch();
  const blogPosts = useSelector((state) => state.blogPost.blogPosts);

  useEffect(() => {
    dispatch(getBlogPosts(posts));
  }, [dispatch, posts]);

  useEffect(() => {
    const fetchCategories = (blogPosts) => {
      return blogPosts.reduce((topCategories, post) => {
        const categoryName = post.category.toLowerCase();
        topCategories[categoryName] = (topCategories[categoryName] || 0) + 1;
        let arr = Object.entries(topCategories)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 2);

        return Object.fromEntries(arr);
      }, {});
    };

    const categoryList = fetchCategories(blogPosts);

    const fetchCateogryPosts = (categoryList, blogPosts) => {
      const result = {};
      for (let key in categoryList) {
        if (result[categoryList[key]] == undefined) {
          result[key] = [];
        }
      }

      blogPosts.filter((blogPost) => {
        for (let key in result) {
          if (key === blogPost.category.toLowerCase()) {
            result[key] = [...result[key], blogPost];
          } else continue;
        }
      });
      return result;
    };

    setCateogriesPosts(fetchCateogryPosts(categoryList, blogPosts));
  }, [blogPosts]);

  return (
    <div className="relative">
      <div className="w-full h-full z-0">
        <HeroSection />
      </div>
      <div className="px-10 md:px-20 mb-10">
        {Boolean(posts.length) && <LatestPosts blogPosts={posts} />}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-24">
          <TopCategoryPosts topCategories={cateogriesPosts} />
          <TopCategoryPosts />
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch("http://localhost:8888/api/v1/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
