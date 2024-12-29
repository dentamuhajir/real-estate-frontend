import React, { useEffect, useState } from 'react'
import './ArticleList.css'
import articleServiceInstance from '../../../../services/ArticleService'

const ArticleList = () => {

    const [article, setArticle] = useState([])

    const getArticles = async () => {
        try {
            const item = await articleServiceInstance.fetchDataArticleListByCategories()
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
        <>
            <div className="container mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            <h4>Semua Artikel</h4>
               
                        </div>    
                        <div className="col-2 text-end">
                            <a className="article-view-all" routerLink="all">lihat semua</a>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="container p-2">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    {article.map((item, index) => (       
                        <li className="nav-item" role="presentation">
                            <button className={index==0 ? 'nav-link fw-semibold active position-relative ' : 'nav-link fw-semibold position-relative'} id="pills-home-tab" data-bs-target={"#pills-"+item.category } data-bs-toggle="pill" type="button" role="tab" aria-controls="pills-home"  aria-selected="true">
                                { item.category  }
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="tab-content rounded-3 border-primary p-3" id="pills-tabContent">
                    {article.map((item, index) => ( 
                        <div className={index==0 ? 'tab-pane fade active show' : 'tab-pane fade'} id={"pills-" + item.category} role="tabpanel" aria-labelledby="pills-griya-tab">
                            <h5>{ item.category }</h5>
                            <div class="container">
                                <div class="row">
                                { item.articleList.map((article) => (
                                    <div class="col-md-3">
                                        <div class="card card-article mb-4" >
                                            <img src={ article.photo } class="card-img-top" alt="..." loading="lazy"/>
                                            <div class="card-body">
                                                <a class="link-article-detail"><h5 class="card-title">{ article.title }</h5></a>
                                                <div class="mb-1 text-muted"> { article.category }</div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                                </div>
                            </div>
                        </div> 
                    ))} 
                </div>
            </div>
        </>      
  )
}

export default ArticleList