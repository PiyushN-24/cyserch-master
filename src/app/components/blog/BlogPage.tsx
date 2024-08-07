import React from "react";
import BlogCard from "./BlogCard"; 
import { blogData } from "./BlogData"; 

const BlogPage = () => {
  return (
    
    <div className="  training-page mt-8 mb-10  ">
      <div className=" px-4   sm:px-6 md:px-8 lg:px-36 course-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 sm:gap-6 md:gap-8">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
