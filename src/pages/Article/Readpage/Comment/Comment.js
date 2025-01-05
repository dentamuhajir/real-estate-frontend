import React, { useEffect, useState } from 'react'
import './Comment.css'
import { useParams } from 'react-router-dom';
import articleServiceInstance from '../../../../services/ArticleService';
import { getTTFB } from 'web-vitals';

const Comment = () => {
    const { id } = useParams();
    const [article, setArticle] = useState([])

    const getArticles = async () => {
        try {
            const item = await articleServiceInstance.fetchDataArticleReadpage(id)
            setArticle(item)
        } catch(error) {
            console.error('Error:', error);
        } finally {
            console.warn('Api call done for fetch articles !');
        }
    }

    useEffect(() => {
        getArticles()
    },[])

    console.log(getArticles)

  return (
    <div class="container mt-5">
            <div class="row  d-flex justify-content-center">
                <div class="col-md-8">
                    <div class="headings d-flex justify-content-between align-items-center mb-3">
                        <h5>Comments({ article.commentList?.length  })</h5>
                        
                    </div>
                    {article.commentList?.map((comment) => (
                    <div class="card p-3 mb-4">
                        <div class="d-flex justify-content-between align-items-center">
                      <div class="user d-flex flex-row align-items-center">
                        <img src="https://i.imgur.com/hczKIze.jpg" width="30" class="user-img rounded-circle mr-2" />
                        <span><small class="font-weight-bold text-primary">anonymous</small> <small class="font-weight-bold">{ comment.comments }</small></span>
                      </div>
                      <small>2 days ago</small>
                      </div>
                      <div class="action d-flex justify-content-between mt-2 align-items-center">
                        <div class="reply px-4">
                            <small>Remove</small>
                            <span class="dots"></span>
                            <small>Reply</small>
                            <span class="dots"></span>
                            <small>Translate</small>
                        </div>
                        <div class="icons align-items-center">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-check-circle-o check-icon"></i>
                        </div>
                      </div>
                    </div> 
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Comment