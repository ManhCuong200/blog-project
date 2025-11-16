import apiInstance from "./index";

export const GetAllBlog = async () => {
  const response = await apiInstance.get("posts");
  return response.data;
};

export const GetBlogById = async (id) => {
  const response = await apiInstance.get(`posts/${id}`);
  return response.data;
};

export const CreateBlog = async (blogData) => {
  const response = await apiInstance.post("posts", blogData);
  return response.data;
};

export const DeleteBlog = async (id) => {
  const response = await apiInstance.delete(`posts/${id}`);
  return response.data;
}