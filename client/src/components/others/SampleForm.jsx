import React from "react";

const SampleForm = () => {
  return (
    <React.Fragment>
      <form class="space-y-4 max-w-md mx-auto mt-4">
        <input
          type="email"
          placeholder="Enter Email"
          class="px-4 py-3 text-slate-900 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
        />

        <input
          type="password"
          placeholder="Enter Password"
          class="px-4 py-3 text-slate-900 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
        />

        <div class="flex">
          <input type="checkbox" class="w-4" />
          <label class="text-sm ml-4 text-slate-900">Remember me</label>
        </div>

        <button
          type="button"
          class="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm font-medium bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default SampleForm;
