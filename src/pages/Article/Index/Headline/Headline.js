import React, { useEffect, useState } from 'react'
import './Headline.css'
import articleServiceInstance from '../../../../services/ArticleService'

const Headline = () => {
    const [article, setArticle] = useState([])

    const getArticles = async () => {
        try {
            const item = await articleServiceInstance.fetchData()
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
        <div class="container mt-5">
            <div class="row">
                { article.map((item) => {
                    return (
                        <div class="col-md-6">
                            <a routerLink="">
                                <div class="card bg-dark text-white border-0 rounded-4">
                                    <img class="card-img image-headline rounded-4"
                                        src="https://akcdn.detik.net.id/visual/2024/02/03/bsi_169.jpeg?w=650&q=90"
                                        alt="item.imageAlt" loading="lazy" />
                                    <div class="card-img-overlay rounded-4">
                                        <h5 class="card-title">{ item.title } </h5>
                                        <p class="card-text"></p>
                                        <p class="card-text">{ item.updateAt }  </p>
                                    </div>
                                </div>
                            </a> 
                        </div>
                    )                    
                })}

            </div>
        </div>
  )
}

export default Headline