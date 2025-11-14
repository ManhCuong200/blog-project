import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import BlogItem from "@/components/BlogItem";
import BlogSkeleton from "@/components/Contentloader";
import { GetAllBlog } from "@/services/api/blogs";
import Lottie from "lottie-react";
import noResultAnimation from "@/assets/giff/loading_files.json";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await GetAllBlog();
        const items = Array.isArray(data.items) ? data.items : [];
        setBlogs(items);
        setFilteredBlogs(items);
      } catch (err) {
        console.error("Lỗi khi tải blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = inputValue.trim().toLowerCase();
    if (!query) {
      setFilteredBlogs(blogs);
      return;
    }
    if (query.length !== 1 || !/^[a-z]$/.test(query)) {
      setFilteredBlogs([]);
      return;
    }
    const result = blogs.filter((blog) =>
      blog.title?.toLowerCase().startsWith(query)
    );
    setFilteredBlogs(result);
  };

  return (
    <div>
      <HeroSection
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSearch={handleSearch}
      />

      {loading ? (
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <BlogSkeleton key={i} />
            ))}
          </div>
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-8 mb-20">
          <Lottie
            animationData={noResultAnimation}
            loop={true}
            className="min-h-[200px]"
          />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">
            We could not find any blog
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base">
            Please try again with a different search query.
          </p>
        </div>
      ) : (
        <BlogItem blogs={filteredBlogs} />
      )}
    </div>
  );
};

export default Home;
