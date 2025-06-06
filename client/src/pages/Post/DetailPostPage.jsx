import React from "react";
import { Link, useParams } from "react-router";
import { test_products } from "../../tests/test_product";
import BackIcon from "../../icons/BackIcon";

const DetailPostPage = () => {
  const { id } = useParams();
  const product = test_products.filter((p) => p.id == id);
  const { id: pId, title, description, category, image } = product[0];

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
                  {category}
                </h4>
                <p className="mt-4 text-gray-700">{description}</p>
              </div>
              <Link
                to={"/posts"}
                className="inline-block mt-4 w-30 text-center px-4 py-2 bg-green-400 hover:bg-green-600 rounded"
              >
                <div className=" flex justify-evenly items-center">
                  <BackIcon />
                  <span>Back</span>
                </div>
              </Link>
            </div>

            <div>
              <img src={image} className="rounded" alt="" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DetailPostPage;
