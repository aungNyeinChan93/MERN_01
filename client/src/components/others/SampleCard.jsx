import React from "react";
import { Link } from "react-router";

const SampleCard = ({
  _id,
  title,
  description,
  imageUrl,
  user_id: { name: author },
}) => {
  return (
    <React.Fragment>
      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs hover:shadow-xl transition-shadow">
        <img alt="" src={imageUrl} className="h-56 w-full object-cover" />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900">
              {title.substring(0, 40) + " ..."}
            </h3>
          </a>
          <small className="text-gray-400 text-sm capitalize text-shadow-black font-bold">
            post owner : {author}
          </small>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {description.substring(0, 100)}
          </p>

          <Link
            to={`/posts/${_id}`}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </article>
    </React.Fragment>
  );
};

export default SampleCard;
