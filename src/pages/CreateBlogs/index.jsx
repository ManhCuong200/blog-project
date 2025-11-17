import React, { useState } from "react";
import CreateBlogForm from "@/components/CreateBlogForm";
import { CreateBlog } from "@/services/api/blogs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const CreateBlogs = () => {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    setTags([...tags, tagInput.trim()]);
    setTagInput("");
  };

  const handleRemoveTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  const handleUploadFile = (file) => {
    setFile(file);
  };

  const handleCreateBlog = async () => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      { method: "POST", body: formData }
    );
    const result = await res.json();
    console.log("result:", result);
    const payload = {
      title,
      content,
      image: result.secure_url,
      tags,
    };

    try {
      setLoading(true);
      const response = await CreateBlog(payload);
      const data = response.data;
      console.log("data:", data);
      navigate("/");
      toast.success("Create blog successful");
    } catch (err) {
      toast.error(err.message);
      setImageUrl("");
      setContent("");
      setTitle("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CreateBlogForm
        tagInput={tagInput}
        setTagInput={setTagInput}
        tags={tags}
        handleAddTag={handleAddTag}
        handleRemoveTag={handleRemoveTag}
        handleUploadFile={handleUploadFile}
        handleCreateBlog={handleCreateBlog}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        loading={loading}
      />
    </div>
  );
};

export default CreateBlogs;
