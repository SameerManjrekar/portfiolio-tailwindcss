import { blogs } from "../data";

const Blog = () => {
  return (
    <div className="section" id="blog">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Latest Articles</h2>
        <div className="w-14 h-[3px] bg-blue rounded-sm"></div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => {
          return (
            <div
              className="shadow-md hover:shadow-none p-2 rounded-md"
              key={blog.id}
            >
              <img src={blog.image} alt="blog-image" />
              <div className="mt-3">
                <div className="text-xl font-bold">{blog.title}</div>
                <p className="text-[0.9rem] mt-2 opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur numquam dolor vitae magni eaque velit molestiae
                  maiores, excepturi voluptas deleniti dolores debitis dolore
                  cum, sint voluptate earum rem nulla tenetur!
                </p>
                <button className="text-[0.9rem] text-blue mt-2">
                  Read More...
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
