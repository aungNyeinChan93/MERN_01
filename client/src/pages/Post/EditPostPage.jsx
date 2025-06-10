import React from "react";
import BackIcon from "../../icons/BackIcon";
import { Link, useParams } from "react-router";

const EditPostPage = () => {
  const { id } = useParams();
  return (
    <React.Fragment>
      {id}
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
            // onSubmit={}
          >
            <input
              type="email"
              placeholder="Enter title"
              className="p-2 border border-amber-200 w-full rounded-2xl my-2"
            />
            <input
              type="text"
              placeholder="Enter imageUrl"
              className="p-2 border border-amber-200 w-full rounded-2xl my-2"
            />
            <textarea
              rows={4}
              className=" p-2 border border-amber-200 w-full rounded-2xl my-2"
              placeholder="Enter Desc"
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
