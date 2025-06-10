import React, { useEffect, useState } from "react";
import SampleCard from "../../components/others/SampleCard";
import { test_products } from "../../tests/test_product";

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  // console.log(posts);

  const getPostsData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/api/posts/`, {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Posts not Found!");
      }
      const postsData = await response.json();
      if (postsData.mess === "success") {
        setPosts(postsData.result);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <React.Fragment>
      <section className="mx-10 lg:mx-[140px] min-h-screen bg-amber-100 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 my-2">
          {posts?.map((post) => {
            return <SampleCard key={post._id} {...post} />;
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default PostPage;
