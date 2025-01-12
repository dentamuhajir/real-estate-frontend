import React, { useEffect, useState } from 'react'
import Comment from './Comment/ListComment/Comment'
import Content from './Content/Content'
import PostComment from './Comment/PostComment/PostComment'
import articleServiceInstance from '../../../services/ArticleService'
import { useParams } from 'react-router-dom'

const Readpage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState([])
  const getComment = async () => {
    try {
        const item = await articleServiceInstance.fetchDataArticleReadpage(id)
        setComment(item)
    } catch(error) {
        console.error('Error:', error);
    } finally {
        console.warn('Api call done for fetch articles !');
    }
  }

  useEffect(() => {
    getComment()
  },[])

  // console.log(comment)
  
  return (
    <>
        <Content/>
        <div class="container mt-5">
          <div class="row  d-flex justify-content-center">
            <Comment listComment={comment}/>
            <PostComment/>
          </div>
        </div>
    </>
  )
}

export default Readpage