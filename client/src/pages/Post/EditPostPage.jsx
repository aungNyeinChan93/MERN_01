import React from "react";
import BackIcon from "../../icons/BackIcon";
import { Link, useNavigate, useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

const EditPostPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const getOldData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/posts/${id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        if (response.status === 401) {
          return navigate("/posts");
        }
        throw new Error("Post not Found!");
      }
      const { result: oldPostData } = await response.json();
      const { title, description, imageUrl } = oldPostData;
      setTitle(title);
      setDescription(description);
      setImageUrl(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOldData();
  }, []);

  const updatePost = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("imageUrl", imageUrl);

      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/posts/edit/${id}`,
        {
          method: "PUT",
          credentials: "include",
          // Do not set Content-Type when sending FormData; the browser will set it automatically
          body: formData,
        }
      );
      if (!response.ok) {
        if (response.status === 401) {
          return navigate("/posts");
        }
        throw new Error(response.status);
      }
      const postData = await response.json();
      if (postData.mess == "success") {
        navigate("/posts");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <section className="min-h-screen mx-[140px] bg-amber-100">
        <div className="flex justify-between px-[180px] pt-6 items-center">
          <h1 className="py-3 text-2xl text-center text-red-400">
            Post Edit Page
          </h1>
          <span>
            <Link to={"/posts"}>
              <BackIcon />
            </Link>
          </span>
        </div>
        <div className=" grid grid-cols-7">
          <form
            className=" col-start-2 col-span-5 border  p-6 rounded border-red-400 mt-10"
            onSubmit={updatePost}
          >
            <input
              type="text"
              placeholder="Enter title"
              className="p-2 border border-amber-200 w-full rounded-2xl my-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter imageUrl"
              className="p-2 border border-amber-200 w-full rounded-2xl my-2"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <textarea
              rows={4}
              className=" p-2 border border-amber-200 w-full rounded-2xl my-2"
              placeholder="Enter Desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
              type="submit"
              value="Update"
              className="w-full my-2 bg-blue-500 hover:bg-blue-600 px-2 py-2 text-white rounded-2xl"
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EditPostPage;
