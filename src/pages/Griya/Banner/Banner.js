import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div class="container">
        <div id="bannerMedina" class="carousel slide mt-5">
            {/* <div class="nav-banner">
                <div
                    class="position-absolute nav-position start-50 translate-middle-x bg-white-shadow rounded-pill mt-3 px-3 py-1">
                    <ul class="nav justify-content-center text-dark">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#programKpr">Produk BSI</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#cekKesiapan">Persiapan KPR</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#simulasi">Simulasi Pembiayaan</a>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div class="carousel-inner banner" id="home">
                <div>
                    <div class="carousel-item active">
                        <img src="https://www.bankbsi.co.id/storage/banners/CwDXWr6UIulQLwDlUxVN3WFllaDvq4gNjtlNgiBm.jpg" class="d-block w-100 bannerImage" />
                        <div class="container-button">
                            <a target="_blank" class="btn rounded-pill btn-lg sticky-bottom btn-light fw-bold">
                                <div class="d-flex align-items-center">
                                    <span class="me-1">Informasi Selengkapnya </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="carousel-item">
                        <img src="https://www.bankbsi.co.id/storage/banners/PUfrqPQVajT0qgSftR6tsjbvBCHuriDXbynRuBm7.jpg" class="d-block w-100 bannerImage" />
                        <div class="container-button">
                            <a target="_blank" class="btn rounded-pill btn-lg sticky-bottom btn-light fw-bold">
                                <div class="d-flex align-items-center">
                                    <span class="me-1">Informasi Selengkapnya </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-container">
                <div class="row">
                    <div class="col-4">
                        <button class="carousel-control-prev" type="button" data-bs-target="#bannerMedina"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                    </div>
                    <div class="col-3">
                        <p class="text-light banner-counter"></p>
                    </div>
                    <div class="col-4">
                        <button class="carousel-control-next" type="button" data-bs-target="#bannerMedina"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner