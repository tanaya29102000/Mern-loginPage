import React from 'react';
import './Blog.css'; 

const blogPosts = [
  {
    id: 1,
    title: 'The Beauty of Nature-Inspired Home Decor',
    content: 'Explore how nature-inspired elements can transform your living space into a serene and calming environment.',
    image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    date: 'September 2, 2024'
  },
  {
    id: 2,
    title: 'The Best Indoor Plants for Low Light',
    content: 'Discover the best indoor plants that thrive in low light conditions and add greenery to your home.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
    date: 'August 28, 2024'
  },
  {
    id: 3,
    title: 'How to Care for Succulents: Tips and Tricks',
    content: 'Learn the essential tips and tricks to keep your succulents healthy and thriving all year round.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdG-fEfcGFR23MFBWkX2DFLxtYFMf2TkT5dA&s',
    date: 'July 15, 2024'
  }
];

function Blog() {
  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="posts">
        {blogPosts.map(post => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} />
            <div className="post-content">
              <h2>{post.title}</h2>
              <p className="date">{post.date}</p>
              <p>{post.content}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
