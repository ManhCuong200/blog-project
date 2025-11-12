import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetBlogById } from "@/services/api/blogs";
import { Spinner } from "@/components/ui/spinner";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const data = await GetBlogById(id);
        console.log("Blog chi tiết:", data);
        setBlog(data);
      } catch (err) {
        console.error("Lỗi khi tải blog:", err);
      } finally {
        setLoading(false);
      }
    };  
    fetchBlog();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <Spinner size="lg" className="text-primary" />
      </div>
    );

  if (!blog)
    return (
      <p className="text-center mt-10 text-muted-foreground">
        Không tìm thấy bài viết
      </p>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {blog.createdAt && <p className="text-center text-[16px] text-[#5044E5] font-medium mb-2">Published on {new Date(blog.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</p>}
      <h1 className="text-5xl font-bold text-center mb-4">{blog.title}</h1>
      <div className="flex justify-center mb-6">
        <span className="bg-[#5149c928] border border-[#1e1595] text-[#5044E5] px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
          {typeof blog.author === "object" ? blog.author.username || blog.author.email || "Unknown" : blog.author || "Unknown"}
        </span>
      </div>
      {blog.image && <img src={blog.image} alt={blog.title} className="rounded-xl w-full mb-6 shadow-md" />}
      {Array.isArray(blog.tags) && blog.tags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {blog.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 transition-colors duration-300">{tag}</span>
          ))}
        </div>
      )}
      <div className="prose max-w-none text-lg leading-relaxed text-foreground text-center"
        dangerouslySetInnerHTML={{ __html: typeof blog.content === "string" ? blog.content : "Nội dung bài viết hiện đang trống hoặc không khả dụng." }} />
      {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
        <p className="text-center text-xs text-muted-foreground mt-8">Last updated on {new Date(blog.updatedAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</p>
      )}
    </div>
  );
};

export default BlogDetail;
