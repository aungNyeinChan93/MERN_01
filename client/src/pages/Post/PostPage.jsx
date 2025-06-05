import React from "react";
import SampleCard from "../../components/others/SampleCard";
import { test_products } from "../../tests/test_product";

const PostPage = () => {
  return (
    <React.Fragment>
      <section className="mx-10 lg:mx-[140px] min-h-screen bg-amber-100 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 my-2">
          {test_products?.map((product) => {
            return <SampleCard key={product} {...product} />;
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default PostPage;
