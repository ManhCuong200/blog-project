import React, { useState, useEffect } from "react";
import { Tablepost } from "@/components/Tablepost";
import { Dialogdelete } from "@/components/Dialogdelete";
import { GetAllBlog, DeleteBlog } from "@/services/api/blogs";
import { toast } from "react-hot-toast";

const MyPost = () => {
  const [posts, setPosts] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const [deletePostId, setDeletePostId] = useState(null);

  const openDialog = (id) => {
    setDeletePostId(id);
    setOpenDelete(true);
  };

  const handleDelete = async () => {
    try {
      await DeleteBlog(deletePostId);
      setPosts((prev) => prev.filter((post) => post._id !== deletePostId));
      setOpenDelete(false);
      toast.success("Blog deleted successfully!");
    } catch (err) {
      const message = err?.response?.data?.message || "Lỗi khi xóa blog!";
      toast.error(message);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await GetAllBlog();
      const data = response.items;
      setPosts(data);
    } catch (err) {
      console.error("Lỗi khi tải blog:", err);
      setPosts([]);
    }
  };
  
  useEffect(() => {
    fetchPosts();
  }, []);

  const titleToDelete = posts.find((p) => p._id === deletePostId)?.title;

  return (
    <div>
      <Tablepost posts={posts} openDialog={openDialog} />

      <Dialogdelete
        open={openDelete}
        setOpen={setOpenDelete}
        blogTitle={titleToDelete}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default MyPost;
