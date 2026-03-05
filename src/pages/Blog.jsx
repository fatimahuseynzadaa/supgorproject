import React, { useState } from "react";
import blogs from "../data/blog";
import '../assets/css/blog.css'

const Blog = () => {
  const [page, setPage] = useState(1);
  const perPage = 3;
  const startIndex = (page - 1) * perPage;
  const slicedBlogs = blogs.slice(startIndex, startIndex + perPage);

  return (
    <div className="blog-page">
      <div className="blog-header d-flex justify-content-center">
        <h1>Blog</h1>
      </div>

      <div className="blogs container">
        {slicedBlogs.map((item) => (
          <div className="blog-card" key={item.id}>
            <div className="blog-img">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="blog-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination d-flex justify-content-center">
        <button
          className={page === 1 ? "active" : ""}
          onClick={() => setPage(1)}
        >
          1
        </button>

        <button
          className={page === 2 ? "active" : ""}
          onClick={() => setPage(2)}
        >
          2
        </button>
      </div>
    </div>
  );
};

export default Blog;
