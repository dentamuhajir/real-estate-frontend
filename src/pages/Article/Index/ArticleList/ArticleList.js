import React from 'react'
import './ArticleList.css'

const ArticleList = () => {
  return (   
    <>
        <div class="container mt-4">
            <div class="container">
                <div class="row">
                    <div class="col-10">
                        <h4>Semua Artikel</h4>
                    </div>    
                    <div class="col-2 text-end">
                        <a class="article-view-all" routerLink="all">lihat semua</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container p-2">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                {/* <li class="nav-item" role="presentation" *ngFor="let article of articleList; let i = index "> */}
                <li class="nav-item" role="presentation">
                    {/* <button class="nav-link fw-semibold active position-relative" id="pills-home-tab" data-bs-toggle="pill" [attr.data-bs-target]="'#pills-'+article.categoryCode" type="button" role="tab" aria-controls="pills-home" [ngClass]="{'active show': i === 0}" aria-selected="true">{{ article.categoryName }}</button> */}
                    <button class="nav-link fw-semibold active position-relative" id="pills-home-tab" data-bs-toggle="pill" type="button" role="tab" aria-controls="pills-home"  aria-selected="true">

                    </button>
                </li>
            </ul>
            <div class="tab-content rounded-3 border-primary p-3" id="pills-tabContent">
            </div> 
        </div>
    </>
    
  )
}

export default ArticleList