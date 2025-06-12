import React from "react";
import { Link, useNavigate, useParams } from "react-router";
// import { test_products } from "../../tests/test_product";
import BackIcon from "../../icons/BackIcon";
import { useState } from "react";
import { useEffect } from "react";
import { formatISO9075 } from "date-fns";
import { useContext } from "react";
import { userInfoContext } from "../../contexts/userInfoProvider";

const DetailPostPage = () => {
  const { userInfo, setUserInfo } = useContext(userInfoContext);
  console.log(userInfo);

  const navigate = useNavigate();
  const { id } = useParams();

  const [post, setPost] = useState({});

  const getPost = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/posts/${id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        if (response.status == 403) {
          return navigate("/posts");
        }
        throw new Error("Post not found!");
      }
      const postData = await response.json();
      if (postData.mess === "success") {
        setPost(postData.result);
      }
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(post);

  useEffect(() => {
    getPost();
  }, []);

  const deletePost = async (e) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/posts/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("fail delete");
      }
      const deletedPostData = await response.json();
      if (deletedPostData.mess === "success") {
        console.log(`${deletedPostData.result.title} was deleted!`); //noti alert
        return navigate("/posts");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const product = test_products.filter((p) => p.id == id);
  // const { id: pId, title, description, category, image } = product[0];

  const {
    title,
    description,
    imageUrl,
    user_id: author,
    _id,
    createdAt,
  } = post;
  return (
    <React.Fragment>
      <section className="p-2 bg-amber-100 mx-[140px]">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  {title}
                </h2>
                <h4 className="py-2 uppercase text-md text-red-400">
                  {author?.name}
                  <span className="ms-2 text-blue-500">
                    {createdAt &&
                      formatISO9075(createdAt, { format: "extended" })}
                  </span>
                </h4>
                <p className="mt-4 text-gray-700">{description}</p>
              </div>
              <div className=" flex justify-start items-center space-x-2">
                <Link
                  to={"/posts"}
                  className="inline-block mt-4 w-30 text-center px-4 py-2 bg-green-400 hover:bg-green-600 rounded"
                >
                  <div className=" flex justify-evenly items-center">
                    <BackIcon />
                    <span>Back</span>
                  </div>
                </Link>

                {userInfo?._id === author?._id && (
                  <>
                    <Link
                      to={`/posts/edit/${_id}`}
                      className="inline-block mt-4 w-30 text-center px-4 py-2 bg-amber-300 hover:bg-amber-400 rounded"
                    >
                      <div className=" flex justify-evenly items-center">
                        <BackIcon />
                        <span>Edit </span>
                      </div>
                    </Link>
                  </>
                )}

                {userInfo?._id === author?._id && (
                  <>
                    <button
                      onClick={deletePost}
                      className="inline-block mt-4 w-30 text-center px-4 py-2 bg-red-400 hover:bg-red-500 rounded cursor-pointer"
                    >
                      <div className=" flex justify-evenly items-center">
                        <BackIcon />
                        <span>Delete</span>
                      </div>
                    </button>
                  </>
                )}
              </div>
            </div>

            <div>
              <img src={imageUrl} className="rounded" alt="" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DetailPostPage;
