import React, { useEffect, useState } from 'react'
import './Headline.css'
import articleServiceInstance from '../../../../services/ArticleService'
import { NavLink } from 'react-router-dom'

const Headline = () => {
    const [article, setArticle] = useState([])

    const getArticles = async () => {
        try {
            const item = await articleServiceInstance.fetchDataArticleHeadline()
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

    return (
        <div class="container mt-5">
            <div class="row">
                { article.map((item) => {
                    return (
                        <div class="col-md-6">
                            <NavLink to={"/article/readpage/" + item.id + "/" + item.title.replace(/[\W_]/g, '-').toLowerCase() } >
                                <div class="card bg-dark text-white border-0 rounded-4">
                                    <img class="card-img image-headline rounded-4"
                                        src={ item.photo }
                                        alt="item.imageAlt" />
                                    <div class="card-img-overlay rounded-4">
                                        <h5 class="card-title">{ item.title } </h5>
                                        <p class="card-text"></p>
                                        <p class="card-text">{ item.category }  </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    )                    
                })}
            </div>
        </div>
  )
}

export default Headline