import React, { useState, useEffect } from "react";
import { Tablepost } from "@/components/Tablepost";
import { Dialogdelete } from "@/components/Dialogdelete";
import { GetAllBlog, DeleteBlog } from "@/services/api/blogs";

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

      const response = await GetAllBlog();
      setPosts(response.items);

      setOpenDelete(false);
    } catch (err) {
      console.log("Lỗi khi xóa blog:", err);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await GetAllBlog();
        console.log("response", response);
        const data = response.items;
        setPosts(data);
      } catch {
        console.log("Lỗi khi tải blog:", err);
        setPosts([]);
      }
    };
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
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default MyPost;
