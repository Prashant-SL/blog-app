import React from "react";

const CreateBlog = () => {
  return (
    <div className="w-5/6 mx-auto mt-4 lg:mt-6">
      CreateBlog
      <form>
        <div className="mb-6 lg:flex items-center gap-x-4 mt-4">
          <p className="mb-2 text-sm lg:text-base font-medium text-gray-900">
            Blog Title
          </p>
          <input
            type="text"
            id="title"
            name="title"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-11/12 p-2.5"
            placeholder="Blog Title"
            required
          />
        </div>
        <div className="mb-6 lg:flex items-center gap-x-4 mt-4">
          <p className="mb-2 text-sm lg:text-base font-medium text-gray-900">
            Blog Slug
          </p>
          <input
            type="text"
            id="slug"
            name="slug"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-11/12 p-2.5"
            required
            placeholder="Blog Slug"
          />
        </div>
        <p className="block   mb-2 text-sm lg:text-base font-medium text-gray-900">
          Write Your Blog Here
        </p>
        <textarea
          type="text"
          id="blogContent"
          name="content"
          rows="12"
          className="block w-full lg:w-[97.8%] p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write Your Hearts Out..."
        />
        <button
          type="submit"
          class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
