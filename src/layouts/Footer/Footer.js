import './Footer.css';

function Footer() {
    return(
        <footer id="footer" class="foot">
            <div class="container">    
                <div class="row title-link-row">
                    <div class="col">
                        <a href="#" class="title-link">Tentang Kami</a>
                    </div>
                    <div class="col">
                        <a href="#" class="title-link">Syarat & Ketentuan</a>
                    </div>
                    <div class="col">
                        <a href="#" class="title-link">Kebijakan & Privasi</a>
                    </div>
                    <div class="col">
                        <a href="#" class="title-link">Sitemap</a>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-md-4">
                        <img src="assets/brand/logo.png" alt=""/>
                        <label class="text-address">
                        Kantor Pusat Gedung The Tower, Jl Gatot Subroto No.27 Kelurahan Karet Semanggi, Kecamatan Setiabudi, Jakarta Selatan 12930
                        </label>
                        <div class="d-flex flex-row">
                            <img src={require('../../assets/Images/Social-media/twitter-logo.png')} class="social-media-img"/>
                            <img src={require('../../assets/Images/Social-media/instagram-logo.png')} class="social-media-img" />
                            <img src={require('../../assets/Images/Social-media/facebook-logo.png')} class="social-media-img" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;