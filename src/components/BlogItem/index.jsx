import React from "react";
import { Link } from "react-router-dom";

function stripHTML(input) {
  if (typeof input !== "string") return "";
  const temp = document.createElement("div");
  temp.innerHTML = input;
  return temp.textContent || temp.innerText || "";
}

const BlogItem = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        Không có bài viết nào để hiển thị.
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            to={`/blog-details/${blog._id}`}
            className="group block rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg 
  bg-white dark:bg-[#111111] dark:border-[#222] dark:shadow-none"
          >
            <div className="overflow-hidden rounded-t-xl bg-gray-50">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-10 flex flex-col justify-between min-h-[160px]">
              {Array.isArray(blog.tags) && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center justify-center 
                      px-3 py-1 rounded-full text-xs font-medium
                      bg-[#E8E7FF] text-[#5044E5] 
                      dark:bg-[#3E357A] dark:text-[#DAD3FF]
                      border border-[#5044E580] dark:border-[#7D6CFF80]
                      shadow-sm transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>

              <p className="text-gray-500 text-sm line-clamp-3">
                {stripHTML(blog.content) || "Không có nội dung hiển thị."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogItem;
