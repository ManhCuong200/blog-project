import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import BlogItem from "@/components/BlogItem";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://api-blog-af3u.onrender.com/api/posts");
        if (!res.ok) throw new Error("Không lấy được danh sách blog");
        const data = await res.json();
        console.log("✅ Kết quả API:", data);
        const items = Array.isArray(data.items) ? data.items : [];
        setBlogs(items);
        setFilteredBlogs(items);
      } catch (err) {
        console.error("❌ Lỗi fetch:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);
    const query = inputValue.trim().toLowerCase();
    if (query === "") {
      setFilteredBlogs(blogs);
      return;
    }
    const result = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query)
    );
    setFilteredBlogs(result);
  };

  return (
    <div>
      <HeroSection
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearch={handleSearch}
      />

      {error && (
        <p className="text-center mt-10 text-red-500 font-medium">{error}</p>
      )}
      {loading ? (
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-card shadow-md rounded-xl overflow-hidden"
              >
                <div className="h-56 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
                <div className="p-4 space-y-3">
                  <div className="flex gap-2">
                    <div className="w-12 h-4 bg-gray-200 rounded-full"></div>
                    <div className="w-16 h-4 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : hasSearched && filteredBlogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 relative overflow-hidden">
          <div className="absolute flex gap-6 animate-float-slow opacity-20">
            <div className="w-24 h-32 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="w-24 h-32 bg-gray-200 dark:bg-gray-600 rounded-md"></div>
            <div className="w-24 h-32 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          </div>

          <div className="relative z-10 animate-bounce-slow mb-8">
            <div className="w-32 h-32 rounded-full border-8 border-gray-300 dark:border-gray-700 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="gray"
                className="w-10 h-10 dark:stroke-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17.65 9.35A8.3 8.3 0 119.35 17.65 8.3 8.3 0 0117.65 9.35z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            We could not find any blog
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
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
