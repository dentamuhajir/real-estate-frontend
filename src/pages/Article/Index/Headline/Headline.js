import React from 'react'
import './Headline.css'
const Headline = () => {
  return (
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <a routerLink="">
                    <div class="card bg-dark text-white border-0 rounded-4">
                        <img class="card-img image-headline rounded-4"
                            src="https://akcdn.detik.net.id/visual/2024/02/03/bsi_169.jpeg?w=650&q=90"
                            alt="item.imageAlt" loading="lazy" />
                        <div class="card-img-overlay rounded-4">
                            <h5 class="card-title"> item.title </h5>
                            <p class="card-text"></p>
                            <p class="card-text">item.updateAt | dateFormatList  -  item.categoryName </p>
                        </div>
                    </div>
                </a> 
            </div>
            <div class="col-md-6">
                <a routerLink="">
                    <div class="card bg-dark text-white border-0 rounded-4">
                        <img class="card-img image-headline rounded-4"
                            src="https://akcdn.detik.net.id/visual/2023/02/27/bsi-1_169.jpeg?w=650&q=90"
                            alt="item.imageAlt" loading="lazy" />
                        <div class="card-img-overlay rounded-4">
                            <h5 class="card-title"> item.title </h5>
                            <p class="card-text"></p>
                            <p class="card-text">item.updateAt | dateFormatList  -  item.categoryName </p>
                        </div>
                    </div>
                </a> 
            </div>
        </div>
    </div>
  )
}

export default Headline