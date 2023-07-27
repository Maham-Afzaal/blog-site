import React from 'react'

const FetchPost = ({post}) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>Blog Post</p>
      <p>{post.body}</p>
                
                
    </div>
  )
}

export default FetchPost;
  
  