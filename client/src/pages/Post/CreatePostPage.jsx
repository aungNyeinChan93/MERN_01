import React, { useContext, useState } from "react";
import BackIcon from "../../icons/BackIcon";
import { Link, useLoaderData, useNavigate } from "react-router";
import { userInfoContext } from "../../contexts/userInfoProvider";

const CreatePostPage = () => {
  const { userInfo } = useContext(userInfoContext);
  const user_id = userInfo?._id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();
  const createPost = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("imageUrl", imageUrl);
      formData.append("user_id", user_id);

      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/posts/create`,
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );
      if (!response.ok) {
        if (response.status === 401) {
          return navigate("/");
        }
        throw new Error("post create fail!");
      }
      const post = await response.json();
      if (post.mess === "success") {
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
            Post Create Page
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
            onSubmit={createPost}
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
              placeholder="Enter image Url"
              className="p-2 border border-amber-200 w-full rounded-2xl my-2"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <textarea
              rows={6}
              className=" p-2 border border-amber-200 w-full rounded-2xl my-2"
              // defaultValue={"Enter desc"}
              placeholder="Enter Desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
              type="submit"
              value="Create"
              className="w-full my-2 bg-blue-500 hover:bg-blue-600 px-2 py-2 text-white rounded-2xl"
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CreatePostPage;
