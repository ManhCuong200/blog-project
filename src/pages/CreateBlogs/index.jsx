import React from "react";
import { useState } from "react";
import CreateBlog from "@/components/CreateBlogForm";

const CreateBlogs = () => {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    setTags([...tags, tagInput.trim()]);
    setTagInput("");
  };

  const handleRemoveTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  }

  return (
    <div>
      <CreateBlog
        tagInput={tagInput}
        setTagInput={setTagInput}
        tags={tags}
        handleAddTag={handleAddTag}
        handleRemoveTag={handleRemoveTag}
      />
    </div>
  );
};

export default CreateBlogs;
