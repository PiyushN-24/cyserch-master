import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <div className="flex gap-6 items-center">
    <div className="rounded-lg shadow-md w-full sm:w-[20rem] md:w-[25rem] ">
      <Image
        width={400}
        height={100}
        src={blog.image}
        alt={blog.title}
        className="rounded-tr-2xl rounded-tl-2xl w-full h-60 object-cover"
      />
      <div className="p-4  bg-[#011c3c] rounded-br-2xl rounded-bl-2xl h-[12.7rem] gap-6 ">
        <div className="mb-2 text-[#A39D9D] ">{blog.category}</div>
        <h2 className="text-xl text-white font-bold mb-2">{blog.title}</h2>
        {/* <div className="mb-4 text-slate-400">{blog.description}</div> */}
        <Link href={`/blog/${blog.link}`}>
          <div className="know-more-button bg-[#19ffdb] hover:bg-transparent hover:border-[#19ffdb] hover:text-[#19ffdb] text-black font-semibold py-2 px-4 border-transparent border-2 rounded-md mt-4 cursor-pointer transition-colors duration-200">
            Read More
          </div>
        </Link>
      </div>
    </div>
    </div>
    
  );
};

export default BlogCard;
