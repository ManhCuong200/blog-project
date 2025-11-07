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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {blogs.map((blog) => (
        <Link
          key={blog._id}
          to={`/blog-details/${blog._id}`}
          className="group block shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 bg-card border border-border"
        >
          <div className="overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-5 flex flex-col justify-between">
            {Array.isArray(blog.tags) && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {blog.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center bg-[#E8E7FF] text-primary text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
              {blog.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {stripHTML(blog.content) || "Không có nội dung hiển thị."}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogItem;
