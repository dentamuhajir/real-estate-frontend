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

    console.log(article)
    // {Object.keys(article).map((category) => (
    //     console.log(category)
    // ))}
    
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
                    {Object.keys(article).map((category, index) => (       
                        <li className="nav-item" role="presentation">
                            <button className={index==0 ? 'nav-link fw-semibold active position-relative ' : 'nav-link fw-semibold position-relative'} id="pills-home-tab" data-bs-target={"#pills-"+category } data-bs-toggle="pill" type="button" role="tab" aria-controls="pills-home"  aria-selected="true">
                                { category  }
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="tab-content rounded-3 border-primary p-3" id="pills-tabContent">
                    {Object.keys(article).map((category, index) => ( 
                        <div className={index==0 ? 'tab-pane fade active' : 'tab-pane fade'} id={"pills-" + category} role="tabpanel" aria-labelledby="pills-griya-tab">
                            <h2>Artikel { category }</h2>
                        </div> 
                    ))} 
                </div>
            </div>
        </>      
  )
}

export default ArticleList