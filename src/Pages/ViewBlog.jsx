import { useParams } from "react-router-dom";
import blogs from "../Data";

function ViewBlog() {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <div className="text-center mt-20 text-2xl font-semibold">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[450px] object-cover"
        />

        <div className="p-10">

          <h1 className="text-5xl font-bold mt-3 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4 mt-6 text-gray-500">
            <span>🕒 {blog.postedAt}</span>
          </div>

          <hr className="my-8" />

          <div className="text-lg leading-9 text-gray-700 whitespace-pre-line">
            {blog.description}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ViewBlog;