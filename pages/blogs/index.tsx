import React, { useEffect, useState } from "react";
import { useBlogsQuery } from "../../redux/api-query/blogsApi";
import { BlogIF } from "../../models/blog.model";
import { useRouter } from "next/router";

const BlogList = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useBlogsQuery();
  const [blogData, setBlogData] = useState<BlogIF[] | undefined>([]);
  const router = useRouter();

  useEffect(() => {
    setBlogData(data);
  }, [data]);

  console.log(data);
  return (
    <div className="App">
      <h1>React Redux Toolkit RTK Query Tutorial</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {blogData?.map((blog) => {
            return (
              <div
                className="data"
                key={blog.blogId}
                onClick={() => router.push(`/blogs/${blog.blogId}`)}
              >
                <span>{blog.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BlogList;
