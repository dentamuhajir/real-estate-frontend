import React, { useEffect, useState } from 'react'
import './Content.css'
import { useParams } from 'react-router-dom';
import articleServiceInstance from '../../../../services/ArticleService';

const Content = () => {
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

    console.log(article)

    return (
        <div class="griya-product container mt-3">
            <div class="row">
                <div class="col-12 mb-3">
                    <span class="griya-product-tag-category me-2">
                <a class="badge badge-success text-muted rounded"> 
                    { article.category }
                </a>
                    </span>
                </div>
                <div class="col-12">
                    <h3 class="griya-product-title"> { article.title }</h3>
                </div>
                <div class="col-12 mt-1 d-flex">
                    <span class="material-symbols-outlined me-2">
                        calendar_month
                    </span>
                    <p class="griya-product-date">
                    
                    </p>
                </div>
                <div class="col-12 mt-1">
                    <img src={ article.photo }
                        class="img-fluid rounded-4 image-detail-article" alt=""/>
                </div>
                <div class="col-12 mt-2">
                    <p class="griya-product-description">
                        { article.contentBody }
                    </p>
                </div>
                <div class="col-12 griya-product-content mt-3">
                    { article.contentBody }
                </div>
            
                <div class="col-12 griya-product-credit mt-3 mb-3">
                    <p>Pewarta: </p>
                    <p>Editor: </p> 
                    <p>Copyright © BSI Griya 2024 </p>
                </div>
            </div>
        </div>
    )
}

export default Content