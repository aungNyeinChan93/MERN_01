import React from "react";
import BackIcon from "../../icons/BackIcon";
import { Link } from "react-router";

const CreatePostPage = () => {
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
            // onSubmit={}
          >
            <input
              type="text"
              placeholder="Enter title"
              className="p-2 border border-amber-200 w-full rounded-2xl my-2"
            />
            <input
              type="file"
              placeholder="Enter Description"
              className="p-2 border border-amber-200 w-full rounded-2xl my-2"
            />
            <textarea
              rows={6}
              className=" p-2 border border-amber-200 w-full rounded-2xl my-2"
              placeholder="Enter Desc"
            >
              Example
            </textarea>
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
