import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useBlogQuery } from "../../redux/api-query/blogsApi";
import { BlogIF } from "../../models/blog.model";

const BlogDetails = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const { data } = useBlogQuery(`${blogId}`);
  const [blogData, setBlogData] = useState<BlogIF | undefined>();

  useEffect(() => {
    setBlogData(data);
  }, [data]);
  return (
    <>
      {blogData && (
        <>
          <div>{blogData.title}</div>
          <div>{blogData.user}</div>
          <div>{blogData.blogId}</div>
          <div>{blogData.tag}</div>
          <div>{blogData.imageUrl}</div>
          <div>{blogData.description}</div>
          <div>{blogData.createdAt}</div>
          <div>{blogData.updatedAt}</div>
        </>
      )}
    </>
  );
};

export default BlogDetails;
