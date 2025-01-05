import React from 'react'
import Content from './Content/Content'
import Comment from './Comment/ListComment/Comment'
import PostComment from './Comment/PostComment/PostComment'

const Readpage = () => {
  return (
    <>
        <Content/>
        <div class="container mt-5">
          <div class="row  d-flex justify-content-center">
            <Comment/>
            <PostComment/>
          </div>
        </div>
    </>
  )
}

export default Readpage